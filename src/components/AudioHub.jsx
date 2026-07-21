import React from 'react';

export const AudioHub = () => {
    return (
        <section className="bg-zinc-900 text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                        Poslechněte si Leoše
                    </h2>
                    <p className="mt-3 text-zinc-400 text-lg">
                        Ranní show Evropy 2 i největší hudební pecky na jednom místě.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Podcast sekce */}
                    <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700/50 backdrop-blur-sm flex flex-col justify-between">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="text-2xl">🎙️</span> Ranní show Evropy 2
                        </h3>
                        <div className="w-full overflow-hidden rounded-xl">
                            <iframe
                                data-testid="embed-iframe"
                                className="w-full h-[352px] border-0 rounded-xl"
                                src="https://open.spotify.com/embed/show/2SFkliXMfW7d7cRXRjiojy?utm_source=generator&si=f89c2ae8df064fe0"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                allowFullScreen
                                loading="lazy"
                                title="Ranní Show Evropy 2"
                            />
                        </div>
                    </div>

                    {/* Hudební sekce */}
                    <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700/50 backdrop-blur-sm flex flex-col justify-between">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="text-2xl">🎵</span> Hudební tvorba & Staré Pecky
                        </h3>
                        <div className="w-full overflow-hidden rounded-xl">
                            <iframe
                                data-testid="embed-iframe"
                                className="w-full h-[352px] border-0 rounded-xl"
                                src="https://open.spotify.com/embed/artist/4IEOVthHDthA98RjzutGyZ?utm_source=generator&theme=0&si=d05f165933c748c8"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                allowFullScreen
                                loading="lazy"
                                title="Leoš Mareš - Hudební tvorba na Spotify"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AudioHub;