"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PopupForm({ isOpen, onClose }: PopupFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    popup_official_email: "",
    popup_phone: "",
    popup_number_of_employee_v1: "",
    popup_name: "",
    city_popup: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    setCurrentStep(2);
  };

  const handlePrevious = () => {
    setCurrentStep(1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: send `formData` to your backend or marketing platform
  };

  if (!isOpen) return null;

  return (
    <div className="form-overlay demo-form-image popnewform" style={{ display: "block" }}>
      <div className="formoverlay-container">
        <div className="formoverlay-inner-container">
          <div className="close-formoverlay-btnnw" onClick={onClose}></div>
          <h2 className="formoverlay-inner-container-h2">Try HROne For Free!</h2>
          <div className="demo-form-image-flex">
            <div className="demo-form-image-flex-left">
              <Image
                src="https://hrone.cloud/wp-content/uploads/2024/06/demo-image.png"
                className="demo-form-image-main"
                alt="Demo"
                width={640}
                height={480}
              />
              <div className="demo-form-image-multilogo">
                <Image
                  src="https://hrone.cloud/wp-content/uploads/2024/07/canon-b.png"
                  alt="Canon"
                  width={120}
                  height={60}
                />
                <Image
                  src="https://hrone.cloud/wp-content/uploads/2024/06/demo-timex.png"
                  alt="Timex"
                  width={120}
                  height={60}
                />
                <Image
                  src="https://hrone.cloud/wp-content/uploads/2024/07/bikanervala-b.png"
                  alt="Bikanervala"
                  width={120}
                  height={60}
                />
                <Image
                  src="https://hrone.cloud/wp-content/uploads/2024/07/haier-b.png"
                  alt="Haier"
                  width={120}
                  height={60}
                />
                <Image
                  src="https://hrone.cloud/wp-content/uploads/2024/07/muthoot-b.png"
                  alt="Muthoot"
                  width={120}
                  height={60}
                />
                <Image
                  src="https://hrone.cloud/wp-content/uploads/2025/07/REPUBLIC-GREY.jpg"
                  alt="Republic"
                  width={120}
                  height={60}
                />
              </div>
            </div>
            <div className="demo-form-image-flex-right">
              <div className="form-section floating-form-yellow-white">
                <form id="popupForm" className="propel-eventfrom popupformresponse" onSubmit={handleSubmit}>
                  <fieldset style={{ display: currentStep === 1 ? "block" : "none" }}>
                    <input type="text" className="hidden" value="https://hrone.cloud/hr-software/" name="popup_permalink" readOnly />
                    <input type="text" className="hidden" name="popup_page_title" value="HR Software" readOnly />
                    <input type="text" className="hidden" name="form_name" value="Popup_demo_form" readOnly />
                    <input type="hidden" name="utm_source" className="utm_source" value="" readOnly />
                    <input type="hidden" name="utm_medium" className="utm_medium" value="" readOnly />
                    <input type="hidden" name="utm_campaign" className="utm_campaign" value="" readOnly />
                    <input type="hidden" name="utm_content" className="utm_content" value="" readOnly />
                    <input type="hidden" name="utm_term" className="utm_term" value="" readOnly />

                    <div className="floating-form-control">
                      <input
                        className="floating-form-input popup_official_email"
                        type="email"
                        id="popup_official_email"
                        name="popup_official_email"
                        placeholder="none"
                        autoComplete="off"
                        value={formData.popup_official_email}
                        onChange={handleInputChange}
                        required
                      />
                      <label htmlFor="popup_official_email" className="floating-form-label">
                        Work Email<span className="starred">*</span>
                      </label>
                      <span className="pop_email_error error-txt floating-form-alert"></span>
                    </div>

                    <div className="floating-form-input-group">
                      <span className="floating-form-input-group-text">
                        <img src="https://content.hrone.cloud/wp-content/uploads/2024/06/indian-flag.svg" className="country-flag" alt="India" /> +91
                      </span>
                      <div className="floating-form-group-control">
                        <input
                          className="floating-form-input"
                          type="text"
                          id="popup_phone_nu"
                          name="popup_phone"
                          placeholder="none"
                          autoComplete="off"
                          value={formData.popup_phone}
                          onChange={handleInputChange}
                          required
                        />
                        <label htmlFor="popup_phone" className="floating-form-label">
                          Phone No <span className="starred">*</span>
                        </label>
                        <span className="popup_phone_error error-txt floating-form-alert"></span>
                      </div>
                    </div>

                    <div className="floating-form-control">
                      <select
                        id="popup_no_of_employee"
                        className="floating-form-select"
                        name="popup_number_of_employee_v1"
                        value={formData.popup_number_of_employee_v1}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="" disabled hidden> </option>
                        <option value="1-50">1-50</option>
                        <option value="51-100">51-100</option>
                        <option value="101-200">101-200</option>
                        <option value="201-500">201-500</option>
                        <option value="501-1000">501-1000</option>
                        <option value="1000+">1000+</option>
                      </select>
                      <label className={`floating-form-label ${formData.popup_number_of_employee_v1 ? 'has-value' : ''}`} htmlFor="popup_number_of_employee_v1">
                        Employee Size<span className="starred">*</span>
                      </label>
                      <span className="popup_employee_error error-txt floating-form-alert"></span>
                    </div>

                    <p className="cookies-text-form">
                      By providing your information, you hereby consent to the HROne{" "}
                      <a href="https://content.hrone.cloud/cookies-policy/" target="_blank" rel="noopener">
                        Cookie Policy
                      </a>{" "}
                      and{" "}
                      <a href="https://content.hrone.cloud/privacy-policy/" target="_blank" rel="noopener">
                        Privacy Policy
                      </a>
                      .
                    </p>
                    <input
                      type="button"
                      name="next"
                      className="next-step action-button input-btn-orange-submit"
                      value="Get Started"
                      onClick={handleNext}
                    />
                  </fieldset>

                  <fieldset style={{ display: currentStep === 2 ? "block" : "none" }}>
                    <div className="floating-form-control">
                      <input
                        className="floating-form-input"
                        id="popup_employee_name"
                        type="text"
                        name="popup_name"
                        placeholder="none"
                        autoComplete="off"
                        value={formData.popup_name}
                        onChange={handleInputChange}
                        required
                      />
                      <label htmlFor="name" className="floating-form-label">
                        Name <span className="starred">*</span>
                      </label>
                    </div>

                    <div className="floating-form-control floating-box-city">
                      <input
                        type="text"
                        id="input-box-city-popup"
                        name="city_popup"
                        className="floating-form-input"
                        placeholder="none"
                        autoComplete="off"
                        value={formData.city_popup}
                        onChange={handleInputChange}
                        required
                      />
                      <label htmlFor="city_popup" className="floating-form-label">
                        Search City<span className="starred">*</span>
                      </label>
                      <div className="result-box-city result-box-city-popup" style={{ display: "none" }}></div>
                      <span className="city-error-popup error-txt floating-form-alert"></span>
                    </div>

                    <p className="cookies-text-form">
                      By providing your information, you hereby consent to the HROne{" "}
                      <a href="https://content.hrone.cloud/cookies-policy/" target="_blank" rel="noopener">
                        Cookie Policy
                      </a>{" "}
                      and{" "}
                      <a href="https://content.hrone.cloud/privacy-policy/" target="_blank" rel="noopener">
                        Privacy Policy
                      </a>
                      .
                    </p>
                    <input
                      type="button"
                      name="previous"
                      className="previous-step input-btn-orange-submit w-50"
                      value="Previous"
                      onClick={handlePrevious}
                    />
                    <input
                      type="submit"
                      name="submit"
                      className="submit input-btn-green-submit w-50"
                      id="popupFormSubmit"
                      value="Submit"
                    />
                  </fieldset>
                </form>
                <div id="loaderpopup2" className="loader-main">
                  <div className="loader"></div>
                </div>
              </div>

              <div className="demo-form-image-rating">
                <div className="cust-rating-main aos-init aos-animate" data-aos="fade-up" data-aos-anchor=".para-anc" data-aos-delay="300">
                  <div className="customer-ratings">
                    <div>
                      <div className="ratings-container">
                        <img
                          width="46"
                          height="46"
                          src="https://hrone.cloud/wp-content/uploads/2023/06/Group-14356g-square-1.svg"
                          alt="G2 rating to HROne"
                        />
                      </div>
                    </div>
                    <div className="cust-review">
                      <div className="star-main" data-star-rating="4.8">
                        <div className="star-ratings-css" title="4.8"></div>
                      </div>
                      <p className="cust-review-p">1926+ Reviews | 4.8</p>
                    </div>
                  </div>

                  <div className="customer-ratings">
                    <div>
                      <div className="ratings-container">
                        <img
                          width="46"
                          height="46"
                          src="https://hrone.cloud/wp-content/uploads/2023/06/path3345.svg"
                          alt="Gartner rating to HROne"
                        />
                      </div>
                    </div>
                    <div className="cust-review">
                      <div className="star-main" data-star-rating="4.8">
                        <div className="star-ratings-css" title="4.8"></div>
                      </div>
                      <p className="cust-review-p">682+ Reviews | 4.8</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
