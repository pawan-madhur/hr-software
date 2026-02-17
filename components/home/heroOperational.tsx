"use client";

type HeroProps = {
    onOpenPopup: () => void;
};

export default function SwitchRating({ onOpenPopup }: HeroProps) {
    return (
        <section className="hr-software">
            <div className="container container_cus">
                {/* Main Content */}
                <div className="hr-software-con">
                    <div className="desc">
                        <h1 className="hr-first-par sans-font">HR Software</h1>
                        <h2 className="hrone-h1">
                            HROne does the operational lifting,
                        </h2>
                        <p className="hrone-h2">So that HR can focus on the big picture.</p>
                        <p className="hrone-p">HROne gives HR the freedom to automate, simplify and organize
                            administrative tasks to shape the workplaces of tomorrow
                        </p>

                        {/* Ratings */}
                        <div className="cust-rating-main">
                            <div className="customer-ratings">
                                <div className="ratings-container">
                                    <img
                                        width="46"
                                        height="46"
                                        src="https://hrone.cloud/wp-content/uploads/2023/06/Group-14356g-square-1.svg"
                                        alt="G2 rating to HROne"
                                    />
                                </div>

                                <div className="cust-review">
                                    <div className="star-main" data-star-rating="4.8">
                                        <div className="star-ratings-css" />
                                    </div>
                                    <p className="cust-review-p">1926+ Reviews | 4.8</p>
                                </div>
                            </div>

                            <div className="customer-ratings">
                                <div className="ratings-container">
                                    <img
                                        width="46"
                                        height="46"
                                        src="https://hrone.cloud/wp-content/uploads/2023/06/path3345.svg"
                                        alt="Gartner rating to HROne"
                                    />
                                </div>

                                <div className="cust-review">
                                    <div className="star-main" data-star-rating="4.8">
                                        <div className="star-ratings-css" />
                                    </div>
                                    <p className="cust-review-p">682+ Reviews | 4.8</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="buttons">
                            <a
                                href="#"
                                className="green-btn col-6 text-center popnew"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onOpenPopup();
                                }}
                            >
                                Get Free Trial
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                        stroke="#F9FFFE"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M12 16L16 12L12 8"
                                        stroke="#F9FFFE"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M8 12H16"
                                        stroke="#F9FFFE"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="vertor-mob-relative">
                        <picture className="hero-right-abs">
                            <img
                                className="hero-right-abs"
                                src="https://hrone.cloud/wp-content/uploads/2023/07/banner-img-desk.webp"
                                alt="HR Software"
                            />
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    );
}
