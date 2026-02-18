import Script from "next/script";

export default function MainFooter() {
    return (
        <>
            <div className="commune-container">
                <div className="container container_cus">
                    <div className="cta-section footer-cta-commune">
                        <div className="cta-left">
                            <p className="wait-text">While You Wait...</p>
                            <h2>Join HR Commune</h2>
                        </div>
                        <div className="cta-right">
                            <div className="cta-description">
                                <p>Connect with <strong>6000+ HR leaders</strong>. Swap strategies. Share stories. Learn what's working in real-time.</p>
                            </div>
                            <a href="https://login.circle.so/sign_up?request_host=hrone-commune.hrone.cloud#email"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-button">
                                Get Instant Access
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <section className="footer-section">
                <div className="container container_cus hr">
                    <div className="footer-logo-div">
                        <div className="footer-logo-main">
                            <div>
                                <img
                                    loading="lazy"
                                    className="img-fluid"
                                    src="https://hrone.cloud/wp-content/uploads/2023/07/logo-white-samesize.svg"
                                    alt="HROne"
                                />
                            </div>
                            <div className="newsletter-head">
                                <p className="stay-up">
                                    Stay up-to-date with <strong>HROne Newsletter!</strong>
                                </p>
                                <div className="newsletter-main">
                                    {/* HubSpot Script */}
                                    <Script
                                        src="//js.hsforms.net/forms/embed/v2.js"
                                        strategy="afterInteractive"
                                    />

                                    <Script id="hubspot-form" strategy="afterInteractive">
                                        {`
                                            if (window.hbspt) {
                                                hbspt.forms.create({
                                                region: "na1",
                                                portalId: "7277696",
                                                formId: "21230932-61eb-4c2c-a353-76934a951e1d"
                                                });
                                            }
                                            `}
                                    </Script>
                                </div>
                                <p className="cookies-text">
                                    By providing your information, you hereby consent to the HROne{" "}
                                    <a
                                        href="https://hrone.cloud/cookies-policy/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Cookie Policy
                                    </a>{" "}
                                    and{" "}
                                    <a
                                        href="https://hrone.cloud/privacy-policy/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Privacy Policy
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-main">
                        <div className="footer-links">
                            <ul className="about-hrone">
                                <li>
                                    <a className="menu-title" href="#">
                                        Products
                                    </a>

                                    <ul className="submenu">
                                        <li>
                                            <a href="https://hrone.cloud/hr-software/">HR Software</a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/hr-software/core-hr/">Core HR</a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/hr-software/recruitment/">Recruitment</a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/hr-software/workforce-management/">
                                                Workforce Management Software
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/hr-software/attendance/">Attendance</a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/hr-software/payroll/">Payroll</a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/hr-software/expense-and-reimbursement/">
                                                Expense
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/hr-software/helpdesk/">Helpdesk</a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/hr-software/performance/">Performance</a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/hr-software/asset-management/">
                                                Asset
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/hr-software/employee-engagement/">
                                                Engagement
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/project-management-software/">
                                                ProjectOne
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <a className="menu-title" href="#">
                                        More
                                    </a>

                                    <ul className="submenu">
                                        <li>
                                            <a href="https://hrone.cloud/hr-software/leave-management/">
                                                Leave
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/add-ons/">Add Ons</a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/integration/">Integrations</a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/hr-software/hr-solution/">
                                                HR Solutions
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/hr-software/time-tracking/">
                                                Time Tracking
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/hr-software/payroll-solution/">
                                                Payroll Solutions
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/hr-software/payroll-outsourcing/">
                                                Payroll Outsourcing
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="about-hrone">
                                <li>
                                    <a className="menu-title active" href="#">
                                        Solution by Persona
                                    </a>

                                    <ul className="submenu">
                                        <li>
                                            <a href="https://hrone.cloud/solutions-for-chros/">
                                                Solution For CHRO
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/solutions-for-managers/">
                                                Team Manager
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/solutions-for-employees/">
                                                Employee
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/solutions-for-cxo/">
                                                CXO
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <a className="menu-title" href="#">
                                        HROne Labs
                                    </a>

                                    <ul className="submenu">
                                        <li>
                                            <a href="https://hrone.cloud/inbox-for-hr/">
                                                InboxForHR<sup>TM</sup>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/mobile-app/">
                                                Mobile App
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <a className="menu-title" href="https://hrone.cloud/guide/">
                                        Guide
                                    </a>

                                    <ul className="submenu">
                                        <li>
                                            <a href="https://hrone.cloud/guide/hrms/">HRMS</a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/guide/employee-engagement/">
                                                Employee Engagement
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/guide/performance-management/">
                                                Performance Management
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/guide/performance-appraisal/">
                                                Performance Appraisal
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/guide/leave-management/">
                                                Leave Management
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <a className="menu-title" href="#">
                                        More
                                    </a>

                                    <ul className="submenu">
                                        <li>
                                            <a href="https://hrone.cloud/propel/">PROPEL</a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/one-ai/">One AI</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="about-hrone">
                                <li>
                                    <a className="menu-title" href="#">
                                        Solution By Cities
                                    </a>

                                    <ul className="submenu">
                                        <li>
                                            <a href="https://hrone.cloud/hr-software-gujarat/">
                                                HR Software Gujarat
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/hr-software-in-mumbai/">
                                                HR Software Mumbai
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/hr-software-in-bangalore/">
                                                HR Software Bangalore
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/hr-software-in-delhi/">
                                                HR Software Delhi
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/hr-software-in-chennai/">
                                                HR Software Chennai
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/hr-software-in-hyderabad/">
                                                HR Software Hyderabad
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/payroll-software-gujarat/">
                                                Payroll Software Gujarat
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/payroll-software-mumbai/">
                                                Payroll Software Mumbai
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/payroll-software-bangalore/">
                                                Payroll Software Bangalore
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/payroll-software-delhi/">
                                                Payroll Software Delhi
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/payroll-software-chennai/">
                                                Payroll Software Chennai
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/payroll-software-hyderabad/">
                                                Payroll Software Hyderabad
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <a className="menu-title" href="#">
                                        Company
                                    </a>

                                    <ul className="submenu">
                                        <li>
                                            <a href="https://hrone.cloud/why-hrone/">About HROne</a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/life-at-hrone/">Career</a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/newsroom/">Newsroom</a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/pricing/">Pricing</a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/case-study/">Clients</a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/contact/">Contact Us</a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/partners/">Partners</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="about-hrone">
                                <li>
                                    <a className="menu-title" href="#">
                                        Resources
                                    </a>

                                    <ul className="submenu">
                                        <li>
                                            <a href="https://hrone.cloud/blog/">HR Blogs</a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/hr-commune/">
                                                HR Commune<sup>TM</sup>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/guide/">Guide</a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/hr-glossary/">HR Glossary</a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/download-template/">Templates</a>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <a className="menu-title" href="#">
                                        Integrations
                                    </a>

                                    <ul className="submenu">
                                        <li>
                                            <a href="https://hrone.cloud/integration/itscredible/">
                                                ItsCredible
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/integration/ongrid-background-verification/">
                                                OnGrid BGV
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/integration/pineperks/">
                                                Pineperks
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/integration/testlify/">
                                                Testlify
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/integration/enkash/">
                                                EnKash
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/integration/cfirst/">
                                                CFirst
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/integration/spring-verify/">
                                                Spring Verify
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/integration/salaryse/">
                                                SalarySe
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/integration/cleartax/">
                                                Cleartax
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/integration/qudify/">
                                                Qudify
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <a className="menu-title" href="#">
                                        HROne Add Ons
                                    </a>

                                    <ul className="submenu">
                                        <li>
                                            <a href="https://hrone.cloud/add-ons/teams-bot/">
                                                Teams Bot
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/add-ons/whatsapp-bot/">
                                                WhatsApp Bot
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/add-ons/work-plan/">
                                                Work Plan
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://hrone.cloud/onboarding-process/">
                                                Onboarding
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                        </div >
                        <div className="footer-image">
                            <div className="one">
                                <div>
                                    <img
                                        loading="lazy"
                                        className="img-fluid sponsor-img"
                                        src="https://hrone.cloud/wp-content/uploads/2023/06/Group-14183.png"
                                        alt=""
                                    />
                                </div>

                                <div className="social-icon-main">
                                    <div>
                                        <a
                                            aria-label="Footer Icon"
                                            className="footer-social-icon"
                                            href="https://www.facebook.com/hronecloud/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                loading="lazy"
                                                className="img-fluid social-icon"
                                                src="https://hrone.cloud/wp-content/uploads/2023/06/Vector-2-1.svg"
                                                alt=""
                                            />
                                            <img
                                                loading="lazy"
                                                className="img-fluid hover-social-icon"
                                                src="https://hrone.cloud/wp-content/uploads/2023/06/Vector-4.svg"
                                                alt=""
                                            />
                                        </a>
                                    </div>

                                    <div>
                                        <a
                                            aria-label="Footer Icon"
                                            className="footer-social-icon"
                                            href="https://twitter.com/hronecloud"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                loading="lazy"
                                                className="img-fluid social-icon"
                                                src="https://hrone.cloud/wp-content/uploads/2023/06/Vector-1.svg"
                                                alt=""
                                            />
                                            <img
                                                loading="lazy"
                                                className="img-fluid hover-social-icon"
                                                src="https://hrone.cloud/wp-content/uploads/2023/06/Vector-3-1.svg"
                                                alt=""
                                            />
                                        </a>
                                    </div>

                                    <div>
                                        <a
                                            aria-label="Footer Icon"
                                            className="footer-social-icon"
                                            href="https://www.instagram.com/hroneindia/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                loading="lazy"
                                                className="img-fluid social-icon"
                                                src="https://hrone.cloud/wp-content/uploads/2023/06/Vector-2.svg"
                                                alt=""
                                            />
                                            <img
                                                loading="lazy"
                                                className="img-fluid hover-social-icon"
                                                src="https://hrone.cloud/wp-content/uploads/2023/06/Vector-2-2.svg"
                                                alt=""
                                            />
                                        </a>
                                    </div>

                                    <div>
                                        <a
                                            aria-label="Footer Icon"
                                            className="footer-social-icon"
                                            href="https://www.linkedin.com/company/hronecloud/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                loading="lazy"
                                                className="img-fluid social-icon"
                                                src="https://hrone.cloud/wp-content/uploads/2023/06/Vector-3.svg"
                                                alt=""
                                            />
                                            <img
                                                loading="lazy"
                                                className="img-fluid hover-social-icon"
                                                src="https://hrone.cloud/wp-content/uploads/2023/06/Vector-1-1.svg"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="security-img-flex">
                                    <img
                                        className="security-img"
                                        src="https://hrone.cloud/wp-content/uploads/2024/09/ISO_27001-Logo-Transparent.png"
                                        alt=""
                                    />
                                    <img
                                        className="security-img"
                                        src="https://hrone.cloud/wp-content/uploads/2024/09/21972-312_SOC_NonCPA.png"
                                        alt=""
                                    />
                                </div>
                            </div>

                            <div className="two">
                                <div>
                                    <div className="pay-now button">
                                        <a
                                            className="green-btn white-btn text-center"
                                            href="https://payments.cashfree.com/forms/hrone"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Pay Now
                                        </a>
                                    </div>

                                    <div className="schedule-demo-main">
                                        <a href="#">
                                            <img
                                                src="https://hrone.cloud/wp-content/themes/hrone-child/assets/images/homepage/phone-forwarded-arrow.svg"
                                                alt=""
                                            />
                                            <p className="schedule-demo-p">Schedule A Demo!</p>
                                        </a>
                                    </div>
                                </div>

                                <div className="join-a-team">
                                    <img
                                        className="img-fluid"
                                        src="https://hrone.cloud/wp-content/uploads/2023/06/Gif-blackbug.gif"
                                        alt="join-team"
                                    />
                                </div>
                            </div>
                        </div>

                    </div >
                </div >
            </section >
            <div className="copyright-section form-popup">
                <div className="container container_cus hr">
                    <div className="copyright-main">
                        <p className="copyright-text">
                            Copyright © 2026. Uneecops Workplace Solutions Pvt. Ltd.
                            All Rights Reserved.
                            <span className="gap-10"> | </span>
                            Uneecops Group Company
                            <span className="gap-10"> | </span>
                            <a href="https://hrone.cloud/privacy-policy/">
                                Privacy Policy
                            </a>
                            <span className="gap-10"> | </span>
                            <a href="https://hrone.cloud/cookies-policy/">
                                Cookies Policy
                            </a>
                            <span className="gap-10"> | </span>
                            <a
                                href="https://hrone.cloud/posh-policy/"
                                rel="noopener noreferrer"
                            >
                                POSH Policy
                            </a>
                            <span className="gap-10"> | </span>
                            <a href="https://hrone.cloud/terms/">
                                T&amp;C
                            </a>
                        </p>

                        <div className="partnership-logo">
                            <a
                                aria-label="partnership logo"
                                href="https://apps.apple.com/in/app/hrone-inbox-2-0/id6449706899"
                            >
                                <img
                                    loading="lazy"
                                    className="img-fluid"
                                    src="https://hrone.cloud/wp-content/uploads/2023/06/Group-1-2.png"
                                    alt="Download on App Store"
                                />
                            </a>

                            <a
                                aria-label="partnership logo"
                                href="https://play.google.com/store/apps/details?id=com.hrone.android"
                            >
                                <img
                                    loading="lazy"
                                    className="img-fluid"
                                    src="https://hrone.cloud/wp-content/uploads/2023/06/Group-2-1.png"
                                    alt="Get it on Google Play"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
