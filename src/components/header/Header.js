import { Link } from "react-router-dom";
import { useState } from "react";
import { paramsMenu } from "./MobileMenuOptions";
export const Header = () => {
    const [subMenu, setSubMenu] = useState('hidden');
    const [mobileMenu, setMobileMenu] = useState('hidden');
    const [language, setLanguage] = useState('hidden');
    const [singIn, setSingIn] = useState('hidden');
    const closeAllWindow = () => {
        setSubMenu('hidden');
        setSingIn('hidden');
        setLanguage('hidden');
        setMobileMenu('hidden')
    }

    return (
        <header className="relative w-full h-16 border-b flex justify-between items-center">
            <div className="absolute inset-y-0 left-2 flex items-center lg:hidden">
                <button
                    type="button"
                    className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"
                    onClick={() => (mobileMenu === 'hidden') ? setMobileMenu('block') : setMobileMenu('hidden')}
                >
                    <span className="absolute -inset-0.5"></span>
                    <span className="sr-only">Open main menu</span>
                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="hidden sm:ml-6 lg:block w-2/5">
                <div className="flex justify-center items-center space-x-4">
                    <Link to={`/discount`} className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:bg-yellow-200" aria-current="page"
                        onClick={closeAllWindow}
                    >Акції</Link>
                    <Link to={`https://go.expirenza.com/review?code=8YYQJV`} target="_blank" className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:bg-yellow-200"
                        onClick={closeAllWindow}
                    >Відгуки</Link>
                    <Link to={`/delivery`} className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:bg-yellow-200"
                        onClick={closeAllWindow}
                    >Доставка</Link>
                    <div className=" relative rounded-md text-sm font-medium text-gray-300 hover:bg-yellow-200">
                        <button className="w-full h-full px-3 py-2 text-gray-500"
                            onClick={() => (subMenu === 'hidden') ? setSubMenu('block') : setSubMenu('hidden')}
                        >Інше</button>
                        <div className={`absolute -left-12 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-black ring-opacity-5 focus:outline-none ${subMenu}`}>
                            <Link to={`/vacancies`} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-0"
                                onClick={closeAllWindow}
                            >Вакансії</Link>
                            <Link to={`https://business.la.ua/`} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-1"
                                onClick={closeAllWindow}
                            >Франшиза</Link>
                            <Link to={`/payment`} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2"
                                onClick={closeAllWindow}
                            >Оплата</Link>
                            <Link to={`/about`} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2"
                                onClick={closeAllWindow}
                            >Про нас</Link>
                            <Link to={`/news`} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2"
                                onClick={closeAllWindow}
                            >Новини</Link>
                            <Link to={`/an-offer`} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2"
                                onClick={closeAllWindow}
                            >Оферта</Link>
                            <Link to={`/for-partners`} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2"
                                onClick={closeAllWindow}
                            >Для партнерів</Link>
                            <Link to={`/contact`} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2"
                                onClick={closeAllWindow}
                            >Контакти</Link>
                        </div>
                    </div>
                    <div className=" relative rounded-md text-sm font-medium text-gray-300 hover:bg-yellow-200">
                        <button className="w-full h-full px-3 py-2 text-gray-500"
                            onClick={() => (language === 'hidden') ? setLanguage('block') : setLanguage('hidden')}
                        >Укр</button>
                        <div className={`absolute left-12 z-10 mt-2 w-28 origin-top-right rounded-md bg-white py-1 shadow-lg ring-black ring-opacity-5 focus:outline-none ${language}`}>
                            <Link
                                to={`/`}
                                className="block w-full text-center rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:bg-yellow-200"
                                onClick={closeAllWindow}
                            >USA</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center lg:w-1/5 xs:mx-auto xs:pl-20 lg:pl-0">
                <Link to={`/`}
                    onClick={closeAllWindow}>
                    <img className="h-10 w-auto" src="https://la.ua/wp-content/themes/lapiec/assets/frontend/img/logo_m.png" alt="Logo Company" />
                </Link>
            </div>
            <div className="flex items-center justify-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 lg:w-2/5">
                <button className="flex items-center justify-center mx-4 border-2 rounded-lg px-2 py-1">
                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
                    <span>0 грн</span>
                </button>
                <div className="lg:block xs:hidden">
                    <button
                        className="flex items-center justify-center mx-4 border-2 rounded-lg px-2 py-1"
                        onClick={() => (singIn === 'hidden') ? setSingIn('block') : setSingIn('hidden')}
                    >
                        <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeWidth={2} d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                        <span>Вхід</span>
                    </button>
                </div>
                <div className={`absolute ${singIn} lg:w-96 xs:w-full min-h-56 lg:right-10 lg:top-16 xs:right-0 xs:top-16`}>
                    <div className="w-full bg-white rounded-lg shadow-2xl md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Увійдіть в акаунт
                            </h1>
                            <form className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="login" className="block mb-2 text-sm font-medium text-gray-900">Логін</label>
                                    <input type="text" id="login" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Рароль</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                                </div>
                                <button type="submit" className="w-full text-gray-500 border bg-primary-600 hover:bg-yellow-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Ще немає акаунту? <Link to={`/sing-up`}
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                        onClick={closeAllWindow}
                                    >Реєструйся</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`lg:hidden absolute top-16 w-full bg-white ${mobileMenu}`} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2  w-full py-2 border-b">
                    <button className="flex justify-between items-center w-full"
                        onClick={() => {
                            setSingIn('block');
                            setMobileMenu('hidden');
                        }}
                    >
                        <div className="flex items-center justify-center">
                            <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeWidth={2} d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <span className="pl-2">Вхід</span>
                        </div>
                        <svg
                            aria-hidden="true"
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <ul className="w-full space-y-1 px-2 pb-3 pt-2 border-b" >
                    {Object.keys(paramsMenu).map(item =>
                        <li className="py-2 border-b" key={item}>
                            <Link to={paramsMenu[item]['href']} className="flex justify-between items-center w-full"
                                onClick={closeAllWindow}
                            >
                                <div className="flex items-center justify-center">
                                    <img src={paramsMenu[item]['imgPatch']} alt="" className="w-8 h-8" />
                                    <span className="pl-2">{paramsMenu[item]['title']}</span>
                                </div>
                                <svg
                                    aria-hidden="true"
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </li>
                    )}
                    <div className="w-full pb-3 pt-2 border-b">
                        <button className="flex items-center justify-between w-full"
                            onClick={() => (subMenu === 'hidden') ? setSubMenu('block') : setSubMenu('hidden')}
                        >
                            <div className="w-full flex items-center">
                                <img src={`https://la.ua/wp-content/uploads/2021/06/menu-icon-5.svg`} alt="" className=" pl-1 w-8 h-8" />
                                <span className="pl-2">Інше</span>
                            </div>
                            <svg
                                aria-hidden="true"
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                        <div className={`absolute left-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white py-1 shadow-lg ring-black ring-opacity-5 focus:outline-none ${subMenu}`}>
                            <Link to={`/vacancies`} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-0"
                                onClick={closeAllWindow}
                            >Вакансії</Link>
                            <Link to={`https://business.la.ua/`} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-1"
                                onClick={closeAllWindow}
                            >Франшиза</Link>
                            <Link to={`/payment`} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2"
                                onClick={closeAllWindow}
                            >Оплата</Link>
                            <Link to={`/about`} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2"
                                onClick={closeAllWindow}
                            >Про нас</Link>
                            <Link to={`/news`} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2"
                                onClick={closeAllWindow}
                            >Новини</Link>
                            <Link to={`/an-offer`} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2"
                                onClick={closeAllWindow}
                            >Оферта</Link>
                            <Link to={`/for-partners`} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2"
                                onClick={closeAllWindow}
                            >Для партнерів</Link>
                            <Link to={`/contact`} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2"
                                onClick={closeAllWindow}
                            >Контакти</Link>
                        </div>
                    </div>
                    <div className="space-y-1 pb-3 pt-2  w-full py-2 border-b flex justify-between items-center">
                        <div className="flex items-center">
                            <img src="https://la.ua/wp-content/themes/lapiec/assets/frontend/img/icons/language.svg" alt="language logo" className="pl-1 w-9 h-8" />
                            <span className="pl-2">Мова</span>
                        </div>
                        <div>
                            <button className="mx-2 bg-yellow-300 px-2 py-1 rounded-lg">Укр</button>
                            <button className="mx-2 bg-gray-300 px-2 py-1 rounded-lg">USA</button>
                        </div>
                    </div>
                </ul>
            </div>
        </header>

    );
}