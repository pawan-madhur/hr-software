"use client";

import { useState } from "react";
import Image from "next/image";
import trulyMobileLogo from "@/public/images/truly-mobile-logo.png";
import arrowicon from "@/public/images/arrow-icon.png";
import mobileDevice from "@/public/images/mobile-device.png";

export default function TrulyMobile() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0); // First accordion open by default

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = [
        {
            title: "HR Teams",
            subtitle: "More than just approve leaves",
            items: ["Letters", "HR Posts", "Job openings", "Pulse Surveys", "Announcements"]
        },
        {
            title: "Employees",
            subtitle: "Stay connected & never aloof",
            items: ["Attendance Tracking", "Leave Management", "Employee Self Service", "Performance Management", "Employee Engagement"]
        },
        {
            title: "Managers",
            subtitle: "Do HR operations on the go!",
            items: ["Team Management", "Approvals", "Reports", "Analytics", "Team Insights"]
        }
    ];

    return (
        <div className="truly-mobile">
            <div className="container container_cus">
                <div className="truly-mobile-heading">
                    <div className="truly-mobile-heading-h2">
                        <h2>Go truly mobile with</h2>
                        <Image src={arrowicon} alt="Truly Mobile Logo" />
                        <Image src={trulyMobileLogo} alt="Truly Mobile Logo" />
                    </div>
                    <p>The Award Winning HROne Mobile App for the convenience of on-the-go HR services</p>
                </div>
                <div className="truly-mobile-accordion">
                    <div className="truly-mobile-accordion-mobimg">
                        <Image src={mobileDevice} alt="Mobile App Mockup" />
                    </div>
                    <div className="truly-mobile-accordion-sec">
                        {accordionData.map((item, index) => (
                            <div key={index} className="accordion-item-wrapper">
                                <button
                                    className={`accordion ${activeIndex === index ? 'active' : ''}`}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <div className="accordion-content">
                                        <p className="accordion-title">{item.title}</p>
                                        <p className="accordion-subtitle">{item.subtitle}</p>
                                    </div>
                                    <span className="accordion-chevron">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={{
                                                transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.3s ease'
                                            }}
                                        >
                                            <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </button>

                                <div
                                    className="panel"
                                    style={{ display: activeIndex === index ? 'block' : 'none' }}
                                >
                                    <ul>
                                        {item.items.map((listItem, itemIndex) => (
                                            <li key={itemIndex}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 18 18"
                                                    fill="none"
                                                >
                                                    <g id="corner-down-right">
                                                        <path
                                                            d="M11.25 7.5L15 11.25L11.25 15"
                                                            stroke="#A8C5BB"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M3 3V8.25C3 9.04565 3.31607 9.80871 3.87868 10.3713C4.44129 10.9339 5.20435 11.25 6 11.25H15"
                                                            stroke="#A8C5BB"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </g>
                                                </svg>

                                                {listItem}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}

                        <div className="explore-text">
                            <a href="https://hrone.cloud/mobile-app/" className="col-6 text-center">
                                <p>Explore More</p>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F9FFFE" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 16L16 12L12 8" stroke="#F9FFFE" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8 12H16" stroke="#F9FFFE" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
