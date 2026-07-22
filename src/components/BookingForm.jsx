import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'firemni-vecirek',
        date: '',
        budget: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Odeslána poptávka:', formData);
        alert('Děkujeme za poptávku. Management vás bude brzy kontaktovat.');
    };

    return (
        <section id="booking" className="bg-zinc-950 text-white py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900 relative">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/5 blur-[160px] pointer-events-none rounded-full" />

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto relative z-10"
            >
                <div className="text-center mb-12">
                    <span className="text-amber-500 font-mono tracking-widest text-xs uppercase font-semibold">
                        {"// B2B Booking & Spolupráce"}
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-2 uppercase italic">
                        Rezervace Akce<span className="text-amber-500">.</span>
                    </h2>
                    <p className="mt-3 text-zinc-400 font-light text-sm sm:text-base">
                        Plánujete firemní večírek, ples nebo komerční kampaň? Vyplňte formulář a náš management se s vámi spojí.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 bg-zinc-900/60 p-8 sm:p-10 rounded-3xl border border-zinc-800/80 shadow-2xl backdrop-blur-md">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                                Jméno / Firma *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Jan Novák (Firma s.r.o.)"
                                className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                                E-mail *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="jan@firma.cz"
                                className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                                Telefonní číslo *
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+420 123 456 789"
                                className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="type" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                                Typ akce / Spolupráce
                            </label>
                            <select
                                id="type"
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm"
                            >
                                <option value="firemni-vecirek">Firemní večírek</option>
                                <option value="ples">Moderování plesu / Galavečeru</option>
                                <option value="kampan">Komerční kampaň / Social media</option>
                                <option value="koncert">Koncertní vystoupení</option>
                                <option value="jine">Jiné</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="date" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                                Předběžný termín
                            </label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="budget" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                                Předpokládaný rozpočet
                            </label>
                            <input
                                type="text"
                                id="budget"
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                placeholder="např. 100 000 - 200 000 Kč"
                                className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                            Detaily akce a vaše představa *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Upřesněte místo konání, očekávaný počet hostů, délku vystoupení..."
                            className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-amber-500 hover:bg-amber-400 text-black font-extrabold py-4 px-6 rounded-xl shadow-lg shadow-amber-500/10 hover:shadow-amber-500/25 transition-all transform active:scale-[0.99] text-base uppercase tracking-wide"
                    >
                        Odeslat nezávaznou poptávku
                    </button>
                </form>
            </motion.div>
        </section>
    );
};

export default BookingForm;