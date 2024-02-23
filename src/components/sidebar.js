import React from 'react'

const Sidebar = ({ onClose }) => {
    return (
        <div>
            <div className="w-[403px] flex flex-row items-start justify-end py-0 pr-5 pl-0 box-border text-base text-firebrick">
                <div className="flex-1 flex flex-row items-start justify-start relative">
                    <div className="h-2 w-2 absolute my-0 mx-[!important] bottom-[163px] left-[96px] rounded-[50%] bg-gray-400 z-[2]" />
                    <div className="h-2 w-2 absolute my-0 mx-[!important] bottom-[86px] left-[96px] rounded-[50%] bg-gray-400 z-[2]" />
                    <div className="h-[30px] w-[30px] absolute my-0 mx-[!important] top-[432px] right-[18px] rounded-8xs box-border z-[1] border-[1px] border-solid border-gainsboro" />
                    <div className="flex-1 bg-gray-200 flex flex-col items-center justify-start pt-[66px] pb-[159px] pr-[19px] pl-[33px] gap-[40px] z-[5]">
                        <div className="w-[383px] h-[927px] relative bg-gray-200 hidden" />
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[13px] pl-0 text-center text-9xl">
                            <div className="flex-1 flex flex-col items-start justify-start gap-[28px]">
                                <div className="w-[259px] flex flex-col items-end justify-start gap-[10px]">
                                    <div className="self-stretch flex flex-row items-start justify-start">
                                        <div className="w-[201px] flex flex-row items-start justify-between py-0 pr-px pl-0 box-border">
                                            <img
                                                className="h-[13.2px] w-[19.6px] relative z-[6]"
                                                loading="eager"
                                                alt=""
                                                src="/vector.svg"
                                                onClick={onClose}
                                            />
                                            <img
                                                className="h-[89px] w-[89px] relative rounded-[50%] object-cover z-[6]"
                                                loading="eager"
                                                alt=""
                                                src="/unsplashvvewjjrrhgk-1@2x.png"
                                            />
                                        </div>
                                    </div>
                                    <h2 className="m-0 h-[33px] relative text-inherit font-semibold font-inherit inline-block z-[6]">
                                        Dave C. Brown
                                    </h2>
                                    <div className="flex flex-row items-start justify-start py-0 px-[53px] text-sm text-white">
                                        <div className="relative font-light z-[6]">@dave_brown</div>
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-col items-end justify-start gap-[20px]">
                                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[7px] pl-0">
                                        <div className="h-px flex-1 relative bg-silver z-[6]" />
                                    </div>
                                    <div className="w-[306px] flex flex-row items-start justify-between">
                                        <nav className="m-0 flex flex-col items-start justify-start gap-[14px] text-left text-base text-white font-roboto">
                                            <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[5px] gap-[22px]">
                                                <img
                                                    className="h-4 w-4 relative z-[6]"
                                                    alt=""
                                                    src="/pen.svg"
                                                />
                                                <div className="relative z-[6]">Edit Profile</div>
                                            </div>
                                            <div className="flex flex-row items-start justify-start pt-0 px-0 pb-1 gap-[18px]">
                                                <img
                                                    className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[6]"
                                                    loading="eager"
                                                    alt=""
                                                    src="/settings.svg"
                                                />
                                                <div className="relative z-[6]">Payments</div>
                                            </div>
                                            <div className="flex flex-row items-start justify-start gap-[16px]">
                                                <img
                                                    className="h-[22px] w-[22px] relative overflow-hidden shrink-0 min-h-[22px] z-[6]"
                                                    loading="eager"
                                                    alt=""
                                                    src="/frame.svg"
                                                />
                                                <div className="relative z-[6]">About Us</div>
                                            </div>
                                            <div className="flex flex-row items-center justify-start gap-[18px]">
                                                <img
                                                    className="h-6 w-6 relative overflow-hidden shrink-0 z-[6]"
                                                    loading="eager"
                                                    alt=""
                                                    src="/privacy-tip.svg"
                                                />
                                                <div className="relative z-[6]">Your Privacy</div>
                                            </div>
                                            <div className="flex flex-row items-start justify-start gap-[18px]">
                                                <img
                                                    className="h-6 w-6 relative overflow-hidden shrink-0 z-[6]"
                                                    loading="eager"
                                                    alt=""
                                                    src="/search.svg"
                                                />
                                                <div className="relative z-[6]">Contact Us</div>
                                            </div>
                                        </nav>
                                        <div className="flex flex-col items-end justify-start gap-[14px]">
                                            <div className="flex flex-row items-start justify-start py-0 pr-1 pl-0">
                                                <img
                                                    className="h-6 w-6 relative overflow-hidden shrink-0 z-[6]"
                                                    loading="eager"
                                                    alt=""
                                                    src="/chevron-right.svg"
                                                />
                                            </div>
                                            <img
                                                className="w-6 h-6 relative overflow-hidden shrink-0 z-[6]"
                                                loading="eager"
                                                alt=""
                                                src="/chevron-right.svg"
                                            />
                                            <img
                                                className="w-6 h-6 relative overflow-hidden shrink-0 z-[6]"
                                                loading="eager"
                                                alt=""
                                                src="/chevron-right.svg"
                                            />
                                            <img
                                                className="w-6 h-6 relative overflow-hidden shrink-0 z-[6]"
                                                loading="eager"
                                                alt=""
                                                src="/chevron-right.svg"
                                            />
                                            <img
                                                className="w-6 h-6 relative overflow-hidden shrink-0 z-[6]"
                                                loading="eager"
                                                alt=""
                                                src="/chevron-right.svg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-12 gap-[20px] text-white">
                            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[11px]">
                                <div className="flex-1 flex flex-col items-start justify-start gap-[19px] z-[6]">
                                    <div className="self-stretch flex flex-row items-start justify-between">
                                        <div className="flex flex-row items-start justify-start gap-[19px]">
                                            <img
                                                className="h-6 w-6 relative overflow-hidden shrink-0"
                                                loading="eager"
                                                alt=""
                                                src="/settings.svg"
                                            />
                                            <div className="relative">Payments</div>
                                        </div>
                                        <img
                                            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                                            loading="eager"
                                            alt=""
                                            src="/chevron-right-6.svg"
                                        />
                                    </div>
                                    <div className="w-[305px] flex flex-row items-start justify-between">
                                        <div className="flex flex-row items-start justify-start gap-[20px]">
                                            <img
                                                className="h-[21px] w-[21px] relative min-h-[21px]"
                                                loading="eager"
                                                alt=""
                                                src="/frame.svg"
                                            />
                                            <div className="relative">About Us</div>
                                        </div>
                                        <img
                                            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                                            loading="eager"
                                            alt=""
                                            src="/chevron-right-6.svg"
                                        />
                                    </div>
                                    <div className="w-[311px] flex flex-row items-start justify-start py-0 px-1 box-border">
                                        <div className="flex-1 flex flex-row items-start justify-between">
                                            <div className="flex flex-row items-start justify-start gap-[16px]">
                                                <img
                                                    className="h-[21px] w-[21px] relative min-h-[21px]"
                                                    loading="eager"
                                                    alt=""
                                                    src="/group-45.svg"
                                                />
                                                <div className="relative">Language</div>
                                            </div>
                                            <img
                                                className="h-6 w-6 relative min-h-[24px]"
                                                loading="eager"
                                                alt=""
                                                src="/chevron-right-6.svg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                            <div className="w-[310px] h-px relative box-border z-[6] border-t-[1px] border-solid border-silver" />
                        <div className="self-stretch flex flex-row items-start justify-start py-0 px-3.5">
                            <div className="flex flex-row items-start justify-start gap-[18px]">
                                <img
                                    className="h-[22px] w-[22px] relative overflow-hidden shrink-0 min-h-[22px] z-[6]"
                                    loading="eager"
                                    alt=""
                                    src="/logout.svg"
                                />
                                <div className="relative z-[6]">Log Out</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
