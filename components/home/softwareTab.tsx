"use client";

import { useState } from "react";

export default function SimplerWorkdays() {
    const [activeTab, setActiveTab] = useState(0);
    const [openIndex, setOpenIndex] = useState(0); // first one open by default

    const toggleFAQ = (index: any) => {
        setOpenIndex(index === openIndex ? null : index);
    };
    return (
        <section className="simpler-workdays">
            <div className="container">
                {/* Heading */}
                <div className="simpler-workdays-heading">
                    <h2>HROne HRMS to make your workdays simpler<br /><span>and offer time to focus on your people</span></h2>
                    <p>For customised&nbsp;automation, simplified interactions and actionable insights- all power packed in one!</p>
                </div>

                {/* Accordion Main */}
                <div className="simpler-workdays-acc">
                    {/* LEFT TABS */}
                    <div className="simpler-workdays-acc-left">
                        <div className={`sec-heading ${activeTab === 0 ? "active" : ""}`} onClick={() => setActiveTab(0)}>
                            <img src="https://hrone.cloud/wp-content/uploads/2023/07/core-hr.svg" alt="core hr icon" />
                            <h3>Core HR</h3>
                        </div>

                        <div className={`sec-heading ${activeTab === 1 ? "active" : ""}`} onClick={() => setActiveTab(1)}>
                            <img src="https://hrone.cloud/wp-content/uploads/2023/07/recruitment.svg" alt="Recruitment icon" />
                            <h3>Recruitment</h3>
                        </div>
                        <div className={`sec-heading ${activeTab === 2 ? "active" : ""}`} onClick={() => setActiveTab(2)}>
                            <img src="https://hrone.cloud/wp-content/uploads/2023/06/Isolation_Mode-11.svg" alt="isolation icon" />
                            <h3>Workforce</h3>
                        </div>
                        <div className={`sec-heading ${activeTab === 3 ? "active" : ""}`} onClick={() => setActiveTab(3)}>
                            <img src="https://hrone.cloud/wp-content/uploads/2023/07/time-office.svg" alt="Time Office icon" />
                            <h3>Attendance</h3>
                        </div>
                        <div className={`sec-heading ${activeTab === 4 ? "active" : ""}`} onClick={() => setActiveTab(4)}>
                            <img src="https://hrone.cloud/wp-content/uploads/2023/07/payroll.svg" alt="payroll icon" />
                            <h3>Payroll Management</h3>
                        </div>
                        <div className={`sec-heading ${activeTab === 5 ? "active" : ""}`} onClick={() => setActiveTab(5)}>
                            <img src="https://hrone.cloud/wp-content/uploads/2023/07/expenses.svg" alt="expense management icon" />
                            <h3>Expense</h3>
                        </div>
                        <div className={`sec-heading ${activeTab === 6 ? "active" : ""}`} onClick={() => setActiveTab(6)}>
                            <img src="https://hrone.cloud/wp-content/uploads/2023/07/performance.svg" alt="Performance management icon" />
                            <h3>Performance</h3>
                        </div>
                        <div className={`sec-heading ${activeTab === 7 ? "active" : ""}`} onClick={() => setActiveTab(7)}>
                            <img src="https://hrone.cloud/wp-content/uploads/2023/07/employee-engagement.svg" alt="employee-engagement" />
                            <h3>Engagement</h3>
                        </div>
                        <div className={`sec-heading ${activeTab === 8 ? "active" : ""}`} onClick={() => setActiveTab(8)}>
                            <img src="https://hrone.cloud/wp-content/uploads/2023/06/Asset.svg" alt="asset" />
                            <h3>Asset</h3>
                        </div>
                        <div className={`sec-heading ${activeTab === 9 ? "active" : ""}`} onClick={() => setActiveTab(9)}>
                            <img src="https://hrone.cloud/wp-content/uploads/2023/07/helpdesk.svg" alt="helpdesk icon" />
                            <h3>Helpdesk</h3>
                        </div>

                    </div>
                    {/* RIGHT CONTENT */}
                    <div className="simpler-workdays-acc-right">
                        {/* TAB 1 */}
                        <div className={`right-content ${activeTab === 0 ? "active" : ""}`}>
                            <div className="sec-heading">
                                <img
                                    src="https://hrone.cloud/wp-content/uploads/2023/07/core-hr.svg"
                                    alt="core hr icon"
                                />
                                <h3>Core HR</h3>
                            </div>

                            <div className="left-extra-content">
                                <h6 className="content-h6">
                                    Get the freedom to configure the software like your own
                                </h6>

                                <ul>
                                    <li>
                                        Easily configure policies at department, business unit and enterprise
                                        levels
                                    </li>
                                    <li>
                                        Customize workflows for all HR processes, regardless of organizational
                                        hierarchy
                                    </li>
                                    <li>
                                        Ensure data privacy by managing access rights at 3 levels
                                    </li>
                                    <li>
                                        Create &amp; upload <a href="/hr-policies/">HR policies</a> in HR handbook
                                    </li>
                                </ul>
                            </div>

                            <div className="right-extra-content">
                                <div className="content-left">
                                    {/* Keeping structure same (even nested UL) */}
                                    <ul>
                                        <ul>
                                            <li>Global Search</li>
                                            <li>Employee Directory</li>
                                            <li>Customised Workflows</li>
                                            <li>3 Tier Permissions</li>
                                        </ul>
                                    </ul>

                                    <div className="explore-text">
                                        <a
                                            href="https://hrone.cloud/hcm-software/"
                                            className="col-6 text-center"
                                        >
                                            <p>Explore More</p>

                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="arrow-right-circle">
                                                    <path
                                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                        stroke="#00553C"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M12 16L16 12L12 8"
                                                        stroke="#00553C"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M8 12H16"
                                                        stroke="#00553C"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </g>
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                <div className="content-right">
                                    <img
                                        src="https://hrone.cloud/wp-content/uploads/2023/07/core-hr-1.png"
                                        alt=""
                                    />
                                </div>
                            </div>

                        </div>
                        {/* TAB 2 */}
                        <div className={`right-content ${activeTab === 1 ? "active" : ""}`}>
                            <div className="sec-heading">
                                <img
                                    src="https://hrone.cloud/wp-content/uploads/2023/07/recruitment.svg"
                                    alt="Recruitment icon"
                                    width={40}
                                    height={40}
                                />
                                <h3>Recruitment</h3>
                            </div>

                            <div className="left-extra-content">
                                <h6 className="content-h6">Onboard good quality hires fastly</h6>
                                <ul>
                                    <li>Create job opening on web or mobile</li>
                                    <li>Smart candidate sourcing and interview planning</li>
                                    <li>Release offer letter using predefined templates or custom ones</li>
                                    <li>
                                        Engage potential hires with{" "}
                                        <a href="https://hrone.cloud/recruitment-management-software/">
                                            recruitment management software
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="right-extra-content">
                                <div className="content-left">
                                    <ul>
                                        <li>Candidate Sourcing</li>
                                        <li>Interview Scheduling</li>
                                        <li>Background Verification</li>
                                        <li>Create and Send Letters</li>
                                    </ul>

                                    <div className="explore-text">
                                        <a
                                            href="https://hrone.cloud/recruitment-management-software"
                                            className="col-6 text-center"
                                        >
                                            <p>Explore More</p>
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                    stroke="#00553C"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M12 16L16 12L12 8"
                                                    stroke="#00553C"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M8 12H16"
                                                    stroke="#00553C"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                <div className="content-right">
                                    <img
                                        src="https://hrone.cloud/wp-content/uploads/2023/07/recruitement-1.png"
                                        alt="Recruitment preview"
                                        width={500}
                                        height={400}
                                    />
                                </div>
                            </div>

                        </div>
                        {/* TAB 3 */}
                        <div className={`right-content ${activeTab === 2 ? "active" : ""}`}>
                            <div className="sec-heading">
                                <img
                                    src="https://hrone.cloud/wp-content/uploads/2023/06/Isolation_Mode-11.svg"
                                    alt="Workforce Management icon"
                                />
                                <h3>Workforce</h3>
                            </div>

                            <div className="left-extra-content">
                                <h6 className="content-h6">
                                    Manage employee life cycle from onboarding to F&amp;F settlement
                                </h6>
                                <ul>
                                    <li>
                                        Auto-initiate of tasks such as employee confirmation, letter generation
                                    </li>
                                    <li>Single click F&amp;F settlement for smooth offboarding processes</li>
                                    <li>Designate task owners assigned based on pre-defined life cycle dates</li>
                                    <li>
                                        Utilize{" "}
                                        <a href="https://hrone.cloud/workforce-management-software/">
                                            workforce management software
                                        </a>{" "}
                                        for streamlined task management
                                    </li>
                                </ul>
                            </div>

                            <div className="right-extra-content">
                                <div className="content-left">
                                    <ul>
                                        <li>eKYC (Employee, New Joinee)</li>
                                        <li>Employee movement dashboard</li>
                                        <li>HR Ops for process efficiency</li>
                                        <li>Letter generation from templates</li>
                                    </ul>

                                    <div className="explore-text">
                                        <a
                                            href="https://hrone.cloud/workforce-management-software/"
                                            className="col-6 text-center"
                                        >
                                            <p>Explore More</p>
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="arrow-right-circle">
                                                    <path
                                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                        stroke="#00553C"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M12 16L16 12L12 8"
                                                        stroke="#00553C"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M8 12H16"
                                                        stroke="#00553C"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </g>
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                <div className="content-right">
                                    <img
                                        src="https://hrone.cloud/wp-content/uploads/2023/07/workforce-3.png"
                                        alt="Workforce preview"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* TAB 4 */}
                        <div className={`right-content ${activeTab === 3 ? "active" : ""}`}>
                            <div className="sec-heading">
                                <img src="https://hrone.cloud/wp-content/uploads/2023/07/time-office.svg" alt="Time Office icon" />
                                <h3>Attendance</h3>
                            </div>
                            <div className="left-extra-content">
                                <h6 className="content-h6">Real-time attendance &amp; 100% policy adherence made possible</h6>
                                <ul>
                                    <li>Automatic calculation of paydays</li>
                                    <li>Pre-schedule monthly attendance processing</li>
                                    <li>GPS based attendance tracking for onsite employees</li>
                                    <li>End-to-end <a href="https://hrone.cloud/attendance-management-system/">attendance management system</a></li>
                                </ul>
                            </div>

                            <div className="right-extra-content">
                                <div className="content-left">
                                    <ul>
                                        <ul>
                                            <li>Geo Attendance</li>
                                            <li>Biometric Integration</li>
                                            <li>Bulk approval of leaves</li>
                                            <li>Shift Rotation Policies</li>
                                        </ul>
                                    </ul>
                                    <div className="explore-text">
                                        <a href="https://hrone.cloud/attendance-management-system/" className="col-6 text-center">
                                            <p>Explore More</p>
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="arrow-right-circle">
                                                    <path
                                                        id="Vector"
                                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                        stroke="#00553C"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        id="Vector_2"
                                                        d="M12 16L16 12L12 8"
                                                        stroke="#00553C"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        id="Vector_3"
                                                        d="M8 12H16"
                                                        stroke="#00553C"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </g>
                                            </svg>


                                        </a>
                                    </div>
                                </div >
                                <div className="content-right" >
                                    <img src="https://hrone.cloud/wp-content/uploads/2023/07/attendance-4.png" alt="" />
                                </div >
                            </div >
                        </div >
                        {/* TAB 5 */}
                        <div className={`right-content ${activeTab === 4 ? "active" : ""}`}>
                            <div className="sec-heading">
                                <img src="https://hrone.cloud/wp-content/uploads/2023/07/payroll.svg" alt="payroll icon" />
                                <h3>Payroll Management</h3>
                            </div>
                            <div className="left-extra-content">
                                <h6 className="content-h6">Error-free &amp; compliant payroll processing, every time</h6>
                                <ul>
                                    <li>No more waiting! Automatic salary processing</li>
                                    <li>Receive salary reconciliation report in mailbox</li>
                                    <li>Publish salary slips to employees with a single click</li>
                                    <li>Cloud-based <a href="https://hrone.cloud/payroll-software/">payroll management software</a></li>
                                </ul>
                            </div>

                            <div className="right-extra-content">
                                <div className="content-left">
                                    <ul>
                                        <ul>
                                            <li>Password protected Pay slips</li>
                                            <li>Auto payroll scheduler</li>
                                            <li>CTC Calculator</li>
                                            <li>Challans in govt. prescribed formats</li>
                                        </ul>
                                    </ul>
                                    <div className="explore-text">
                                        <a href="https://hrone.cloud/payroll-software/" className="col-6 text-center">
                                            <p>Explore More</p>
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="arrow-right-circle">
                                                    <path
                                                        id="Vector"
                                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                        stroke="#00553C"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        id="Vector_2"
                                                        d="M12 16L16 12L12 8"
                                                        stroke="#00553C"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        id="Vector_3"
                                                        d="M8 12H16"
                                                        stroke="#00553C"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </g>
                                            </svg>


                                        </a>
                                    </div>
                                </div>
                                <div className="content-right">
                                    <img src="https://hrone.cloud/wp-content/uploads/2023/07/payroll-2.png" alt="" />
                                </div>
                                {/* TAB 6 */}
                                < div className={`right-content ${activeTab === 5 ? "active" : ""}`}>

                                </div >
                                {/* TAB 7 */}
                                < div className={`right-content ${activeTab === 6 ? "active" : ""}`}>

                                </div >
                                {/* TAB 8 */}
                                < div className={`right-content ${activeTab === 7 ? "active" : ""}`}>

                                </div >
                                {/* TAB 9 */}
                                < div className={`right-content ${activeTab === 8 ? "active" : ""}`}>

                                </div >
                                {/* TAB 10 */}
                                < div className={`right-content ${activeTab === 9 ? "active" : ""}`}>

                                </div >
                            </div >
                        </div >
                        {/* TAB 6 */}
                        < div className={`right-content ${activeTab === 5 ? "active" : ""}`}>
                            <div className="sec-heading">
                                <img src="https://hrone.cloud/wp-content/uploads/2023/07/expenses.svg" alt="expense management icon" />
                                <h3>Expense</h3>
                            </div>
                            <div className="left-extra-content">
                                <h6 className="content-h6">Manage employee expenses in real-time</h6>
                                <ul>
                                    <li>Auto adjust advance payouts for all reimbursements</li>
                                    <li>Comfort to employees for updating expenses on the go</li>
                                    <li>Configure expense related policies as per organisational needs</li>
                                    <li>Effortless expense-related fraud management with <a href="https://hrone.cloud/expense-management-software/">expense management software</a></li>
                                </ul>
                            </div>

                            <div className="right-extra-content">
                                <div className="content-left">
                                    <ul>
                                        <ul>
                                            <li>Multiple Expense Policies</li>
                                            <li>Advance &amp; Exceptional Payouts</li>
                                            <li>Fraud Management</li>
                                            <li>Mobile app to upload expenses</li>
                                        </ul>
                                    </ul>
                                    <div className="explore-text">
                                        <a href="https://hrone.cloud/expense-management-software/" className="col-6 text-center">
                                            <p>Explore More</p>
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="arrow-right-circle">
                                                    <path
                                                        id="Vector"
                                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                        stroke="#00553C"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        id="Vector_2"
                                                        d="M12 16L16 12L12 8"
                                                        stroke="#00553C"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        id="Vector_3"
                                                        d="M8 12H16"
                                                        stroke="#00553C"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </g>
                                            </svg>


                                        </a>
                                    </div>
                                </div>
                                <div className="content-right">
                                    <img src="https://hrone.cloud/wp-content/uploads/2023/07/expense-1.png" alt="" />
                                </div>
                            </div>
                        </div >
                        {/* TAB 7 */}
                        < div className={`right-content ${activeTab === 6 ? "active" : ""}`}>
                            <div className="sec-heading">
                                <img src="https://hrone.cloud/wp-content/uploads/2023/07/performance.svg" alt="Performance management icon" />
                                <h3>Performance</h3>
                            </div>
                            <div className="left-extra-content">
                                <h6 className="content-h6">Achieve organizational goals with real-time feedback</h6>
                                <ul>
                                    <li>Create, change or update KRAs and KPIs anytime</li>
                                    <li>Track employee performance in 1-on-1 meetings</li>
                                    <li>Share regular feedback on employee initiatives</li>
                                    <li>Utilize <a href="https://hrone.cloud/performance-management-software/">performance management software</a> for fair review</li>
                                </ul>
                            </div>

                            <div className="right-extra-content">
                                <div className="content-left">
                                    <ul>
                                        <ul>
                                            <li>Smart OKR Mapping</li>
                                            <li>Transparent performance reviews</li>
                                            <li>360 Degree Feedback</li>
                                            <li>Increment based on review</li>
                                        </ul>
                                    </ul>
                                    <div className="explore-text">
                                        <a href="https://hrone.cloud/performance-management-software/" className="col-6 text-center">
                                            <p>Explore More</p>
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="arrow-right-circle">
                                                    <path
                                                        id="Vector"
                                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                        stroke="#00553C"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        id="Vector_2"
                                                        d="M12 16L16 12L12 8"
                                                        stroke="#00553C"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        id="Vector_3"
                                                        d="M8 12H16"
                                                        stroke="#00553C"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </g>
                                            </svg>


                                        </a>
                                    </div>
                                </div>
                                <div className="content-right">
                                    <img src="https://hrone.cloud/wp-content/uploads/2023/07/performance-4.png" alt="" />
                                </div>
                            </div>
                        </div >
                        {/* TAB 8 */}
                        < div className={`right-content ${activeTab === 7 ? "active" : ""}`}>
                            <div className="sec-heading">
                                <img src="https://hrone.cloud/wp-content/uploads/2023/07/employee-engagement.svg" alt="" />
                                <h3>Engagement</h3>
                            </div>
                            <div className="left-extra-content">
                                <h6 className="content-h6">Boost employee morale with instant appreciation &amp; reward points</h6>
                                <ul>
                                    <li>Understand employees’ pulse with customized surveys</li>
                                    <li>Nurtue culture of appreciation with virtual badges</li>
                                    <li>Make collegues’ recognition a routine with reward points</li>
                                    <li>Improve employee retention using <a href="https://hrone.cloud/employee-engagement-software/">employee engagement software</a></li>
                                </ul>
                            </div>

                            <div className="right-extra-content">
                                <div className="content-left">
                                    <ul>
                                        <ul>
                                            <li>HR Handbook</li>
                                            <li>HR Announcements</li>
                                            <li>Mood bot</li>
                                            <li>Badges &amp; Reward Points</li>
                                        </ul>
                                    </ul>
                                    <div className="explore-text">
                                        <a href="https://hrone.cloud/employee-engagement-software/" className="col-6 text-center">
                                            <p>Explore More</p>
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="arrow-right-circle">
                                                    <path
                                                        id="Vector"
                                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                        stroke="#00553C"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        id="Vector_2"
                                                        d="M12 16L16 12L12 8"
                                                        stroke="#00553C"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        id="Vector_3"
                                                        d="M8 12H16"
                                                        stroke="#00553C"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </g>
                                            </svg>


                                        </a>
                                    </div>
                                </div>
                                <div className="content-right">
                                    <img src="https://hrone.cloud/wp-content/uploads/2023/07/engagement-1.png" alt="" />
                                </div>
                            </div>
                        </div >
                        {/* TAB 9 */}
                        < div className={`right-content ${activeTab === 8 ? "active" : ""}`}>
                            <div className="sec-heading">
                                <img src="https://hrone.cloud/wp-content/uploads/2023/06/Asset.svg" alt="" />
                                <h3>Asset</h3>
                            </div>
                            <div className="left-extra-content">
                                <h6 className="content-h6">Keep an active watch on your company assets</h6>
                                <ul>
                                    <li>Create asset types and subtypes entries</li>
                                    <li>Assign assets permanently or temporarily based on request</li>
                                    <li>Update invoice details and sync onboarding/offboarding checklist</li>
                                    <li>Access activity log for each asset with our <a href="https://hrone.cloud/asset-management-software/">asset management software</a></li>
                                </ul>
                            </div>

                            <div className="right-extra-content">
                                <div className="content-left">
                                    <ul>
                                        <ul>
                                            <li>Manage Asset Allocation</li>
                                            <li>Temporary Asset Assignment</li>
                                            <li>Vendor Management</li>
                                            <li>Bulk Hardware Inventory Import</li>
                                        </ul>
                                    </ul>
                                    <div className="explore-text">
                                        <a href="https://hrone.cloud/asset-management-software/" className="col-6 text-center">
                                            <p>Explore More</p>
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="arrow-right-circle">
                                                    <path
                                                        id="Vector"
                                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                        stroke="#00553C"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        id="Vector_2"
                                                        d="M12 16L16 12L12 8"
                                                        stroke="#00553C"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        id="Vector_3"
                                                        d="M8 12H16"
                                                        stroke="#00553C"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </g>
                                            </svg>


                                        </a>
                                    </div>
                                </div>
                                <div className="content-right">
                                    <img src="https://hrone.cloud/wp-content/uploads/2023/07/asset-2.png" alt="" />
                                </div>
                            </div>
                        </div >
                        {/* TAB 10 */}
                        < div className={`right-content ${activeTab === 9 ? "active" : ""}`}>
                            <div className="sec-heading">
                                <img src="https://hrone.cloud/wp-content/uploads/2023/07/helpdesk.svg" alt="helpdesk icon" />
                                <h3>Helpdesk</h3>
                            </div>
                            <div className="left-extra-content">
                                <h6 className="content-h6">Conversational ticketing system that gets work done</h6>
                                <ul>
                                    <li>Improved ticket response time and quality</li>
                                    <li>Creation of unlimited ticket categories</li>
                                    <li>Rate agents for performance evaluation</li>
                                    <li>Get insights of 12-month trend with helpdesk module</li>
                                </ul>
                            </div>

                            <div className="right-extra-content">
                                <div className="content-left">
                                    <ul>
                                        <ul>
                                            <li>Chat with resolver</li>
                                            <li>Open and closed tickets’ notification</li>
                                            <li>Escalation Matrix</li>
                                            <li>Auto Assign Tickets</li>
                                        </ul>
                                    </ul>
                                    <div className="explore-text">
                                        <a href="https://hrone.cloud/helpdesk-management-software/" className="col-6 text-center">
                                            <p>Explore More</p>
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="arrow-right-circle">
                                                    <path
                                                        id="Vector"
                                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                        stroke="#00553C"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        id="Vector_2"
                                                        d="M12 16L16 12L12 8"
                                                        stroke="#00553C"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        id="Vector_3"
                                                        d="M8 12H16"
                                                        stroke="#00553C"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </g>
                                            </svg>


                                        </a>
                                    </div>
                                </div>
                                <div className="content-right">
                                    <img src="https://hrone.cloud/wp-content/uploads/2023/07/helpdesk-1.png" alt="" />
                                </div>
                            </div>
                        </div >
                    </div>
                </div >
                {/* FAQ 1*/}
                < div className={`simpler-workdays-faq ${activeTab === 0 ? "active" : ""}`}>
                    <div className="faq-hr">
                        <h4>Quick FAQ:</h4>
                        <div className="faq-start">
                            {/* FAQ 1 */}
                            <button
                                className={`hr-faq-accordion ${openIndex === 0 ? "open" : ""}`}
                                onClick={() => toggleFAQ(0)}
                            >
                                <p>Can I define the organizational structure based on our company's hierarchy?</p>
                            </button>

                            <div
                                className="hr-faq-panel"
                                style={{ display: openIndex === 0 ? "block" : "none" }}
                            >
                                <p>
                                    Yes, of course you can create organisation structure as per your
                                    organisation needs. Besides, you can create as many business units as
                                    possible, departments and sub-departments you have in your organisation.
                                </p>
                            </div>

                            {/* FAQ 2 */}
                            <button
                                className={`hr-faq-accordion ${openIndex === 1 ? "open" : ""}`}
                                onClick={() => toggleFAQ(1)}
                            >
                                <p>Is it possible to create custom workflows to streamline HR processes?</p>
                            </button>

                            <div
                                className="hr-faq-panel"
                                style={{ display: openIndex === 1 ? "block" : "none" }}
                            >
                                <p>
                                    Yes, you can create custom workflows as per your convenience for
                                    different inbox tasks as well as keep more than one approver for a
                                    particular task.
                                </p>
                            </div>

                            {/* FAQ 3 */}
                            <button
                                className={`hr-faq-accordion ${openIndex === 2 ? "open" : ""}`}
                                onClick={() => toggleFAQ(2)}
                            >
                                <p>Can I upload and maintain HR policies and procedures within HROne&apos;s HR handbook?</p>
                            </button>

                            <div
                                className="hr-faq-panel"
                                style={{ display: openIndex === 2 ? "block" : "none" }}
                            >
                                <p>
                                    Yes, you can create different sets of policies and processes in HROne
                                    handbook that you maintain or follow in your organisation. You can even
                                    collect acknowledgement from all your employees and track the record as
                                    well.
                                </p>
                            </div>
                        </div>
                    </div>
                </div >
                {/* FAQ 2*/}
                < div className={`simpler-workdays-faq ${activeTab === 1 ? "active" : ""}`}>
                    <div className="faq-hr">
                        <h4>Quick FAQ:</h4>

                        <div className="faq-start">
                            {/* Q1 */}
                            <button
                                className={`hr-faq-accordion ${openIndex === 0 ? "open" : ""}`}
                                onClick={() => toggleFAQ(0)}
                            >
                                <p>Q.1. How can HROne help in onboarding good quality hires quickly?</p>
                            </button>

                            <div
                                className="hr-faq-panel"
                                style={{ display: openIndex === 0 ? "block" : "none" }}
                            >
                                <p>
                                    A. HROne’s recruitment management software streamlines the hiring
                                    process, allowing you to create job openings, delegate them to
                                    recruiters or consultants, source candidates efficiently, plan
                                    structured interviews smartly, and release offer letters—enabling
                                    the onboarding of high-quality hires in a shorter timeframe.
                                </p>
                            </div>

                            {/* Q2 */}
                            <button
                                className={`hr-faq-accordion ${openIndex === 1 ? "open" : ""}`}
                                onClick={() => toggleFAQ(1)}
                            >
                                <p>Q.2. Can I schedule interviews efficiently using HROne?</p>
                            </button>

                            <div
                                className="hr-faq-panel"
                                style={{ display: openIndex === 1 ? "block" : "none" }}
                            >
                                <p>
                                    A. Yes, HROne enables recruiters and hiring managers to schedule
                                    interviews, ensuring smooth coordination and communication between
                                    the relevant hiring managers and candidates involved in the hiring
                                    process.
                                </p>
                            </div>

                            {/* Q3 */}
                            <button
                                className={`hr-faq-accordion ${openIndex === 2 ? "open" : ""}`}
                                onClick={() => toggleFAQ(2)}
                            >
                                <p>
                                    Q.3. Is there a mobile app available for recruitment management in
                                    HROne?
                                </p>
                            </button>

                            <div
                                className="hr-faq-panel"
                                style={{ display: openIndex === 2 ? "block" : "none" }}
                            >
                                <p>
                                    A. Yes, HROne provides a mobile app that allows recruiters,
                                    consultants, and hiring managers to access and manage the recruitment
                                    process on the go, ensuring convenience and flexibility in candidate
                                    management.
                                </p>
                            </div>
                        </div>
                    </div>
                </div >
                {/* FAQ 3*/}
                < div className={`simpler-workdays-faq ${activeTab === 2 ? "active" : ""}`}>
                    <div className="faq-hr">
                        <h4>Quick FAQ:</h4>

                        <div className="faq-start">
                            {/* Q1 */}
                            <button
                                className={`hr-faq-accordion ${openIndex === 0 ? "open" : ""}`}
                                onClick={() => toggleFAQ(0)}
                            >
                                <p>How can I add a new employee to the HRMS system?</p>
                            </button>

                            <div
                                className="hr-faq-panel"
                                style={{ display: openIndex === 0 ? "block" : "none" }}
                            >
                                <p>
                                    To add a new employee, navigate to the “Employee Onboarding” section,
                                    click on “Add Employee,” and fill in the relevant details.
                                </p>
                            </div>

                            {/* Q2 */}
                            <button
                                className={`hr-faq-accordion ${openIndex === 1 ? "open" : ""}`}
                                onClick={() => toggleFAQ(1)}
                            >
                                <p>Can I track the progress of an employee's onboarding process?</p>
                            </button>

                            <div
                                className="hr-faq-panel"
                                style={{ display: openIndex === 1 ? "block" : "none" }}
                            >
                                <p>
                                    Yes, you can easily track an employee’s onboarding progress after
                                    viewing their profile and review the checklist of tasks with their due
                                    time.
                                </p>
                            </div>

                            {/* Q3 */}
                            <button
                                className={`hr-faq-accordion ${openIndex === 2 ? "open" : ""}`}
                                onClick={() => toggleFAQ(2)}
                            >
                                <p>What steps are involved in offboarding an employee from the HRMS system?</p>
                            </button>

                            <div
                                className="hr-faq-panel"
                                style={{ display: openIndex === 2 ? "block" : "none" }}
                            >
                                <p>
                                    When an employee offboards, it includes updating the exit date,
                                    conducting an exit interview, and initiating the necessary process
                                    for F&amp;F settlements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div >
                {/* FAQ 4*/}
                < div className={`simpler-workdays-faq ${activeTab === 3 ? "active" : ""}`}>
                    <div className="faq-hr">
                        <h4>Quick FAQ:</h4>

                        <div className="faq-start">
                            {/* Q1 */}
                            <button
                                className={`hr-faq-accordion ${openIndex === 0 ? "open" : ""}`}
                                onClick={() => toggleFAQ(0)}
                            >
                                <p>How does the attendance management system in HROne ensure real-time attendance tracking?</p>
                            </button>

                            <div
                                className="hr-faq-panel"
                                style={{ display: openIndex === 0 ? "block" : "none" }}
                            >
                                <p>
                                    HROne’s attendance management system allows employees to mark their attendance, either through web, biometric, or mobile app, ensuring accurate and real-time attendance data.
                                </p>
                            </div>

                            {/* Q2 */}
                            <button
                                className={`hr-faq-accordion ${openIndex === 1 ? "open" : ""}`}
                                onClick={() => toggleFAQ(1)}
                            >
                                <p>Can I automate the calculation of paydays based on attendance data?</p>
                            </button>

                            <div
                                className="hr-faq-panel"
                                style={{ display: openIndex === 1 ? "block" : "none" }}
                            >
                                <p>
                                    Yes, HROne enables you to pre-define recurring monthly attendance processing, allowing HRMS to auto-calculate paydays based on integrated attendance data without any manual efforts.
                                </p>
                            </div>

                            {/* Q3 */}
                            <button
                                className={`hr-faq-accordion ${openIndex === 2 ? "open" : ""}`}
                                onClick={() => toggleFAQ(2)}
                            >
                                <p>How many types of attendance imports are supported by HROne?</p>
                            </button>

                            <div
                                className="hr-faq-panel"
                                style={{ display: openIndex === 2 ? "block" : "none" }}
                            >
                                <p>
                                    HROne supports over 8 types of attendance imports with integrated attendance data from various sources such as biometric devices or time trackers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div >
                {/* FAQ 5*/}
                < div className={`simpler-workdays-faq ${activeTab === 4 ? "active" : ""}`}>
                    <div className="faq-hr">
                        <h4>Quick FAQ:</h4>

                        <div className="faq-start">
                            {/* Q1 */}
                            <button
                                className={`hr-faq-accordion ${openIndex === 0 ? "open" : ""}`}
                                onClick={() => toggleFAQ(0)}
                            >
                                <p>Q.1. How does the payroll processing in HROne ensure error-free and compliant results?</p>
                            </button>

                            <div
                                className="hr-faq-panel"
                                style={{ display: openIndex === 0 ? "block" : "none" }}
                            >
                                <p>
                                    A. HROne’s payroll management software automates the payouts processing and reduces the chances of manual errors in calculation. It also ensures compliance with relevant payroll regulations and laws.
                                </p>
                            </div>

                            {/* Q2 */}
                            <button
                                className={`hr-faq-accordion ${openIndex === 1 ? "open" : ""}`}
                                onClick={() => toggleFAQ(1)}
                            >
                                <p>Q.2. How can I receive the salary reconciliation report?</p>
                            </button>

                            <div
                                className="hr-faq-panel"
                                style={{ display: openIndex === 1 ? "block" : "none" }}
                            >
                                <p>
                                    A. After payroll processing, HROne automatically generates and sends a salary reconciliation report to your email for easy review and verification.
                                </p>
                            </div>

                            {/* Q3 */}
                            <button
                                className={`hr-faq-accordion ${openIndex === 2 ? "open" : ""}`}
                                onClick={() => toggleFAQ(2)}
                            >
                                <p>Q.3. How can I publish salary slips to my employees?</p>
                            </button>

                            <div
                                className="hr-faq-panel"
                                style={{ display: openIndex === 2 ? "block" : "none" }}
                            >
                                <p>
                                    A. With HROne’s payroll management software, you can send salary slips to all employees in just a click, making it quick and convenient for employees as well as for HR.
                                </p>
                            </div>
                        </div>
                    </div>
                </div >
                {/* FAQ 6*/}
                < div className={`simpler-workdays-faq ${activeTab === 5 ? "active" : ""}`}>
                    <div className="faq-hr">
                        <h4>Quick FAQ:</h4>

                        <div className="faq-start">
                            {/* Q1 */}
                            <button
                                className={`hr-faq-accordion ${openIndex === 0 ? "open" : ""}`}
                                onClick={() => toggleFAQ(0)}
                            >
                                <p>How can HROne help in managing employee expenses in real-time?</p>
                            </button>

                            <div
                                className="hr-faq-panel"
                                style={{ display: openIndex === 0 ? "block" : "none" }}
                            >
                                <p>
                                    HROne’s expense management software enables organizations to efficiently manage employee expenses by configuring expense policies, allowing employees to update their expenses on the go, and ensuring timely payouts while maintaining cost control.
                                </p>
                            </div>

                            {/* Q2 */}
                            <button
                                className={`hr-faq-accordion ${openIndex === 1 ? "open" : ""}`}
                                onClick={() => toggleFAQ(1)}
                            >
                                <p>Can I configure multiple expense policies in HROne?</p>
                            </button>

                            <div
                                className="hr-faq-panel"
                                style={{ display: openIndex === 1 ? "block" : "none" }}
                            >
                                <p>
                                    Yes, HROne allows you to configure multiple expense policies based on your organization’s requirements. This ensures that expenses are managed according to different categories or employee roles.
                                </p>
                            </div>

                            {/* Q3 */}
                            <button
                                className={`hr-faq-accordion ${openIndex === 2 ? "open" : ""}`}
                                onClick={() => toggleFAQ(2)}
                            >
                                <p>Can I track project-wise expenses in HROne?</p>
                            </button>

                            <div
                                className="hr-faq-panel"
                                style={{ display: openIndex === 2 ? "block" : "none" }}
                            >
                                <p>
                                    HROne allows you to track expenses on a project-wise basis, providing visibility into the costs associated with specific projects or client engagements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div >
                {/* FAQ 7*/}
                < div className={`simpler-workdays-faq ${activeTab === 6 ? "active" : ""}`}>
                    <div className="faq-hr">
                        <h4>Quick FAQ:</h4>

                        <div className="faq-start">
                            {/* Q1 */}
                            <button
                                className={`hr-faq-accordion ${openIndex === 0 ? "open" : ""}`}
                                onClick={() => toggleFAQ(0)}
                            >
                                <p>How can HROne help in achieving organizational goals through performance management?</p>
                            </button>

                            <div
                                className="hr-faq-panel"
                                style={{ display: openIndex === 0 ? "block" : "none" }}
                            >
                                <p>
                                    HROne’s performance management software enables organizations to align employee goals with organizational mission, track performance in real-time, and offer timely feedback to achieve desired outcomes.
                                </p>
                            </div>

                            {/* Q2 */}
                            <button
                                className={`hr-faq-accordion ${openIndex === 1 ? "open" : ""}`}
                                onClick={() => toggleFAQ(1)}
                            >
                                <p>How does HROne support conducting on-time reviews?</p>
                            </button>

                            <div
                                className="hr-faq-panel"
                                style={{ display: openIndex === 1 ? "block" : "none" }}
                            >
                                <p>
                                    HROne facilitates frequent and planned reviews with automated reminders and notifications, ensuring that performance reviews are conducted as scheduled and in a structured manner.
                                </p>
                            </div>

                            {/* Q3 */}
                            <button
                                className={`hr-faq-accordion ${openIndex === 2 ? "open" : ""}`}
                                onClick={() => toggleFAQ(2)}
                            >
                                <p>Does HROne offer employee performance dashboards for visualizing performance metrics?</p>
                            </button>

                            <div
                                className="hr-faq-panel"
                                style={{ display: openIndex === 2 ? "block" : "none" }}
                            >
                                <p>
                                    Yes, HROne includes 20+ employee performance dashboards that offer an easy-to-understand tabular representation of key performance metrics, allowing you to monitor individual and team performance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div >
                {/* FAQ 8*/}
                < div className={`simpler-workdays-faq ${activeTab === 7 ? "active" : ""}`}>
                    <div className="faq-hr">
                        <h4>Quick FAQ:</h4>

                        <div className="faq-start">
                            {/* Q1 */}
                            <button
                                className={`hr-faq-accordion ${openIndex === 0 ? "open" : ""}`}
                                onClick={() => toggleFAQ(0)}
                            >
                                <p>How can HROne help in boosting employee morale with instant appreciation and reward points?</p>
                            </button>

                            <div
                                className="hr-faq-panel"
                                style={{ display: openIndex === 0 ? "block" : "none" }}
                            >
                                <p>
                                    HROne’s employee engagement features enable managers and team members to provide instant appreciation in the form of virtual badges and redeemable reward points. It not only boosts employees’ morale but helps in maintaining a culture of recognition.
                                </p>
                            </div>

                            {/* Q2 */}
                            <button
                                className={`hr-faq-accordion ${openIndex === 1 ? "open" : ""}`}
                                onClick={() => toggleFAQ(1)}
                            >
                                <p>How can I track employee satisfaction using pulse surveys and Mood Bot?</p>
                            </button>

                            <div
                                className="hr-faq-panel"
                                style={{ display: openIndex === 1 ? "block" : "none" }}
                            >
                                <p>
                                    HROne offers pulse surveys and a Mood Bot feature that allows you to gather real-time feedback and insights on employee satisfaction, engagement levels, and overall mood within the workplace.
                                </p>
                            </div>

                            {/* Q3 */}
                            <button
                                className={`hr-faq-accordion ${openIndex === 2 ? "open" : ""}`}
                                onClick={() => toggleFAQ(2)}
                            >
                                <p>Can employees earn redeemable reward points in HROne?</p>
                            </button>

                            <div
                                className="hr-faq-panel"
                                style={{ display: openIndex === 2 ? "block" : "none" }}
                            >
                                <p>
                                    Yes, HROne’s employee engagement features include redeemable reward points that employees can earn for their performance, accomplishments, and other contributions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div >
                {/* FAQ 9*/}
                < div className={`simpler-workdays-faq ${activeTab === 8 ? "active" : ""}`}>
                    <div className="faq-hr">
                        <h4>Quick FAQ:</h4>

                        <div className="faq-start">
                            {/* Q1 */}
                            <button
                                className={`hr-faq-accordion ${openIndex === 0 ? "open" : ""}`}
                                onClick={() => toggleFAQ(0)}
                            >
                                <p>How can HROne help in managing vendor information for assets?</p>
                            </button>

                            <div
                                className="hr-faq-panel"
                                style={{ display: openIndex === 0 ? "block" : "none" }}
                            >
                                <p>
                                    HROne’s asset management software includes a vendor database feature, allowing organizations to maintain a centralized record of vendors associated with asset procurement or maintenance. This helps in effectively managing vendor relationships.
                                </p>
                            </div>

                            {/* Q2 */}
                            <button
                                className={`hr-faq-accordion ${openIndex === 1 ? "open" : ""}`}
                                onClick={() => toggleFAQ(1)}
                            >
                                <p>Can I update invoice details for assets in HROne?</p>
                            </button>

                            <div
                                className="hr-faq-panel"
                                style={{ display: openIndex === 1 ? "block" : "none" }}
                            >
                                <p>
                                    HROne allows you to update crucial invoice details for assets, providing accurate records of asset procurement, costs, and associated financial information.
                                </p>
                            </div>

                            {/* Q3 */}
                            <button
                                className={`hr-faq-accordion ${openIndex === 2 ? "open" : ""}`}
                                onClick={() => toggleFAQ(2)}
                            >
                                <p>Can I track the activity log for each asset using HROne?</p>
                            </button>

                            <div
                                className="hr-faq-panel"
                                style={{ display: openIndex === 2 ? "block" : "none" }}
                            >
                                <p>
                                    Yes, HROne’s asset management software provides an activity log for each asset, allowing organizations to track the history, usage, and changes related to a specific asset over time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div >
                {/* FAQ 10*/}
                < div className={`simpler-workdays-faq ${activeTab === 9 ? "active" : ""}`}>
                    <div className="faq-hr">
                        <h4>Quick FAQ:</h4>

                        <div className="faq-start">
                            {/* Q1 */}
                            <button
                                className={`hr-faq-accordion ${openIndex === 0 ? "open" : ""}`}
                                onClick={() => toggleFAQ(0)}
                            >
                                <p>Can I create unlimited ticket categories in HROne's helpdesk module?</p>
                            </button>

                            <div
                                className="hr-faq-panel"
                                style={{ display: openIndex === 0 ? "block" : "none" }}
                            >
                                <p>
                                    Yes, HROne’s helpdesk allows you to create unlimited ticket categories based on your employee’s specific requirements. This helps to effectively categorize and prioritize employees’ tickets for efficient handling and better employee experience.
                                </p>
                            </div>

                            {/* Q2 */}
                            <button
                                className={`hr-faq-accordion ${openIndex === 1 ? "open" : ""}`}
                                onClick={() => toggleFAQ(1)}
                            >
                                <p>Can I categorize tickets based on their nature or priority in HROne's helpdesk module?</p>
                            </button>

                            <div
                                className="hr-faq-panel"
                                style={{ display: openIndex === 1 ? "block" : "none" }}
                            >
                                <p>
                                    Yes, HROne’s helpdesk module categorizes tickets based on their nature or priority. This helps in organizing and managing tickets effectively, ensuring that the most urgent ones are addressed instantly.
                                </p>
                            </div>

                            {/* Q3 */}
                            <button
                                className={`hr-faq-accordion ${openIndex === 2 ? "open" : ""}`}
                                onClick={() => toggleFAQ(2)}
                            >
                                <p>Does HROne's helpdesk module support auto-assignment of tickets?</p>
                            </button>

                            <div
                                className="hr-faq-panel"
                                style={{ display: openIndex === 2 ? "block" : "none" }}
                            >
                                <p>
                                    Yes, HROne’s helpdesk module offers the workflow to automatically assign tickets to the appropriate employee based on predefined criteria.
                                </p>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </section >
    );
}
