import React from 'react';
import {Tabs} from "@/components/ui/tabs";
import {StickyScroll} from "@/components/ui/sticky-scroll-reveal";

const content = [
    {
        title: "💼 Team Lead @ Picnic Technologies",
        description:
            "Leading the Equipment team at Picnic's groundbreaking Automated Fulfillment Centre. My responsibilities include overseeing and monitoring the SCADA system, supporting operations with real-time data insights, and ensuring order accuracy and completeness.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <img
                    src="/picnic2.png"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "🎓 Internship AR/XR Developer @ Allinq",
        description:
            "Collaborating with two colleagues, we developed a cutting-edge application aimed at enhancing the efficiency of field engineers. Leveraging the capabilities of CoreML and ARKit, our app revolutionizes maintenance processes by offering digitized workflows, step-by-step guidance through image recognition, and virtual markerless objects in augmented reality. This integration of technology with the physical world opens new possibilities, extending beyond the realm of virtual reality 🚀 ",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <img
                    src="/allinq2.png"
                    width={400}
                    height={400}
                    className="w-full px-4"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "🎓 Internship FE Developer @ AMV ",
        description:
            "In these six months I have been working extensively with the team to deliver a new Frontend for the Autotrack website. My main assignment was designing and visualizing the new Frontend Architecture. With this in mind we build a total new application with tremendous speed gains, but keeping the same feel and look that Autotrack Customer love.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <img
                    src="/amv.gif"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "🎓 Internship Datalab @ Rijkswaterstaat",
        description:
            "Visualizing traffic with real-time data in Grafana and Python. And retrieving historical data for further analysis!",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <img
                    src="/rijkswaterstaat.jpg"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "🎓 Internship IT Departement @ DPG Media",
        description:
            "Worked at the IT Department as a working student which was part of my internship). Helped resolving corporate software and hardware issues/ defects.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <img
                    src="/dpgmedia2.jpg"
                    width={400}
                    height={400}
                    className="h-full w-full"
                    alt="linear board demo"
                />
            </div>
        ),
    },
];

const Experience = () => {
    return (
        <div id="experience" className="py-4 my-4 ">
            <h1 className="heading">
                Work {" "}
                <span className="text-purple">Experience</span>
            </h1>
            <div className="py-2 w-full">
                <StickyScroll content={content}/>
            </div>
        </div>
    );
};

export default Experience;