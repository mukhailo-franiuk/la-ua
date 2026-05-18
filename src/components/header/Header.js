import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { linksFullScreen, mobileLinks } from "./optionHeader";
const Header = (props) => {
    const [isOpenSome, setIsOpenSome] = useState(false);
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
    const [isOpenSubMobileMenu, setIsOpenSubMobileMenu] = useState('hidden');
    const [isOpenSingIn, setIsOpenSingIn] = useState(false);
    const [isLocalStorage, setIsLocalStorage] = useState(false);
    const userLocalStorage = JSON.parse(localStorage.getItem("user"));
    const closeAllWindow = () => {
        setIsOpenSome(false);
        setIsOpenMobileMenu(false);
        setIsOpenSubMobileMenu('hidden');
        setIsOpenSingIn(false);
    }
    const localStore = JSON.parse(localStorage.getItem("myCollection")) || [];
    
    return (
        <header className="w-full flex justify-center items-center shadow-md">
            <div className="w-full lg:w-4/5 flex flex-row justify-between items-center my-3">
                <div className="text-sm md:flex gap-3 hidden md:pl-3">
                    <Link
                        to={`discount`}
                        onClick={closeAllWindow}
                    >
                        Акції</Link>
                    <Link to={`https://go.expirenza.com/review?code=8YYQJV`}>Відгуки</Link>
                    <Link
                        to={`delivery`}
                        onClick={closeAllWindow}
                    >Доставка</Link>
                    <div className="relative pt-[1px]">
                        <button
                            className="flex flex-row"
                            onClick={() => !isOpenSome ? setIsOpenSome(true) : setIsOpenSome(false)}
                        >
                            Інше
                            <svg className="w-5 h-5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                            </svg>
                        </button>
                        <ul className={`${!isOpenSome ? 'hidden' : 'block'} absolute top-full z-30 -left-14 mt-5 w-48 text-sm font-medium text-heading bg-white border border-default rounded-base`}>
                            {linksFullScreen.map((item, index) => (
                                <li className="w-full px-4 py-0 border-b border-default rounded-t-lg hover:bg-yellow-100" key={index}>
                                    <Link to={item.path} className="block w-full py-2 "
                                        onClick={closeAllWindow}
                                    >{item.title}</Link>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
                <Link
                    to={`/`}
                    onClick={closeAllWindow}
                    className="ml-3 md:ml-0"
                >
                    <img
                        src="https://la.ua/wp-content/themes/lapiec/assets/frontend/img/logo_m.png"
                        alt="logo"
                        className="w-10"
                    />
                </Link>
                <div className="flex flex-row justify-center items-center gap-8">
                    <button className="flex flex-row">
                        <svg className="w-6 h-6 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clipRule="evenodd" />
                        </svg>
                        <div className="hidden md:block">
                            <p className="text-[10px]">Ваще місто</p>
                            <p className="text-[12px] text-left font-bold">м.Львів</p>
                        </div>
                    </button>
                    <Link to={`/cart`} className="relative cursor-pointer">
                        <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#000" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <button className="absolute -top-2 -right-3 text-xs text-white bg-gray-900 w-[18px] h-[18px] rounded-full">{localStore.length}</button>
                    </Link>
                    <Link to={`/login`}
                        className={`flex flex-row items-center text-[14px] ${userLocalStorage === null ? 'block' : 'hidden'}`}
                       
                    >
                        <svg className="w-7 h-7 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clipRule="evenodd" />
                        </svg>
                        <span className="hidden md:block">Вхід</span>
                    </Link>
                    {
                        (!userLocalStorage)
                            ?
                            
                                <Link to={``} className={`${props.checkUsers ? 'hidden' : 'block'}`}></Link>
                            
                            :
                            [userLocalStorage].map(item => (
                                
                                    <Link to={item.role} key={item.id}>{item.login}</Link>
                                
                                
                                
                            ))

                    }
                    <button
                        className="md:hidden mr-3"
                        onClick={() => {
                            setIsOpenMobileMenu(true)
                        }}
                    >
                        <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="21" height="1.5" rx=".75" fill="#426287" />
                            <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                            <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile menu */}
            <div className={`fixed z-40 w-full bg-white top-0 left-0 h-screen overflow-scroll flex flex-col items-baseline  text-sm shadow-xl md:grid-cols-3 transition-all duration-700 ease-in-out ${isOpenMobileMenu ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="w-full flex flex-row justify-between items-center">
                    <Link
                        to={`/`}
                        onClick={closeAllWindow}
                        className="m-3"
                    >
                        <img
                            src="https://la.ua/wp-content/themes/lapiec/assets/frontend/img/logo_m.png"
                            alt="logo"
                            className="w-10"
                        />
                    </Link>
                    <svg
                        className="w-6 h-6 text-gray-800 m-3 block"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        onClick={() => setIsOpenMobileMenu(false)}
                    >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                    </svg>

                </div>
                <div className="w-full mt-5">
                    <ul className="w-full text-sm font-medium text-heading rounded-base">
                        {mobileLinks.map((item, index) => (
                            <li className="w-full rounded-t-lg border-b" key={index}>
                                <Link
                                    to={item.path}
                                    className=" w-full px-3 py-2 flex flex-row justify-between items-center "
                                    onClick={closeAllWindow}
                                >
                                    <div className="flex flex-row items-center gap-2">
                                        <img src={item.imagePath} alt="logo-link" className="w-10" />
                                        {item.title}
                                    </div>
                                    <div>
                                        <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                                        </svg>

                                    </div>
                                </Link>
                            </li>
                        ))}
                        <li className="relative w-full rounded-t-lg border-b" >
                            <button
                                className=" w-full px-3 py-2 flex flex-row justify-between items-center "
                                onClick={() => isOpenSubMobileMenu === 'hidden' ? setIsOpenSubMobileMenu('block') : setIsOpenSubMobileMenu('hidden')}
                            >
                                <div className="flex flex-row items-center gap-2">
                                    <img src={`https://la.ua/wp-content/uploads/2021/06/menu-icon-5.svg`} alt="logo-link" className="w-10" />
                                    Інше
                                </div>
                                <div>
                                    <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                                    </svg>

                                </div>
                            </button>
                            <ul className={`${isOpenSubMobileMenu}`}>
                                {linksFullScreen.map((item, index) => (
                                    <li className="w-full px-4 py-0 rounded-t-lg" key={index}>
                                        <Link to={item.path} className="block w-full py-2 pl-10"
                                            onClick={closeAllWindow}
                                        >{item.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
            
        </header>
    )
}
export default Header;