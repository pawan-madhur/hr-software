"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { initHeaderHoverMenu } from "@/components/lib/headerMenu";
import { log } from "console";

export type MainHeaderProps = {
  onOpenPopup: () => void;
};

const LOGIN_URL = "https://app.hrone.cloud/login";
const BASE_URL = "https://hrone.cloud";

export default function MainHeader({ onOpenPopup }: MainHeaderProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  console.log(isScrolled);
  useEffect(() => {
    // init header hover logic
    initHeaderHoverMenu();

    const onScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // run once on mount
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);


  const handlePopup = (e: React.MouseEvent) => {
    e.preventDefault();
    onOpenPopup();
  };

  return (
    <div className={`main-header ${isScrolled ? "header-scrolled" : ""}`}>
      <nav
        className="navbar fixed-top"
        style={{ background: "#013A29" }}
      >
        <div className="container container_cus">
          <div className="header-parent">
            <div className="logo">
              <Link href={BASE_URL} className="custom-logo-link" rel="home">
                <img
                  width={146}
                  height={32}
                  src="https://hrone.cloud/wp-content/uploads/2025/11/hrone_logo2025.svg"
                  className="custom-logo"
                  alt="HROne HR Software"
                />
              </Link>
            </div>
            <div className={`header-main ${mobileOpen ? "open" : ""}`}>
              <ul className="nav-ul">
                {/* HR Software - dropdown */}
                <li
                  className="level-0"
                  rel="hr-software"
                  onMouseEnter={() => setOpenDropdown("hr-software")}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <span className="level-1-menu">
                    <a href="#">HR Software</a>
                    <img
                      className="vector-img-1"
                      src="https://hrone.cloud/wp-content/themes/hrone-child/assets/images/homepage/header-dropdown-arrow.svg"
                      alt=""
                    />
                  </span>
                  <section
                    className={`hrsoftware_dropdown hrone-level-1 ${openDropdown === "hr-software" ? "open" : ""
                      }`}
                  >
                    <div className="container_cus">
                      <div className="hrsoftware_dropdown_main">
                        <div className="custom-mobile-nav-header" onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setOpenDropdown(null);
                        }}>
                          <div className="back-btn">
                            <img
                              src="https://content.hrone.cloud/wp-content/uploads/2025/11/left_arrow.svg"
                              alt="Back"
                            />
                            <span>Back</span>
                          </div>
                        </div>

                        <div className="hrsoftware_dropdown_right">
                          <div className="hrsoftware_col">
                            <div className="hrsoftware_col_inner">
                              <h2>Modules</h2>
                              <ul>
                                <li>
                                  <a href={`${BASE_URL}/hr-software/core-hr/`}>
                                    <img src="https://hrone.cloud/wp-content/uploads/2025/12/software-icon-8.svg" alt="" />
                                    <span>Core HR</span>
                                  </a>
                                </li>
                                <li>
                                  <a href={`${BASE_URL}/hr-software/recruitment/`}>
                                    <img src="https://hrone.cloud/wp-content/uploads/2025/12/software-icon-14.svg" alt="" />
                                    <span>Recruitment</span>
                                  </a>
                                </li>
                                <li>
                                  <a href={`${BASE_URL}/hr-software/workforce-management/`}>
                                    <img src="https://hrone.cloud/wp-content/uploads/2025/12/software-icon-15.svg" alt="" />
                                    <span>Workforce</span>
                                  </a>
                                </li>
                                <li>
                                  <a href={`${BASE_URL}/hr-software/attendance/`}>
                                    <img src="https://hrone.cloud/wp-content/uploads/2025/12/software-icon-16.svg" alt="" />
                                    <span>Attendance</span>
                                  </a>
                                </li>
                                <li>
                                  <a href={`${BASE_URL}/hr-software/payroll/`}>
                                    <img src="https://hrone.cloud/wp-content/uploads/2025/12/software-icon-17.svg" alt="" />
                                    <span>Payroll</span>
                                  </a>
                                </li>
                                <li>
                                  <a href={`${BASE_URL}/hr-software/performance/`}>
                                    <img src="https://hrone.cloud/wp-content/uploads/2025/12/software-icon-19.svg" alt="" />
                                    <span>Performance</span>
                                  </a>
                                </li>
                                <li>
                                  <a href={`${BASE_URL}/hr-software/employee-engagement/`}>
                                    <img src="https://hrone.cloud/wp-content/uploads/2025/12/software-icon-20.svg" alt="" />
                                    <span>Engagement</span>
                                  </a>
                                </li>
                                <li>
                                  <a href={`${BASE_URL}/hr-software/helpdesk/`}>
                                    <img src="https://hrone.cloud/wp-content/uploads/2025/12/software-icon-1.svg" alt="" />
                                    <span>Helpdesk</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="hrsoftware_col">
                            <div className="hrsoftware_col_inner">
                              <a href={`${BASE_URL}/hr-software/`} className="wrapper_link">
                                <h2>HR Software</h2>
                                <img src="https://hrone.cloud/wp-content/uploads/2025/11/hr-left-dropwn-img-1.svg" alt="" />
                              </a>
                              <a href={`${BASE_URL}/hr-software/`} className="cus_new_btn">
                                Explore HR Software
                              </a>
                            </div>
                          </div>
                          <div className="hrsoftware_col">
                            <div className="hrsoftware_col_inner">
                              <h2>Marketplace</h2>
                              <ul>
                                <li>
                                  <a href={`${BASE_URL}/integration`}>
                                    <img src="https://hrone.cloud/wp-content/uploads/2025/12/software-icon-7.svg" alt="" />
                                    <span>Integrations</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="hrsoftware_col_inner">
                              <h2>Mobile App</h2>
                              <ul>
                                <li>
                                  <a href={`${BASE_URL}/mobile-app/`}>
                                    <img src="https://hrone.cloud/wp-content/uploads/2025/12/software-icon-10.svg" alt="" />
                                    <span>Mobile App</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="hrsoftware_col_inner">
                              <h2>Our Clients</h2>
                              <ul>
                                <li>
                                  <a href={`${BASE_URL}/case-study/`}>
                                    <img src="https://hrone.cloud/wp-content/uploads/2025/12/software-icon-2.svg" alt="" />
                                    <span>Case studies</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="hrsoftware_col">
                            <div className="hrsoftware_col_inner">
                              <h2>Industries</h2>
                              <ul>
                                <li>
                                  <a href={`${BASE_URL}/hr-software/healthcare/`}>
                                    <img src="https://hrone.cloud/wp-content/uploads/2025/12/software-icon-3.svg" alt="" />
                                    <span>Healthcare</span>
                                  </a>
                                </li>
                                <li>
                                  <a href={`${BASE_URL}/hr-software/ites/`}>
                                    <img src="https://hrone.cloud/wp-content/uploads/2025/12/software-icon-4.svg" alt="" />
                                    <span>ITES</span>
                                  </a>
                                </li>
                                <li>
                                  <a href={`${BASE_URL}/hr-software/finance/`}>
                                    <img src="https://hrone.cloud/wp-content/uploads/2025/12/software-icon-13.svg" alt="" />
                                    <span>Finance</span>
                                  </a>
                                </li>
                                <li>
                                  <a href={`${BASE_URL}/hr-software/retail/`}>
                                    <img src="https://hrone.cloud/wp-content/uploads/2025/12/software-icon-12.svg" alt="" />
                                    <span>Retail</span>
                                  </a>
                                </li>
                                <li>
                                  <a href={`${BASE_URL}/hr-software/manufacturing/`}>
                                    <img src="https://hrone.cloud/wp-content/uploads/2025/12/software-icon-17.svg" alt="" />
                                    <span>Manufacturing</span>
                                  </a>
                                </li>
                                <li>
                                  <a href={`${BASE_URL}/hr-software/logistics/`}>
                                    <img src="https://hrone.cloud/wp-content/uploads/2025/12/software-icon-5.svg" alt="" />
                                    <span>Logistics</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown_logos">
                      <div className="container_cus">
                        <div className="dropdown_logos_main">
                          <div>
                            <img src="https://content.hrone.cloud/wp-content/uploads/2025/11/dropdown-brand-logos-5.svg" alt="" />
                          </div>
                          <div>
                            <img src="https://hrone.cloud/wp-content/uploads/2025/11/dropdown-brand-logos-4.svg" alt="" />
                          </div>
                          <div>
                            <img src="https://hrone.cloud/wp-content/uploads/2025/11/amar_uajala.svg" alt="" />
                          </div>
                          <div>
                            <img src="https://hrone.cloud/wp-content/uploads/2025/11/dropdown-brand-logos-2.svg" alt="" />
                          </div>
                          <div>
                            <img src="https://hrone.cloud/wp-content/uploads/2025/11/abp_logo.svg" alt="" />
                          </div>
                          <div>
                            <a href={`${BASE_URL}/case-study/`} className="cus_new_btn1">
                              <span>View all Stories</span>
                              <img src="https://content.hrone.cloud/wp-content/uploads/2025/11/arrow-right-circle-2.svg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </li>

                {/* Pricing */}
                <li className="level-0" rel="pricing">
                  <span className="level-1-menu">
                    <img
                      className="main-menu-icon-img"
                      src="https://hrone.cloud/wp-content/uploads/2025/11/price_icon.svg"
                      alt=""
                    />
                    <a href={`${BASE_URL}/pricing/`}>Pricing</a>
                  </span>
                </li>

                {/* HR AI Agents */}
                <li className="level-0" rel="hr-ai-agents">
                  <span className="level-1-menu">
                    <a href={`${BASE_URL}/one-ai/`}>HR AI Agents</a>
                  </span>
                </li>

                {/* HROne Studio */}
                <li className="level-0" rel="hrone-studio">
                  <span className="level-1-menu">
                    <a href="https://hrone.studio/?source=hrone&medium=website" target="_blank" rel="noopener noreferrer">
                      HROne Studio
                    </a>
                  </span>
                </li>

                {/* HR Resources - dropdown */}
                <li
                  className="level-0"
                  rel="hr-resources"
                  onMouseEnter={() => setOpenDropdown("hr-resources")}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <span className="level-1-menu">
                    <a href="#">HR Resources</a>
                    <img
                      className="vector-img-1"
                      src="https://hrone.cloud/wp-content/themes/hrone-child/assets/images/homepage/header-dropdown-arrow.svg"
                      alt=""
                    />
                  </span>
                  <section className={`hrresourec_dropdown hrone-level-1 ${openDropdown === "hr-resources" ? "open" : ""}`}>
                    <div className="container_cus">
                      <div className="hrresourec_dropdown_main">
                        {/* LEFT SIDE */}
                        <div className="hrresourec_dropdown_left">
                          <div className="dropdown_group">
                            <h2>Learn</h2>
                            <ul>
                              <li>
                                <a href="https://hrone.cloud/blog">
                                  <img src="https://hrone.cloud/wp-content/uploads/2025/11/maki_arrow-1.svg" alt="" />
                                  <span>Blogs</span>
                                </a>
                              </li>
                              <li>
                                <a href="https://hrone.cloud/guide">
                                  <img src="https://hrone.cloud/wp-content/uploads/2025/11/maki_arrow-1.svg" alt="" />
                                  <span>Guides</span>
                                </a>
                              </li>
                              <li>
                                <a href="https://hrone.cloud/hr-glossary">
                                  <img src="https://hrone.cloud/wp-content/uploads/2025/11/maki_arrow-1.svg" alt="" />
                                  <span>Glossary</span>
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div className="dropdown_group">
                            <h2>Do</h2>
                            <ul>
                              <li className="active">
                                <a href="https://hrone.cloud/download-template/">
                                  <img src="https://hrone.cloud/wp-content/uploads/2025/11/maki_arrow-1.svg" alt="" />
                                  <span>Templates</span>
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div className="dropdown_group">
                            <h2>Engage</h2>
                            <ul>
                              <li>
                                <a href="https://hrone.cloud/hr-podcast">
                                  <img src="https://hrone.cloud/wp-content/uploads/2025/11/maki_arrow-1.svg" alt="" />
                                  <span>CHRO Podcast</span>
                                </a>
                              </li>
                              <li>
                                <a href="https://hrone.cloud/hr-commune/">
                                  <img src="https://hrone.cloud/wp-content/uploads/2025/11/maki_arrow-1.svg" alt="" />
                                  <span>HRCommune</span>
                                </a>
                              </li>
                              <li>
                                <a href="https://hrone.cloud/propel">
                                  <img src="https://hrone.cloud/wp-content/uploads/2025/11/maki_arrow-1.svg" alt="" />
                                  <span>HROne PROPEL</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="hrresourec_dropdown_right">
                          <div className="content-item">
                            <h2>Featured</h2>
                            <div className="hrresourec_dropdown_right_grid">
                              <div>
                                <img
                                  src="https://hrone.cloud/wp-content/uploads/2026/01/Employee-Engagement-Strategies-1024x683.png"
                                  alt="Best Employee Engagement Strategies for Hybrid Teams in 2026"
                                />
                                <h3>
                                  <a href="https://hrone.cloud/blog/best-employee-engagement-strategies-for-hybrid-teams/">
                                    Best Employee Engagement Strategies for Hybrid Teams in 2026
                                  </a>
                                </h3>
                                <p>
                                  Employee engagement strategies look completely different when half your team is working
                                  from their&nbsp;Bengaluru&nbsp;apartment&nbsp;and the other half sits in your…
                                </p>
                              </div>
                              <div>
                                <h4>
                                  <a href="https://hrone.cloud/blog/signs-organization-needs-workforce-management-software/">
                                    Signs Your Organization Needs Workforce Management Software Now
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/blog/integrating-workforce-management-software-with-attendance-payroll-systems/">
                                    Integrating Workforce Management Software with Attendance and Payroll Systems
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/blog/workforce-management-software-vs-manual-workforce-planning/">
                                    Workforce Management Software vs Manual Workforce Planning
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/blog/how-okrs-kpis-managed-using-performance-software/">
                                    How OKRs and KPIs Are Managed Effectively Using Performance Software
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/blog/performance-management-software-vs-annual-reviews-what-works-better-today/">
                                    Performance Management Software vs Annual Reviews: What Works Better Today
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/blog/why-attendance-software-critical-before-scaling-workforce/">
                                    Why Attendance Software Is Critical Before Scaling Your Workforce
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/blog/union-budget-2026-employer-expectations-policy-priorities/">
                                    Union Budget 2026: Business Challenges, Employer Expectations, and Policy Priorities
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/blog/recruitment-software-vs-manual-hiring/">
                                    Recruitment Software vs. Manual Hiring: What Growing Companies Must Know
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/blog/why-time-tracking-is-critical-for-productivity-and-compliance/">
                                    Why Time Tracking Is Critical for Productivity and Compliance
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/blog/challenges-of-tracking-field-employees-without-geo-fencing/">
                                    Challenges of Tracking Field Employees Without Geofencing
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>

                          <div className="content-item">
                            <h2>Featured</h2>
                            <div className="hrresourec_dropdown_right_grid">
                              <div>
                                <img
                                  src="https://hrone.cloud/wp-content/uploads/2023/07/guide.png"
                                  alt="Leave Management Guide"
                                />
                                <h3>
                                  <a href="https://hrone.cloud/guide/leave-management/">Leave Management Guide</a>
                                </h3>
                                <p>
                                  What is Leave? Leave is simply taking an off from work day after informing the management
                                  formally and sometimes even…
                                </p>
                              </div>
                              <div>
                                <h4>
                                  <a href="https://hrone.cloud/guide/expense-management/">
                                    Informative Expense Management Guide
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/guide/performance-management/">
                                    Performance Management –A Definitive Guide
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/guide/hrms/">HRMS Guide</a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/guide/performance-appraisal/">Performance Appraisal</a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/guide/employee-engagement/">
                                    Complete Employee Engagement Guide
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/the-continuous-listening-guide-for-irresistible-organizations/">
                                    The continuous listening guide
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>

                          <div className="content-item">
                            <h2>Featured</h2>
                            <div className="hrresourec_dropdown_right_grid">
                              <div>
                                <img
                                  src="https://content.hrone.cloud/wp-content/uploads/2025/11/Blog-Thumbnail.jpg"
                                  alt="Casual vs Earned Leave: Plan Better, Lose No Pay"
                                />
                                <h3>
                                  <a href="https://hrone.cloud/hr-glossary/casual-leave-vs-earned-leave/">
                                    Casual vs Earned Leave: Plan Better, Lose No Pay
                                  </a>
                                </h3>
                              </div>
                              <div>
                                <h4>
                                  <a href="https://hrone.cloud/hr-glossary/leave-encashment/">
                                    What Is Leave Encashment? Meaning, Rules, Tax Exemption &amp; Calculation
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/hr-glossary/payroll-accounting/">
                                    Payroll Accounting: Process, Entries &amp; Management
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/hr-glossary/week-off/">
                                    Week Off Meaning, Rules &amp; Guidelines
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/hr-glossary/leave-without-pay/">
                                    Leave Without Pay (LWP): Meaning, Rules, and Full Form Explained
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/hr-glossary/salary-revision/">
                                    What Is Salary Revision?
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/hr-glossary/gross-salary-vs-ctc/">
                                    Difference between gross salary and ctc
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/hr-glossary/earned-leave/">
                                    Earned Leave [Meaning to Calculations]
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/medical-leave/">
                                    Medical Leave: Rules, Format, Application &amp; Common Reasons
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/hr-glossary/form-12bb/">
                                    What is Form 12bb Income Tax?
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>

                          <div className="content-item active">
                            <h2>Featured</h2>
                            <div className="hrresourec_dropdown_right_grid">
                              <div>
                                <img
                                  src="https://hrone.cloud/wp-content/uploads/2020/09/timesheet-management-policy.png"
                                  alt="Timesheet Management Policy"
                                />
                                <h3>
                                  <a href="https://hrone.cloud/download-template/timesheet-management-policy/">
                                    Timesheet Management Policy
                                  </a>
                                </h3>
                                <p>
                                  Completing tasks within the stipulated time is the end goal for every business. How do
                                  you ensure sticking to the…
                                </p>
                              </div>
                              <div>
                                <h4>
                                  <a href="https://hrone.cloud/download-template/time-attendance-policy/">
                                    Time Attendance Policy
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/download-template/salary-advance-policy/">
                                    Salary Advance Policy
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/download-template/performance-management-policy/">
                                    Performance Management Policy
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/download-template/leave-policy/">Leave Policy</a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/download-template/dress-code-policy/">
                                    Dress Code Policy
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/download-template/claim-reimbursement-policy/">
                                    Claim Reimbursement Policy
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/download-template/business-travel-policy/">
                                    Business Travel Policy
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/download-template/employee-onboarding-checklist/">
                                    Employee Onboarding Checklist
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/download-template/employee-loan-advance-salary-approval-form/">
                                    Employee Loan Advance Salary Approval Form
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>

                          <div className="content-item">
                            <h2>Featured</h2>
                            <div className="hrresourec_dropdown_right_grid">
                              <div>
                                <img
                                  src="https://hrone.cloud/wp-content/uploads/2026/01/Gopalji-Mehrotra-_-thumbnail_web-1024x689.jpg"
                                  alt="What Actually Breaks Organizations: Roles or Skills?"
                                />
                                <h3>
                                  <a href="https://hrone.cloud/hr-podcast/skills-vs-roles-build-adaptable-workforce/">
                                    What Actually Breaks Organizations: Roles or Skills?
                                  </a>
                                </h3>
                                <p></p>
                              </div>
                              <div>
                                <h4>
                                  <a href="https://hrone.cloud/hr-podcast/organizational-growth-challenges-hr-fix/">
                                    When Companies Grow Fast, Does HR Bend or Push Back?
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/hr-podcast/will-ai-replace-the-human-in-hr/">
                                    Will AI replace the ‘Human’ in HR?
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/hr-podcast/early-signs-of-cultural-weakness/">
                                    Are You Ignoring Early Signs Of Cultural Weakness?
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/hr-podcast/how-hrs-think-3-moves-ahead/">
                                    HRs Should React Fast, But What About Thinking Three Moves Ahead?
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/hr-podcast/culture-as-risk-insurance-what-ceos-expect-and-what-chros-must-deliver/">
                                    Culture Isn’t Just a Buzzword – What Happens When CEOs See It as a Risk?
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/hr-podcast/ways-to-increase-your-credibility-as-a-chro/">
                                    Credibility Comes from Titles – What If It’s All About Storytelling &amp; Trust?
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/hr-podcast/why-talent-retention-fails-despite-offered-perks/">
                                    Retention Issues Are Inevitable – What If HR Is Stepping into Pitfalls?
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/hr-podcast/hr-lessons-from-mythology-on-dharam-sankatas/">
                                    HR Can’t Be Too Emotional – What Happens When Empathy Meets Policy?
                                  </a>
                                </h4>
                                <h4>
                                  <a href="https://hrone.cloud/hr-podcast/multigenerational-workforce-leadership-chro-strategies/">
                                    Multigenerational Teams Are Tough – Can Your Culture Bridge the Gap?
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className={`hrresourec_dropdown mobile-version hrone-level-1 ${openDropdown === "hr-resources" ? "open" : ""
                    }`} >
                    <div className="container_cus">
                      <div className="custom-mobile-nav-header" onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setOpenDropdown(null);
                      }}>
                        <div className="back-btn">
                          <img
                            src="https://content.hrone.cloud/wp-content/uploads/2025/11/left_arrow.svg"
                            alt="Back"
                          />
                          <span>Back</span>
                        </div>
                      </div>
                      <div className="dropdown_group">
                        <ul>
                          <li>
                            <div className="li-head">
                              <a href="">blog</a>
                            </div>
                          </li>
                          <li>
                            <div className="li-head">
                              <a href="">Guides</a>
                            </div>
                          </li>
                          <li>
                            <div className="li-head">
                              <a href="">Glossary</a>
                            </div>
                          </li>
                          <li>
                            <div className="li-head">
                              <a href="">Templates</a>
                            </div>
                          </li>
                          <li>
                            <div className="li-head">
                              <a href="">CHRO Podcast</a>
                            </div>
                          </li>
                          <li>
                            <div className="li-head">
                              <a href="">HR Commune</a>
                            </div>
                          </li>
                          <li>
                            <div className="li-head">
                              <a href="">HROne Propel</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                </li>

                {/* About - dropdown */}
                <li
                  className="level-0"
                  rel="about"
                  onMouseEnter={() => setOpenDropdown("about")}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <span className="level-1-menu">
                    <a href={`${BASE_URL}/why-hrone/`}>About</a>
                    <img
                      className="vector-img-1"
                      src="https://hrone.cloud/wp-content/themes/hrone-child/assets/images/homepage/header-dropdown-arrow.svg"
                      alt=""
                    />
                  </span>
                  <nav className={`hrone-level-1 about-dropdown ${openDropdown === "about" ? "open" : ""}`}>
                    <div className="container container_cus">
                      <div className="custom-mobile-nav-header" onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setOpenDropdown(null);
                      }}>
                        <div className="back-btn">
                          <img
                            src="https://content.hrone.cloud/wp-content/uploads/2025/11/left_arrow.svg"
                            alt="Back"
                          />
                          <span>Back</span>
                        </div>
                      </div>
                      <p className="nav-title">About HROne</p>
                      <div className="about-hrone-grid">
                        <a className="about-hrone-grid-item" href={`${BASE_URL}/why-hrone/`}>
                          <div>
                            <p className="about-hrone-grid-item-title">Our DNA</p>
                            <p className="about-hrone-grid-item-desc">
                              Values that dominate our journey and drive our pursuit to excellence.
                            </p>
                          </div>
                        </a>
                        <a className="about-hrone-grid-item" href={`${BASE_URL}/newsroom/`}>
                          <div>
                            <p className="about-hrone-grid-item-title">Newsroom</p>
                            <p className="about-hrone-grid-item-desc">
                              Stay updated with the latest news in our dynamic journey of growth and innovation.
                            </p>
                          </div>
                        </a>
                        <a className="about-hrone-grid-item" href={`${BASE_URL}/contact/`}>
                          <div>
                            <p className="about-hrone-grid-item-title">Contact Us</p>
                            <p className="about-hrone-grid-item-desc">
                              Know more about HROne and explore how we can support your needs.
                            </p>
                          </div>
                        </a>
                        <a className="about-hrone-grid-item" href={`${BASE_URL}/partners/`}>
                          <div>
                            <p className="about-hrone-grid-item-title">Partners</p>
                            <p className="about-hrone-grid-item-desc">
                              Become a partner in profits and unlock mutual growth opportunities.
                            </p>
                          </div>
                        </a>
                        <a className="about-hrone-grid-item" href={`${BASE_URL}/life-at-hrone/`}>
                          <div>
                            <p className="about-hrone-grid-item-title">Life@HROne | Career</p>
                            <p className="about-hrone-grid-item-desc">
                              Experience our vibrant work culture and values come to life in action every day.
                            </p>
                          </div>
                        </a>
                        <a className="about-hrone-grid-item" href={`${BASE_URL}/leadership/`}>
                          <div>
                            <p className="about-hrone-grid-item-title">Leadership</p>
                            <p className="about-hrone-grid-item-desc">
                              Meet the people steering HROne&apos;s vision to simplify HR and help forward-thinking
                              companies build truly amazing workplaces.
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </nav>
                </li>

                {/* Get Free Trial - in nav */}
                <li className="level-0" rel="get-free-trial">
                  <span className="level-1-menu">
                    <a href="#" className="popnew" onClick={handlePopup}>
                      Get Free Trial
                    </a>
                  </span>
                </li>
              </ul>
            </div>

            <div className="mobile-hamburger">
              <button
                type="button"
                className="hamburger-hrone"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <img
                  className={`hrone-mob-nav menu img-fluid ${!mobileOpen ? "" : "hide"}`}
                  src="https://content.hrone.cloud/wp-content/uploads/2025/11/hamburger-new1.svg"
                  alt="Menu"
                />
                <img
                  className={`hrone-mob-nav-logo-cross ${mobileOpen ? "" : "hide"}`}
                  src="https://content.hrone.cloud/wp-content/uploads/2025/11/Close-Button.svg"
                  alt="Close"
                />
              </button>
            </div>
          </div>
        </div>


      </nav>
    </div>
  );
}
