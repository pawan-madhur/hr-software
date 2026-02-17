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
            image: "/images/AI-Upskilling-for-HR-Teams.png",
            title: "Upskilling HR Teams for AI and Automation: A Roadmap",
            href: "https://hrone.cloud/blog/upskilling-hr-teams-for-ai-and-automation-a-roadmap/",
        },
        {
            id: 2,
            image: "/images/Successful-Resume-Screening-Techniques.png",
            title: "9 Most Effective Techniques for Successful Resume Screenings",
            href: "https://hrone.cloud/blog/techniques-for-successful-resume-screenings/",
        },
        {
            id: 3,
            image: "/images/HR-ROI-for-Leadership.png",
            title: "How to Calculate and Present HR ROI to Leadership",
            href: "https://hrone.cloud/blog/how-to-calculate-present-hr-roi-to-leadership/",
        },
        {
            id: 4,
            image: "/images/POSH-Compliance-Remote-Work.png",
            title: "POSH Compliance in Remote and Hybrid Workplaces: Challenges and Solutions",
            href: "https://hrone.cloud/blog/posh-compliance-remote-hybrid-workplaces-challenges-solutions/",
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
