import { DirectionCards } from "@/constants/Directions";
import React from "react";
import DirectionsCard from "./Card";


const Directions = () => {
    return (
        <section className="container mb-10">
            <h1 className="text-4xl mb-3 font-medium text-[#2C2052]">DIRECTIONS</h1>
            <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                {DirectionCards.map((el, i) => (
                    <DirectionsCard key={i + el.title} {...el} />
                ))}
            </div>
        </section>
    )
}

export default Directions;