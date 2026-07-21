import React from "react";
import { motion } from "framer-motion";

const Events = () => {
    return (
        <section className="py-24 md:py-36 bg-zinc-950 px-4 md:px-6 border-t border-zinc-900 select-none">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto"
            >
                {/* Nadpis sekce */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-zinc-800/80 pb-8">
                    <div>
                        <span className="text-amber-500 font-mono tracking-widest text-xs uppercase font-semibold">
                            // Živá Vystoupení
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-zinc-100 tracking-tight uppercase italic mt-1">
                            Koncerty<span className="text-amber-500">.</span>
                        </h2>
                    </div>
                    <span className="text-xs text-zinc-500 uppercase tracking-widest font-mono">
                        Turné 2027
                    </span>
                </div>

                {/* KARTA AKCE */}
                <div className="relative group overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900/90 via-zinc-950 to-zinc-900 p-8 sm:p-10 md:p-14 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:border-amber-500/50 hover:shadow-amber-500/5">

                    {/* VODOTISK */}
                    <span className="absolute -bottom-2 -right-2 text-7xl sm:text-8xl md:text-[11rem] font-black uppercase tracking-tighter text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.05)] group-hover:[-webkit-text-stroke:2px_rgba(245,158,11,0.15)] pointer-events-none leading-none transition-all duration-500">
                        MIKULOV
                    </span>

                    {/* ATMOSFÉRICKÁ ZÁŘE */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/20 transition-all duration-500" />

                    <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                        <div className="space-y-5 max-w-2xl">
                            {/* Datum v amber odznaku */}
                            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold tracking-widest text-amber-400 uppercase backdrop-blur-md">
                                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                                10. Července 2027
                            </div>

                            <h3 className="text-3xl sm:text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-[0.95]">
                                Leoš Mareš <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                                    & Staré Pecky
                                </span>
                            </h3>

                            <p className="text-base md:text-xl text-zinc-300 font-light flex items-center gap-2.5 pt-1">
                                <svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Amfiteátr Mikulov
                            </p>
                        </div>

                        <div className="shrink-0 pt-2 lg:pt-0">
                            <a
                                href="https://www.ticketportal.cz/event/Leos-Mares-a-Stare-Pecky-Mikulov"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/btn inline-flex items-center justify-center w-full lg:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-base rounded-2xl transition-all duration-200 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 active:scale-95"
                            >
                                Koupit vstupenky
                                <svg className="w-5 h-5 ml-2 transition-transform duration-200 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Events;