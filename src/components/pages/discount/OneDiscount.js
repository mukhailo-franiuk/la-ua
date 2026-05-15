import { useGetDiscountsQuery } from "../../../store/discountSlice/discountSlice";
import { useParams } from "react-router-dom";
import { useMemo, useEffect } from "react";

const OneDiscount = () => {
    // Отримуємо прапорці isLoading та isError від RTK Query
    const { data: discounts = [], isLoading, isError } = useGetDiscountsQuery();
    const { oneDiscount: pathParam } = useParams();

    // Знаходимо потрібний елемент
    const item = useMemo(() => {
        return discounts.find((el) => el.path === pathParam);
    }, [discounts, pathParam]);

    // Оновлюємо заголовок сторінки
    useEffect(() => {
        if (item?.title) {
            document.title = `${item.title} - LA П’ЄЦ нормальна доставка їжі у Львові`;
        }
        // Скидання заголовка при розмонтуванні компонента (опціонально)
        return () => {
            document.title = "LA П’ЄЦ";
        };
    }, [item]);

    // Стан завантаження
    if (isLoading) {
        return (
            <div className="w-full h-96 flex items-center justify-center text-xl font-medium">
                Завантаження акції...
            </div>
        );
    }

    // Стан помилки запиту
    if (isError) {
        return (
            <div className="w-full h-96 flex items-center justify-center text-red-500 font-medium">
                Помилка при завантаженні даних
            </div>
        );
    }

    // Якщо завантаження завершено, але акцію з таким path не знайдено
    if (!item) {
        return (
            <div className="w-full h-96 flex items-center justify-center text-xl font-medium">
                Акцію не знайдено
            </div>
        );
    }

    // Чистий рендеринг одного об'єкта без зайвих масивів та циклів
    return (
        <div className="w-full flex flex-col items-center justify-center px-4">
            <div className="w-full lg:w-4/5 flex flex-col items-center">

                {/* Зображення акції */}
                <div className="w-full rounded-2xl overflow-hidden shadow-md">
                    <img
                        src={item.imagePath}
                        alt={item.title}
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Заголовок */}
                <h2 className="text-heading text-center text-2xl md:text-3xl font-bold py-4 mt-8 md:mt-12">
                    {item.title}
                </h2>

                {/* Опис акції */}
                <p className="my-5 w-full lg:w-2/3 text-gray-700 leading-relaxed text-base md:text-lg text-center md:text-left">
                    {item.description}
                </p>

            </div>
        </div>
    );
};

export default OneDiscount;
