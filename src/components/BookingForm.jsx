import React, { useState } from 'react';

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
        <section className="bg-zinc-950 text-white py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
          <span className="text-amber-500 font-semibold uppercase tracking-wider text-sm">
            B2B Booking & Spolupráce
          </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2">
                        Poptávka na moderování a akce
                    </h2>
                    <p className="mt-3 text-zinc-400">
                        Plánujete firemní večírek, ples nebo komerční kampaň? Vyplňte formulář a spojíme se s vámi.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 bg-zinc-900/80 p-8 rounded-2xl border border-zinc-800 shadow-2xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
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
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
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
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-zinc-300 mb-2">
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
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="type" className="block text-sm font-medium text-zinc-300 mb-2">
                                Typ akce / Spolupráce
                            </label>
                            <select
                                id="type"
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
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
                            <label htmlFor="date" className="block text-sm font-medium text-zinc-300 mb-2">
                                Předběžný termín
                            </label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="budget" className="block text-sm font-medium text-zinc-300 mb-2">
                                Předpokládaný rozpočet
                            </label>
                            <input
                                type="text"
                                id="budget"
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                placeholder="např. 100 000 - 200 000 Kč"
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
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
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-amber-500/20 transition-all transform active:scale-[0.99]"
                    >
                        Odeslat nezávaznou poptávku
                    </button>
                </form>
            </div>
        </section>
    );
};

export default BookingForm;