
const InfoProductAdminPanel = (props) => {
    return (
        <section className="w-full flex items-start justify-center">
            {props.oneProduct && (
                <div className="bg-yellow-400 py-8 px-4 mx-auto max-w-2xl lg:py-16 w-full lg:w-1/2 rounded-lg relative">
                    <h2 className="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl ">{props.oneProduct.name}</h2>
                    <p className="mb-4 text-xl font-extrabold leading-none text-gray-900 md:text-2xl">Ціна: {props.oneProduct.price} грн</p>
                    <dl>
                        <dt className="mb-2 font-semibold leading-none text-gray-900">Опис</dt>
                        <dd className="mb-4 font-light text-gray-50 sm:mb-5 ">{props.oneProduct.description}</dd>
                    </dl>
                    <dl className="flex items-center space-x-6">
                        <div>
                            <dt className="mb-2 font-semibold leading-none text-gray-900 ">Категорія</dt>
                            <dd className="mb-4 font-light text-gray-50 sm:mb-5 ">{props.oneProduct.category}</dd>
                        </div>
                        <div className={`${props.oneProduct.size ? 'block' : 'hidden'}`}>
                            <dt className="mb-2 font-semibold leading-none text-gray-900 ">Розмір</dt>
                            <dd className="mb-4 font-light text-gray-50 sm:mb-5 d">{props.oneProduct.size} см.</dd>
                        </div>
                        <div className={`${props.oneProduct.weight ? 'block' : 'hidden'}`}>
                            <dt className="mb-2 font-semibold leading-none text-gray-900 d">Вага</dt>
                            <dd className="mb-4 font-light text-gray-50 sm:mb-5 ">{props.oneProduct.weight} г.</dd>
                        </div>
                    </dl>
                    <dl className="flex items-center space-x-6 my-3">
                        <img src={props.oneProduct.imagePath} alt={props.oneProduct.name} className="w-48 h-48 object-cover rounded-lg" />
                    </dl>
                    <dl className="flex items-center space-x-6 my-3">
                        <div className={`${props.oneProduct.proteins ? 'block' : 'hidden'}`}>
                            <dt className="mb-2 font-semibold leading-none text-gray-900 ">Білки</dt>
                            <dd className="mb-4 font-light text-gray-50 sm:mb-5 ">{props.oneProduct.proteins} г.</dd>
                        </div>
                        <div className={`${props.oneProduct.carbohydrates ? 'block' : 'hidden'}`}>
                            <dt className="mb-2 font-semibold leading-none text-gray-900 ">Вуглеводи</dt>
                            <dd className="mb-4 font-light text-gray-50 sm:mb-5 ">{props.oneProduct.carbohydrates} г.</dd>
                        </div>
                        <div className={`${props.oneProduct.fats ? 'block' : 'hidden'}`}>
                            <dt className="mb-2 font-semibold leading-none text-gray-900 ">Жири</dt>
                            <dd className="mb-4 font-light text-gray-50 sm:mb-5">{props.oneProduct.fats} г.</dd>
                        </div>
                        <div className={`${props.oneProduct.caloricContent ? 'block' : 'hidden'}`}>
                            <dt className="mb-2 font-semibold leading-none text-gray-900 ">Калорійність</dt>
                            <dd className="mb-4 font-light text-gray-50 sm:mb-5">{props.oneProduct.caloricContent} ккал</dd>
                        </div>
                    </dl>
                    <div className="flex items-center space-x-4">

                        <button type="button"
                            className="absolute top-4 right-4 inline-flex items-center text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                            onClick={() => props.closeModal()}
                        >
                            <svg className="w-6 h-6 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
export default InfoProductAdminPanel;
