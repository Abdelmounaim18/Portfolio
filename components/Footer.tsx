"use client"
import React, {useEffect, useState} from 'react';
import {SparklesCore} from "@/components/ui/sparkles";
import {FlipWords} from "@/components/ui/flip-words";
import {socialMedia, words} from "@/data";
import MagicButton from "@/components/ui/MagicButton";
import {LucideAtSign, LucideMail, LucideSend} from "lucide-react";

const Footer = () => {
    const [isSafari, setIsSafari] = useState(false);

    useEffect(() => {
        // Detect if the browser is Safari
        const userAgent = navigator.userAgent.toLowerCase();
        const isSafariBrowser = /safari/.test(userAgent) && !/chrome/.test(userAgent);
        setIsSafari(isSafariBrowser);
        console.log("Is Safari: ", isSafariBrowser);
    }, []);

    return (
        <footer className="w-full pt-20 pb-10" id="contact">


            <div className="flex flex-col items-center">

                <h1 className="heading lg:max-w-[45vw]">

                    Got excited?<br/>
                    <FlipWords words={words}/>

                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">Feel free to reach out</p>
                <a href="mailto:af180902@gmail.com">
                    {isSafari ? (
                        <button className="btn border border-white p-2 rounded-lg inline-flex h-full w-full cursor-pointer items-center justify-center bg-slate-950 px-7 text-sm font-medium text-white  gap-2"><LucideSend size={20} /> Send a message</button>
                    ) : (
                    <MagicButton title="Send a message" icon={<LucideSend size={20}/>} position="left"/>
                        )}
                </a>
            </div>

            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">Copyright &copy; 2024 Abdelmounaim</p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((profile) => (
                        <a key={profile.id} href={profile.link}
                            className="h-10 w-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                            <img src={profile.img} alt="socials" width={20} height={20}/>
                        </a>
                    ))}
                </div>
            </div>

        </footer>
    );
};

export default Footer;