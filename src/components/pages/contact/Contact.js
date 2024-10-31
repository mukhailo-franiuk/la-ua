export const Contact = () => {
    document.title = `Контакти - LA П’ЄЦ нормальна доставка їжі у Львові`;
    return (
        <div className="w-full">
            <div className="w-full my-20 flex flex-col items-center">
                <h1 className="w-full bg-gray-400 text-center py-4 lg:text-3xl">Контактна інформація</h1>
                <div className="w-1/2 border-b mt-10 flex justify-between items-center">
                    <span className="flex items-center p-2">
                        <img src="https://la.ua/wp-content/themes/lapiec/assets/frontend/css/../img/lokation.png" alt="" className="w-5 h-7 mr-2" />
                        м.Львів</span>
                    <span className="flex items-center p-2">
                        <img src="https://la.ua/wp-content/themes/lapiec/assets/frontend/css/../img/tel.png" alt="" className="w-6 h-7 mr-2" />
                        097 440 40 60</span>
                </div>
                <div className="w-full flex mt-10 justify-center items-center">
                    <img src="https://la.ua/wp-content/themes/lapiec/assets/frontend/img//icons/hours-open.svg" alt="" className="w-6 h-7 mr-2" />
                    <p>Графік роботи: з 10:00 до 23:00 (сніданки з 09:00)</p>
                </div>
                <h1 className="w-full bg-gray-400 text-center mt-10 py-4 lg:text-3xl">Наші виробництва</h1>
                <div className="w-1/2 flex mt-10 justify-start items-center">
                    <ul className="">
                        <li className="flex items-center">
                            <img src="https://la.ua/wp-content/themes/lapiec/assets/frontend/img/icons/cursor.webp" alt="" className="w-6 h-7 mr-2" />
                            <p>Івана-Теодозія Куровця, 36</p>
                        </li>
                        <li className="flex items-center">
                            <img src="https://la.ua/wp-content/themes/lapiec/assets/frontend/img/icons/cursor.webp" alt="" className="w-6 h-7 mr-2" />
                            <p>Героїв УПА, 73</p>
                        </li>
                        <li className="flex items-center">
                            <img src="https://la.ua/wp-content/themes/lapiec/assets/frontend/img/icons/cursor.webp" alt="" className="w-6 h-7 mr-2" />
                            <p>Січових Стрільців, 10</p>
                        </li>
                        <li className="flex items-center">
                            <img src="https://la.ua/wp-content/themes/lapiec/assets/frontend/img/icons/cursor.webp" alt="" className="w-6 h-7 mr-2" />
                            <p>Торф'яна, 10</p>
                        </li>
                        <li className="flex items-center">
                            <img src="https://la.ua/wp-content/themes/lapiec/assets/frontend/img/icons/cursor.webp" alt="" className="w-6 h-7 mr-2" />
                            <p>Хуторівка, 59б</p>
                        </li>
                        <li className="flex items-center">
                            <img src="https://la.ua/wp-content/themes/lapiec/assets/frontend/img/icons/cursor.webp" alt="" className="w-6 h-7 mr-2" />
                            <p>Шевченка, 60</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}