"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { validatePopupStep1, validatePopupStep2 } from "../lib/popupFormValidation";
import { cities } from "../lib/cities";

const HUBSPOT_PORTAL_ID = "7277696";
const HUBSPOT_FORM_GUID = "6a8e8749-b385-4c50-b604-0a4564eeb452";
const HUBSPOT_API_URL = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`;

function getHubspotCookie(): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(/hubspotutk=([^;]+)/);
  return match ? match[1] : undefined;
}

function getUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_content: params.get("utm_content") || "",
    utm_term: params.get("utm_term") || "",
  };
}

/** Sanitize string for HubSpot: trim, limit length, strip control chars */
function sanitizeString(value: string, maxLength: number = 255): string {
  if (value == null || typeof value !== "string") return "";
  return value.replace(/[\x00-\x1F\x7F]/g, "").trim().slice(0, maxLength);
}

/** Get validated form values from DOM (same source as validation) and sanitize */
function getValidatedFormPayload(stateValue: string) {
  if (typeof document === "undefined") return null;
  const emailInput = document.getElementById("popup_official_email") as HTMLInputElement | null;
  const phoneInput = document.getElementById("popup_phone_nu") as HTMLInputElement | null;
  const empSelect = document.getElementById("popup_no_of_employee") as HTMLSelectElement | null;
  const nameInput = document.getElementById("popup_employee_name") as HTMLInputElement | null;
  const cityInput = document.getElementById("input-box-city-popup") as HTMLInputElement | null;
  if (!emailInput || !phoneInput || !empSelect || !nameInput || !cityInput) return null;

  const email = sanitizeString(emailInput.value, 100).toLowerCase();
  const phone = (phoneInput.value || "").replace(/\D/g, "").slice(0, 10);
  const emp = (empSelect.value || "").trim();
  const name = sanitizeString(nameInput.value, 255);
  const city = sanitizeString(cityInput.value, 255);
  const state = sanitizeString(stateValue, 100);

  return { email, phone, emp, name, city, state };
}

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PopupForm({ isOpen, onClose }: PopupFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [filteredCities, setFilteredCities] = useState<typeof cities>([]);
  const [isCitySelected, setIsCitySelected] = useState(false);
  const [formData, setFormData] = useState({
    popup_official_email: "",
    popup_phone: "",
    popup_number_of_employee_v1: "",
    popup_name: "",
    city_popup: "",
    state: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

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
  useEffect(() => {
    (window as any).__isCitySelected = isCitySelected;
  }, [isCitySelected]);


  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    let finalValue = value;

    // Only alphabets for Name
    if (name === "popup_name") {
      finalValue = value.replace(/[^a-zA-Z\s]/g, "");
    }

    // Only numbers + first digit 6-9 for Phone
    if (name === "popup_phone") {
      let nums = value.replace(/\D/g, "");

      // block 0–5 as first digit
      if (nums.length === 1 && !/^[6-9]$/.test(nums)) {
        return; // don't update state → won't type
      }

      finalValue = nums.slice(0, 10);
    }

    setFormData((prev) => ({ ...prev, [name]: finalValue }));
  };



  const handleNext = () => {
    const isValid = validatePopupStep1();
    if (!isValid) return;
    setCurrentStep(2);
  };

  const handlePrevious = () => {
    setCurrentStep(1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Run both step 1 and step 2 validations before sending to HubSpot
    const step1Valid = validatePopupStep1();
    const step2Valid = validatePopupStep2();
    if (!step1Valid || !step2Valid) return;

    const payload = getValidatedFormPayload(formData.state);
    if (!payload) return;

    // Final server-bound checks (same rules as validation)
    const phoneValid = /^[6-9]\d{9}$/.test(payload.phone);
    const emailValid =
      payload.email.includes("@") &&
      payload.email.length > 3 &&
      payload.email.split("@")[1]?.length > 0;
    if (!phoneValid || !emailValid || !payload.emp || !payload.name || !payload.city) {
      setSubmitMessage({ type: "error", text: "Please fix the errors and try again." });
      return;
    }

    setSubmitMessage(null);
    setIsSubmitting(true);

    const nameParts = payload.name.split(/\s+/).filter(Boolean);
    const firstname = sanitizeString(nameParts[0] || "", 40);
    const lastname = sanitizeString(nameParts.slice(1).join(" "), 40);

    const utm = getUtmParams();
    const hubspotCookie = getHubspotCookie();

    const hubspotData = {
      submittedAt: new Date().toISOString(),
      fields: [
        { objectTypeId: "0-1", name: "firstname", value: firstname },
        { objectTypeId: "0-1", name: "lastname", value: lastname },
        { objectTypeId: "0-1", name: "email", value: payload.email },
        { objectTypeId: "0-1", name: "phone", value: "+91" + payload.phone },
        { objectTypeId: "0-1", name: "city", value: payload.city },
        { objectTypeId: "0-1", name: "state_sap__cloned_", value: payload.state },
        { objectTypeId: "0-1", name: "country", value: "India" },
        { objectTypeId: "0-1", name: "number_of_employee_v1", value: payload.emp },
        { objectTypeId: "0-1", name: "utm_source", value: sanitizeString(utm.utm_source, 255) },
        { objectTypeId: "0-1", name: "utm_medium", value: sanitizeString(utm.utm_medium, 255) },
        { objectTypeId: "0-1", name: "utm_campaign", value: sanitizeString(utm.utm_campaign, 255) },
        { objectTypeId: "0-1", name: "utm_content", value: sanitizeString(utm.utm_content, 255) },
        { objectTypeId: "0-1", name: "utm_term", value: sanitizeString(utm.utm_term, 255) },
      ],
      context: {
        hutk: hubspotCookie,
        pageUri: typeof window !== "undefined" ? window.location.href : "",
        pageName: typeof document !== "undefined" ? document.title : "",
      },
      legalConsentOptions: {
        consent: {
          consentToProcess: true,
          text: "I agree to allow HROne to store and process my personal data.",
        },
      },
    };

    fetch(HUBSPOT_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(hubspotData),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsSubmitting(false);
        setFormData({
          popup_official_email: "",
          popup_phone: "",
          popup_number_of_employee_v1: "",
          popup_name: "",
          city_popup: "",
          state: "",
        });
        setCurrentStep(1);
        setIsCitySelected(false);

        const message = data.inlineMessage || "Thank you for your submission!";
        setSubmitMessage({ type: "success", text: message });

        const thankYouUrl =
          (typeof window !== "undefined" && (window as any).hronePopupForm?.thankYouUrl) ||
          (typeof window !== "undefined" ? `${window.location.origin}/thankyou` : "/thankyou");
        setTimeout(() => {
          window.location.href = thankYouUrl;
        }, 1000);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        setIsSubmitting(false);
        setSubmitMessage({
          type: "error",
          text: "There was an error submitting your form. Please try again.",
        });
      });
  };



  if (!isOpen) return null;

  return (
    <>
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
                  {submitMessage && (
                    <div className={`hm-banner-msg ${submitMessage.type === "success" ? "success-msg" : "error-msg"}`}>
                      <h2>{submitMessage.type === "success" ? "Success!" : "Error!"}</h2>
                      <p>{submitMessage.text}</p>
                    </div>
                  )}
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
                            inputMode="numeric"
                            maxLength={10}
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
                        />
                        <label htmlFor="name" className="floating-form-label">
                          Name <span className="starred">*</span>
                        </label>
                        <span className="name-error-popup error-txt floating-form-alert"></span>
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
                          onChange={(e) => {
                            const value = e.target.value;
                            setFormData((prev) => ({ ...prev, city_popup: value }));
                            setIsCitySelected(false); // reset when user types

                            if (value.length > 1) {
                              const results = cities
                                .filter((c) =>
                                  c.city.toLowerCase().includes(value.toLowerCase())
                                )
                                .slice(0, 6);

                              setFilteredCities(results);
                            } else {
                              setFilteredCities([]);
                            }
                          }}
                        />
                        <label htmlFor="city_popup" className="floating-form-label">
                          Search City<span className="starred">*</span>
                        </label>
                        <div
                          className="result-box-city result-box-city-popup"
                          style={{ display: filteredCities.length ? "block" : "none" }}
                        >
                          {filteredCities.map((item, index) => (
                            <div
                              key={index}
                              className="city-option"
                              onClick={() => {
                                setFormData((prev) => ({ ...prev, city_popup: item.city, state: item.state }));
                                setFilteredCities([]);
                                setIsCitySelected(true); // ✅ valid selection
                              }}
                              style={{ cursor: "pointer", padding: "6px 10px" }}
                            >
                              {item.city}, {item.state}
                            </div>
                          ))}

                        </div>

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
                        disabled={isSubmitting}
                      />
                    </fieldset>
                  </form>
                  <div id="loaderpopup2" className="loader-main" style={{ display: isSubmitting ? "flex" : "none" }}>
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


    </>
  );
}
