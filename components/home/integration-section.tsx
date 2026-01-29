import Image from "next/image";
import gSuiteLogo from "@/public/images/g-suite.png";
import office365Logo from "@/public/images/office365.png";
import resumeParserLogo from "@/public/images/Resume-Parser.png";
import microsoftLogo from "@/public/images/microsoft.png";
import sapLogo from "@/public/images/sap.png";
import biometricLogo from "@/public/images/Biometric.png";
import ekycLogo from "@/public/images/ekyc.png";
import zillionLogo from "@/public/images/zillion.png";
export default function IntegrationSection() {
    return (
        <section className="integration-automate" id="integration-automate">
        <div className="container container_cus">
            <div className="title-div">
                    <h5 className="integration-h5">Integrations</h5>
                    <h2 className="sec-title">Integrate and Automate HR Workflows to Focus on People’s Analytics </h2>
                    <p className="inte-para">Eliminate manual interventions and automate HR processes, freeing up more time for your smart decision making. </p>
            </div>
            <div className="options-main-div">
                <div className="points">
                            <a href="">
                                <Image className="company-logo" src={gSuiteLogo} alt="g-suite-logo" />
                            <p>Simplify your HR operations and boost productivity with real-time collaboration. </p>
                            </a>
                </div>
                <div className="points">
                                <a href="">
                                    <Image className="company-logo" src={office365Logo} alt="office365-logo" />
                                <p>Effortlessly unify business apps with Office 365 for enhanced productivity. </p>
                                </a>
                </div>
                <div className="points">
                                <a href="">
                                    <Image className="company-logo" src={microsoftLogo} alt="microsoft-logo" />
                                <p>Automate your workflows for intelligent reporting & smooth collaboration. </p>
                                </a>
                </div>
                <div className="points">
                                <a href="">
                                    <Image className="company-logo" src={sapLogo} alt="sap-logo" />
                                <p>Ensure accurate and up-to-date information across the organization. </p>
                                </a>
                </div>
                <div className="points">
                                <a href="">
                                    <Image className="company-logo" src={biometricLogo} alt="biometric-logo" />
                                <p>Data integration for heightened security and efficient tracking </p>
                                </a>
                </div>
                <div className="points">
                                <a href="">
                                    <Image className="company-logo" src={zillionLogo} alt="zillion-logo" />
                                <p>Easily track and distribute rewards to elevate employee EX </p>
                                </a>
                </div>
                <div className="points">
                                <a href="">
                                    <Image className="company-logo" src={ekycLogo} alt="ekyc-logo" />
                                <p>Streamline employee onboarding with digital verification. </p>
                                </a>
                </div>
                <div className="points">
                                <a href="">
                                    <Image className="company-logo" src={resumeParserLogo} alt="resume-parser-logo" />
                                <p>Process large volumes of resumes efficiently and simplify hiring.  </p>
                                </a>
                </div>
            </div>
          <div className="options-cta-div">
            <a href="https://hrone.cloud/integration/" className="green-btn">See All Integrations</a>
          </div>
          

        </div>
    </section>
    );
}