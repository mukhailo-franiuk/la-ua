
const Payment = () => {
    document.title = `Спосіб оплати - LA П’ЄЦ нормальна доставка їжі у Львові`;
    return (
        <div className="w-full flex flex-col items-center min-h-screen">
            {/* Головний заголовок сторінки */}
            <h1 className="mt-10 text-center w-full py-4 bg-gray-100 text-gray-900 font-bold text-2xl uppercase tracking-wide">
                Спосіб оплати
            </h1>
            <div className="mt-10 w-full max-w-7xl mx-auto px-4 mb-20 flex flex-col items-center justify-center">
                <section className=" flex flex-col flex-wrap lg:flex-row lg:justify-between justify-center items-center lg:w-4/5 border border-gray-200 rounded-2xl p-6 gap-6 my-5">
                    <div className="w-full lg:w-2/5 flex flex-col items-center justify-center relative">
                        <img src="https://la.ua/wp-content/uploads/2021/06/money_1.svg" alt="img-10" className="w-20 absolute -top-4  bg-white left-2/5 " />
                        <div className="border-2 border-yellow-400 min-h-[250px]  flex flex-col items-center justify-center rounded-2xl p-4 mt-4 gap-4">
                            <h3 className="text-center text-2xl">Оплата готівкою</h3>
                            <p className="text-center text-md">Розраховуйтеся за свою улюблену піцу LA П’ЄЦ готівкою при отриманні</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/5 flex flex-col items-center justify-center relative">
                        <img src="https://la.ua/wp-content/uploads/2021/06/money_2.svg" alt="img-11" className="w-20 absolute -top-4 bg-white left-2/5 " />
                        <div className="border-2 border-yellow-400 min-h-[250px]  flex flex-col items-center justify-center rounded-2xl p-4 mt-4 gap-4">
                            <h3 className="text-center text-2xl">Оплата онлайн через сервіс LiqPay</h3>
                            <p className="text-center text-md">Розраховуйтеся за свою улюблену піцу LA П’ЄЦ онлайн через сервіс LiqPay aбо карткою при отриманн</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/5 flex flex-col items-center justify-center relative">
                        <img src="https://la.ua/wp-content/uploads/2021/06/money_3.svg" alt="img-12" className="w-20 absolute -top-4 bg-white left-2/5 " />
                        <div className="border-2 border-yellow-400 min-h-[250px]  flex flex-col items-center justify-center rounded-2xl p-4 mt-4 gap-4">
                            <h3 className="text-center text-2xl">Оплата картою кур’єру</h3>
                            <p className="text-center text-md">Розраховуйтеся за свою улюблену піцу LA П’ЄЦ карткою при отриманні</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/5 flex flex-col items-center justify-center relative">
                        <img src="https://la.ua/wp-content/uploads/2021/06/money_4.svg" alt="img-13" className="w-20 absolute -top-4 bg-white left-2/5 " />
                        <div className="border-2 border-yellow-400 min-h-[250px]  flex flex-col items-center justify-center rounded-2xl p-4 mt-4 gap-4">
                            <h3 className="text-center text-2xl">Оплата бонусами</h3>
                            <p className="text-center text-md">Розраховуйтеся за свою улюблену піцу LA П’ЄЦ особистими бонусам</p>
                        </div>
                    </div>
                </section>
                <section className=" flex flex-col justify-center items-start lg:w-4/5 border border-gray-200 rounded-2xl p-6 gap-6 my-5">
                    <h2 className="w-full flex justify-start items-center gap-4 text-gray-900 text-lg font-bold">
                        <img src="https://la.ua/wp-content/themes/lapiec/assets/frontend/img/icons/menu-icon-5.svg" alt="icon-01" className="w-16" />
                        ** Замовлення рахується прийнятим з моменту опрацювання його оператором колл-центру дзвінком до клієнта.
                    </h2>
                    <p>
                        Тепер трохи про зручності оплати. Ми довіряємо своїм клієнтам, тому розрахунок відбувається при
                        отриманні. Готівкою або карткою – обираєте Ви. Сервіс доставки піци у Львові «LA П’ЄЦ» намагається


                        бути максимально сучасним та лояльним до своїх клієнтів, тому Ви можете розрахуватись карткою.
                        Просто позначте при оформленні замовлення, що бажаєте розрахуватись з кур’єром карткою, або повідомте про
                        це оператора телефоном. Насправді, погодьтесь, готівка потрохи виходить з ужитку, і ми все частіше розраховуємось
                        карткою за все, навіть за проїзд у транспорті.
                    </p>
                    <p>
                        Доставка «LA П’ЄЦ» – це найсучасніший, найкомфортніший та найсмачніший сервіс доставки піци у Львові.
                        Ми співпрацюємо з українськими виробниками, поєднуємо професійність та нестандартні рецепти, а Ви
                        отримуєте смачну і гарячу піцу у будь-який день. Так, ми працюємо для Вас щоденно, лише оберіть
                        піцу та оформіть замовлення! До речі, до будь-якої піци можна обрати додатки – овочі, м’ясо,
                        сир та ще багато чого іншого. Спробуйте наш сервіс доставки і Ви завжди будете обирати лише нас.
                    </p>
                </section>
            </div>
        </div>
    );
}
export default Payment;