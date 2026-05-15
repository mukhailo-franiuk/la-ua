import { NavLink, Link, Outlet} from "react-router-dom";
import { useState } from "react";
import { useDeleteLoginUsersMutation } from "../../store/usersSlice/usersSlice";

const AdminPanel = () => {
    document.title = `Панель адміністрування - LA П’ЄЦ нормальна доставка їжі у Львові`
    const [isOpenNav, setIsOpenNav] = useState(false);
    const [deleteUser] = useDeleteLoginUsersMutation();
    const localUser = JSON.parse(localStorage.getItem('user'));
    const sidebarLinks = [
        { name: "Загальна інформація", path: "" },
        { name: "Продукти", path: "products" },
        { name: "Акції", path: "discount" },
        { name: "Категорії", path: "categories" },
        { name: "Новини", path: "news" },
    ];
    const delUser = async (id) => {
        await deleteUser(id).unwrap();
    }
    return (
        <div>
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-yellow-400 transition-all duration-300">
                <Link to={``}>
                    <img className="h-9" src="https://la.ua/wp-content/themes/lapiec/assets/frontend/img/logo_m.png" alt="dummyLogoColored" />
                </Link>
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! Admin</p>
                    <button
                        className='border rounded-full text-sm px-4 py-1'
                        onClick={() => {
                            delUser(localUser.id);
                            localStorage.removeItem("user");
                            window.location.replace('/');
                        }}
                    >Logout</button>
                    <button
                        onClick={() => { setIsOpenNav(true) }}
                        className="lg:hidden"
                    >
                        <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6h-8m8 4H6m12 4h-8m8 4H6" />
                        </svg>

                    </button>
                </div>
            </div>
            <div className="w-full flex flex-row">
                <div className={`lg:w-1/5 hidden h-screen lg:flex flex-col text-base bg-gray-900 pt-4 border-r-2 border-white`}>
                    {sidebarLinks.map((item, index) => (
                        <NavLink to={item.path} key={index}
                            className={`flex items-center py-3 px-4 gap-3 hover:bg-gray-100/90 hover:text-gray-900 border-white text-white`}
                        >
                            {item.icon}
                            <p className="md:block hidden text-center">{item.name}</p>
                        </NavLink>
                    ))}

                </div>
                <div className="lg:w-4/5 w-full">
                    <Outlet />
                </div>
            </div>
            <div className={`w-full h-full flex flex-col bg-gray-700 fixed top-0 left-0 transition-all duration-300 ${isOpenNav ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex flex-row justify-between items-center p-5 border-b-2 border-white">
                    <span className="text-white">Навігація адмінки</span>
                    <svg 
                    className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                    onClick={() => setIsOpenNav(false)}
                    >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                    </svg>
                </div>
                    {sidebarLinks.map((item, index) => (
                        <NavLink to={item.path} key={index}
                            className={`flex items-center py-3 px-4 gap-3 hover:bg-gray-100/90 hover:text-gray-900 border-white text-white`}
                            onClick={() => setIsOpenNav(false)}
                        >
                            {item.icon}
                            <p className=" text-center">{item.name}</p>
                        </NavLink>
                    ))}
            </div>
        </div>
    );
};
export default AdminPanel;