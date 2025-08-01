'use client'

import { useEffect, useState } from "react";

export default function AboutMeComponent({ aboutContext, experience, experienceContext, isAboutMePage }: { aboutContext: string, experience: number, experienceContext: string, isAboutMePage?: boolean }) {

    const [animatedExperienceValue, setAnimatedExperienceValue] = useState(0);

    useEffect(() => {
        let start = 0;
        let interval: NodeJS.Timeout;

        const timeoutId = setTimeout(() => {
             interval = setInterval(() => {
                start += 1;
                setAnimatedExperienceValue(start);
                if (start >= experience) {
                    clearInterval(interval);
                }
            }, 500);
        }, 2000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeoutId);
        };
    }, [experience]);

    return (
        <div className={`flex flex-col ${isAboutMePage ? 'items-center justify-center': 'items-start justify-start'}`}>
            <h1 className="text-1xl font-medium mb-2 text-[#6c63ff]">About Me :</h1>
            <p className="text-md text-white">
                {aboutContext}
            </p>
            <p className="text-md text-white">Here are the major skills i have: </p>
            <div className="flex gap-2 items-center mt-4">
                <p><span className="text-7xl font-bold text-[#6c63ff]">{animatedExperienceValue}+</span></p>
                <p className="text-md text-white">{experienceContext}</p>
            </div>
        </div>
    )
}