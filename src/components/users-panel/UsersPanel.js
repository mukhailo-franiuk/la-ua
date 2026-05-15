import { Link } from "react-router-dom";
const UsersPanel = () => {
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
                            localStorage.removeItem("user");
                            window.location.replace('/');
                        }}
                    >Logout</button>
                </div>
            </div>
        </div>
    )
}
export default UsersPanel;