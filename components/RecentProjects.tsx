"use client";

import React from 'react';
import {projects} from "@/data";
import {Tabs} from "@/components/ui/tabs";
import {BackgroundGradient} from "@/components/ui/background-gradient";
import {LinkPreview} from "@/components/ui/link-preview";

const RecentProjects = () => {
    // Map projects to tabs format
    const tabs = projects.map(({
                                   id,
                                   title,
                                   des,
                                   img,
                                   iconLists,
                                   link
                               }) => ({
        title: title,
        value: title,
        content: (
            <div>
                <BackgroundGradient className="rounded-3xl">
                    <div className="w-full relative rounded-3xl p-10 text-white " style={{
                        background: "rgb(4,7,29)",
                        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    }}>
                        <div key={id}
                             className="lg:min-h-[38.5rem] h-[28rem] flex flex-col items-center justify-center w-full rounded-3xl">
                            <div
                                className="relative flex items-center justify-center w-full overflow-hidden h-[30vh] lg:h-[40vh] mb-10">
                                <div className="relative w-full h-full overflow-hidden rounded-3xl"
                                     style={{backgroundColor: "#13162D"}}>
                                    <img src="/bg.png" alt="bgimg" className="absolute w-full h-full object-cover"/>
                                </div>

                                {id === 2 ? (

                                    <div
                                        className="top-0 mt-4 absolute border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                                        <div
                                            className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                                        <div
                                            className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                                        <div
                                            className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                                        <div
                                            className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                                        <div
                                            className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                                            <img
                                                src={img}
                                                className="w-[272px] h-[572px]"
                                                alt=""
                                            />
                                        </div>
                                    </div>

                                ) : id === 5 ? (

                                    <div
                                        className="top-0 mt-4 absolute mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-xl h-[600px] w-[300px] shadow-xl">
                                        <div
                                            className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                                        <div
                                            className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                                        <div
                                            className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                                        <div
                                            className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                                        <div
                                            className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                                        <div
                                            className="rounded-xl overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                                            <img
                                                src={img}
                                                className="w-[272px] h-[572px]" alt=""/>
                                        </div>
                                    </div>

                                ) : (
                                    <div className="absolute top-0 my-4">
                                        <div
                                            className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                                            <div
                                                className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                                                <img
                                                    src={img}
                                                    className="h-[156px] md:h-[278px] w-full rounded-lg"
                                                    alt=""/>

                                            </div>
                                        </div>
                                        <div
                                            className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]"></div>
                                        <div
                                            className="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>
                                    </div>
                                )}


                            </div>

                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-center">
                                {title}
                            </h1>

                            <p className="text-center mt-2 mb-4">
                                {des}
                            </p>

                            <div className="flex items-center justify-center gap-4 mb-4">
                                {iconLists.map((icon, index) => (
                                    <div
                                        key={index}
                                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                        style={{
                                            transform: `translateX(-${5 * index + 2}px)`,
                                        }}
                                    >
                                        <img src={icon} alt="icon5" className="p-2"/>
                                    </div>
                                ))}
                            </div>


                            <div className="flex justify-center items-center">

                                <LinkPreview
                                    url={link}
                                    className="font-bold"
                                >
                                    <p className="flex lg:text-lg md:text-xs text-sm text-purple">
                                        Preview
                                    </p>
                                </LinkPreview>


                            </div>
                        </div>
                    </div>
                </BackgroundGradient>
            </div>
        )
    }));

    return (
        <div id="projects" className="py-8 my-8 ">
            <h1 className="heading">
                Some of my {" "}
                <span className="text-purple">Previous Projects</span>
            </h1>
            <div
                className="h-[40rem] lg:h-[50rem] [perspective:1000px] flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-4">
                <Tabs
                    tabs={tabs}
                    containerClassName="flex justify-center"
                    activeTabClassName="bg-gray-200 dark:bg-zinc-800"
                    tabClassName="px-4 my-4 rounded-full"
                    contentClassName="my-10"
                />
            </div>
        </div>
    );
};

export default RecentProjects;
