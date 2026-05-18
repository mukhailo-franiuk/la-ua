import { useParams, Link } from "react-router-dom";
import { useGetProductsQuery } from "../../../store/productSlice/productSlice";
import { use, useState } from "react";
import { useAddCartMutation } from "../../../store/cartSlice/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const AllProducts = ({ id, description, title, price, quantity }) => {
    const { data: products = [], isLoading, isError } = useGetProductsQuery();
    const [addCart, { isLoading: isAddingToCart }] = useAddCartMutation();
    let userId = 0;
    const { listProductsByCategory: categoryParam } = useParams();
    const [selectedProduct, setSelectedProduct] = useState(null);

    const filteredProducts = products.filter(
        (item) => item.category === categoryParam
    );

    if (isLoading) return <div>Завантаження...</div>;
    if (isError) return <div>Помилка завантаження товарів</div>;
    const handleAddToCart = (product) => {
        // 1. Зчитуємо дані
        const rawData = JSON.parse(localStorage.getItem('myCollection'));

        // 2. Обов'язково перевіряємо, чи це дійсно масив. Якщо ні — створюємо новий []
        const currentCart = Array.isArray(rawData) ? rawData : [];

        // 3. Тепер спрід-оператор [...] спрацює без помилок
        const updatedCart = [...currentCart, product];

        // 4. Зберігаємо назад
        localStorage.setItem('myCollection', JSON.stringify(updatedCart));
        window.location.reload();
    };
    // Перевірка, чи є взагалі дані про харчову цінність
    const hasNutritionalInfo = (product) => {
        return product && (product.proteins || product.carbohydrates || product.fats || product.caloricContent);
    };
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toasterId="default"
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 2000,
                    removeDelay: 1000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },

                    // Default options for specific types
                    success: {
                        duration: 1000,
                        iconTheme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }}
            />
            <div className="w-full my-10 flex justify-start items-start">
                <Link to={`/`} className="ml-10">
                    <span className="w-full inline-flex items-center justify-center text-gray-900 bg-yellow-400 font-semibold rounded-xl text-sm px-4 py-3 group-hover:bg-yellow-500 transition-colors shadow-xs">
                        <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
                        </svg>
                        Повернутися назад
                    </span>
                </Link>
            </div>
            <div className="w-full lg:w-4/5 flex lg:flex-row flex-col flex-wrap items-center justify-center gap-10">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="w-full max-w-xs border-gray-600 border-[1px] h-[450px] hover:cursor-pointer bg-white p-6 rounded-xl shadow-current shadow-lg flex flex-col justify-between items-start my-5"
                            onClick={() => setSelectedProduct(product)}
                        >
                            <div className="w-full flex justify-center items-center h-48 overflow-hidden">
                                <img className="rounded-base max-h-full max-w-full object-contain" src={product.imagePath} alt="product image" />
                            </div>
                            <div className="w-full flex-grow flex flex-col justify-between mt-4">
                                <div>
                                    <h5 className="text-xl text-heading font-semibold tracking-tight line-clamp-2">{product.name}</h5>
                                    <p className="text-[13px] text-gray-600 mt-2 line-clamp-3">{product.description}</p>
                                </div>
                                <div className="w-full flex items-center justify-between mt-6">
                                    <span className="text-xl font-extrabold text-heading">{product.price} ₴</span>
                                    <button
                                        type="button"
                                        className="inline-flex items-center text-gray-900 bg-yellow-400 hover:bg-yellow-500 box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none cursor-pointer"

                                    >
                                        Детальніше
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-gray-500 text-xl my-10">Товарів у цій категорії не знайдено</div>
                )}
            </div>

            {/* Модальне вікно (Попап) */}
            <div
                className={`w-full fixed top-0 left-0 h-screen bg-black/50 flex justify-center items-center duration-500 ease-in-out z-50 ${selectedProduct ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}
                onClick={() => setSelectedProduct(null)}
            >
                {selectedProduct && (
                    <div
                        className="max-w-4xl w-full md:h-auto h-full md:overflow-auto overflow-scroll mx-4 p-8 bg-white rounded-xl shadow-2xl relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Кнопка закриття */}
                        <button
                            className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-black cursor-pointer"
                            onClick={() => setSelectedProduct(null)}
                        >
                            &times;
                        </button>

                        <div className="flex flex-col md:flex-row gap-10">
                            <div className="w-full md:w-1/2 border border-gray-200 rounded-lg overflow-hidden flex items-center justify-center p-4 bg-gray-50">
                                <img className="max-h-[400px] object-contain" src={selectedProduct.imagePath} alt={selectedProduct.name} />
                            </div>

                            <div className="text-sm w-full md:w-1/2 flex flex-col justify-between">
                                <div>
                                    <h1 className="text-3xl font-semibold text-gray-900">{selectedProduct.name}</h1>
                                    <p className="text-gray-600 mt-4 text-base mb-6">{selectedProduct.description}</p>

                                    {/* Правильне приховування таблиці БЖВУ */}
                                    {hasNutritionalInfo(selectedProduct) && (
                                        <table className="w-full border-collapse my-4">
                                            <thead>
                                                <tr className="text-center font-semibold text-gray-700 bg-gray-50">
                                                    <td className="border border-gray-300 p-2">Білки</td>
                                                    <td className="border border-gray-300 p-2">Вуглеводи</td>
                                                    <td className="border border-gray-300 p-2">Жири</td>
                                                    <td className="border border-gray-300 p-2">Калорії</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="text-center text-gray-900">
                                                    <td className="border border-gray-300 p-2">{selectedProduct.proteins || 0}г</td>
                                                    <td className="border border-gray-300 p-2">{selectedProduct.carbohydrates || 0}г</td>
                                                    <td className="border border-gray-300 p-2">{selectedProduct.fats || 0}г</td>
                                                    <td className="border border-gray-300 p-2">{selectedProduct.caloricContent || 0} ккал</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    )}

                                    {selectedProduct.size && <p className="my-1 text-gray-700 font-medium">Розмір: {selectedProduct.size} см</p>}
                                    {selectedProduct.weight && <p className="my-1 text-gray-700 font-medium">Вага: {selectedProduct.weight} г</p>}

                                    <div className="mt-6">
                                        <p className="text-3xl font-bold text-gray-900">{selectedProduct.price} ₴</p>
                                        <span className="text-gray-400 text-xs">(включаючи всі податки)</span>
                                    </div>
                                </div>

                                <div className="flex items-center mt-10 gap-4 text-base">
                                    <button
                                        className="w-full py-3.5 font-medium bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition cursor-pointer rounded-lg text-center shadow-md focus:outline-none"
                                        onClick={() => {
                                            handleAddToCart({ id: selectedProduct.id, name: selectedProduct.name, description: selectedProduct.description, price: selectedProduct.price, imagePath: selectedProduct.imagePath, quantity: 1 });

                                            toast.success('Товар добавлено в кошик!');
                                            setSelectedProduct(null);
                                        }}
                                    >
                                        В кошик
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllProducts;

