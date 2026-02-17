"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import quoteIcon from "@/public/images/testimonial-quote.png";

interface Testimonial {
    id: number;
    companyLogo: string;
    testimonialText: string;
    customerName: string;
    designation: string;
    profileImage: string;
    rating: number;
}

export default function CustomerTestimonial() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkDesktop = () => {
            setIsDesktop(window.innerWidth >= 991);
        };
        checkDesktop();
        window.addEventListener('resize', checkDesktop);
        return () => window.removeEventListener('resize', checkDesktop);
    }, []);

    const testimonials: Testimonial[] = [
        {
            id: 1,
            companyLogo: "/images/AHH.webp",
            testimonialText: "Total digital experience with easy-to- configure & user-friendly one-stop HRMS solution",
            customerName: "Kumar Krishnaswamy",
            designation: "Head HR, AHH",
            profileImage: "/images/AHH_director.webp",
            rating: 5
        },
        {
            id: 2,
            companyLogo: "/images/Utthunga.webp",
            testimonialText: "HROne acts as a bridge between employees, increased 60-70% productivity",
            customerName: "Amulya MS",
            designation: "HR Head, Utthunga",
            profileImage: "/images/Head-Utthunga.webp",
            rating: 5
        },
        {
            id: 3,
            companyLogo: "/images/VindhyaTelelinksLtd.webp",
            testimonialText: "1500+ employees across 19 states- improve people analytics",
            customerName: "Vinod Sharma",
            designation: "HR Head, Vindhya Telelinks Ltd.",
            profileImage: "/images/vinod.webp",
            rating: 5
        },
        {
            id: 4,
            companyLogo: "/images/bharathi-logo.webp",
            testimonialText: "Easy to use, flexible with no constraints and able to focus more on strategy.",
            customerName: "Dinesh Prabhakar",
            designation: "HR, Bharathi Homes",
            profileImage: "/images/mr.-dinesh.webp",
            rating: 5
        }
    ];

    const nextSlide = () => {
        // On desktop: show 2 cards + partial third, so max index is testimonials.length - 2
        // On mobile: show 1 card, so max index is testimonials.length - 1
        const maxIndex = isDesktop
            ? Math.max(0, testimonials.length - 2)
            : Math.max(0, testimonials.length - 1);

        setCurrentIndex((prevIndex) =>
            prevIndex >= maxIndex ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        const maxIndex = isDesktop
            ? Math.max(0, testimonials.length - 2)
            : Math.max(0, testimonials.length - 1);

        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? maxIndex : prevIndex - 1
        );
    };
    const getTransformValue = () => {
        if (isDesktop) {
            return `translateX(-${currentIndex * 33.333}%)`;
        } else {
            return `translateX(-${currentIndex * 100}%)`;
        }
    };

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <svg
                key={index}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill={index < rating ? "#FFD700" : "#E0E0E0"}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" />
            </svg>
        ));
    };

    return (
        <section className="customer-happiness-section">
            <div className="customer-happines-main">
                <div className="content-main">
                    <div className="content-heading">
                        <h2 className="customer-happiness-h2">
                            Why HROne HRMS is </h2>
                        <p className="customer-happiness-desc-p">the best to build aspiring workplaces?</p>
                    </div>
                    <div className="slider-buttons">
                        <button
                            id="prev-button"
                            className="prev-button cust btn"
                            onClick={prevSlide}
                            aria-label="Previous testimonial"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button
                            id="next-button"
                            className="next-button cust btn"
                            onClick={nextSlide}
                            aria-label="Next testimonial"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="testimonial-main">
                    <div className="customer-happiness-slider">
                        <div
                            className="customer-slider-track"
                            style={{
                                transform: getTransformValue(),
                                transition: 'transform 0.5s ease'
                            }}
                        >
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="customer-slider-inner">
                                    <div className="quote-logo-wrapper">
                                        <Image src={quoteIcon} alt="quote" />
                                    </div>
                                    <div className="testimonial-content">
                                        <div className="testimonial-logo-section">
                                            <div className="slider-logo-wrapper">
                                                <Image
                                                    src={testimonial.companyLogo}
                                                    alt="Company Logo"
                                                    width={120}
                                                    height={40}
                                                    className="slider-logo"
                                                />
                                            </div>
                                            <p className="slider-p sans-font">{testimonial.testimonialText}</p>
                                        </div>
                                        <div className="testimonial-profile-section">
                                            <div className="profile-main">
                                                <div className="profile-image-wrapper">
                                                    <Image
                                                        src={testimonial.profileImage}
                                                        alt={testimonial.customerName}
                                                        width={60}
                                                        height={60}
                                                        className="slider-profile"
                                                    />
                                                </div>
                                                <div className="profile-info">
                                                    <p className="slider-profile-name">{testimonial.customerName}</p>
                                                    <p className="slider-designation">{testimonial.designation}</p>
                                                </div>
                                            </div>
                                            <div className="star-main">
                                                <div className="star-ratings">
                                                    {renderStars(testimonial.rating)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="slider-buttons mob">
                        <button
                            id="prev-button-mob"
                            className="prev-button cust btn"
                            onClick={prevSlide}
                            aria-label="Previous testimonial"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button
                            id="next-button-mob"
                            className="next-button cust btn"
                            onClick={nextSlide}
                            aria-label="Next testimonial"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
