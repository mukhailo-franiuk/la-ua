import { Link } from "react-router-dom";
import { useAddUsersMutation } from "../../../store/usersSlice/usersSlice";
import { useForm } from "react-hook-form";
const SingUp = () => {
    const [addUser] = useAddUsersMutation();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()
    const passwordValue = watch("password");
    const AddUser = async (data) => {
        await addUser({
            name: data.fullName,
            login: data.login,
            password: data.password,
            email: data.email,
            role: 'user'
        }).unwrap();
        localStorage.setItem("user",JSON.stringify({
            name: data.fullName,
            login: data.login,
            password: data.password,
            email: data.email,
            role: 'user'
        }))
        window.location.replace('user');
        reset();
    }
    return (
        <section className="bg-gray-50 ">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0">
                <Link to={`/`} className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                    <img className="w-8 h-8 mr-2" src="https://la.ua/wp-content/themes/lapiec/assets/frontend/img/logo_m.png" alt="logo" />
                    LA П’ЄЦ
                </Link>
                <div className="w-full rounded-lg shadow bg-yellow-400 md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                            Створити обліковий запис
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(AddUser)}>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Ваше ім'я</label>
                                <input name="name" id="name" className="bg-yellow-400 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 " placeholder="Ваше ім'я - Bob John" required=""
                                    {...register("fullName", {
                                        required: "Повне ім'я є обов'язковим",
                                        minLength: { value: 5, message: "Мінімум 5 символів" },
                                    })}
                                />
                                {/* Виведення повідомлення про помилку */}
                                {errors.fullName && <p style={{ color: "red", fontSize: "10px" }}>{errors.fullName.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="login" className="block mb-2 text-sm font-medium text-gray-900 ">Ваше логін</label>
                                <input name="login" id="login" className="bg-yellow-400 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 " placeholder="Наприклад - BobJohn" required=""
                                    {...register("login", {
                                        required: "Логін є обов'язковим",
                                        minLength: { value: 5, message: "Мінімум 5 символів" },
                                    })}
                                />
                                {/* Виведення повідомлення про помилку */}
                                {errors.fullName && <p style={{ color: "red", fontSize: "10px" }}>{errors.fullName.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Ваш email</label>
                                <input type="text" name="email" id="email" className="bg-yellow-400 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 " placeholder="name@company.com" required=""
                                    {...register("email", {
                                        required: "Електронна пошта є обов'язковою",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Неправильний формат email адреси",
                                        },
                                    })}
                                />
                                {/* Виведення повідомлення про помилку */}
                                {errors.email && <p style={{ color: "red", fontSize: "10px" }}>{errors.email.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Пароль</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-yellow-400 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 " required=""
                                    {...register("password", {
                                        required: "Пароль є обов'язковим",
                                        minLength: { value: 8, message: "Мінімум 8 символів" },
                                        pattern: {
                                            value: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/,
                                            message: "Пароль повинен містити велику літеру, малу літеру та цифру",
                                        },
                                    })}
                                />
                                {errors.password && <p style={{ color: "red", fontSize: "10px" }}>{errors.password.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 ">Підтвердіть пароль</label>
                                <input
                                    type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-yellow-400 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 " required=""
                                    {...register("confirmPassword", {
                                        required: "Повторіть пароль",
                                        validate: (value) => value === passwordValue || "Паролі не збігаються",
                                    })}
                                />
                                {errors.confirmPassword && <p style={{ color: "red", fontSize: "10px" }}>{errors.confirmPassword.message}</p>}
                            </div>
                            <button type="submit" className="w-full text-white bg-gray-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>
                            <p className="text-sm font-light text-gray-900">
                                Маєте обліковий запис? <Link to={`/login`} className="font-medium text-green-700 hover:underline">Увійдіть тут</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingUp;

