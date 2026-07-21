import React, { useEffect } from 'react';

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
        <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                    <div>
                        <span className="text-amber-500 font-semibold tracking-wider uppercase text-sm">
                            @leosmares
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1">
                            Sledujte živě na Instagramu
                        </h2>
                    </div>
                    <a
                        href="https://www.instagram.com/leosmares/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 md:mt-0 inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-medium hover:opacity-90 transition-opacity"
                    >
                        Přejít na Instagram
                    </a>
                </div>

                {/* Kontejner s Elfsight widgetem */}
                <div className="w-full">
                    <div
                        className="elfsight-app-c110c497-5446-4082-a878-39244713f1e4"
                        data-elfsight-app-lazy
                    />
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;