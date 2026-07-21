import React from "react";

const Quote = () => {
    return (
        <section className="py-32 md:py-48 bg-slate-950 px-6">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

                <blockquote className="text-2xl md:text-4xl lg:text-5xl font-medium text-zinc-100 leading-tight md:leading-snug tracking-tight">
                    „Měl jsem štěstí, že mi byl dán nějaký talent, že uchopuju svět kolem sebe atraktivně pro ostatní. Proto vysílám 20 let v rádiu a ještě mě nevyhodili.“
                </blockquote>

                <p className="mt-10 text-base md:text-lg text-zinc-500 font-light tracking-wide">
                    — Leoš Mareš
                </p>

            </div>
        </section>
    );
};

export default Quote;