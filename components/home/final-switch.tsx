import React from "react";

type HeroProps = {
    onOpenPopup: () => void;
};

export default function FinalSwitch({ onOpenPopup }: HeroProps) {
    return (
        <div className="final-switch">
            <div className="container final-switch-con container_cus">
                <img
                    className="hexagon-svg "
                    src="https://hrone.cloud/wp-content/themes/hrone-child/assets/images/hrsoftware/switch-svg1.svg"
                    alt=""
                />

                <h2>To save 20+ work hours per week,
                    <br />
                    <span>Make your final switch with us.</span>
                </h2>

                <div className="final-switch-con-imagediv ">
                    <img className="arrow"
                        src="https://hrone.cloud/wp-content/themes/hrone-child/assets/images/hrsoftware/Line64.webp"
                        alt=""
                    />
                    <img
                        className="toggle-img"
                        src="https://hrone.cloud/wp-content/uploads/2023/07/switch.webp"
                        alt="Contact with HROne"
                    />
                </div>

                <p> HROne <br /> Your Workplace. Your Way. </p>
                <div className="final-switch-con-anchor">
                    <a
                        href="#"
                        className="popnew"
                        onClick={(e) => {
                            e.preventDefault();
                            onOpenPopup();
                        }}
                    >
                        Get Free Demo
                    </a>
                </div>

                <img
                    className="wave-svg "
                    src="https://hrone.cloud/wp-content/themes/hrone-child/assets/images/hrsoftware/switch-svg2.svg"
                    alt=""
                />
            </div>
        </div>
    );
};


