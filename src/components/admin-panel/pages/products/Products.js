import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useGetProductsQuery, useDeleteProductMutation } from "../../../../store/productSlice/productSlice";
import { useGetCategoriesQuery } from "../../../../store/categorySlice/categorySlice";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import InfoProductAdminPanel from "./InfoProductAdminPanel";
const Products = () => {
    document.title = `Список продуктів панелі адміністрування - LA П’ЄЦ нормальна доставка їжі у Львові`;
    const [openOptionListId, setOpenOptionListId] = useState(null);
    const [isOpenAddProductForm, setIsOpenAddProductForm] = useState(false);
    const [isOpenUpdateProductForm, setIsOpenUpdateProductForm] = useState(false);
    const [isOneProduct, setIsOneProduct] = useState([]);
    const [isOpenQuestion, setIsOpenAddQuestion] = useState(false);
    const [isOpenFilter, setIsOpenFilter] = useState(false);
    const [isOpenInfoProduct, setIsOpenInfoProduct] = useState(false);
    const { data } = useGetProductsQuery();
    const { data: categories } = useGetCategoriesQuery();
    const [id, setId] = useState('');
    const closeWindowAddProduct = () => {
        setIsOpenAddProductForm(false);
        setIsOpenUpdateProductForm(false);
        setIsOpenInfoProduct(false);
    }
    const [deleteProduct] = useDeleteProductMutation();
    const delProduct = async (id) => {
        await deleteProduct(id).unwrap();
        toast.success('Продукт видалено!')
    }
    return (
        <section className="bg-white p-3 sm:p-5">
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toasterId="default"
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 4000,
                    removeDelay: 1000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },

                    // Default options for specific types
                    success: {
                        duration: 3000,
                        iconTheme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }}
            />
            <div className="lg:mx-auto m-0  max-w-screen-xl px-0 md:px-4 lg:px-12">
                <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                        <div className="w-full md:w-1/2">
                            <form className="flex items-center">
                                <label htmlFor="simple-search" className="sr-only">Search</label>
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox={`0 0 20 20`} xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required="" />
                                </div>
                            </form>
                        </div>
                        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                            <button
                                type="button"
                                className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                                onClick={() => setIsOpenAddProductForm(true)}
                            >
                                <svg className="h-4 w-4 mr-2 mb-1" fill="currentColor" viewBox={`0 0 20 20`} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                </svg>
                                Добавити продукт
                            </button>
                            <div className="flex items-center space-x-3 w-full md:w-auto relative">
                                <button
                                    className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button"
                                    onClick={() => (!isOpenFilter) ? setIsOpenFilter(true) : setIsOpenFilter(false)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-4 w-4 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                                    </svg>
                                    Фільтр
                                    <svg className="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>
                                </button>
                                <div className={`absolute top-full right-0 z-10 w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700 ${(isOpenFilter) ? 'block' : 'hidden'}`}>
                                    <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Вибрати категорію</h6>
                                    <ul className="space-y-2 text-sm">
                                        {categories?.map((item) => (
                                            <li className="flex items-center" key={item.id}>
                                                <input id={item.id} type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor={item.id} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">{item.name}</label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        {data?.map((item, index) => (
                            <div className="space-y-4 md:flex md:items-center md:justify-start md:gap-6 md:space-y-0 border border-gray-200" key={item.id}>
                                <span className="shrink-0 md:order-1">
                                    <img className="h-20 w-20 m-2" src={item.imagePath} alt={item.name} />

                                </span>

                                <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
                                <div className="flex items-center justify-between md:order-3 md:justify-end">

                                    <div className="text-end md:order-4 md:w-32">
                                        <p className="text-base font-bold text-gray-900 dark:text-white">{item.price} UAH</p>
                                    </div>
                                </div>

                                <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                    <button
                                        className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                                        onClick={() => {
                                            setIsOneProduct(item);
                                            setIsOpenInfoProduct(true);
                                            setOpenOptionListId(null);
                                        }}
                                    >{item.description}</button>

                                    <div className="flex items-center gap-4">
                                        <button
                                            type="button"
                                            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                                            onClick={() => {
                                                setIsOneProduct(item)
                                                setIsOpenUpdateProductForm(true);
                                                setOpenOptionListId(null);
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
                                                setIsOpenAddQuestion(true);
                                                setOpenOptionListId(null);
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
                        ))}
                    </div>
                </div>
            </div>
            {/* Add Product form */}
            <div className={`fixed z-50 w-full top-0 left-0 h-screen flex flex-col items-baseline  text-sm shadow-xl md:grid-cols-3 transition-all duration-700 ease-in-out ${isOpenAddProductForm ? "translate-x-0" : "-translate-x-full"}`}>
                <AddProduct closeModal={closeWindowAddProduct} />
            </div>
            {/* Update Product form */}
            <div className={`fixed z-50 w-full top-0 left-0 h-screen flex flex-col items-baseline  text-sm shadow-xl md:grid-cols-3 transition-all duration-700 ease-in-out ${isOpenUpdateProductForm ? "translate-x-0" : "-translate-x-full"}`}>
                <UpdateProduct closeModal={closeWindowAddProduct} oneProduct={isOneProduct} />
            </div>
            {/* Info Product section */}
            <div className={`fixed z-50 w-full top-0 left-0 h-screen flex flex-col items-baseline  text-sm shadow-xl md:grid-cols-3 transition-all duration-700 ease-in-out ${isOpenInfoProduct ? "translate-y-0" : "-translate-y-full"}`}>
                <InfoProductAdminPanel closeModal={closeWindowAddProduct} oneProduct={isOneProduct} />
            </div>
            {/* Delete Question modal */}
            <div className={`fixed z-50 w-full top-0 left-0 flex flex-col items-baseline text-sm md:grid-cols-3 transition-all duration-700 ease-in-out ${isOpenQuestion ? "translate-y-0" : "-translate-y-full"}`}>
                <div className="flex justify-center items-center w-full md:inset-0 h-modal md:h-full">
                    <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                        <div className="relative p-4 text-center bg-gray-700 rounded-lg shadow sm:p-5">
                            <button
                                onClick={() => setIsOpenAddQuestion(false)}
                                type="button"
                                className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <svg className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                            <p className="mb-4 text-gray-500 dark:text-gray-300">Ви дійсно хочете видалити цю категорію?</p>
                            <div className="flex justify-center items-center space-x-4">
                                <button
                                    type="button"
                                    className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                    onClick={() => {
                                        setIsOpenAddQuestion(false);
                                    }}
                                >
                                    Передумав
                                </button>
                                <button
                                    type="submit"
                                    className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                                    onClick={() => {
                                        delProduct(id)
                                        setIsOpenAddQuestion(false);
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
export default Products;
