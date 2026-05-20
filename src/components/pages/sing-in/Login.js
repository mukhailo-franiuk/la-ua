import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useGetUsersQuery } from "../../../store/usersSlice/usersSlice";

const SignIn = ({ closeFormSingIn }) => {

    // Ініціалізація мутації
    const { data , isLoading} = useGetUsersQuery();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const checkForm = async (dataF) => {
        try {
            // Перевіряємо, чи масив користувачів завантажився
            if (!data || !Array.isArray(data)) {
                toast.error("Дані користувачів ще завантажуються або недоступні");
                return;
            }

            // Шукаємо користувача за логіном та паролем у масиві даних
            const foundUser = data.find(
                (item) => item.login === dataF.login && item.password === dataF.password
            );
            if (!foundUser) {
                toast.error("Такого користувача немає або пароль невірний");
                return; // Зупиняємо виконання, якщо не знайдено
            }
            // Зберігаємо безпечно отримані дані користувача
            localStorage.setItem("user", JSON.stringify(foundUser));
            const user = JSON.parse(localStorage.getItem("user"));
            toast.success("Успішний вхід!");
           
            // Перенаправлення залежно від ролі
            if (user.role === "admin") {
                window.location.href = "/admin";
            } else {
                window.location.href = user.role;
            }
            closeFormSingIn();
            reset();
        } catch (err) {
            // Обробка помилки, яка прийшла з бекенду (res.status(401).json(...))
            const errorMessage = err?.data?.message || "Помилка авторизації";
            toast.error(errorMessage);
        }
    };


    return (
        <div className="flex h-screen fixed z-10 w-full bg-white top-0">
            <Toaster position="top-center" />

            {/* Кнопка закриття */}
            <Link to={`/`} className="absolute top-4 right-4 p-2 cursor-pointer z-50" onClick={closeFormSingIn} type="button">
                <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </Link>

            {/* Банер */}
            <div className="w-full hidden lg:block h-full">
                <img className="h-full w-full object-cover" src="https://la.ua/wp-content/uploads/2021/08/kaprichoza.jpg" alt="Салямі банер" />
            </div>

            {/* Форма */}
            <div className="w-full flex flex-col items-center justify-center px-4">
                <form className="sm:w-96 w-full max-w-sm flex flex-col items-center" onSubmit={handleSubmit(checkForm)}>
                    <h2 className="text-4xl text-gray-900 font-bold">Увійти</h2>
                    <p className="text-sm text-gray-500 mt-3 text-center">Будь ласка, увійдіть для продовження!</p>

                    {/* Логін */}
                    <div className={`mt-8 flex items-center w-full bg-gray-50 border ${errors.login ? 'border-red-500' : 'border-gray-200 focus-within:border-yellow-400'} h-12 rounded-full pl-6 gap-3 transition-colors`}>
                        <input
                            type="text"
                            placeholder="Введіть логін"
                            className="bg-transparent text-gray-800 placeholder-gray-400 outline-none text-sm w-full h-full"
                            {...register("login", { required: "Логін є обов'язковим" })}
                        />
                    </div>
                    {errors.login && <span className="text-red-500 text-xs self-start ml-4 mt-1">{errors.login.message}</span>}

                    {/* Пароль */}
                    <div className={`flex items-center mt-4 w-full bg-gray-50 border ${errors.password ? 'border-red-500' : 'border-gray-200 focus-within:border-yellow-400'} h-12 rounded-full pl-6 gap-3 transition-colors`}>
                        <input
                            type="password"
                            placeholder="Введіть пароль"
                            className="bg-transparent text-gray-800 placeholder-gray-400 outline-none text-sm w-full h-full"
                            {...register("password", { required: "Пароль є обов'язковим" })}
                        />
                    </div>
                    {errors.password && <span className="text-red-500 text-xs self-start ml-4 mt-1">{errors.password.message}</span>}

                    {/* Кнопка увійти */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="mt-8 w-full h-12 rounded-full text-gray-900 font-semibold bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-200 disabled:text-gray-400 transition-colors cursor-pointer flex items-center justify-center"
                    >
                        {isLoading ? "Перевірка..." : "Увійти"}
                    </button>
                </form>
                <p className="text-sm text-gray-500 mt-4">Не маєте облікового запису? <Link to="/sign-up" className="text-blue-500 hover:underline">Зареєструватися</Link></p>
            </div>
        </div>
    );
};

export default SignIn;

