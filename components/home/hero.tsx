"use client";

import Image from "next/image";
import star from "@/public/images/star.png";
import heroDesktop from "@/public/images/hero-desktop.png";

type HeroProps = {
    onOpenPopup: () => void;
};

export default function Hero({ onOpenPopup }: HeroProps) {
    return (
        <>
            <section className="software_new_banner">
                <div className="container container_cus">
                    <div className="software_new_banner_main">
                        <div className="software_banner_left">
                            <div className="star_wrapper">
                                <Image src={star} alt="star" />
                                <span>India's #1 HR Software for Growing Enterprises</span>
                            </div>
                            <h1>Automate HR. Empower Employees. Simplify Work.</h1>
                            <p>Trusted by 2000+ companies and 350,000+ employees to manage Core HR, Payroll, Time, and Performance — now powered by One AI.</p>
                            <div>
                                <a
                                    href="#"
                                    className="sft_btn popnew"
                                    data-id=""
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onOpenPopup();
                                    }}
                                >
                                    Get Started Now
                                </a>
                                <a href="https://hrone.cloud/pricing/" className="sft_btn sft_btn1">See Pricing</a>
                            </div>
                        </div>
                        <div className="software_banner_right">
                            <Image className="desktop" src={heroDesktop} alt="hero-desktop" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}