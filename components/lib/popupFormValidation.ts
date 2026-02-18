import { blockedDomains } from "../lib/blockedDomains";

export function validatePopupStep1() {
    let isValid = true;

    const emailInput = document.getElementById("popup_official_email") as HTMLInputElement | null;
    const phoneInput = document.getElementById("popup_phone_nu") as HTMLInputElement | null;
    const empSelect = document.getElementById("popup_no_of_employee") as HTMLSelectElement | null;

    if (!emailInput || !phoneInput || !empSelect) return false;

    const email = emailInput.value.trim().toLowerCase();
    const phone = phoneInput.value.trim();
    const emp = empSelect.value;

    const emailDomain = email.split("@")[1]?.trim().toLowerCase();

    // EMAIL
    if (!email || !email.includes("@") || !emailDomain || blockedDomains.some(domain => emailDomain.includes(domain.toLowerCase()))) {
        emailInput.classList.add("error");
        document.querySelector(".pop_email_error")!.textContent = "Please enter a valid work email.";
        isValid = false;
    } else {
        emailInput.classList.remove("error");
        document.querySelector(".pop_email_error")!.textContent = "";
    }

    // PHONE
    if (!/^[6-9]\d{9}$/.test(phone)) {
        phoneInput.classList.add("error");
        document.querySelector(".popup_phone_error")!.textContent = "Insert a valid number starting with 6/7/8/9";
        isValid = false;
    } else {
        phoneInput.classList.remove("error");
        document.querySelector(".popup_phone_error")!.textContent = "";
    }

    // EMPLOYEE SIZE
    if (!emp) {
        empSelect.classList.add("error");
        document.querySelector(".popup_employee_error")!.textContent = "Please select the number of employees.";
        isValid = false;
    } else {
        empSelect.classList.remove("error");
        document.querySelector(".popup_employee_error")!.textContent = "";
    }

    return isValid;
}

export function validatePopupStep2() {
    let isValid = true;

    const nameInput = document.getElementById("popup_employee_name") as HTMLInputElement | null;
    const cityInput = document.getElementById("input-box-city-popup") as HTMLInputElement | null;

    if (!nameInput || !cityInput) return false;

    const nameError = document.querySelector(".name-error-popup") as HTMLElement | null;
    const cityError = document.querySelector(".city-error-popup") as HTMLElement | null;

    // NAME
    if (!nameInput.value.trim()) {
        nameInput.classList.add("error");
        if (nameError) nameError.textContent = "Name is Required.";
        isValid = false;
    } else {
        nameInput.classList.remove("error");
        if (nameError) nameError.textContent = "";
    }

    // CITY (must be selected from list)
    if (!cityInput.value.trim()) {
        cityInput.classList.add("error");
        if (cityError) cityError.textContent = "City is required.";
        isValid = false;
    }
    else if (!(window as any).__isCitySelected) {
        cityInput.classList.add("error");
        if (cityError) cityError.textContent = "Please select a city from the list.";
        isValid = false;
    }
    else {
        cityInput.classList.remove("error");
        if (cityError) cityError.textContent = "";
    }


    return isValid;
}
