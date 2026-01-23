"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import rightArrow from "@/public/images/ArrowRight.png";
import leftArrow from "@/public/images/ArrowLeft.png";

interface Article {
    id: number;
    image: string;
    title: string;
    href: string;
}

export default function Recommended() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkDesktop = () => {
            setIsDesktop(window.innerWidth >= 991);
        };
        checkDesktop();
        window.addEventListener("resize", checkDesktop);
        return () => window.removeEventListener("resize", checkDesktop);
    }, []);

    const articles: Article[] = [
        {
            id: 1,
            image: "/images/hero-desktop.png",
            title: "How to Make a Winning HR Digital Transformation",
            href: "#",
        },
        {
            id: 2,
            image: "/images/hero-desktop.png",
            title: "Data Driven HR Strategy: 5 Simple Ways to Build It [+Real Life Examples]",
            href: "#",
        },
        {
            id: 3,
            image: "/images/hero-desktop.png",
            title: "ChatGPT in HR: 16 Prompts You Can Copy-Paste From [+Use Cases]",
            href: "#",
        },
    ];

    const nextSlide = () => {
        const maxIndex = isDesktop
            ? Math.max(0, articles.length - 2)
            : Math.max(0, articles.length - 1);
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        const maxIndex = isDesktop
            ? Math.max(0, articles.length - 2)
            : Math.max(0, articles.length - 1);
        setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    };

    const getTransformValue = () => {
        if (isDesktop) {
            return `translateX(-${currentIndex * 33.333}%)`;
        }
        return `translateX(-${currentIndex * 100}%)`;
    };

    return (
        <section className="recommended">
            <div className="container container_cus">
                <div className="recommended-main">
                    <h2>Recommended HR Reads</h2>
                    <div className="recommended-slider-row">
                        <button
                            type="button"
                            className="workplace-prev"
                            onClick={prevSlide}
                            aria-label="Previous articles"
                        >
                            <Image src={leftArrow} alt="Left Arrow" />
                        </button>
                        <div className="recommended-main-card">
                            <div
                                className="recommended-main-card-track"
                                style={{
                                    transform: getTransformValue(),
                                    transition: "transform 0.5s ease",
                                }}
                            >
                                {articles.map((article) => (
                                    <div
                                        key={article.id}
                                        className="recommended-main-card-content"
                                    >
                                        <a href={article.href}>
                                            <div className="recommended-main-card-image">
                                                <Image
                                                    src={article.image}
                                                    alt={article.title}
                                                    width={400}
                                                    height={250}
                                                />
                                            </div>
                                            <h3>{article.title}</h3>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button
                            type="button"
                            className="workplace-next"
                            onClick={nextSlide}
                            aria-label="Next articles"
                        >
                            <Image src={rightArrow} alt="Right Arrow" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
