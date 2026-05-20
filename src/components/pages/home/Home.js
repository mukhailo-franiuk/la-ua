import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../../../store/categorySlice/categorySlice";
import AutoplayCarousel from "./Carusel";
const Home = () => {
    document.title = `ᐅᐅДоставка піци Львів✔до 29 хв | LA П’ЄЦ нормальна доставка їжі нормальна доставка їжі`;
    // Отримуємо категорії та стани запиту
    const { data: categories = [], isLoading, isError } = useGetCategoriesQuery();

 
    return (
        <div className="w-full flex flex-col items-center justify-center min-h-screen">
            <AutoplayCarousel />
            {/* 2. Секція категорій товарів */}
            <div className="w-full max-w-7xl px-4 my-16">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10 uppercase tracking-wide">
                    Наше Меню
                </h2>

                {/* Обробка стану завантаження */}
                {isLoading && (
                    <div className="text-center py-10 text-xl font-medium text-gray-500 animate-pulse">
                        Завантаження меню...
                    </div>
                )}

                {/* Обробка помилки запиту */}
                {isError && (
                    <div className="text-center py-10 text-xl font-medium text-red-500">
                        Не вдалося завантажити категорії меню. Спробуйте пізніше.
                    </div>
                )}

                {/* Відображення стабільної сітки категорій */}
                {!isLoading && !isError && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
                        {categories.map((item) => (
                            <Link
                                key={item.id}
                                to={`products/${item.path}`}
                                className="group w-full max-w-sm bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    {/* Контейнер картинки */}
                                    <div className="w-full overflow-hidden rounded-xl bg-gray-50">
                                        <img
                                            className="w-full h-48 object-contain transform group-hover:scale-105 transition-transform duration-300"
                                            src={item.imagePath}
                                            alt={item.name}
                                        />
                                    </div>
                                    {/* Назва категорії */}
                                    <h5 className="mt-5 mb-4 text-xl font-bold tracking-tight text-gray-900 group-hover:text-yellow-500 transition-colors">
                                        {item.name}
                                    </h5>
                                </div>

                                {/* Елемент-імітація кнопки */}
                                <span className="w-full inline-flex items-center justify-center text-gray-900 bg-yellow-400 font-semibold rounded-xl text-sm px-4 py-3 group-hover:bg-yellow-500 transition-colors shadow-xs">
                                    Більше
                                    <svg className="w-4 h-4 ms-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </Link>
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
};

export default Home;
