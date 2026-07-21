import React from "react";
import { motion } from "framer-motion";
import pozadiImg from "../assets/pozadi.jpg";
import postavaImg from "../assets/postava.png";

const Hero = () => {
    return (
        <section className="relative flex items-center justify-center min-h-screen bg-zinc-950 overflow-hidden select-none font-sans">
            
            {/* 1. VRSTVA: Pozadí s plynulým nájezdem (Zoom out) */}
            <motion.div
                initial={{ scale: 1.15, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-cover bg-center brightness-[0.4] contrast-110"
                style={{
                    backgroundImage: `radial-gradient(circle at 50% 35%, rgba(24, 24, 27, 0.4) 0%, rgba(9, 9, 11, 0.95) 100%), url(${pozadiImg})`
                }}
            />

            {/* Jemně dýchající světla v pozadí (Ambient loop) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <motion.div 
                    animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.08, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[150px] rounded-full" 
                />
                <motion.div 
                    animate={{ opacity: [0.1, 0.4, 0.1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-1/3 left-1/3 w-[350px] h-[600px] bg-amber-600/10 blur-[130px] rounded-full -rotate-45" 
                />
            </div>

            {/* 2. VRSTVA: Text vzadu ("LEOŠ") - Animovaný příjezd shora */}
            <motion.h1 
                initial={{ opacity: 0, y: -160 }}
                animate={{ opacity: 1, y: -110 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute z-10 text-[18vw] sm:text-[16vw] lg:text-[15rem] xl:text-[20rem] font-black uppercase tracking-tighter text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.65)] leading-none pointer-events-none drop-shadow-2xl"
            >
                Leoš
            </motion.h1>

            {/* 3. VRSTVA: Postava uprostřed - Animované vynoření zespodu */}
            <motion.div 
                initial={{ opacity: 0, y: 120, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 z-20 flex justify-center items-end pointer-events-none"
            >
                <img 
                    src={postavaImg} 
                    alt="Leoš Mareš" 
                    className="h-[80vh] md:h-[90vh] object-contain object-bottom brightness-95 contrast-110 drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)]"
                /> 
            </motion.div>

            {/* 4. VRSTVA: Text vpředu ("MAREŠ") - Animovaný příjezd zespodu */}
            <motion.h1 
                initial={{ opacity: 0, y: 170 }}
                animate={{ opacity: 1, y: 120 }}
                transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute z-30 text-[18vw] sm:text-[16vw] lg:text-[15rem] xl:text-[20rem] font-black uppercase tracking-tighter text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.85)] leading-none pointer-events-none drop-shadow-2xl"
            >
                Mareš
            </motion.h1>

            {/* 5. VRSTVA: Spodní přechod do další sekce */}
            <div className="absolute bottom-0 inset-x-0 h-48 z-40 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none" />

        </section>
    );
};

export default Hero;