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
                    <h2
                        className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                        style={{
                            backgroundSize: "300% 300%",
                            animation:
                                "gradientMove 6s ease infinite, float 3s ease-in-out infinite",
                            display: "inline-block",
                        }}>
                        Testimonial
                        <style>
                            {`
      @keyframes gradientMove {
        0% { background-position: 0% 0%; }
        25% { background-position: 100% 0%; }
        50% { background-position: 100% 100%; }
        75% { background-position: 0% 100%; }
        100% { background-position: 0% 0%; }
      }

      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
      }
    `}
                        </style>
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
            <section className="py-20 bg-background" id="outcomes">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Title */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span
                                className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
                                style={{
                                    backgroundSize: "300% 300%",
                                    animation:
                                        "gradientMove 6s ease infinite, float 3s ease-in-out infinite",
                                    display: "inline-block",
                                }}>
                                Outcomes
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            What you’ll achieve by learning with Techara Academy
                        </p>

                        <style>
                            {`
          @keyframes gradientMove {
            0% { background-position: 0% 0%; }
            25% { background-position: 100% 0%; }
            50% { background-position: 100% 100%; }
            75% { background-position: 0% 100%; }
            100% { background-position: 0% 0%; }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }

          @keyframes pulseGlow {
            0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(99,102,241,0.6); }
            50% { transform: scale(1.05); box-shadow: 0 0 20px 4px rgba(99,102,241,0.4); }
          }

          .icon-animate {
            animation: float 3s ease-in-out infinite, pulseGlow 4s infinite;
            transition: transform 0.4s ease;
          }

          .icon-animate:hover {
            transform: scale(1.2) rotate(12deg);
          }

          .box-animate {
            transition: all 0.4s ease;
          }

          .box-animate:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 12px 25px rgba(0,0,0,0.2);
            border-color: rgba(99,102,241,0.4);
          }
        `}
                        </style>
                    </div>

                    {/* Outcomes Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Outcome 1 */}
                        <div className="relative p-8 bg-card/40 rounded-2xl border border-border/50 backdrop-blur-sm shadow-md box-animate">
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-pink-200 flex items-center justify-center icon-animate">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-8 h-8 text-pink-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 7v-7m0 0L3 9m9 5l9-5"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-center mt-10">
                                Become Job-Ready in 60 Days
                            </h3>
                            <p className="text-muted-foreground text-center mt-2">
                                Gain industry-ready skills and land blockchain &
                                crypto jobs faster.
                            </p>
                        </div>

                        {/* Outcome 2 */}
                        <div className="relative p-8 bg-card/40 rounded-2xl border border-border/50 backdrop-blur-sm shadow-md box-animate">
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-green-100 flex items-center justify-center icon-animate">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-8 h-8 text-green-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zm0 0V4m0 12v4m-6-4h12"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-center mt-10">
                                Turn Knowledge into Passive Income
                            </h3>
                            <p className="text-muted-foreground text-center mt-2">
                                Learn to monetize your skills through DeFi,
                                NFTs, and crypto strategies.
                            </p>
                        </div>

                        {/* Outcome 3 */}
                        <div className="relative p-8 bg-card/40 rounded-2xl border border-border/50 backdrop-blur-sm shadow-md box-animate">
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center icon-animate">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-8 h-8 text-yellow-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M11 3a1 1 0 012 0v1a7 7 0 016.938 6.125A6.992 6.992 0 0118 21H6a6.992 6.992 0 01-1.938-10.875A7 7 0 0111 4V3z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-center mt-10">
                                Learn Future Skills Before the World Adopts Them
                            </h3>
                            <p className="text-muted-foreground text-center mt-2">
                                Stay ahead of the curve with Web3, blockchain,
                                and crypto mastery.
                            </p>
                        </div>

                        {/* Outcome 4 */}
                        <div className="relative p-8 bg-card/40 rounded-2xl border border-border/50 backdrop-blur-sm shadow-md box-animate">
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center icon-animate">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-8 h-8 text-purple-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-center mt-10">
                                Build Your Own Web3 Startup / NFT Collection /
                                Crypto Portfolio
                            </h3>
                            <p className="text-muted-foreground text-center mt-2">
                                Go from learner to entrepreneur with your own
                                blockchain projects.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}
