


const InfoDiscountAdminPanel = (props) => {
    return (
        <section className="w-full h-screen flex items-start justify-center">
            {props.oneDiscount && (
                <div className="bg-gray-700 py-8 px-4 mx-auto max-w-2xl lg:py-16 w-full lg:w-1/2 rounded-lg relative">
                    <h2 className="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white">{props.oneDiscount.name}</h2>

                    <dl>
                        <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Опис</dt>
                        <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{props.oneDiscount.description}</dd>
                    </dl>
                    <dl className="flex items-center space-x-6 my-3">
                        <img src={props.oneDiscount.imagePath} alt={props.oneDiscount.name} className="w-48 h-48 object-cover rounded-lg" />
                    </dl>

                    <div className="flex items-center space-x-4">

                        <button type="button"
                            className="absolute top-4 right-4 inline-flex items-center text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                            onClick={() => props.closeModal()}
                        >
                            <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
export default InfoDiscountAdminPanel;