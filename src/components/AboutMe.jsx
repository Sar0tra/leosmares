import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const AboutMe = () => {
    const [activeTab, setActiveTab] = useState(0);

    const chapters = [
        {
            year: "1997 – Dnes",
            title: "Pán kožichů a Ranní Show",
            tag: "Rádio & Začátky",
            quote: "„Ranní show Evropy 2 není práce, to je životní styl.“",
            text: "Po studiích v Chebu se z Berouna přesunul k mikrofonu Evropy 2. Jeho osobitý humor a pověstný kožich z něj udělaly fenomén českého éteru. V roce 2001 odpálil hudební dráhu hitem Lži jsou jako déšť z albu Tři slova.",
            highlight: "25+ let nejoblíbenější ranní show v ČR"
        },
        {
            year: "2003 – 2020",
            title: "Král televizních mega-show",
            tag: "Televize & Film",
            quote: "„Živé vysílání před miliony diváků? Tam se cítím nejvíc živý.“",
            text: "Esa, Big Brother, Hlas Česko Slovenska a především ikonická SuperStar. Leoš se stal nejžádanějším moderátorem největších prime-time projektů v Česku i na Slovensku. Zkušenosti zúročil i jako porotce a filmový herce v sérii Básníci.",
            highlight: "Moderátor & porotce nejsledovanějších show"
        },
        {
            year: "2018",
            title: "Třikrát vyprodaná O2 Arena",
            tag: "Koncerty & Show",
            quote: "„Měl to být jediný koncert v životě. Fanoušci to rozhodli jinak.“",
            text: "Co začalo jako komorní akce ve Fóru Karlín, přerostlo v hudební senzaci. Leoš jako jeden z mála českých interpretů třikrát po sobě bez kompromisů vyprodal pražskou O2 arenu s velkolepou multimediální show a hosty jako Karel Gott.",
            highlight: "3× Vyprodaná O2 arena za sebou"
        },
        {
            year: "Současnost",
            title: "1 Milion sledujících & Staré Pecky",
            tag: "Digital & Fenomén",
            quote: "„Instagram je moje vlastní televize. Přímé spojení bez cenzury.“",
            text: "Stal se vůbec prvním Čechem cílícím na domácí publikum, který pokořil hranici 1 000 000 sledujících na Instagramu. Dnes objíždí republiku s beznadějně vyprodaným konceptem párty Staré Pecky a plní zimní stadiony.",
            highlight: "1.000.000+ organických fanoušků"
        }
    ];

    return (
        <section id="o-mne" className="py-24 md:py-36 bg-zinc-950 text-white px-4 sm:px-6 lg:px-8 overflow-hidden relative border-t border-zinc-900">
            {/* Světelný efekt na pozadí */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-amber-500/10 via-amber-600/5 to-amber-500/10 blur-[140px] pointer-events-none rounded-full" />

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto relative z-10"
            >
                {/* Jednotný Header sekce */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-zinc-800/80 pb-8">
                    <div>
                        <span className="text-amber-500 font-mono tracking-widest text-xs uppercase font-semibold">
                            // Životní příběh & Milníky
                        </span>
                        <h2 className="text-4xl sm:text-6xl font-black tracking-tight mt-2 uppercase italic">
                            O mně<span className="text-amber-500">.</span>
                        </h2>
                    </div>
                    <p className="mt-4 md:mt-0 text-zinc-400 max-w-md text-sm md:text-base font-light">
                        Příběh z rádia přes televizní kamery až na pódium vyprodaných arén.
                    </p>
                </div>

                {/* Přepínač kapitol */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
                    {chapters.map((chap, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveTab(idx)}
                            className={`p-4 rounded-2xl text-left transition-all duration-300 border backdrop-blur-sm ${
                                activeTab === idx
                                    ? "bg-amber-500/10 border-amber-500 text-white shadow-lg shadow-amber-500/10 -translate-y-1"
                                    : "bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200"
                            }`}
                        >
                            <span className={`text-xs font-mono block mb-1 ${activeTab === idx ? "text-amber-400" : "text-zinc-500"}`}>
                                {chap.year}
                            </span>
                            <span className="text-sm font-bold block truncate">
                                {chap.tag}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Aktivní karta s animovaným přechodem */}
                <div className="bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden backdrop-blur-md min-h-[380px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -15 }}
                            transition={{ duration: 0.3 }}
                            className="max-w-3xl relative z-10"
                        >
                            <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full mb-6">
                                {chapters[activeTab].tag}
                            </span>

                            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                                {chapters[activeTab].title}
                            </h3>

                            <blockquote className="text-lg md:text-xl text-amber-200/90 italic font-serif mb-6 border-l-2 border-amber-500 pl-4 py-1">
                                {chapters[activeTab].quote}
                            </blockquote>

                            <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-light mb-8">
                                {chapters[activeTab].text}
                            </p>

                            <div className="inline-flex items-center gap-3 bg-zinc-800/60 border border-zinc-700/50 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-zinc-200">
                                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                                {chapters[activeTab].highlight}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Watermark na pozadí */}
                    <div className="absolute -right-4 -bottom-10 text-8xl md:text-[180px] font-black text-white/[0.02] select-none pointer-events-none font-mono">
                        {chapters[activeTab].year.split(" ")[0]}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutMe;