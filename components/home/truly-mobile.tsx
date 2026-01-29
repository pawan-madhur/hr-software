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
                                            <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.51121 5.5322L0.852175 0.140227C0.757751 0.0502141 0.632302 7.19833e-08 0.501849 7.3539e-08C0.371395 7.50946e-08 0.245947 0.0502141 0.151524 0.140227L0.145431 0.14632C0.0994968 0.189957 0.0629215 0.242481 0.0379276 0.3007C0.0129342 0.358918 4.48277e-05 0.421612 4.48285e-05 0.484968C4.48292e-05 0.548325 0.0129342 0.611019 0.0379276 0.669237C0.0629215 0.727455 0.0994969 0.77998 0.145431 0.823616L5.47445 5.9008L0.145431 10.976C0.099497 11.0196 0.0629217 11.0721 0.0379278 11.1303C0.0129343 11.1886 4.49569e-05 11.2513 4.49576e-05 11.3146C4.49584e-05 11.378 0.0129343 11.4407 0.0379278 11.4989C0.0629217 11.5571 0.099497 11.6096 0.145431 11.6533L0.151524 11.6593C0.245948 11.7494 0.371395 11.7996 0.501849 11.7996C0.632302 11.7996 0.757751 11.7494 0.852175 11.6593L6.51121 6.26738C6.56098 6.21996 6.6006 6.16293 6.62767 6.09974C6.65474 6.03655 6.6687 5.96853 6.6687 5.89979C6.6687 5.83105 6.65474 5.76302 6.62767 5.69983C6.6006 5.63665 6.56098 5.57962 6.51121 5.5322Z" fill="white"/>
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
