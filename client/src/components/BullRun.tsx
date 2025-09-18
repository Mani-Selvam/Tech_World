import bitcoinBg from "@assets/Bitcoin_1758037906078.png";

export default function BullRun() {
    const strategies = [
        {
            number: 1,
            text: "Explore buying/selling strategies. When to buy and sell assets during a Bull Run?",
        },
        {
            number: 2,
            text: "Find out which coins are expected to show maximum growth in the near future, according to leading experts",
        },
        {
            number: 3,
            text: "Get advice from global industry leaders who earned huge profits on previous Bull Runs",
        },
    ];

    return (
        <section
            className="py-12 sm:py-16 lg:py-20 relative overflow-hidden min-h-screen flex flex-col justify-center"
            id="bullrun"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${bitcoinBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
            data-testid="section-bullrun">
            {/* Animated particles overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-20">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${2 + Math.random() * 2}s`,
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                {/* Center content */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    {/* Title */}
                    <h2
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 sm:mb-12 leading-tight max-w-5xl mx-auto px-4"
                        data-testid="text-bullrun-title">
                        The peak of Bull Run in Web3. Join to Learn the maximum
                    </h2>

                    {/* Cryptocurrency coins - centered with enhanced animations */}
                    <div className="flex justify-center items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
                        {/* Bitcoin */}
                        <div
                            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-b from-yellow-300 to-yellow-500 flex items-center justify-center shadow-2xl transform transition-all duration-300 hover:scale-110 hover:rotate-12 animate-bounce"
                            style={{ animationDelay: "0s" }}>
                            <span className="text-yellow-800 font-bold text-lg sm:text-xl lg:text-2xl">
                                ₿
                            </span>
                        </div>

                        {/* Ethereum */}
                        <div
                            className="w-14 h-14 sm:w-[72px] sm:h-[72px] lg:w-24 lg:h-24 rounded-full bg-gradient-to-b from-gray-300 to-gray-500 flex items-center justify-center shadow-2xl transform scale-110 transition-all duration-300 hover:scale-125 hover:rotate-12 animate-bounce"
                            style={{ animationDelay: "0.3s" }}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="text-gray-800 sm:w-8 sm:h-8 lg:w-10 lg:h-10">
                                <path
                                    fill="currentColor"
                                    d="M12 1.5L6 12.5l6 3.5 6-3.5L12 1.5zM6 13.5l6 8.5 6-8.5-6 3.5-6-3.5z"
                                />
                            </svg>
                        </div>

                        {/* Litecoin */}
                        <div
                            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-b from-gray-200 to-gray-400 flex items-center justify-center shadow-2xl transform transition-all duration-300 hover:scale-110 hover:rotate-12 animate-bounce"
                            style={{ animationDelay: "0.6s" }}>
                            <span className="text-gray-800 font-bold text-lg sm:text-xl lg:text-2xl">
                                Ł
                            </span>
                        </div>
                    </div>

                    {/* Floating golden arrows */}
                    <div className="absolute top-12 left-1/4 hidden md:block animate-pulse">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            className="text-yellow-400 drop-shadow-lg">
                            <path fill="currentColor" d="M7 14l5-5 5 5z" />
                        </svg>
                    </div>
                    <div
                        className="absolute top-20 right-1/4 hidden md:block animate-pulse"
                        style={{ animationDelay: "0.3s" }}>
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            className="text-yellow-300 drop-shadow-lg">
                            <path fill="currentColor" d="M7 14l5-5 5 5z" />
                        </svg>
                    </div>
                    <div
                        className="absolute bottom-32 left-1/3 hidden lg:block animate-pulse"
                        style={{ animationDelay: "0.7s" }}>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            className="text-yellow-400 drop-shadow-lg">
                            <path fill="currentColor" d="M7 14l5-5 5 5z" />
                        </svg>
                    </div>
                </div>

                {/* Strategy cards with beautiful animations */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
                    {strategies.map((strategy, index) => (
                        <div
                            key={strategy.number}
                            className="relative transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                            style={{ animationDelay: `${index * 0.2}s` }}>
                            {/* Upward arrow above card */}
                            <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-10">
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    className="text-yellow-400 sm:w-4 sm:h-4 animate-pulse drop-shadow-lg">
                                    <path
                                        fill="currentColor"
                                        d="M7 14l5-5 5 5z"
                                    />
                                </svg>
                            </div>

                            <div className="bg-gradient-to-br from-black/80 to-gray-900/90 backdrop-blur-md rounded-xl p-4 sm:p-6 text-center border border-yellow-400/30 shadow-2xl hover:shadow-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 group overflow-hidden relative">
                                {/* Glowing background effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Number circle with golden theme */}
                                <div
                                    className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-base sm:text-lg mx-auto mb-3 sm:mb-4 shadow-lg transform group-hover:rotate-12 transition-transform duration-300"
                                    data-testid={`strategy-number-${strategy.number}`}>
                                    {strategy.number}
                                </div>

                                {/* Strategy text with better contrast */}
                                <p
                                    className="relative text-white text-xs sm:text-sm leading-relaxed px-1 group-hover:text-yellow-100 transition-colors duration-300"
                                    data-testid={`strategy-text-${strategy.number}`}>
                                    {strategy.text}
                                </p>

                                {/* Animated border glow */}
                                <div className="absolute inset-0 rounded-xl border border-yellow-400/20 group-hover:border-yellow-400/60 transition-all duration-300"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
