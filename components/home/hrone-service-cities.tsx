import Image from "next/image";
import Building from "@/public/images/Frame.png";
import MapPin from "@/public/images/map-pin.png";
export default function HroneServiceCities() {
    return (
        <div className="hrone-services">
        <Image src={Building} alt="building" className="building" />
        <div className="container">
            <div className="hrone-services-heading">
                <h2>HROne Services by Cities</h2>
                <p className="sans-font">We offer faster response times, on-site assistance, and global-grade application experience locally.</p>
            </div>
            <div className="hrone-services-cities">
            <div className="hrone-services-cities-items">
                                                            <a href="https://hrone.cloud/hr-software-in-chennai/">
                                    <Image src={MapPin} alt="city-icon" />
                                    <p>HR software in Delhi</p>
                                </a>
                                                    </div>
                                                    <div className="hrone-services-cities-items">
                                                            <a href="https://hrone.cloud/hr-software-in-chennai/">
                                    <Image src={MapPin} alt="city-icon" />
                                    <p>HR software in Mumbai</p>
                                </a>
                                                    </div>
                <div className="hrone-services-cities-items">
                                                            <a href="https://hrone.cloud/hr-software-in-chennai/">
                                    <Image src={MapPin} alt="city-icon" />
                                    <p>HR software in Chennai</p>
                                </a>
                                                    </div>
                                            <div className="hrone-services-cities-items">
                                                            <a href="https://hrone.cloud/hr-software-in-hyderabad/">
                                    <Image src={MapPin} alt="city-icon" />
                                    <p>HR software in Hyderabad</p>
                                </a>
                                                    </div>
                                            <div className="hrone-services-cities-items">
                                                            <a href="https://hrone.cloud/hr-software-in-bangalore/">
                                    <Image src={MapPin} alt="city-icon" />
                                    <p>HR software in Banglore</p>
                                </a>
                                                    </div>
                                            <div className="hrone-services-cities-items">
                                                            <a href="https://hrone.cloud/hr-software-gujarat/">
                                    <Image src={MapPin} alt="city-icon" />
                                    <p>HR software in Gujarat</p>
                                </a>
                                                    </div>
                                    </div>
                                </div>
    </div>
    );
}