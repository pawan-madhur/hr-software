"use client";

import React, { useState } from "react";
import Link from "next/link";

export type MainHeaderProps = {
  onOpenPopup: () => void;
};

const LOGIN_URL = "https://app.hrone.cloud/login";
const BASE_URL = "https://hrone.cloud";

export default function MainHeader({ onOpenPopup }: MainHeaderProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handlePopup = (e: React.MouseEvent) => {
    e.preventDefault();
    onOpenPopup();
  };

  return (
    <div className="main-header">
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
            <div className="header-main">
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
                    className={`hrsoftware_dropdown hrone-level-1 ${
                      openDropdown === "hr-software" ? "open" : ""
                    }`}
                  >
                    <div className="container_cus">
                      <div className="hrsoftware_dropdown_main">
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
                  <section
                    className={`hrresourec_dropdown hrone-level-1 ${
                      openDropdown === "hr-resources" ? "open" : ""
                    }`}
                  >
                    <div className="container_cus">
                      <div className="hrresourec_dropdown_main">
                        <div className="hrresourec_dropdown_left">
                          <div className="dropdown_group">
                            <h2>Learn</h2>
                            <ul>
                              <li>
                                <a href={`${BASE_URL}/blog`}>
                                  <img src="https://hrone.cloud/wp-content/uploads/2025/11/maki_arrow-1.svg" alt="" />
                                  <span>Blogs</span>
                                </a>
                              </li>
                              <li>
                                <a href={`${BASE_URL}/guide`}>
                                  <img src="https://hrone.cloud/wp-content/uploads/2025/11/maki_arrow-1.svg" alt="" />
                                  <span>Guides</span>
                                </a>
                              </li>
                              <li>
                                <a href={`${BASE_URL}/hr-glossary`}>
                                  <img src="https://hrone.cloud/wp-content/uploads/2025/11/maki_arrow-1.svg" alt="" />
                                  <span>Glossary</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="dropdown_group">
                            <h2>Do</h2>
                            <ul>
                              <li>
                                <a href={`${BASE_URL}/download-template/`}>
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
                                <a href={`${BASE_URL}/hr-podcast`}>
                                  <img src="https://hrone.cloud/wp-content/uploads/2025/11/maki_arrow-1.svg" alt="" />
                                  <span>CHRO Podcast</span>
                                </a>
                              </li>
                              <li>
                                <a href={`${BASE_URL}/hr-commune/`}>
                                  <img src="https://hrone.cloud/wp-content/uploads/2025/11/maki_arrow-1.svg" alt="" />
                                  <span>HRCommune</span>
                                </a>
                              </li>
                              <li>
                                <a href={`${BASE_URL}/propel`}>
                                  <img src="https://hrone.cloud/wp-content/uploads/2025/11/maki_arrow-1.svg" alt="" />
                                  <span>HROne PROPEL</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
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
                    <div className="container">
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
              <div className="buttons">
                <a className="green-border-btn" href={LOGIN_URL} target="_blank" rel="noopener noreferrer">
                  Login
                </a>
                <a href="#" className="popnew green-btn" data-id="" onClick={handlePopup}>
                  Get Free Trial
                </a>
              </div>
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

        {/* Mobile menu */}
        <div className={`custom-mobile-nav ${mobileOpen ? "open" : ""}`}>
          <div className="custom-mobile-nav-header">
            <button type="button" className="back-btn" onClick={() => setMobileOpen(false)}>
              <img src="https://content.hrone.cloud/wp-content/uploads/2025/11/left_arrow.svg" alt="back" />
              <span>Back</span>
            </button>
            <button
              type="button"
              className="inner-nav-hamburger"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <img src="https://hrone.cloud/wp-content/themes/hrone-child/assets/images/header/ham-close.svg" alt="" />
            </button>
          </div>
          <div className="mobile-nav-links">
            <a href={`${BASE_URL}/hr-software/`} onClick={() => setMobileOpen(false)}>
              HR Software
            </a>
            <a href={`${BASE_URL}/pricing/`} onClick={() => setMobileOpen(false)}>
              Pricing
            </a>
            <a href={`${BASE_URL}/one-ai/`} onClick={() => setMobileOpen(false)}>
              HR AI Agents
            </a>
            <a href="https://hrone.studio/?source=hrone&medium=website" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
              HROne Studio
            </a>
            <a href={`${BASE_URL}/blog`} onClick={() => setMobileOpen(false)}>
              HR Resources
            </a>
            <a href={`${BASE_URL}/why-hrone/`} onClick={() => setMobileOpen(false)}>
              About
            </a>
            <a
              href="#"
              className="popnew mobile-cta"
              onClick={(e) => {
                e.preventDefault();
                onOpenPopup();
                setMobileOpen(false);
              }}
            >
              Get Free Trial
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
