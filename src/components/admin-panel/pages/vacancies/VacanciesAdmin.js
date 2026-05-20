import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useGetVacanciesQuery , useDeleteVacancyMutation } from "../../../../store/vacanciesSlice/vacanciesSlice";
import { useGetCategoriesQuery } from "../../../../store/categorySlice/categorySlice";
import Addvacancies from "./Addvacancies";
import UpdateVacancies from "./UpdateVacancies";
const VacanciesAdmin = () => {
    const [openOptionListId, setOpenOptionListId] = useState(null);
    const [isOpenAddVacancyForm, setIsOpenAddVacancyForm] = useState(false);
    const [isOpenUpdateVacancyForm, setIsOpenUpdateVacancyForm] = useState(false);
    const [isOneVacancy, setIsOneVacancy] = useState([]);
    const [isOpenQuestion, setIsOpenAddQuestion] = useState(false);
    const [isOpenFilter , setIsOpenFilter] = useState(false);
    const { data } = useGetVacanciesQuery();
    const { data: categories } = useGetCategoriesQuery();
    const [id, setId] = useState('');
    const closeWindowAddVacancy = () => {
        setIsOpenAddVacancyForm(false);
        setIsOpenUpdateVacancyForm(false);
    }
    const [deleteVacancy] = useDeleteVacancyMutation();
    const delVacancy = async (id) => {
        await deleteVacancy(id).unwrap();
        toast.success('Вакансія видалена!')
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
            <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
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
                                onClick={() => setIsOpenAddVacancyForm(true)}
                            >
                                <svg className="h-4 w-4 mr-2 mb-1" fill="currentColor" viewBox={`0 0 20 20`} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                </svg>
                                Добавити вакансію
                            </button>
                            
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-white uppercase bg-gray-700 ">
                                <tr>
                                    <th scope="col" className="px-4 py-3">Номер</th>
                                    <th scope="col" className="px-4 py-3">Посилання</th>
                                    <th scope="col" className="px-4 py-3">Опис</th>
                                    <th scope="col" className="px-4 py-3">
                                        <span className="sr-only">Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((item, index) => (
                                    <tr className="border-b border-white" key={item.id}>
                                        <th scope="row" className="px-4 py-3 font-medium whitespace-nowrap text-white">{index + 1}</th>
                                        <td className="px-4 py-3 text-white">{item.path}</td>
                                        <td className="px-4 py-3 text-white">{item.description}</td>
                                        <td className="px-4 py-3 flex items-center justify-end">
                                            <button
                                                className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button"
                                                onClick={() => setOpenOptionListId(openOptionListId === item.id ? null : item.id)}
                                            >
                                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                                </svg>
                                            </button>
                                            <div className={`${openOptionListId === item.id ? 'block' : 'hidden'} absolute z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow `}>
                                                <ul className="py-1 text-sm text-white" >
                                                    <li>
                                                        <button className="w-full block py-2 px-4 text-gray-900 hover:text-white hover:bg-gray-900">Show</button>
                                                    </li>
                                                    <li>
                                                        <button
                                                            className="w-full block py-2 px-4 text-gray-900 hover:text-white hover:bg-gray-900"
                                                            onClick={() => {
                                                                setIsOneVacancy(item);
                                                                setIsOpenUpdateVacancyForm(true);
                                                                setOpenOptionListId(null);
                                                            }}
                                                        >Edit</button>
                                                    </li>
                                                </ul>
                                                <div className="py-1">
                                                    <button
                                                        className="w-full block py-2 px-4 text-red-700 hover:text-white hover:bg-red-700"
                                                        onClick={() => {
                                                            setId(item.id);
                                                            setIsOpenAddQuestion(true);
                                                            setOpenOptionListId(null);
                                                        }}
                                                    >Delete</button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
            <div className={`fixed z-10 w-full top-0 left-0 h-screen flex flex-col items-baseline  text-sm shadow-xl md:grid-cols-3 transition-all duration-700 ease-in-out ${isOpenAddVacancyForm ? "translate-x-0" : "-translate-x-full"}`}>
                <Addvacancies closeModal={closeWindowAddVacancy} />
            </div>
            <div className={`fixed z-10 w-full top-0 left-0 h-screen flex flex-col items-baseline  text-sm shadow-xl md:grid-cols-3 transition-all duration-700 ease-in-out ${isOpenUpdateVacancyForm ? "translate-x-0" : "-translate-x-full"}`}>
                <UpdateVacancies closeModal={closeWindowAddVacancy} oneVacancie={isOneVacancy} />
            </div>
            <div className={`fixed z-10 w-full top-0 left-0 flex flex-col items-baseline text-sm md:grid-cols-3 transition-all duration-700 ease-in-out ${isOpenQuestion ? "translate-y-0" : "-translate-y-full"}`}>
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
                            <p className="mb-4 text-gray-500 dark:text-gray-300">Ви дійсно хочете видалити цю вакансію?</p>
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
                                    delVacancy(id)
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
export default VacanciesAdmin;