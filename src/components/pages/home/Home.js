import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetCategoriesQuery } from "../../../store/categorySlice/categorySlice";

const Home = () => {
    // Отримуємо категорії та стани запиту
    const { data: categories = [], isLoading, isError } = useGetCategoriesQuery();

    // Список реальних працюючих банерів LA П’ЄЦ
    const slides = [
        "https://la.ua/wp-content/uploads/2025/09/set-miks-baner-lviv-1.jpg",
        "https://la.ua/wp-content/uploads/2025/09/70-baner.jpg",
        "https://la.ua/wp-content/uploads/2021/08/2-1-try-dni.jpg",

    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    // Керування заголовком сторінки
    useEffect(() => {
        document.title = "ᐅᐅ Доставка піци Львів ✔ до 29 хв | LA П’ЄЦ нормальна доставка їжі";

        const interval = setInterval(nextSlide, 5000);
        return () => {
            clearInterval(interval);
            document.title = "LA П’ЄЦ"; // Повертаємо дефолтний заголовок
        };
    }, []);

    return (
        <div className="w-full flex flex-col items-center justify-center min-h-screen">

            {/* 1. Слайдер банерів */}
            <div className="w-full border-b border-gray-200">
                <div className="relative w-full">
                    {/* Контейнер для слайдів */}
                    <div className="relative h-48 sm:h-72 md:h-[450px] overflow-hidden bg-gray-100">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 w-full h-full flex justify-center items-center transition-opacity duration-700 ease-in-out ${index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                                    }`}
                            >
                                <img
                                    src={slide}
                                    className="w-full h-full object-cover object-center"
                                    alt={`Банер ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Крапки-індикатори */}
                    <div className="absolute z-20 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => setActiveIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${index === activeIndex ? "bg-yellow-400 scale-125 shadow-md" : "bg-white/60"
                                    }`}
                                aria-label={`Перейти до слайда ${index + 1}`}
                            ></button>
                        ))}
                    </div>

                    {/* Кнопка "Назад" */}
                    <button
                        type="button"
                        onClick={prevSlide}
                        className="absolute top-0 start-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 group-hover:bg-black/50 group-focus:ring-4 group-focus:ring-white transition-colors">
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </span>
                    </button>

                    {/* Кнопка "Вперед" */}
                    <button
                        type="button"
                        onClick={nextSlide}
                        className="absolute top-0 end-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 group-hover:bg-black/50 group-focus:ring-4 group-focus:ring-white transition-colors">
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>

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
