import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

const Cart = () => {
    document.title = `Кошик | LA П’ЄЦ нормальна доставка їжі нормальна доставка їжі`;
    const [isOpenAddCartForm, setIsOpenAddCartForm] = useState(false);

    // Ініціалізуємо кошик як стан React
    const [userCarts, setUserCarts] = useState(() => {
        return JSON.parse(localStorage.getItem('myCollection')) || [];
    });

    const isDeleting = false;

    // Рахуємо суму на основі стану
    const totalPrice = useMemo(() => {
        return userCarts.reduce((total, item) => total + (Number(item.price) * (item.quantity || 1)), 0);
    }, [userCarts]);

    // Функція оновлення кількості
    const handleUpdateQuantity = (index, newQuantity) => {
        if (newQuantity < 1) return; // Запобігаємо кількості менше 1

        const updatedCarts = userCarts.map((item, idx) =>
            idx === index ? { ...item, quantity: newQuantity } : item
        );

        setUserCarts(updatedCarts);
        localStorage.setItem('myCollection', JSON.stringify(updatedCarts));
    };

    // Оновлена функція видалення (без window.location.reload())
    const handleDeleteCart = (index) => {
        const updatedCarts = userCarts.filter((_, idx) => idx !== index);

        setUserCarts(updatedCarts);

        if (updatedCarts.length === 0) {
            localStorage.removeItem('myCollection');
        } else {
            localStorage.setItem('myCollection', JSON.stringify(updatedCarts));
        }
        window.location.reload();
    };

    return (
        <section className="bg-white py-8 antialiased md:py-16">
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                toastOptions={{
                    duration: 2000,
                    style: { background: '#363636', color: '#fff' },
                    success: {
                        duration: 1000,
                        iconTheme: { primary: 'green', secondary: 'black' },
                    },
                }}
            />
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <h2 className="text-xl font-semibold text-gray-700 sm:text-2xl">Кошик</h2>

                <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                    <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                        <div className="space-y-6">
                            {userCarts.length === 0 ? (
                                <div className="text-center py-12">
                                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <h3 className="mt-2 text-sm font-semibold text-gray-500">Кошик поки що порожній</h3>
                                    <p className="mt-1 text-sm text-gray-500">Почніть купувати продукти.</p>
                                    <div className="mt-6">
                                        <Link to="/" className="inline-flex items-center rounded-md bg-yellow-400 px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-yellow-500">
                                            До покупок
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                userCarts.map((item, index) => (
                                    <div className="rounded-lg border border-gray-200 bg-yellow-400 p-4 shadow-sm md:p-6" key={index}>
                                        <div className="space-y-4 my-2 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                            <span className="shrink-0 md:order-1">
                                                <img className="h-20 w-20 object-contain mx-auto" src={item.imagePath} alt={item.name} />
                                            </span>

                                            {/* Блок зміни кількості */}
                                            <div className="flex items-center justify-between md:order-3 md:justify-end">
                                                <div className="flex items-center">
                                                    <button
                                                        type="button"
                                                        onClick={() => handleUpdateQuantity(index, (item.quantity || 1) - 1)}
                                                        className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="w-10 text-center text-sm font-medium text-gray-900">
                                                        {item.quantity || 1}
                                                    </span>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleUpdateQuantity(index, (item.quantity || 1) + 1)}
                                                        className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <div className="text-end md:order-4 md:w-32">
                                                    <p className="text-base font-bold text-gray-700">
                                                        {(Number(item.price) * (item.quantity || 1)).toFixed(2)} грн.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Назва товару та кнопка видалення */}
                                            <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                                <h3 className="text-base font-medium text-gray-900">{item.name}</h3>
                                                <p className="text-sm text-gray-500">{item.description}</p>
                                                <button
                                                    onClick={() => handleDeleteCart(index)}
                                                    className="text-sm font-medium text-red-600 hover:underline"
                                                >
                                                    Видалити
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Права колонка: Підсумок замовлення */}
                    {userCarts.length > 0 && (
                        <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                                <p className="text-xl font-semibold text-gray-900">Підсумок</p>
                                <div className="space-y-2">
                                    <dl className="flex items-center justify-between gap-4">
                                        <dt className="text-base font-normal text-gray-500">Сума замовлення</dt>
                                        <dd className="text-base font-medium text-gray-900">{totalPrice.toFixed(2)} грн</dd>
                                    </dl>
                                </div>
                                <button className="flex w-full items-center justify-center rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-yellow-500">
                                    Оформити замовлення
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Cart;
