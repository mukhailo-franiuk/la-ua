import { useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { useGetProductsQuery } from "../../../store/productSlice/productSlice";
import { useState } from "react";

// import { addToCart } from "../../../store/cartSlice/cartSlice";

const AllProducts = () => {
    const { data: products = [], isLoading, isError } = useGetProductsQuery();
    const { listProductsByCategory: categoryParam } = useParams();
    // const [oneProduct, setOneProduct] = useState(false);
    // Зберігаємо весь об'єкт обраного товару (null, якщо вікно закрите)
    const [selectedProduct, setSelectedProduct] = useState(null);
    // const dispatch = useDispatch();

    const filteredProducts = products.filter(
        (item) => item.category === categoryParam
    );

    if (isLoading) return <div >Завантаження...</div>;
    if (isError) return <div>Помилка завантаження товарів</div>;
    return (
        <div className="w-full flex items-center justify-center">

            <div className="w-full lg:w-4/5 flex lg:flex-row flex-col flex-wrap items-center justify-center gap-10 ">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div
                            className="w-full max-w-xs border-gray-600 border-[1px] h-[600px] hover:cursor-pointer bg-white p-6 rounded-xl shadow-current shadow-lg flex flex-col justify-center items-start my-5" key={product.id}
                            onClick={() => {
                                setSelectedProduct(product);
                                // setOneProduct(true)
                            }}
                        >
                            <div>
                                <img className="rounded-base mb-6" src={product.imagePath} alt="product image" />
                            </div>
                            <div className="w-full">
                                <div>
                                    <h5 className="text-xl text-heading font-semibold tracking-tight">{product.name}</h5>
                                </div>
                                <p className="text-[13px]">{product.description}</p>
                                <div className="w-full flex items-center justify-between mt-6">
                                    <span className="text-xl font-extrabold text-heading">{product.price} ₴</span>
                                    <button
                                        type="button"
                                        className="inline-flex items-center  text-gray-900 bg-yellow-400 hover:bg-yellow-500 box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none"
                                        onClick={(e) => {
                                            e.stopPropagation(); // Зупиняє відкриття модального вікна при кліку на кнопку
                                            // тут буде dispatch(addToCart(product))
                                        }}
                                    >
                                        <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" /></svg>
                                        Добавити в кошик
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>Товарів у цій категорії не знайдено</div>
                )}
            </div>
            {/* Модальне вікно (Попап) */}
            <div
                className={`w-full fixed top-0 left-0 h-screen bg-black/50 flex justify-center items-center duration-500 ease-in-out ${selectedProduct ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
                onClick={() => setSelectedProduct(null)}
            >
                {selectedProduct && (
                    <div
                        className="max-w-4xl w-full mx-4 p-8 bg-white rounded-xl shadow-2xl relative"
                        onClick={(e) => e.stopPropagation()} // Запобігає закриттю при кліку всередині модалки
                    >
                        {/* Кнопка закриття */}
                        <button
                            className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-black cursor-pointer"
                            onClick={() => setSelectedProduct(null)}
                        >
                            &times;
                        </button>

                        <div className="flex flex-col md:flex-row gap-10">
                            <div className="w-full md:w-1/2 border border-gray-200 rounded-lg overflow-hidden flex items-center justify-center p-4">
                                <img className="max-h-[400px] object-contain" src={selectedProduct.imagePath} alt={selectedProduct.name} />
                            </div>

                            <div className="text-sm w-full md:w-1/2 flex flex-col justify-between">
                                <div>
                                    <h1 className="text-3xl font-medium text-gray-900">{selectedProduct.name}</h1>
                                    <p className="text-gray-600 mt-4 text-base">{selectedProduct.description}</p>

                                    <div className="mt-6">
                                        <p className="text-3xl font-bold text-gray-900">{selectedProduct.price} ₴</p>
                                        <span className="text-gray-400 text-xs">(включаючи всі податки)</span>
                                    </div>
                                </div>

                                <div className="flex items-center mt-10 gap-4 text-base">
                                    <button className="w-full py-3.5 font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition cursor-pointer rounded-lg">
                                        В кошик
                                    </button>
                                    <button className="w-full py-3.5 font-medium bg-indigo-500 text-white hover:bg-indigo-600 transition cursor-pointer rounded-lg">
                                        Купити зараз
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
