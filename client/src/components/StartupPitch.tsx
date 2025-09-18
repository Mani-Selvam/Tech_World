import { useRef, useState } from "react";

export default function StartupPitch() {
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const speakers = [
        {
            video: "https://dms.licdn.com/playlist/vid/v2/C5605AQFt2bF34XpjBg/feedshare-ambry-analyzed_servable_progressive_video/feedshare-ambry-analyzed_servable_progressive_video/0/1673665874366?e=1758780000&v=beta&t=1bEDpu9OeE7cIdoylBz1Ge2Jts4HvgOoagcvyonV2_Q",
            alt: "Student",
            title: "🤝 Blockchain Technology  Feedback — Kongu Engineering College 🤝",
        },
        {
            video: "https://dms.licdn.com/playlist/vid/v2/D5605AQFtiByCLICsfQ/mp4-640p-30fp-crf28/mp4-640p-30fp-crf28/0/1715002785436?e=1758780000&v=beta&t=9tl10iBfi4tTwnwNIL3Bo5-H2pLUE1aVxAE3iSUnF6Y",
            alt: "Student",
            title: "🤝 Rave Reviews — Velalar College of Engineering & Technology, Erode 🤝",
        },
        {
            video: "https://dms.licdn.com/playlist/vid/v2/D5605AQF0VJqTJv4r6g/mp4-640p-30fp-crf28/mp4-640p-30fp-crf28/0/1715002901758?e=1758780000&v=beta&t=TO4MzNrq0hZKjzk14Ch_76VZzqIcR0FQe_lzVZsdlwQ",
            alt: "Student",
            title: "💁🏻‍♀️💚🤝 Glowing Praise Feedback — KSR College,             Thiruchengode 🌟💁🏻‍♀️💚🤝",
        },
    ];

    const handlePlay = (index: number) => {
        videoRefs.current.forEach((video, i) => {
            if (video && i !== index) {
                video.pause();
            }
        });
        setActiveIndex(index);
    };

    const handlePause = () => {
        setActiveIndex(null);
    };

    return (
        <section className="py-20 bg-black text-white" id="startup-pitch">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Testimonial
                    </h2>
                    <p className="text-white opacity-70 mt-2">
                        Meet the minds shaping the future
                    </p>
                </div>

                {/* Speaker Video Cards */}
                <div className="flex flex-wrap justify-center gap-6">
                    {speakers.map((speaker, index) => {
                        const isActive = activeIndex === index;
                        const isBlurred =
                            activeIndex !== null && activeIndex !== index;

                        return (
                            <div
                                key={index}
                                className={`bg-gradient-to-br from-[#0A1733] to-[#1F2A44] p-4 rounded-xl shadow-xl border flex flex-col items-center transition-all duration-300 ${
                                    isActive
                                        ? "z-10 scale-105 border-[#38BDF8] shadow-2xl"
                                        : "border-[#1E293B]"
                                } ${isBlurred ? "blur-sm opacity-60" : ""}`}
                                style={{ width: "320px" }}>
                                <div
                                    className={`mb-4 rounded-lg overflow-hidden border-4 transition-all duration-300 ${
                                        isActive
                                            ? "border-[#38BDF8]"
                                            : "border-[#1E293B]"
                                    }`}
                                    style={{ width: "320px", height: "400px" }}>
                                    <video
                                        ref={(el) =>
                                            (videoRefs.current[index] = el)
                                        }
                                        src={speaker.video}
                                        controls
                                        className="w-full h-full object-cover"
                                        preload="metadata"
                                        onPlay={() => handlePlay(index)}
                                        onPause={handlePause}
                                    />
                                </div>
                                <h3
                                    className={`text-base font-semibold text-center transition-colors duration-300 ${
                                        isActive
                                            ? "text-[#38BDF8]"
                                            : "text-white"
                                    }`}>
                                    {speaker.title}
                                </h3>
                                <p className="text-sm text-white opacity-80 text-center mt-2">
                                    {speaker.alt}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
