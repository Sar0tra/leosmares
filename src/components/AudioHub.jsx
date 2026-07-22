import React from 'react';
import { motion } from 'framer-motion';

export const AudioHub = () => {
    return (
        <section className="bg-zinc-950 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900 overflow-hidden">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto"
            >
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 border-b border-zinc-800/80 pb-6 sm:pb-8 gap-4">
                    <div>
                        <span className="text-amber-500 font-mono tracking-widest text-[10px] sm:text-xs uppercase font-semibold">
                            {"// Spotify & Podcasty"}
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-1 uppercase italic">
                            Audio Hub<span className="text-amber-500">.</span>
                        </h2>
                    </div>
                    <p className="text-zinc-400 text-xs sm:text-sm md:text-base font-light max-w-md">
                        Ranní show Evropy 2 i největší hudební pecky přímo ke poslechu.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    {/* Podcast Karta */}
                    <div className="bg-zinc-900/60 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-zinc-800/80 backdrop-blur-md hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between">
                        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2.5 sm:gap-3 text-zinc-100">
                            <span className="p-1.5 sm:p-2 rounded-xl bg-amber-500/10 text-amber-500 text-base sm:text-lg">🎙️</span> 
                            Ranní show Evropy 2
                        </h3>
                        <div className="w-full overflow-hidden rounded-xl sm:rounded-2xl border border-zinc-800">
                            <iframe
                                data-testid="embed-iframe"
                                className="w-full h-[232px] sm:h-[352px] border-0"
                                src="https://open.spotify.com/embed/show/2SFkliXMfW7d7cRXRjiojy?utm_source=generator&si=f89c2ae8df064fe0"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                allowFullScreen
                                loading="lazy"
                                title="Ranní Show Evropy 2"
                            />
                        </div>
                    </div>

                    {/* Hudební Karta */}
                    <div className="bg-zinc-900/60 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-zinc-800/80 backdrop-blur-md hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between">
                        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2.5 sm:gap-3 text-zinc-100">
                            <span className="p-1.5 sm:p-2 rounded-xl bg-amber-500/10 text-amber-500 text-base sm:text-lg">🎵</span> 
                            Hudební tvorba & Staré Pecky
                        </h3>
                        <div className="w-full overflow-hidden rounded-xl sm:rounded-2xl border border-zinc-800">
                            <iframe
                                data-testid="embed-iframe"
                                className="w-full h-[232px] sm:h-[352px] border-0"
                                src="https://open.spotify.com/embed/artist/4IEOVthHDthA98RjzutGyZ?utm_source=generator&theme=0&si=d05f165933c748c8"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                allowFullScreen
                                loading="lazy"
                                title="Leoš Mareš - Hudební tvorba na Spotify"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AudioHub;