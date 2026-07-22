import React from "react";
import { motion } from "framer-motion";

const Quote = () => {
    return (
        <section className="py-16 sm:py-28 md:py-40 bg-zinc-950 px-4 sm:px-6 relative border-t border-zinc-900/50 overflow-hidden">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                <motion.blockquote 
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-zinc-100 leading-tight md:leading-snug tracking-tight font-serif italic"
                >
                    „Měl jsem štěstí, že mi byl dán nějaký talent, že uchopuju svět kolem sebe atraktivně pro ostatní. Proto vysílám 20 let v rádiu a ještě mě nevyhodili.“
                </motion.blockquote>

                <motion.p 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-6 sm:mt-8 text-xs sm:text-base md:text-lg text-amber-500 font-mono tracking-widest uppercase"
                >
                    — Leoš Mareš
                </motion.p>
            </div>
        </section>
    );
};

export default Quote;