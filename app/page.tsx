
"use client";

import { useState, useCallback } from "react";

import Hero from "@/components/home/hero";
import SoftwareAccordian from "@/components/home/softwareAccordian";
import TrulyMobile from "@/components/home/truly-mobile";
import CustomerTestimonial from "@/components/home/customer-testimonial";
import SwitchRating from "@/components/home/switch-rating";
import IntegrationSection from "@/components/home/integration-section";
import AddonSection from "@/components/home/addon-section";
import Recommended from "@/components/home/recommended";
import DownloadTemplate from "@/components/home/download-template";
import HroneServiceCities from "@/components/home/hrone-service-cities";
import Faqs from "@/components/home/Faqs";
import PopupForm from "@/components/home/popup-form";
import TopBar from "@/components/home/top-bar";
import MainHeader from "@/components/home/main-header";

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = useCallback(() => {
    setIsPopupOpen(true);
  }, []);

  const closePopup = useCallback(() => {
    setIsPopupOpen(false);
  }, []);

  return (
    <>
      <TopBar onOpenPopup={openPopup} />
      <MainHeader onOpenPopup={openPopup} />
      <Hero onOpenPopup={openPopup} />
      <SoftwareAccordian />
      <TrulyMobile />
      <CustomerTestimonial />
      <SwitchRating />
      <IntegrationSection />
      <AddonSection />
      <Recommended />
      <DownloadTemplate />
      <HroneServiceCities />
      <Faqs />
      <PopupForm isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
}
