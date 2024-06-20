"use client"
import React, {useEffect, useState} from 'react';
import {Spotlight} from "@/components/ui/Spotlight";
import {TextGenerateEffect} from "@/components/ui/TextGenerateEffect";
import MagicButton from "@/components/ui/MagicButton";
import {Camera, CircleChevronDown, LucideSend, Radar, SquareArrowOutUpRight} from "lucide-react";



const Hero = () => {
    const [isSafari, setIsSafari] = useState(false);

    useEffect(() => {
        // Detect if the browser is Safari
        const userAgent = navigator.userAgent.toLowerCase();
        const isSafariBrowser = /safari/.test(userAgent) && !/chrome/.test(userAgent);
        setIsSafari(isSafariBrowser);
        console.log("Is Safari: ", isSafariBrowser);
    }, []);

    return (
        <div className="pb-20 pt-36">
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
                <Spotlight className="-top-10 -left-full h-[80vh] w-[50vw]" fill="purple"/>
                <Spotlight className="-top-28 -left-80 h-[80vh] w-[50vw]" fill="blue"/>
            </div>

            <div
                className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
            </div>

            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h2 className="uppercase tracking-widest text-xs text-blue-100 max-w-80">
                        your front-end enthousiast
                    </h2>

                    <TextGenerateEffect
                    className="text-center text-[40px] md:text-5xl lg:text-6xl"
                    words="A Journey in Creating Stunning User Interfaces"
                    />

                    <p className="text-center md:tracking-widest mb-4 text-sm md:text-lg lg:text-xl">
                        Hey! I&apos;m Abdelmounaim, a starting Developer from Amsterdam.
                    </p>
                    <a href="#about">
                        {isSafari ? (
                            <button className="btn border border-white p-2 rounded-lg inline-flex h-full w-full cursor-pointer items-center justify-center bg-slate-950 px-7 text-sm font-medium text-white  gap-2"><CircleChevronDown size={20} /> About me</button>
                        ) : (
                        <MagicButton
                        title="About me"
                        icon={<CircleChevronDown size={20} />}
                        position="right"
                        />
                            )}
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Hero;