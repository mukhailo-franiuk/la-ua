import { Link } from "react-router-dom";
const Delivery = () => {
    document.title = `Умови та зони доставки LA П’ЄЦ нормальна доставка їжі Львів`;
    return (
        <div className="w-full flex flex-col items-center min-h-screen">
            {/* Головний заголовок сторінки */}
            <h1 className="mt-10 text-center w-full py-4 bg-gray-100 text-gray-900 font-bold text-2xl uppercase tracking-wide">
                Львів - зони доставки
            </h1>
            <div className="mt-10 w-full max-w-7xl mx-auto px-4 mb-20 flex flex-col items-center justify-center">
                <section className=" flex flex-col justify-center items-center lg:w-4/5 border border-gray-200 rounded-2xl p-6 gap-6 my-5">
                    <div className="flex lg:flex-row flex-col items-center justify-center w-full bg-white rounded-2xl overflow-hidden p-3 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                        <img src="https://la.ua/wp-content/uploads/2021/07/29-min.svg" alt="logo-01" className="w-64 h-full object-cover object-top transform group-hover:scale-[1.02] group-hover:-translate-y-1 transition-all duration-300" />
                        <div className="flex flex-col lg:items-center items-start justify-center w-full h-full p-4">
                            <h2 className="text-green-600 text-2xl">Зелена зона</h2>
                            <p>До <strong className="font-bold">29 хвилин *</strong></p>
                            <p>Мінімальне замовлення <strong className="font-bold">500 грн**</strong></p>
                            <p>Вартість доставки 60 грн</p>
                            <p>прийом замовлень до 22:55</p>
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col items-center justify-center w-full bg-white rounded-2xl overflow-hidden p-3 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                        <img src="https://la.ua/wp-content/uploads/2021/07/59-min-yellow.svg" alt="logo-02" className="w-64 h-full object-cover object-top transform group-hover:scale-[1.02] group-hover:-translate-y-1 transition-all duration-300" />
                        <div className="flex flex-col lg:items-center items-start justify-center w-full h-full p-4">
                            <h2 className="text-yellow-600 text-2xl">Жовта зона</h2>
                            <p>До <strong className="font-bold">59 хвилин *</strong></p>
                            <p>Мінімальне замовлення <strong className="font-bold">1000 грн**</strong></p>
                            <p>Вартість доставки 100 грн</p>
                            <p>прийом замовлень до 22:30</p>
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col items-center justify-center w-full bg-white rounded-2xl overflow-hidden p-3 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                        <img src="https://la.ua/wp-content/uploads/2023/07/89-min-blue.svg" alt="logo-03" className="w-64 h-full object-cover object-top transform group-hover:scale-[1.02] group-hover:-translate-y-1 transition-all duration-300" />
                        <div className="flex flex-col lg:items-center items-start justify-center w-full h-full p-4">
                            <h2 className="text-blue-600 text-2xl">Синя зона</h2>
                            <p>До <strong className="font-bold">89 хвилин *</strong></p>
                            <p>Мінімальне замовлення <strong className="font-bold">2000 грн**</strong></p>
                            <p>Вартість доставки 250 грн</p>
                            <p>прийом замовлень до 22:00</p>
                        </div>
                    </div>
                </section>
                <section className=" flex flex-col justify-center items-center lg:w-4/5 border border-gray-200 rounded-2xl p-6 gap-6 my-5">
                    <h2 className="w-full flex justify-start items-center gap-4 text-gray-900 text-lg font-bold">
                        <img src="https://la.ua/wp-content/themes/lapiec/assets/frontend/img/icons/menu-icon-5.svg" alt="icon-01" className="w-16" />
                        Наші послуги неможливо сплатити карткою “Національний кешбек”.
                    </h2>
                    <p><Link to={`/`} className="text-red-500">Сервіс доставки їжі у Львові</Link> «LA П’ЄЦ»
                        пропонує надзвичайно зручний механізм доставки та оплати. Ми вважаємо, що наші
                        стандарти роботи мають бути класикою та комфортом для замовника.</p>
                    <p>Отже, почнемо з доставки. Ми ділимо Львів на зони доставки – зелену, жовту
                        та синю. Для кожної зони ми чітко визначаємо час приїзду кур’єра і в разі
                        затримки Ви отримуєте приємний сюрприз, про який ми поговоримо трохи пізніше.</p>
                    <p><Link to={`/`} className="text-red-500">Доставка в зелену зону</Link> – до 29 хвилин*,
                        вартість доставки 60 грн, мінімальна сума замовлення на страви 500 грн**.</p>
                    <p>Доставка в жовту зону – до 59 хвилин, вартість доставки 100 грн, мінімальна сума замовлення на страви 1 000 грн.</p>
                    <p>Доставка в синю зону – до 89 хвилин, вартість доставки 250 грн, мінімальна сума замовлення на страви 2 000 грн.</p>
                    <p>*від 10 страв у замовленні з однієї категорії – до стандартного часу доставки додається +30хв.</p>
                    <p>**Мінімальна сума для доставки визначається за вартістю страв після застосування всіх знижок та акцій.
                        Вартість доставки до мінімальної суми не включається. У разі якщо підсумкова вартість страв після
                        застосування знижок та акцій є меншою за встановлену мінімальну суму для відповідної зони доставки,
                        до замовлення додається доплата за недосягнення мінімальної суми замовлення.</p>
                    <p className="text-left">Розмір доплати:</p>
                    <ul className="w-full flex flex-col justify-start">
                        <li>в зеленій зоні – 60 грн;</li>
                        <li>в жовтій зоні – 100 грн;</li>
                        <li>в синій зоні – 250 грн;</li>
                    </ul>
                    <p>Ми дуже цінуємо Ваш час, тому завжди намагаємось вкластись у мінімальні терміни і вимірюємо час хвилинами, адже кожна хвилина важлива.</p>
                    <p>Замовлення заздалегідь доставляються плюс-мінус 15 хвилин від вказаного часу. Наприклад,
                        якщо ви замовили доставку на 12:00, то кур’єр може доставити замовлення в інтервалі 11:45 – 12:15.</p>
                    <p>Якщо кур’єр у Львові спізнюється, Ви отримуєте не лише вибачення, а ще й промокод на безкоштовну піцу при наступному замовленні!</p>
                    <p><Link to={`/products/alcohol-drink`} className="text-red-500">Доставка алкогольних напоїв у Львові</Link> здійснюється лише особам, що на момент оформлення замовлення 
                        мають повних 18 років. Для алкогольних напоїв доступна лише онлайн оплата.</p>
                </section>
            </div>
        </div>
    );
}
export default Delivery;