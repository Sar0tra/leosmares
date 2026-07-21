import React from "react";

const Events = () => {
    return (
        <section className="py-24 md:py-36 bg-slate-950 px-4 md:px-6 border-t border-white/5 select-none">
            <div className="max-w-5xl mx-auto">

                {/* Nadpis sekce */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-zinc-100 tracking-tight uppercase">
                            Vystoupení
                        </h2>
                        <p className="mt-2 text-sm md:text-base text-zinc-400 font-light">
                            Exkluzivní letní koncert pod širým nebem.
                        </p>
                    </div>
                    <span className="text-xs text-zinc-500 uppercase tracking-widest font-mono">
                        Turné 2027
                    </span>
                </div>

                {/* VIZUÁLNÍ KARTA AKCE */}
                <div className="relative group overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900 p-8 sm:p-10 md:p-14 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:shadow-white/5">

                    {/* 1. NÁPIS MIKULOV V POZADÍ */}
                    <span className="absolute -bottom-2 -right-2 text-7xl sm:text-8xl md:text-[11rem] font-black uppercase tracking-tighter text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.12)] group-hover:[-webkit-text-stroke:2px_rgba(255,255,255,0.22)] pointer-events-none leading-none select-none transition-all duration-500">
                        MIKULOV
                    </span>

                    {/* 2. ATMOSFÉRICKÁ ZÁŘE V ROHU */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/[0.04] rounded-full blur-3xl pointer-events-none group-hover:bg-white/[0.08] transition-all duration-500" />

                    {/* 3. OBSAH KARTY */}
                    <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">

                        {/* Datum, Název a Místo */}
                        <div className="space-y-5 max-w-2xl">

                            {/* Datum v odznaku */}
                            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-widest text-white uppercase backdrop-blur-md shadow-inner">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                10. Července 2027
                            </div>

                            {/* Název Akce */}
                            <h3 className="text-3xl sm:text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-[0.95]">
                                Leoš Mareš <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                                    & Staré Pecky
                                </span>
                            </h3>

                            {/* Místo konání */}
                            <p className="text-base md:text-xl text-zinc-300 font-light flex items-center gap-2.5 pt-1">
                                <svg className="w-5 h-5 text-white/70 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Amfiteátr Mikulov
                            </p>
                        </div>

                        {/* Tlačítko na nákup */}
                        <div className="shrink-0 pt-2 lg:pt-0">
                            <a
                                href="https://www.ticketportal.cz/event/Leos-Mares-a-Stare-Pecky-Mikulov"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/btn inline-flex items-center justify-center w-full lg:w-auto px-8 py-4 bg-white text-slate-950 hover:bg-zinc-100 font-bold text-base rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:shadow-white/20 active:scale-95"
                            >
                                Koupit vstupenky
                                <svg className="w-5 h-5 ml-2 transition-transform duration-200 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Events;