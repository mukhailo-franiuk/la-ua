import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useAddCartMutation } from '../../../store/cartSlice/cartSlice';

const Order = (props) => {
    // Ініціалізація форми
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [addcart] = useAddCartMutation();
    const date = new Date();
    // Завантажуємо товари з localStorage
    const orderItems = useMemo(() => {
        try {
            return JSON.parse(localStorage.getItem('myCollection')) || [];
        } catch (e) {
            return [];
        }
    }, []);

    // Динамічно рахуємо загальну суму всіх товарів
    const orderTotal = useMemo(() => {
        return orderItems.reduce((sum, item) => {
            const price = Number(item.price) || 0;
            const quantity = Number(item.quantity) || 1;
            return sum + (price * quantity);
        }, 0);
    }, [orderItems]);
    function generatePassword({ length = 12, uppercase = true, lowercase = true, numbers = true, symbols = false } = {}) {
        const charSets = {
            uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            lowercase: 'abcdefghijklmnopqrstuvwxyz',
            numbers: '0123456789',
            symbols: '!@#$%^&*()_+~}{[]:;?><,./-='
        };

        let allowedChars = '';
        let guaranteedChars = [];

        // Додаємо вибрані набори символів
        if (uppercase) {
            allowedChars += charSets.uppercase;
            guaranteedChars.push(charSets.uppercase[getRandomInt(charSets.uppercase.length)]);
        }
        if (lowercase) {
            allowedChars += charSets.lowercase;
            guaranteedChars.push(charSets.lowercase[getRandomInt(charSets.lowercase.length)]);
        }
        if (numbers) {
            allowedChars += charSets.numbers;
            guaranteedChars.push(charSets.numbers[getRandomInt(charSets.numbers.length)]);
        }
        if (symbols) {
            allowedChars += charSets.symbols;
            guaranteedChars.push(charSets.symbols[getRandomInt(charSets.symbols.length)]);
        }

        // Якщо нічого не вибрано, повертаємо порожній рядок
        if (allowedChars === '') return '';

        // Заповнюємо решту довжини пароля випадковими символами
        const remainingLength = length - guaranteedChars.length;
        for (let i = 0; i < remainingLength; i++) {
            const randomIndex = getRandomInt(allowedChars.length);
            guaranteedChars.push(allowedChars[randomIndex]);
        }

        // Перемішуємо масив, щоб гарантовані символи не йшли на початку
        return shuffleArray(guaranteedChars).join('');
    }
    const getRandomInt = (max) => {
        const array = new Uint32Array(1);
        window.crypto.getRandomValues(array);
        return array[0] % max;
    }

    /**
     * Перемішування масиву за алгоритмом Фішера-Єйтса
     */
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = getRandomInt(i + 1);
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    // Обробник відправки форми
    const onSubmit = async (data) => {
        const orderData = {
            customer: data,
            items: orderItems,
            total: orderTotal,
            numOrder: `#${generatePassword({ length: 8, uppercase: true, lowercase: true, numbers: true })}`,
            time: `${date.getHours()}:${date.getMinutes()}`,
            date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`,
            statusRead: "not-read"
        };
        console.log('Дані замовлення для відправки:', orderData);
        // Тут викликайте вашу мутацію або API-запит
        await addcart(orderData).unwrap();
        localStorage.removeItem('myCollection');
        window.location.reload();
    };

    return (
        <section className="py-8 antialiased md:py-16 w-full min-h-full">

            <div className="mx-auto max-w-screen-xl py-10 px-4 2xl:px-0 bg-yellow-400 rounded-lg relative">
                <button
                    onClick={() => props.closeAddCart(false)}
                    type="button"
                    className=" text-gray-900 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                </button>
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-6">
                        Оформити замовлення
                    </h2>

                    {/* Таблиця товарів */}
                    <div className="relative overflow-x-auto border-b border-gray-200 dark:border-gray-800">
                        {orderItems.length === 0 ? (
                            <p className="text-center text-gray-500 dark:text-gray-400 py-4">Ваш кошик порожній</p>
                        ) : (
                            <table className="w-full text-left font-medium text-gray-900 dark:text-white md:table-fixed">
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                                    {orderItems.map((item, index) => (
                                        <tr key={item.id || index}>
                                            <td className="whitespace-nowrap py-4 md:w-[384px]">
                                                <div className="flex items-center gap-4">
                                                    {item.image && (
                                                        <img src={item.image} alt={item.name} className="h-10 w-10 object-cover rounded" />
                                                    )}
                                                    <span>{item.name || 'Товар'}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                                                К-сть: {item.quantity || 1}
                                            </td>
                                            <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">
                                                {((Number(item.price) || 0) * (Number(item.quantity) || 1))} грн
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>

                    {/* Загальна сума та Форма даних клієнта */}
                    {orderItems.length > 0 && (
                        <div className="mt-6 relative ">

                            <div className="flex justify-between items-center text-xl font-bold text-white mb-6">
                                <span>Загалом до сплати:</span>
                                <span>{orderTotal} грн</span>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-white mb-1">Ім'я та Прізвище</label>
                                    <input
                                        {...register("fullName", { required: "Це поле обов'язкове" })}
                                        className="w-full p-2.5 rounded bg-gray-700 text-white border border-gray-500"
                                    />
                                    {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white mb-1">Телефон</label>
                                    <input
                                        type="tel"
                                        {...register("phone", { required: "Це поле обов'язкове" })}
                                        className="w-full p-2.5 rounded bg-gray-700 text-white border border-gray-500"
                                    />
                                    {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4 transition-colors"

                                >
                                    Підтвердити замовлення
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Order;
