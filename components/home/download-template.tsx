import Image from "next/image";
import ArrowRightCircle from "@/public/images/arrow-right-circle.png";
import DownloadTemplateImage from "@/public/images/downloadtemplate.png";
export default function DownloadTemplate() {
    return (
        <div className="download-ready">
        <div className="container download-ready-con container_cus">
            <div className="download-ready-con-text">
                <h2>Download our ready to use templates</h2>
                <p className="sans-font">to get operational tasks done faster and save more time</p>
                <a href="" className="green-btn col-6 text-center popnew" >click here
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F9FFFE" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 16L16 12L12 8" stroke="#F9FFFE" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8 12H16" stroke="#F9FFFE" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
            </div>
                <div className="download-ready-con-sideimg">
                    <Image src={DownloadTemplateImage} alt="download-template" />
                </div>
        </div>
    </div>
    );
}