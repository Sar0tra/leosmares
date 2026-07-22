import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import pozadiImg from "../assets/pozadi.jpg";
import postavaImg from "../assets/postava.png";

const Hero = () => {
    // Animace se spustí až ve chvíli, kdy jsou oba obrázky reálně
    // stažené a dekódované v prohlížeči – to je hlavní příčina
    // "trhané"/zaseknuté animace (framer-motion animovalo dřív,
    // než byl obrázek vůbec vykreslitelný).
    const [assetsReady, setAssetsReady] = useState(false);
    // Ambientní světla animujeme jen dokud je sekce vidět – jinak
    // (třeba při scrollu pryč) se JS/CSS pro ně vůbec nepočítá.
    const [inView, setInView] = useState(true);
    const sectionRef = useRef(null);

    useEffect(() => {
        let isMounted = true;

        const loadImage = (src) =>
            new Promise((resolve) => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;
                img.onerror = resolve;
            });

        Promise.all([loadImage(pozadiImg), loadImage(postavaImg)]).then(() => {
            if (isMounted) setAssetsReady(true);
        });

        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el || typeof IntersectionObserver === "undefined") return;

        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold: 0 }
        );
        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative flex flex-col items-center justify-center min-h-dvh bg-zinc-950 overflow-hidden select-none font-sans [contain:paint]"
        >

            {/* 1. VRSTVA: Pozadí */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={assetsReady ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-cover bg-center brightness-[0.4] contrast-110 z-0"
                style={{
                    backgroundImage: `radial-gradient(circle at 50% 35%, rgba(24, 24, 27, 0.4) 0%, rgba(9, 9, 11, 0.95) 100%), url(${pozadiImg})`
                }}
            />

            {/* Jemně dýchající světla v pozadí (Ambient loop) – řešeno
                radiálním gradientem místo CSS `filter: blur()`. Blur filtr
                je extrémně drahý na nepřetržité překreslování (zejména
                v Safari) a přesně to při scrollování kolem Hero sekce
                způsobovalo trhání. Gradient dá vizuálně stejný "glow",
                ale je to jen levné alpha-blending, žádná rasterizace. */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-5">
                <div
                    className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[900px] h-[300px] sm:h-[900px] rounded-full transition-opacity duration-700 ${
                        assetsReady && inView ? "animate-ambient-a opacity-100" : "opacity-0"
                    }`}
                    style={{
                        background: "radial-gradient(circle, rgba(245,158,11,0.16) 0%, rgba(245,158,11,0.05) 45%, transparent 70%)"
                    }}
                />
            </div>

            <div className="relative z-10 w-full flex flex-col items-center justify-center flex-grow">

                {/* 2. VRSTVA Text "LEOŠ" */}
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={assetsReady ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 text-[20vw] sm:text-[18vw] md:text-[15rem] xl:text-[20rem] font-black uppercase tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.65)] md:[-webkit-text-stroke:2px_rgba(255,255,255,0.65)] leading-none pointer-events-none drop-shadow-2xl translate-y-[-10vh]"
                >
                    Leoš
                </motion.h1>

                {/* 3. VRSTVA Postava uprostřed */}
                <motion.div
                    initial={{ opacity: 0, y: 60, scale: 0.95 }}
                    animate={assetsReady ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 z-20 flex justify-center items-end pointer-events-none origin-bottom"
                >
                    <img
                        src={postavaImg}
                        alt="Leoš Mareš"
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                        className="h-[80vh] sm:h-[85vh] md:h-[95vh] w-auto object-contain object-bottom brightness-95 contrast-110 drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)]"
                    />
                </motion.div>

                {/* 4. VRSTVA Text "MAREŠ" */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={assetsReady ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    /* translate-y-posune text mírně pod střed, takže překrývá postavu */
                    className="relative z-30 text-[20vw] sm:text-[18vw] md:text-[15rem] xl:text-[20rem] font-black uppercase tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.85)] md:[-webkit-text-stroke:2px_rgba(255,255,255,0.85)] leading-none pointer-events-none drop-shadow-2xl translate-y-[15vh]"
                >
                    Mareš
                </motion.h1>

            </div>

            {/* 5. VRSTVA: Spodní přechod do další sekce */}
            <div className="absolute bottom-0 inset-x-0 h-[20vh] z-40 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none" />
        </section>
    );
};

export default Hero;