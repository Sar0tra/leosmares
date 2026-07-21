import React from "react";
import pozadiImg from "../assets/pozadi.jpg";
import postavaImg from "../assets/postava.png";

const Hero = () => {
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-slate-950 overflow-hidden select-none">

            {/* POZADÍ */}
            <div
                className="absolute inset-0 bg-cover bg-center brightness-50 contrast-125"
                style={{ backgroundImage: `url(${pozadiImg})` }}
            />

            {/* TEXT VZADU */}
            <h1 className="absolute z-10 text-[10rem] md:text-[14rem] xl:text-[18rem] font-black uppercase tracking-tighter text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.8)] leading-none -translate-y-24 md:-translate-y-32">
                Leoš
            </h1>

            {/* POSTAVA UPROSTŘED */}
            <div
                className="absolute inset-0 z-20 bg-contain bg-bottom bg-no-repeat pointer-events-none brightness-75 contrast-125 saturate-50"
                style={{ backgroundImage: `url(${postavaImg})` }}
            />

            {/* TEXT VPŘEDU */}
            <h1 className="absolute z-30 text-[10rem] md:text-[14rem] xl:text-[18rem] font-black uppercase tracking-tighter text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.8)] leading-none translate-y-20 md:translate-y-28">
                Mareš
            </h1>


            {/* GLOBÁLNÍ PŘEKRYTÍ */}
            <div className="absolute inset-0 z-50 pointer-events-none bg-black/10 mix-blend-overlay" />

        </div>
    );
};

export default Hero;