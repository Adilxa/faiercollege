import { AboutCards } from "@/constants/About";
import React from "react";
import AboutCard from "./Card";


const AboutCollege = () => {
    return (
        <section className="container mb-10">
            <h1 className="text-4xl mb-3 font-medium text-[#2C2052]">ABOUT THE COLLEGE</h1>
            <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                {AboutCards.map((el, i) => (
                    <AboutCard key={i + el.title} {...el} />
                ))}
            </div>
        </section>
    )
}

export default AboutCollege;