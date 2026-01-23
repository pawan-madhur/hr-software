import Image from "next/image";
import Onboarding from "@/public/images/Onboarding.png";
import WorkforcePlanning from "@/public/images/Workforce-planning.png";
import BusinessPartner from "@/public/images/Business-Partner.png";
import BusinessIntelligence from "@/public/images/Business-Intelligence.png";
import JVIntegration from "@/public/images/JV-Integration.png";
import WhatsAppBot from "@/public/images/WhatsApp-Bot.png";
export default function AddonSection() {
    return (
        <section className="tailor-cards">
        <div className="container container_cus">
            <h5 className="tailor-cards-h5 sans-font">Addons</h5>
            <h2 className="tailor-cards-title">Tailor everything to your needs</h2>
            <p className="sans-font tailor-cards-para">Enhance your functionality and efficiency with customizable add-ons for your unique requirements.</p>
            <div className="add-on-cards-main-grid tailor-cards-grid">
                <div className="add-on-cards-main-grid-items">
                    <Image className="add-on-card-svg" src={Onboarding} alt="add-on-card-svg" />
                    <h4>Onboarding</h4>
                    <p>Automated onboarding, collaboration and goal assignment</p>
                </div> 
                <div className="add-on-cards-main-grid-items">
                    <Image className="add-on-card-svg" src={WorkforcePlanning} alt="add-on-card-svg" />
                    <h4>Workforce Planning </h4>
                    <p>Unique Code Generator to limit workforce hiring</p>
                </div>
                <div className="add-on-cards-main-grid-items">
                    <Image className="add-on-card-svg" src={BusinessPartner} alt="add-on-card-svg" />
                    <h4>Business Partner </h4>
                    <p>Maintain a centralised database for all your business partners </p>
                </div>
                <div className="add-on-cards-main-grid-items">
                    <Image className="add-on-card-svg" src={BusinessIntelligence} alt="add-on-card-svg" />
                    <h4>Business Intelligence </h4>
                    <p>Empower your decision making with embedded BI </p>
                </div>
                <div className="add-on-cards-main-grid-items">
                    <Image className="add-on-card-svg" src={JVIntegration} alt="add-on-card-svg" />
                    <h4>JV Integration</h4>
                    <p>Payroll data synced with financial systems for reducing manual data entry errors </p>
                </div>
                <div className="add-on-cards-main-grid-items">
                    <Image className="add-on-card-svg" src={WhatsAppBot} alt="add-on-card-svg" />
                    <h4>WhatsApp Bot</h4>
                    <p>Conversational prompts for streamlining collaboration among teams </p>
                </div>
            </div>
            <div className="options-cta-div load-more-btn" data-aos="fade-up" data-aos-delay="100">
                    <button id="load-more-addon" className="green-btn text-center">View All Addon</button>
            </div> 

        </div>
        </section>
    );
}