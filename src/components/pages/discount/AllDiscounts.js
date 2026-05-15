import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetDiscountsQuery } from "../../../store/discountSlice/discountSlice";

const Discounts = () => {
    // Отримуємо дані та стани запиту з RTK Query
    const { data: discounts = [], isLoading, isError } = useGetDiscountsQuery();

    // Правильне встановлення заголовка сторінки через useEffect
    useEffect(() => {
        document.title = "Акції - LA П’ЄЦ нормальна доставка їжі у Львові";

        // Скидання заголовка при виході зі сторінки
        return () => {
            document.title = "LA П’ЄЦ";
        };
    }, []);

    // Стан завантаження (скелетон або простий текст)
    if (isLoading) {
        return (
            <div className="w-full h-96 flex items-center justify-center text-xl font-medium">
                Завантаження акцій...
            </div>
        );
    }

    // Стан помилки запиту
    if (isError) {
        return (
            <div className="w-full h-96 flex items-center justify-center text-red-500 font-medium">
                Не вдалося завантажити акції. Спробуйте пізніше.
            </div>
        );
    }

    return (
        <div className="w-full flex flex-col min-h-screen">
            {/* Головний заголовок сторінки */}
            <h1 className="mt-10 text-center w-full py-4 bg-gray-100 text-gray-900 font-bold text-2xl uppercase tracking-wide">
                Акції у Львові
            </h1>

            <div className="mt-10 w-full max-w-7xl mx-auto px-4 mb-20">
                {discounts.length > 0 ? (
                    /* Використовуємо Grid для надійної та рівномірної сітки картках */
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                        {discounts.map((item) => (
                            <Link
                                key={item.id}
                                to={item.path}
                                className="group w-full max-w-md flex flex-col items-center bg-white rounded-2xl overflow-hidden p-3 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                {/* Контейнер картинки з ефектом збільшення/підняття всередині */}
                                <div className="w-full h-64 sm:h-72 overflow-hidden rounded-xl">
                                    <img
                                        className="w-full h-full object-cover object-top transform group-hover:scale-[1.02] group-hover:-translate-y-1 transition-all duration-300"
                                        src={item.imagePath}
                                        alt={item.title}
                                    />
                                </div>

                                {/* Заголовок акції (якщо він є в об'єкті, додає інформативності картці) */}
                                {item.title && (
                                    <h3 className="mt-4 text-lg font-semibold text-gray-800 text-center group-hover:text-yellow-500 transition-colors line-clamp-1">
                                        {item.title}
                                    </h3>
                                )}

                                {/* Кнопка дії */}
                                <span className="text-sm font-medium w-2/3 text-center bg-yellow-400 group-hover:bg-yellow-500 text-gray-900 mt-4 py-3 rounded-full shadow-xs transition-colors duration-300">
                                    Детальніше
                                </span>
                            </Link>
                        ))}
                    </section>
                ) : (
                    <div className="text-center text-gray-500 text-lg">
                        Наразі немає активних акцій.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Discounts;
