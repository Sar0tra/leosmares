import React from "react";

const socialLinks = [
    {
        label: "Instagram",
        href: "https://www.instagram.com/leosmares/",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/LeosMaresLive",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 9h2.5V6H14c-1.657 0-3 1.343-3 3v2H9v3h2v7h3v-7h2.2l.5-3H14V9z" />
            </svg>
        ),
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/@LeošMarešLive",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <rect x="3" y="6" width="18" height="12" rx="4" />
                <path fill="currentColor" stroke="none" d="M10.5 9.5l4.5 2.5-4.5 2.5v-5z" />
            </svg>
        ),
    },
];

const navLinks = [
    { label: "O mně", href: "#o-mne" },
    { label: "Vystoupení", href: "#vystoupeni" },
    { label: "Instagram", href: "#instagram" },
    { label: "Booking", href: "#booking" },
];

const Footer = () => (
    <footer className="relative bg-black text-zinc-400 overflow-hidden border-t border-white/10 select-none">
        {/* Watermark nápis v pozadí */}
        <span className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 text-[14vw] md:text-[12rem] font-black uppercase tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.06)] md:[-webkit-text-stroke:1.5px_rgba(255,255,255,0.06)] leading-none pointer-events-none whitespace-nowrap">
            LEOŠ MAREŠ
        </span>

        {/* Světelná záře */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[150px] sm:h-[250px] bg-amber-500/10 blur-[100px] sm:blur-[120px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

            {/* Úvodní řádek */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 sm:pb-12 border-b border-white/10">
                <div>
                    <span className="text-amber-500 font-mono tracking-widest text-[10px] sm:text-xs uppercase font-semibold">
                        {"// Díky, že jste dorazili až sem"}
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mt-1 sm:mt-2 text-white uppercase italic">
                        Sledujte, co se chystá<span className="text-amber-500">.</span>
                    </h2>
                </div>
                <p className="text-xs sm:text-sm text-zinc-500 font-light max-w-sm">
                    Novinky, termíny koncertů a zákulisí sledujte na sociálních sítích níže.
                </p>
            </div>

            {/* Hlavní grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 py-8 sm:py-12">

                {/* Brand */}
                <div className="sm:col-span-2 md:col-span-1">
                    <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-white italic">
                        Leoš Mareš
                    </h3>
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-zinc-500 font-light leading-relaxed max-w-xs">
                        Moderátor, zpěvák a rádiová legenda. Od Ranní show Evropy 2 až po vyprodané arény.
                    </p>
                    <div className="flex items-center gap-3 mt-4 sm:mt-6">
                        {socialLinks.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-white/15 text-zinc-400 hover:text-amber-400 hover:border-amber-500/60 transition-all duration-200"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Navigace */}
                <div>
                    <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-zinc-500">
                        Navigace
                    </span>
                    <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="text-xs sm:text-sm text-zinc-300 hover:text-amber-400 transition-colors duration-200"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Booking */}
                <div>
                    <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-zinc-500">
                        Booking & Management
                    </span>
                    <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 text-xs sm:text-sm">
                        <li>
                            <a href="mailto:management@leosmares.cz" className="text-zinc-300 hover:text-amber-400 transition-colors duration-200">
                                management@leosmares.cz
                            </a>
                        </li>
                        <li>
                            <a href="tel:+420123456789" className="text-zinc-300 hover:text-amber-400 transition-colors duration-200">
                                +420 123 456 789
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Newsletter / info */}
                <div>
                    <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-zinc-500">
                        Turné 2027
                    </span>
                    <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        10. července 2027<br />
                        Amfiteátr Mikulov
                    </p>
                    <a
                        href="https://www.ticketportal.cz/event/Leos-Mares-a-Stare-Pecky-Mikulov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-3 sm:mt-4 text-xs sm:text-sm font-semibold text-white hover:text-amber-400 transition-colors duration-200"
                    >
                        Vstupenky
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Spodní lišta */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-white/10 text-[11px] sm:text-xs text-zinc-500">
                <p>
                    &copy; {new Date().getFullYear()} Leoš Mareš. Všechna práva vyhrazena.
                </p>
                <a
                    href="#top"
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-amber-400 transition-colors duration-200 font-mono uppercase tracking-widest"
                >
                    Nahoru
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                    </svg>
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;