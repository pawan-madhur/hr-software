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
                    answer: "HR software is an end-to-end digital solution that automates HR processes (from onboarding to retirement), simplifies employee management and delivers actionable data to aid organisation’s growth. It’s a unified platform that offers different modules in one place – payroll software, attendance management software, employee engagement software, performance management software and many more. Additionally, it enables employees and managers to perform better at work, store personal information, manage tasks and set goals. Meant for businesses of all sizes, the software is available on-premise or on-cloud. On-premise is usually installed on-site on computers and can only be used during office hours inside the office. On the other hand, cloud-based HRMS software can be accessed anywhere, anytime with an app and internet access on mobile, laptop, or desktop. Oftentimes, HR systems are also called Human Resource Management Systems (HRMS), Human Capital Management (HCM), and Human Resource Information Systems (HRIS)."
                },
                {
                    question: "What does HR Software do?",
                    answer: "HR software assists the HR department by automating end-to-end HR processes from onboarding to retirement and maintaining employee data. It reduces administrative workload and improves productivity by eliminating repetitive manual tasks."
                },
                {
                    question: "Why Choose HR Software to Improve Productivity?",
                    answer: "There are numerous HR processes involving repetitive tasks and record-keeping across the employee lifecycle. Manual execution consumes time and effort. For example, job postings and recruitment workflows can be handled easily through recruitment software. Payroll processing, which involves multiple spreadsheets and checks, can be streamlined using payroll software. Investing in HR software helps save time, reduce errors, and boost overall productivity."
                },
                {
                    question: "What are the minimum features required in HR software?",
                    answer: "Key features include a centralized employee database, employee self-service, HR reporting, ease of use, payroll management, attendance & time tracking, and performance review management."
                },
                {
                    question: "How should I evaluate and choose the right HR software?",
                    answer: "Start by defining your requirements, budget, and business goals. While choosing, consider user-friendliness, data privacy & security, remote accessibility, cloud support, and customization options."
                },
                {
                    question: "What is the best HR software in India?",
                    answer: "Over 500+ leading brands in India trust HROne to manage their workforce. Recognized as an agile end-to-end HRMS suite, it helps businesses become future-ready by strengthening the connection between people and technology."
                },
                {
                    question: "I run a small business. Do I require HR software?",
                    answer: "Small businesses often have a single HR handling hiring, payroll, attendance, and record-keeping. HR software reduces workload, brings structure to workflows, and helps manage talent efficiently with minimal monthly investment."
                }

            ]
        },
        {
            id: "hrone-software",
            name: "About HROne HR Software",
            faqs: [
                {
                    question: "Choose HROne HR Software?",
                    answer: "HROne is an intelligent enterprise ready HCM suite that’s future ready with the first ever Mobile app that has Employee self service, Manager self service & HR Self Service. Our HR software commits to deliver 3X efficiency in the existing HR processes of your organization by truly automating each workflow, policy and HR tasks. Our innovative #InboxForHR allows the HRs to perform all HR functions in real time and not switch to different modules tab to view and complete tasks. Apart from 10 full fledged modules, we have unique innovations like HR Desk to perform google like action based searches, Template Vault (100s of free & vetted templates, checklists), Touchless Payroll, HR Reports Scheduler etc. to take your HR functions to the next level and craft the best experience for your employees."
                },
                {
                    question: "How much do HR software packages cost ?",
                    answer: "When we talk about HRMS software pricing in India, HROne comes off as a powerful, all-in-one and yet the most affordable and best HR software in India you can buy today. It is scalable enough to meet your growing company needs and hence a great fit for your Human resource software for small business and large enterprise requirements. HROne keeps it HR software pricing in la carte system. You pay for only what you use. Customers can additionally opt for powerful add-ons, HROne mobile app being one of them"
                },
                {
                    question: "What can I do using HROne Mobile App?",
                    answer: "HROne’s interactive and agile mobile solution is designed to empower organisations & take user adoption to new heights. It’s built on three key pillars – speed, efficiency & convenience, With HRone app, employees can stay connected to the organisation, anywhere and anytime, It’s integrated modules cater to every strategic and functional aspect of human resource management that can morph the entire game for your HR Tech. Find out how you can reduce efforts, increase productivity, and discover time for great things by accessing all the functionalities of our web application on HROne mobile app."
                },
                {
                    question: "Will HROne HR software be able to grow and scale with the company?",
                    answer: "HRone lives by the ‘You scale, we scale’ motto. Our core engine provides immense flexibility to support your organisation’s future expansion plans with easy configurations."
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
                    answer: "HRMS software is used to run multiple HR processes in harmony to ultimately improve HR efficiency. It facilitates safe and efficient management of employee data. The cloud based HRMS software enables an organization to manage its workforce efficiently through the use of information technology and stay compliant with the modifications in tax/labor laws and regulations. If you are looking for top HRMS software in India, we suggest you first access the HRMS software features that are totally non negotiable for you."
                },
                {
                    question: "What are the different HRMS modules?",
                    answer: "Largely, there are 10 different HRMS software modules including: Core Human Resource, Recruitment Management Software, Attendance Management Software, Performance Management Software, Payroll Management Software, Expense Management Software, Workforce Management Software, Employee Engagement Software, Helpdesk Management Software, Instant Chat Support"
                },
                {
                    question: "What are the advantages of HRMS system?",
                    answer: "Using online HRMS software is beneficial for businesses in several ways. It frees up time by automating HR tasks, puts important information at your fingertips, makes employee monitoring & development easier, and keeps your critical employee data secure. Using an HRMS software helps improve employee productivity, performance, and engagement, and process HR activities faster, thereby enhancing overall business efficiency."
                },
                {
                    question: "How does HRMS software function?",
                    answer: "HRMS software is a unified platform that runs on the basic need of managing and automating all the routine HR processes. To keep the HR activities in synchronization, the software seamlessly integrates all HR management software modules together as well as with external platforms. It works by increasing efficiency of a variety of functions from ‘hire to retire’ including organizing employee details along with organizational information, making it easily accessible to the users."
                },
                {
                    question: "How flexible and scalable an HR management system can be?",
                    answer: "The best HRMS software in India are highly flexible and scalable. Meaning, these human resource management software systems will cater to the needs of every business, no matter the size, industry or complexity. HRMS software can be scaled as per the use of startup companies having as less as 50 employees to large enterprises with as big as 5000 employee headcount. HRMS systems also give companies the flexibility to begin with only core modules and then add more modules with the increasing requirements as they grow."
                },
                {
                    question: "How to find the best HRMS software for SMEs?",
                    answer: "HR software in India has acquired visibility and has been labeled as the dark horse of all small businesses. As a result, a lot of investments and acquisitions have been taking place, and it’s interesting to note that small HR tech companies have been providing cutting-edge technology infused with cloud computing that big names of the industry are struggling to deliver to their users. But, how to find HRMS software to cater to most of your business needs. Let us provide you with a checklist of features you must refer to before finalizing HRMS software for your business: Integrates various modules for the smooth recruitment process, employee onboarding, attendance tracking, payroll management, employee engagement, and much more Simple and interactive user interface for delivering B2C experience with cloud-based application Automate and optimize the flow of work across organizations, be it HRs, CXOs, or employees Mobile-friendly application to give access to teams and execute day to day HR functions from any time, anywhere using iOS or Android OS Create actionable insights for making better decisions and strategizing as per priorities Built-in features to import bulk data across the system rather than entering them manually into the system Scalable platform suited for small to large enterprises with any number of employees Minimal learning curve for easy and quick adaptability of software Implementation time must be tried, tested, and minimal considering  the size of the organization Product training course to empower all your employees and easy configuration of software Based on the above checklist, you can finalize your cloud-based HRMS software and implement it to perform HR functions effectively."
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
