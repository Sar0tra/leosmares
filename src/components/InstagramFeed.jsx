import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export const InstagramFeed = () => {
    useEffect(() => {
        const scriptId = 'elfsight-platform-script';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://elfsightcdn.com/platform.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);


    return (
        <section id="instagram" className="bg-zinc-950 text-white py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto"
            >
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-zinc-800/80 pb-8">
                    <div>
                        <span className="text-amber-500 font-mono tracking-widest text-xs uppercase font-semibold">
                           {" // Social Media "}
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-1 uppercase italic">
                            Instagram<span className="text-amber-500">.</span>
                        </h2>
                    </div>
                    <a
                        href="https://www.instagram.com/leosmares/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 md:mt-0 inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-sm shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 transition-all active:scale-95"
                    >
                        @leosmares na Instagramu
                    </a>
                </div>

                {/* Kontejner s Elfsight widgetem */}
                <div className="w-full bg-zinc-900/40 p-4 sm:p-6 rounded-3xl border border-zinc-800/80 backdrop-blur-sm">
                    <div
                        className="elfsight-app-c110c497-5446-4082-a878-39244713f1e4"
                        data-elfsight-app-lazy
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default InstagramFeed;