import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useGetUsersQuery } from "../../store/usersSlice/usersSlice";
import toast, { Toaster } from "react-hot-toast";
const SingIn = (props) => {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm()
    const { data } = useGetUsersQuery()
    const checkForm = async (dataF) => {
        if (!data || !dataF) return;

        // 1. знайти користувача
        const user = data.find(
            (item) =>
                item.login === dataF.login &&
                item.password === dataF.password
        );

        // 2. якщо користувача немає
        if (!user) {
            toast.error("Невірний логін або пароль");
            return;
        }

        // 3. редірект по ролі
        if (user.status === "admin") {
            localStorage.setItem("user", JSON.stringify(user));
            window.location.replace('admin')
            props.closeFormSingIn();
            reset()
        }
        else {
            localStorage.setItem("user", JSON.stringify(user))
            window.location.replace(user.status)
            props.closeFormSingIn();
            reset();
        }
    }
    return (
        <div className="flex h-screen w-full bg-white relative">
            <Toaster />
            {/* button close window */}
            <button
                className="absolute top-4 right-4"
                onClick={props.closeFormSingIn}
            >
                <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                </svg>

            </button>
            <div className="w-full hidden lg:inline-block">
                <img className="h-full" src="https://la.ua/wp-content/uploads/2021/08/salami.jpg" alt="leftSideImage" />
            </div>

            <div className="w-full flex flex-col items-center justify-center">

                <form className="md:w-96 w-80 flex flex-col items-center justify-center" onSubmit={handleSubmit(checkForm)}>
                    <h2 className="text-4xl text-gray-900 font-medium">Увійти</h2>
                    <p className="text-sm text-gray-500/90 mt-3">З поверненням! Будь ласка увійдіть для продовження!</p>

                    <button type="button" className="w-full mt-8 bg-gray-500/10 flex items-center justify-center h-12 rounded-full">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg" alt="googleLogo" />
                    </button>

                    <div className="flex items-center gap-4 w-full my-5">
                        <div className="w-full h-px bg-gray-300/90"></div>
                        <p className="w-full text-nowrap text-sm text-gray-500/90">або увійдіть через логін</p>
                        <div className="w-full h-px bg-gray-300/90"></div>
                    </div>

                    <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
                        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" fill="#6B7280" />
                        </svg>

                        <input
                            type="text"
                            placeholder="Login id"
                            className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
                            {...register("login", { required: true })}
                        />
                    </div>

                    <div className="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
                        <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280" />
                        </svg>
                        <input
                            type="password"
                            placeholder="Password"
                            className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
                            {...register("password", { required: true })}
                        />
                    </div>

                    <div className="w-full flex items-center justify-between mt-8 text-gray-500/80">
                        <div className="flex items-center gap-2">
                            <input className="h-5" type="checkbox" id="checkbox" />
                            <label className="text-sm" htmlFor="checkbox">Запам'ятати мене</label>
                        </div>
                        <Link to={`/`} className="text-sm underline">Забули пароль?</Link>
                    </div>

                    <button type="submit" className="mt-8 w-full h-11 rounded-full text-gray-700 bg-yellow-400 hover:opacity-90 transition-opacity">
                        Увійти
                    </button>
                    <p className="text-gray-500/90 text-sm mt-4">Немає ще акаунта? <Link to={`/`} className="text-indigo-400 hover:underline">Реєстрація</Link></p>
                </form>
            </div>
        </div>
    )
}
export default SingIn;