"use client"
import {cn} from "@/utils/cn";
import {BackgroundGradientAnimation} from "@/components/ui/GradientBG";
import { GlobeDemo } from "@/components/ui/GridGlobe";
import React, {useEffect, useState} from "react";
import MagicButton from "@/components/ui/MagicButton";
import {LucideSend} from "lucide-react";
import {SparklesCore} from "@/components/ui/sparkles";
import {isSafari} from "@floating-ui/react/utils";

export const BentoGrid = ({
                              className,
                              children,
                          }: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
                                  className,
                                  title,
                                  description,
                                  img,
                                  imgClassName,
                                  titleClassName,
                                  spareImg,
                                  id,
                              }: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
    id: number;
}) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("af180902@gmail.com");
        setCopied(true);
    }

    const [isSafari, setIsSafari] = useState(false);

    useEffect(() => {
        // Detect if the browser is Safari
        const userAgent = navigator.userAgent.toLowerCase();
        const isSafariBrowser = /safari/.test(userAgent) && !/chrome/.test(userAgent);
        setIsSafari(isSafariBrowser);
        console.log("Is Safari: ", isSafariBrowser);
    }, []);






    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input flex flex-col space-y-4 justify-between  border-white/[0.1]",
                className
            )}
            style={{
                background: "rgb(4,7,29)",
                backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
        >
            <div className={`${id === 6 && "flex justify-center"} h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, "object-cover object-center")}
                        />
                    )}
                </div>
                <div className={`absolute right-0 -bottom-5 ${id === 5} && "w-full backdrop-opacity-80"`}>
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            className="object-cover object-center h-full w-full"
                        />
                    )}
                </div>

                {id === 1 && (
                    <SparklesCore
                        id="tsparticlesfullpage2"
                        background="transparent"
                        minSize={0.6}
                        maxSize={1.4}
                        particleDensity={100}
                        className="w-full h-4/5 absolute"
                        particleColor="#FFFFFF"
                    />
                )}
                {id === 6 && (
                    <BackgroundGradientAnimation />
                )}

                <div className={cn(
                    titleClassName, "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
                )}>

                    <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
                        {description}
                    </div>
                    <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
                        {title}
                    </div>


                {id === 2 && <GlobeDemo />}

                {id === 3 && (
                    <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                        <div className="flex flex-col gap-3 lg:gap-8">
                            <span className="py-4 px-3 rounded-xl text-center bg-[#10132E]"/>
                            {["Swift", "Next.js", "Laravel"].map((item) => (
                                <span key={item}
                                      className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                                    {item}
                                </span>
                            ))}
                            {/*<span className="py-4 px-3 rounded-xl text-center bg-[#10132E]"/>*/}
                        </div>
                        <div className="flex flex-col gap-3 lg:gap-8">
                            {["React", "Docker", "Python"].map((item) => (
                                <span key={item}
                                      className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                                    {item}
                                </span>
                            ))}
                            <span className="py-4 px-3 rounded-xl text-center bg-[#10132E]"/>

                        </div>
                    </div>
                )}

                    {id === 6 && (
                        <div className="mt-5 relative">

                            <a href="mailto:af180902@gmail.com">

                                {isSafari ? (
                                    <button onClick={handleCopy} className="btn border border-white p-2 rounded-lg inline-flex h-full w-full cursor-pointer items-center justify-center bg-slate-950 px-7 text-sm font-medium text-white  gap-2"><LucideSend size={20} /> Send a message</button>
                                ) : (
                                    <MagicButton title={copied ? "Sending..." : "Send a message"}
                                                 icon={<LucideSend size={20} />} position="left" otherClasses="`bg-[#161a31]"
                                                 handleClick={handleCopy} />
                                )}
                            </a>

                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};
