import { useGetDiscountsQuery } from "../../../store/discountSlice/discountSlice"
import { useParams } from "react-router-dom";
import { useMemo, useEffect } from "react";
const OneDiscount = () => {
    const { data } = useGetDiscountsQuery();
    const { oneDiscount: pathParam } = useParams();
    let arr = [];
    // Знаходимо потрібний елемент (фільтруємо дані відразу)
    const item = useMemo(() => {
        return data?.find(item => item.path === pathParam);
    }, [data, pathParam]);

    // Оновлюємо заголовок сторінки, коли елемент знайдено
    useEffect(() => {
        if (item) {
            document.title = `${item.title} - LA П’ЄЦ нормальна доставка їжі у Львові`;
        }
    }, [item]);

    if (!item) return <div>Завантаження або акцію не знайдено...</div>;
    arr.push(item);
    return (
        <div className="w-full flex flex-col items-center justify-center">
            {arr.map(item =>(
                <div key={item.id} 
                className="w-4/5"
                >
                    <img src={item.imagePath} alt={item.title} />
                    <h2 className="text-botd text-center text-3xl py-4 mt-10">
                        {item.title}
                    </h2>
                    <p className="my-5 lgw-1/2 w-4/5 py-4">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    )
}
export default OneDiscount