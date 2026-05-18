import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGetDiscountsQuery } from '../../../store/discountSlice/discountSlice';

export default function AutoplayCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const timeoutRef = useRef(null);
    const { data: discounts = [] } = useGetDiscountsQuery();
    const AUTOPLAY_DELAY = 2000; // Інтервал автопрокрутки у мілісекундах (2 секунди)

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? discounts.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === discounts.length - 1 ? 0 : prev + 1));
    };

    // Очищення таймера
    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    // Логіка Autoplay
    useEffect(() => {
        resetTimeout();
        if (isPlaying) {
            timeoutRef.current = setTimeout(() => {
                nextSlide();
            }, AUTOPLAY_DELAY);
        }

        return () => {
            resetTimeout();
        };
    }, [currentIndex, isPlaying]);

    return (
        <div
            className="relative w-full max-w-7xl mx-auto h-[450px] overflow-hidden rounded-2xl bg-gray-900 shadow-xl group"
            onMouseEnter={() => setIsPlaying(false)} // Пауза при наведенні миші
            onMouseLeave={() => setIsPlaying(true)}  // Відновлення при виході миші
        >

            {/* Трек із слайдами */}
            <div
                className="flex h-full transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {discounts.map((discount) => (
                    <Link to={`/discount/${discount.path}`} key={discount.id} className="relative w-full h-full flex-shrink-0">
                        <img
                            src={discount.imagePath}
                            alt={discount.name}
                            className="w-full h-full object-cover"
                        />
                        {/* Градієнтний оверлей та текст */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                            <h3 className="text-2xl font-bold mb-2">{discount.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>

            {/* КНОПКА «НАЗАД» (Десктоп) */}
            <button
                onClick={prevSlide}
                aria-label="Попередній слайд"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 hover:bg-white/40 border border-white/10 text-white backdrop-blur-sm transition-all duration-200 active:scale-95 opacity-0 group-hover:opacity-100 hidden md:block"
            >
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>

            {/* КНОПКА «ВПЕРЕД» (Десктоп) */}
            <button
                onClick={nextSlide}
                aria-label="Наступний слайд"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 hover:bg-white/40 border border-white/10 text-white backdrop-blur-sm transition-all duration-200 active:scale-95 opacity-0 group-hover:opacity-100 hidden md:block"
            >
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>

            {/* Кнопки керування (Мобільні) */}
            <div className="absolute bottom-6 right-6 flex gap-2 md:hidden z-10">
                <button onClick={prevSlide} className="p-2.5 rounded-lg bg-black/60 text-white border border-white/10 active:scale-95">❮</button>
                <button onClick={nextSlide} className="p-2.5 rounded-lg bg-black/60 text-white border border-white/10 active:scale-95">❯</button>
            </div>

            {/* Крапки-індикатори (Смужки) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {discounts.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Перейти до слайду ${index + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/70 w-2'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
