import React from 'react';
import {StickyScroll} from "@/components/ui/sticky-scroll-reveal";
import {GlareCard} from "@/components/ui/glare-card";
import {SparklesCore} from "@/components/ui/sparkles";

const Education = () => {
    return (
        <div id="education" className="my-4">
            <h1 className="heading">
                My {" "}
                <span className="text-purple">Education</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10 sm:p-6 w-full">


                <GlareCard className="flex flex-col items-left justify-center">
                    <img
                        className="w-full top-0 p-8"
                        src="/ijbc.png"
                        alt=" "/>
                    <div className="bottom-0 px-4 mt-8 left-0">
                        <p className="font-bold text-white text-lg">College</p>
                        <p className="font-bold text-white text-lg">HAVO</p>
                        <p className="font-normal text-base text-neutral-200 max-w-full">
                            2014 - 2020
                        </p>
                    </div>
                </GlareCard>
                <GlareCard className="flex flex-col items-left justify-center">
                    <img
                        className="w-full top-0 p-8"
                        src="/windesheim1.png"
                        alt=" "/>
                    <div className="bottom-0 px-4 mt-8">
                        <p className="font-bold text-white text-lg">HBO-ICT</p>
                        <p className="font-bold text-white text-lg">Software Engineering</p>
                        <p className="font-normal text-base text-neutral-200 max-w-full">
                            2020 - now
                        </p>
                    </div>
                </GlareCard>
                <GlareCard className="flex flex-col items-left justify-center">
                    <SparklesCore
                        id="tsparticlesfullpage"
                        background="transparent"
                        minSize={0.6}
                        maxSize={1.4}
                        particleDensity={100}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />

                </GlareCard>
            </div>
        </div>
    );
};

export default Education;