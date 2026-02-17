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
                    <a href="" className="green-btn col-6 text-center popnew" > <span>Click Here </span>
                        <Image src={ArrowRightCircle} alt="arrow-right-circle" />
                    </a>
                </div>
                <div className="download-ready-con-sideimg">
                    <Image src={DownloadTemplateImage} alt="download-template" />
                </div>
            </div>
        </div>
    );
}