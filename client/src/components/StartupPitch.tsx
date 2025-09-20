import { useRef, useState } from "react";
import { GraduationCap } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

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
            <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-8">
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
                <br />
                <br />
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-8 mb-12 text-center border border-purple-500/30">
                    <div className="flex flex-col items-center space-y-4">
                        <GraduationCap className="w-12 h-12 text-purple-400" />
                        <h2 className="text-2xl md:text-3xl font-bold">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                                Ready to Start Your Web3 Journey?
                            </span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl">
                            Join thousands of students who have transformed
                            their careers with our comprehensive Web3 and
                            blockchain courses.
                        </p>
                        <Link href="/enrollment">
                            <Button
                                size="lg"
                                className="
    bg-gradient-to-r from-purple-600 to-pink-600 
    hover:from-purple-700 hover:to-pink-700 
    text-white font-semibold 
    px-6 sm:px-8 py-3 rounded-lg 
    transition-all duration-300 transform 
    hover:scale-105 shadow-lg hover:shadow-xl
    w-full sm:w-auto max-w-xs mx-auto
    flex justify-center items-center
  "
                                data-testid="button-enroll-now">
                                <GraduationCap className="w-5 h-5 mr-2" />
                                Enroll Now - Limited Seats
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
