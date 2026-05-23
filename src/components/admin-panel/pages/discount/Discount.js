import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useGetDiscountsQuery, useDeleteDiscountMutation } from "../../../../store/discountSlice/discountSlice";
import AddDiscount from "./AddDiscount";
import UpdateDiscount from "./UpdateDiscount";
import InfoDiscountAdminPanel from "./InfoDiscoutnAdminPanel";
const DiscountAdmin = () => {
    document.title = `Список акцій панелі адміністрування - LA П’ЄЦ нормальна доставка їжі у Львові`;
    const [openOptionListId, setOpenOptionListId] = useState(null);
    const [isOpenAddDiscounForm, setIsOpenAddDiscountForm] = useState(false);
    const [isOpenUpdateDiscountForm, setIsOpenUpdateDiscountForm] = useState(false);
    const [id, setId] = useState('');
    const [isOpenInfoDiscount, setIsOpenInfoDiscount] = useState(false);
    const [isOpenDeleteQuestion, setIsOpenDeleteQuestion] = useState(false);
    const [isOneDiscount, setIsOneDiscount] = useState([]);
    const closeWindowAddDiscount = () => {
        setIsOpenAddDiscountForm(false);
        setIsOpenUpdateDiscountForm(false);
        setIsOpenInfoDiscount(false);
    }
    const { data } = useGetDiscountsQuery();
    const [deleteDiscount] = useDeleteDiscountMutation();
    const delDiscount = async (id) => {
        await deleteDiscount(id).unwrap();
        toast.success('Акцію видалено!')
    }
    return (
        <section className="bg-gray-50 p-3 sm:p-5">
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toasterId="default"
                toastOptions={{
                    // Default options for specific types
                    success: {
                        duration: 2000,
                        removeDelay: 1000,
                        iconTheme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                        error: {
                            duration: 1000,
                            removeDelay: 1000,
                            iconTheme: {
                                primary: 'red',
                                secondary: 'black',
                            },
                        },
                    },
                }}
            />
            <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                <div className="bg-gray-50 relative shadow-md sm:rounded-lg">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                        <div className="w-full md:w-1/2">
                            <form className="flex items-center">
                                <label htmlFor="simple-search" className="sr-only">Search</label>
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Пошук ..." required="" />
                                </div>
                            </form>
                        </div>
                        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                            <button
                                type="button"
                                className="flex items-center justify-center text-gray-900 hover:text-white  hover:bg-yellow-400 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2"
                                onClick={() => setIsOpenAddDiscountForm(true)}
                            >
                                <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                </svg>
                                Добавити акцію
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        {data?.slice(0, 10).map((item, index) => (
                            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6" key={index}>
                                <div className="space-y-4 md:flex md:items-center md:justify-start md:gap-6 md:space-y-0">
                                    <span className="shrink-0 md:order-1">
                                        <img className="h-20 w-20" src={item.imagePath} alt="imac image" />

                                    </span>
                                    <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>

                                    <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                        <button 
                                        className="text-left font-medium text-gray-900 hover:underline dark:text-white"
                                        onClick={() => {
                                            setIsOneDiscount(item);
                                            setIsOpenInfoDiscount(true);
                                        }}
                                        >{item.name}</button>

                                        <div className="flex items-center gap-4">
                                            <button 
                                            type="button" 
                                            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                                            onClick={() => {
                                                setIsOneDiscount(item);
                                                setIsOpenUpdateDiscountForm(true);
                                            }}
                                            >
                                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28" />
                                                </svg>
                                                Редагувати
                                            </button>

                                            <button
                                                type="button"
                                                className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                                                onClick={() => {
                                                    setId(item.id);
                                                    setIsOpenDeleteQuestion(true);
                                                }}
                                            >
                                                <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                                </svg>
                                                Видалити
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            Showing
                            <span className="font-semibold text-gray-900 dark:text-white">1-10</span>
                            of
                            <span className="font-semibold text-gray-900 dark:text-white">1000</span>
                        </span>
                        <ul className="inline-flex items-stretch -space-x-px">
                            <li>
                                <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span className="sr-only">Previous</span>
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                            </li>
                            <li>
                                <a href="#" aria-current="page" className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span className="sr-only">Next</span>
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={`fixed z-50 w-full top-0 left-0 h-screen flex flex-col items-baseline  text-sm shadow-xl md:grid-cols-3 transition-all duration-700 ease-in-out ${isOpenAddDiscounForm ? "translate-x-0" : "-translate-x-full"}`}>
                <AddDiscount closeModal={closeWindowAddDiscount} />
            </div>
            <div className={`fixed z-50 w-full top-0 left-0 h-screen flex flex-col items-baseline  text-sm shadow-xl md:grid-cols-3 transition-all duration-700 ease-in-out ${isOpenUpdateDiscountForm ? "translate-x-0" : "-translate-x-full"}`}>
                <UpdateDiscount closeModal={closeWindowAddDiscount} oneDiscount={isOneDiscount} />
            </div>
            {/* Info Product section */}
            <div className={`fixed z-50 w-full top-0 left-0 h-screen flex flex-col items-baseline  text-sm shadow-xl md:grid-cols-3 transition-all duration-700 ease-in-out ${isOpenInfoDiscount ? "translate-y-0" : "-translate-y-full"}`}>
                <InfoDiscountAdminPanel closeModal={closeWindowAddDiscount} oneDiscount={isOneDiscount} />
            </div>
            <div className={`fixed z-50 w-full top-0 left-0 flex flex-col items-baseline text-sm md:grid-cols-3 transition-all duration-700 ease-in-out ${isOpenDeleteQuestion ? "translate-y-0" : "-translate-y-full"}`}>
                <div className="flex justify-center items-center w-full md:inset-0 h-modal md:h-full">
                    <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                        <div className="relative p-4 text-center bg-gray-700 rounded-lg shadow sm:p-5">
                            <button
                                onClick={() => setIsOpenDeleteQuestion(false)}
                                type="button"
                                className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <svg className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                            <p className="mb-4 text-gray-500 dark:text-gray-300">Ви дійсно хочете видалити цю акцію?</p>
                            <div className="flex justify-center items-center space-x-4">
                                <button
                                    type="button"
                                    className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                    onClick={() => {
                                        setIsOpenDeleteQuestion(false);
                                    }}
                                >
                                    Передумав
                                </button>
                                <button
                                    type="submit"
                                    className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                                    onClick={() => {
                                        delDiscount(id)
                                        setIsOpenDeleteQuestion(false);
                                    }}
                                >
                                    Видалити
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default DiscountAdmin;