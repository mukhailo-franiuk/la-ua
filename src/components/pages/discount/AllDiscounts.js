import { Link } from "react-router-dom";
import { useGetDiscountsQuery } from "../../../store/discountSlice/discountSlice";
const Discounts = () => {
    document.title = `Акції - LA П’ЄЦ нормальна доставка їжі у Львові`;
    const {data} = useGetDiscountsQuery();
    return (
        <div className="w-full flex flex-col">
            <h1 className="mt-10 text-center w-full py-3 bg-gray-300 text-gray-900 font-bold text-2xl">Акції у Львові</h1>
            <div className="mt-10 w-full ">
                <section className="flex flex-wrap items-center justify-center gap-6">
                    {data?.map(item => (
                        <Link to={item.path} className='group lg:w-2/6 w-4/5 my-5 flex flex-col items-center' key={item.id}>
                        <img 
                        className='rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-top' 
                        src={item.imagePath}
                        alt={item.title}/>
                            <span className='text-sm w-1/2 text-center bg-yellow-400 mt-5 py-3 rounded-full'>Детальніше</span>  
                    </Link> 
                    ))}
                </section>
            </div>
        </div>
    )
}
export default Discounts;