"use client";

import { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQCategory {
    id: string;
    name: string;
    faqs: FAQItem[];
}

export default function Faqs() {
    const [activeTab, setActiveTab] = useState("hr-software");
    const [openAccordion, setOpenAccordion] = useState<number>(0);

    const faqCategories: FAQCategory[] = [
        {
            id: "hr-software",
            name: "About HR Software",
            faqs: [
                {
                    question: "What is HR Software?",
                    answer: "HR software is an end-to-end digital solution that automates HR processes (from onboarding to retirement), simplifies employee management and delivers actionable data to aid organisation's growth. It's a unified platform that offers different modules in one place – payroll software, attendance management software, employee engagement software, performance management software and many more."
                },
                {
                    question: "What is HR Software?",
                    answer: "An HR Software assists the Human Department of an organization by automating end to end HR processes from onboarding to retirement and keeping the employee data in order. With an efficient HR Solution, the administrative burden of HRs are reduced and their productivity is increased manifold with elimination of repetitive tasks."
                },
                {
                    question: "What is HR Software?",
                    answer: "There are numerous HR processes in an organization that consists of repetitive tasks and require record keeping of employees data in different stages of the Employee Life Cycle. When an HR manually performs these tasks, the time consumption goes higher."
                },
                {
                    question: "What is HR Software?",
                    answer: "Minimum features that an HR software must have – Centralized employee database, employee self-service, HR reporting, ease of use, payroll management, attendance & time management, and performance review management."
                }
            ]
        },
        {
            id: "hrone-software",
            name: "About HROne HR Software",
            faqs: [
                {
                    question: "Why Choose HROne HR Software?",
                    answer: "HROne is an intelligent enterprise ready HCM suite that's future ready with the first ever Mobile app that has Employee self service, Manager self service & HR Self Service. Our HR software commits to deliver 3X efficiency in the existing HR processes of your organization by truly automating each workflow, policy and HR tasks."
                },
                {
                    question: "How much do HR software packages cost?",
                    answer: "When we talk about HRMS software pricing in India, HROne comes off as a powerful, all-in-one and yet the most affordable and best HR software in India you can buy today. It is scalable enough to meet your growing company needs and hence a great fit for your Human resource software for small business and large enterprise requirements."
                },
                {
                    question: "What can I do using HROne Mobile App?",
                    answer: "HROne's interactive and agile mobile solution is designed to empower organisations & take user adoption to new heights. It's built on three key pillars – speed, efficiency & convenience, With HRone app, employees can stay connected to the organisation, anywhere and anytime."
                },
                {
                    question: "Will HROne HR software be able to grow and scale with the company?",
                    answer: "HRone lives by the 'You scale, we scale' motto. Our core engine provides immense flexibility to support your organisation's future expansion plans with easy configurations."
                }
            ]
        },
        {
            id: "hrms-software",
            name: "About HRMS Software",
            faqs: [
                {
                    question: "What is HRMS software?",
                    answer: "HRMS, short for human resources management system, is a complete package of modules or software applications integrated to manage end-to-end HR operations throughout the employee lifecycle. It is a comprehensive software that simultaneously streamlines core and strategic HR functions and combines them to form a single solution."
                },
                {
                    question: "What is the use of HRMS software?",
                    answer: "HRMS software is used to run multiple HR processes in harmony to ultimately improve HR efficiency. It facilitates safe and efficient management of employee data. The cloud based HRMS software enables an organization to manage its workforce efficiently through the use of information technology and stay compliant with the modifications in tax/labor laws and regulations."
                },
                {
                    question: "What are the different HRMS modules?",
                    answer: "Largely, there are 10 different HRMS software modules including: Core Human Resource, Recruitment Management Software, Attendance Management Software, Performance Management Software, Payroll Management Software, Expense Management Software, Workforce Management Software, Employee Engagement Software, Helpdesk Management Software, and Instant Chat Support."
                },
                {
                    question: "What are the advantages of HRMS system?",
                    answer: "Using online HRMS software is beneficial for businesses in several ways. It frees up time by automating HR tasks, puts important information at your fingertips, makes employee monitoring & development easier, and keeps your critical employee data secure."
                }
            ]
        }
    ];

    const activeCategory = faqCategories.find(cat => cat.id === activeTab) || faqCategories[0];

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
        setOpenAccordion(0);
    };

    const toggleAccordion = (index: number) => {
        setOpenAccordion(openAccordion === index ? -1 : index);
    };

    return (
        <section className="hr-faq-section">
            <div className="container">
                <div className="hr-faq-section-heading">
                    <h2>
                        <span className="faq-title-part1">Frequently</span>
                        <br />
                        <span className="faq-title-part2">Asked Questions</span>
                    </h2>
                    <div className="hr-faq-section-heading-buttons">
                        {faqCategories.map((category) => (
                            <button
                                key={category.id}
                                type="button"
                                className={`faq-tab ${activeTab === category.id ? "active" : ""}`}
                                onClick={() => handleTabClick(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="hr-accordion">
                    {activeCategory.faqs.map((faq, index) => (
                        <div key={index} className={`faq-accordion-item ${openAccordion === index ? "open" : ""}`}>
                            <button
                                type="button"
                                className={`faq-accordion-button ${openAccordion === index ? "open" : ""}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                <p>{faq.question}</p>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="faq-chevron"
                                >
                                    <path
                                        d="M6 9L12 15L18 9"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            <div
                                className={`faq-panel ${openAccordion === index ? "open" : ""}`}
                            >
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
