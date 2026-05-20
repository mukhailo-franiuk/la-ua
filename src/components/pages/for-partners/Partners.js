

const Partners = () => {
    document.title = `Для партнерів - LA П’ЄЦ нормальна доставка їжі у Львові`;
    return (
        <section className="w-full flex flex-col mb-10">
            <h1 className="mt-10 text-center w-full py-3 bg-gray-100 text-gray-900 font-bold text-2xl">Для партнерів</h1>
            <div className="mt-10 flex flex-col items-center justify-center w-full">
                <p className="my-4 lg:w-3/5 w-full lg:px-0 px-5">
                    Партнерство у бізнесі – вигідний спосіб сумісної роботи та отримання
                    задоволення від результату. Чому? Тому що ми пропонуємо партнерство у
                    сучасній, гнучкій та цікавій компанії. Такий варіант співпраці
                    приносить користь обом сторонам, фінансові можливості, рекламу
                    та зростання бізнесу. Це не просто слова, адже ви на цій сторінці
                    тому, що хочете, аби ваш місцевий бізнес зростав та розвивався.
                </p>
                <p className="my-4 lg:w-3/5 w-full lg:px-0 px-5">
                    «LA П’ЄЦ» здійснює послуги доставки піци у Львові. Це конкурентна
                    та динамічна ніша, яка з швидким темпом змінюється та розширюється.
                    Ми забезпечуємо якісний сервіс та притримуємось сучасних стандартів
                    роботи, аби задовольнити побажання найвибагливішого клієнта.
                    Разом з тим, ми лояльні до наших нових партнерів та готові
                    обговорити деталі співпраці вже сьогодні – зв’яжіться з нами
                    за контактною формою, що вказана нижче, і ми відповімо на всі ваші запитання.
                </p>
                <p className="my-4 lg:w-3/5 w-full lg:px-0 px-5">
                    Ми доставляємо піцу, салати та напої у межах Львова, маємо широкий асортимент,
                    приємні для клієнтів ціни, якісний сервіс та чудові умови. «LA П’ЄЦ»
                    піклується про своїх клієнтів і завжди відбирає для них лише найкраще.
                    Готові приєднатись, відчуваєте, що маєте ресурси і бажання? Зконтактуйте
                    з нами і розпочнемо нове і перспективне партнерство.
                </p>
                <p className="my-4 lg:w-3/5 w-full lg:px-0 px-5">
                    Це сторінка зв’язку для фірм або осіб-підприємців, які можуть запропонувати
                    «LA П’ЄЦ» вигідне партнерство. Ми завжди відкриті до пропозицій та діалогів
                    і завжди у пошуках надійних та закоханих у свою справу людей – таких, і як ми.
                </p>

            </div>
            <h2 className="mt-10 text-center w-full py-3  text-gray-900 font-bold text-2xl">Залишити заявку</h2>

            <form className="w-full mx-auto space-y-4 flex flex-col justify-center items-center">
                
                <div className="my-4 lg:w-3/5 w-full lg:px-0 px-5"> 
                    <input type="text" className="bg-neutral-secondary-medium border border-default-medium text-heading text-base rounded-base focus:ring-brand focus:border-brand block w-full px-4 py-3.5 shadow-xs placeholder:text-body" placeholder="Ваше ім'я*" required />
                </div>
                <div className="my-4 lg:w-3/5 w-full lg:px-0 px-5"> 
                    <input type="text" className="bg-neutral-secondary-medium border border-default-medium text-heading text-base rounded-base focus:ring-brand focus:border-brand block w-full px-4 py-3.5 shadow-xs placeholder:text-body" placeholder="Ваш телефон" required />
                </div>
                <div className="my-4 lg:w-3/5 w-full lg:px-0 px-5"> 
                    <input type="email" className="bg-neutral-secondary-medium border border-default-medium text-heading text-base rounded-base focus:ring-brand focus:border-brand block w-full px-4 py-3.5 shadow-xs placeholder:text-body" placeholder="Ваш Email*" required />
                </div>
                <div className="my-4 lg:w-3/5 w-full lg:px-0 px-5"> 
                    <textarea id="message" rows="4" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body" placeholder="Ваше повідомлення*"></textarea>
                </div>
                <button type="button" className="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Відправити</button>
            </form>
        </section>
    )
}
export default Partners;