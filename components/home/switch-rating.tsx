import Image from "next/image";
import gartnerLogo from "@/public/images/Gartner_logo.png";
import starIcon from "@/public/images/rating-stars.png";
import softwareSuggestLogo from "@/public/images/software-suggest.png";


type HeroProps = {
    onOpenPopup: () => void;
};

export default function SwitchRating({ onOpenPopup }: HeroProps) {
    return (
        <section className="switch-and-save">
            <div className="container">
                <div className="switch-and-save-flex">
                    <div className="switch-and-save-flex-text">
                        <h2 className="">Switch and <span>save 20+ work</span> hours weekly!</h2>
                        <a href="#" className="sft_btn popnew"
                            onClick={(e) => {
                                e.preventDefault();
                                onOpenPopup();
                            }}>
                            Get Free Trial</a>
                    </div>
                    <div className="switch-and-save-flex-stardiv">
                        <div className="star-div-main">
                            <div className="company-logo">
                                <Image src={gartnerLogo} alt="Gartner logo" />
                            </div>
                            <div className="company-star">
                                <Image src={starIcon} alt="star" />
                                <p>56 Reviews | 4.7 </p>
                            </div>
                        </div>
                        <div className="star-div-main aos-init aos-animate">
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