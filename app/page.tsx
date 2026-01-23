
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
export default function Home() {
  return (
    <>
      <Hero />
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
    </>
  );
}
