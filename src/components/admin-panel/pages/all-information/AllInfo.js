import { useGetCartQuery } from "../../../../store/cartSlice/cartSlice";

const OrdersInWork = () => {
    const { data: cart = [] } = useGetCartQuery();
    return (
        <section className="w-full py-8 antialiased bg-gray-200 md:py-8">
            <div className="flex flex-col items-center w-full px-4 2xl:px-0">
                <h2 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl md:mb-6">Список замовлень</h2>
                <div className="rounded-lg border w-full border-gray-200 bg-gray-50 p-4  md:p-8">
                    <h3 className="mb-4 text-xl font-semibold text-gray-900 ">Останні замовлення</h3>
                    {
                        cart.length === 0 ?
                            (<p className="">Зараз замовлень немає!</p>

                            ) : (
                                [...cart]
                                    // Сортування за часом: b.time порівнюється з a.time (від пізніших до раніших)
                                    .sort((a, b) => (b.time || "").localeCompare(a.time || ""))
                                    .slice(0, 10)
                                    .map(item => (
                                        <div className="flex flex-wrap items-center gap-y-4 border-b border-gray-200 pb-4  md:pb-5" key={item.id}>
                                            <dl className="w-1/2 sm:w-48">
                                                <dt className="text-base font-medium text-gray-500 ">Order ID:</dt>
                                                <dd className="mt-1.5 text-base font-semibold text-gray-900 ">
                                                    <span className="hover:underline">{item.numOrder}</span>
                                                </dd>
                                            </dl>
                                             <dl className="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
                                                <dt className="text-base font-medium text-gray-500 ">Time:</dt>
                                                <dd className="mt-1.5 text-base font-semibold text-gray-900 ">{item.time}</dd>
                                            </dl>
                                            <dl className="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
                                                <dt className="text-base font-medium text-gray-500 ">Date:</dt>
                                                <dd className="mt-1.5 text-base font-semibold text-gray-900 ">{item.date}</dd>
                                            </dl>

                                            <dl className="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
                                                <dt className="text-base font-medium text-gray-500 ">Price:</dt>
                                                <dd className="mt-1.5 text-base font-semibold text-gray-900 ">{item.total.toFixed(2)}</dd>
                                            </dl>
                                            <div className="w-full sm:flex sm:w-32 sm:items-center sm:justify-end sm:gap-4">
                                                <button

                                                    type="button"
                                                    className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto"
                                                >
                                                    Actions
                                                    <svg className="-me-0.5 ms-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"></path>
                                                    </svg>
                                                </button>
                                                <div className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow">
                                                    <ul className="p-2 text-left text-sm font-medium text-gray-500 " aria-labelledby="actionsMenuDropdown10">
                                                        <li>
                                                            <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 ">
                                                                <svg className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"></path>
                                                                </svg>
                                                                <span>Order again</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 ">
                                                                <svg className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                    <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"></path>
                                                                    <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                                                                </svg>
                                                                Order details
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <button className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-red-600 hover:bg-gray-100">
                                                                <svg className="me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"></path>
                                                                </svg>
                                                                Cancel order
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                            )
                    }
                </div>
            </div>

        </section>
    )
}
export default OrdersInWork;