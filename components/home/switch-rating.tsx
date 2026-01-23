import Image from "next/image";
import gartnerLogo from "@/public/images/Gartner_logo.png";
import starIcon from "@/public/images/rating-stars.png";
import softwareSuggestLogo from "@/public/images/software-suggest.png";
export default function SwitchRating() {
    return (
        <section className="switch-and-save">
        <div className="container">
            <div className="switch-and-save-flex">
                <div className ="switch-and-save-flex-text">
                                            <h2 className="">Switch and <span>save 20+ work</span> hours weekly!</h2>
                                                                <a href="#" data-aos="fade-up" data-aos-delay="200" data-aos-offset="0" className="popnew aos-init aos-animate" data-id="6a8e8749-b385-4c50-b604-0a4564eeb452">Get Free Trial</a>
                                    </div>
                                    <div className="switch-and-save-flex-stardiv">
                                                    <div className="star-div-main aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">
                                <div className="company-logo">
                                                                            <Image src={gartnerLogo} alt="Gartner logo" />
                                                                    </div>
                                <div className="company-star">
                                    <Image src={starIcon} alt="star" />
                                    <p>56 Reviews | 4.7 </p>
                                </div>
                            </div>
                                                    <div className="star-div-main aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">
                                <div className="company-logo">
                                                                            <Image src={softwareSuggestLogo} alt="Software Suggest Logo" />
                                                                    </div>
                                <div className="company-star">
                                    <Image src={starIcon} alt="star" />
                                    <p>36 Reviews | 4.7 </p>
                                </div>
                            </div>
                                            </div>
                            </div>
        </div>
    </section>
    );
}