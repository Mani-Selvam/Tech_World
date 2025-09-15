export default function BullRun() {
  const strategies = [
    {
      number: 1,
      text: "Explore buying/selling strategies. When to buy and sell assets during a Bull Run?"
    },
    {
      number: 2,
      text: "Find out which coins are expected to show maximum growth in the near future, according to leading experts"
    },
    {
      number: 3,
      text: "Get advice from global industry leaders who earned huge profits on previous Bull Runs"
    }
  ];

  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 relative overflow-hidden min-h-screen flex flex-col justify-center" 
      id="bullrun"
      style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 25%, #2563eb 50%, #1d4ed8 75%, #1e1b4b 100%)'
      }}
      data-testid="section-bullrun"
    >
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
                           radial-gradient(circle at 80% 30%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`
        }} />
      </div>

      {/* Left Bull - visible on desktop only */}
      <div className="absolute left-4 lg:left-12 top-1/2 transform -translate-y-1/2 hidden lg:block z-0">
        <div className="relative">
          {/* Bull silhouette with glowing effect */}
          <div className="relative w-48 h-36">
            <svg width="192" height="144" viewBox="0 0 192 144" className="absolute inset-0" aria-hidden="true">
              <defs>
                <linearGradient id="bullGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#1d4ed8" />
                  <stop offset="100%" stopColor="#1e1b4b" />
                </linearGradient>
                <filter id="glow1">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {/* Bull body and head */}
              <path d="M40 120 C20 110, 10 90, 15 70 C20 50, 35 40, 50 45 L60 35 C65 30, 75 35, 70 45 L80 40 C85 35, 95 40, 90 50 L100 45 C110 40, 120 50, 115 60 C120 70, 115 80, 105 85 L110 95 C115 105, 105 115, 95 110 L85 120 L75 125 L65 120 L55 125 Z" 
                    fill="url(#bullGradient1)" filter="url(#glow1)" />
              {/* Bull horns */}
              <path d="M55 35 C50 25, 55 15, 65 20 C70 15, 75 25, 70 35" fill="url(#bullGradient1)" filter="url(#glow1)" />
              {/* Eye detail */}
              <circle cx="70" cy="60" r="3" fill="#ffffff" opacity="0.8" />
            </svg>
          </div>
          
          {/* Upward arrows around bull */}
          <div className="absolute -top-4 -right-4 animate-pulse">
            <svg width="24" height="24" viewBox="0 0 24 24" className="text-cyan-300">
              <path fill="currentColor" d="M7 14l5-5 5 5z"/>
            </svg>
          </div>
          <div className="absolute top-8 -left-6 animate-pulse" style={{animationDelay: '0.5s'}}>
            <svg width="20" height="20" viewBox="0 0 24 24" className="text-blue-300">
              <path fill="currentColor" d="M7 14l5-5 5 5z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Right Bull - mirrored, visible on desktop only */}
      <div className="absolute right-4 lg:right-12 top-1/2 transform -translate-y-1/2 hidden lg:block z-0" style={{transform: 'translateY(-50%) scaleX(-1)'}}>
        <div className="relative">
          {/* Bull silhouette with glowing effect */}
          <div className="relative w-48 h-36">
            <svg width="192" height="144" viewBox="0 0 192 144" className="absolute inset-0" aria-hidden="true">
              <defs>
                <linearGradient id="bullGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#1d4ed8" />
                  <stop offset="100%" stopColor="#1e1b4b" />
                </linearGradient>
                <filter id="glow2">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {/* Bull body and head */}
              <path d="M40 120 C20 110, 10 90, 15 70 C20 50, 35 40, 50 45 L60 35 C65 30, 75 35, 70 45 L80 40 C85 35, 95 40, 90 50 L100 45 C110 40, 120 50, 115 60 C120 70, 115 80, 105 85 L110 95 C115 105, 105 115, 95 110 L85 120 L75 125 L65 120 L55 125 Z" 
                    fill="url(#bullGradient2)" filter="url(#glow2)" />
              {/* Bull horns */}
              <path d="M55 35 C50 25, 55 15, 65 20 C70 15, 75 25, 70 35" fill="url(#bullGradient2)" filter="url(#glow2)" />
              {/* Eye detail */}
              <circle cx="70" cy="60" r="3" fill="#ffffff" opacity="0.8" />
            </svg>
          </div>
          
          {/* Upward arrows around bull */}
          <div className="absolute -top-4 -right-4 animate-pulse">
            <svg width="24" height="24" viewBox="0 0 24 24" className="text-cyan-300">
              <path fill="currentColor" d="M7 14l5-5 5 5z"/>
            </svg>
          </div>
          <div className="absolute top-8 -left-6 animate-pulse" style={{animationDelay: '0.5s'}}>
            <svg width="20" height="20" viewBox="0 0 24 24" className="text-blue-300">
              <path fill="currentColor" d="M7 14l5-5 5 5z"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Center content */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          {/* Title */}
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 sm:mb-12 leading-tight max-w-5xl mx-auto px-4" 
            data-testid="text-bullrun-title"
          >
            The peak of Bull Run is yet to come. Join to earn the maximum
          </h2>

          {/* Cryptocurrency coins - centered */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            {/* Bitcoin */}
            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-b from-yellow-300 to-yellow-500 flex items-center justify-center shadow-2xl">
              <span className="text-yellow-800 font-bold text-lg sm:text-xl lg:text-2xl">₿</span>
            </div>
            
            {/* Ethereum */}
            <div className="w-14 h-14 sm:w-[72px] sm:h-[72px] lg:w-24 lg:h-24 rounded-full bg-gradient-to-b from-gray-300 to-gray-500 flex items-center justify-center shadow-2xl transform scale-110">
              <svg width="24" height="24" viewBox="0 0 24 24" className="text-gray-800 sm:w-8 sm:h-8 lg:w-10 lg:h-10">
                <path fill="currentColor" d="M12 1.5L6 12.5l6 3.5 6-3.5L12 1.5zM6 13.5l6 8.5 6-8.5-6 3.5-6-3.5z"/>
              </svg>
            </div>

            {/* Litecoin */}
            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-b from-gray-200 to-gray-400 flex items-center justify-center shadow-2xl">
              <span className="text-gray-800 font-bold text-lg sm:text-xl lg:text-2xl">Ł</span>
            </div>
          </div>

          {/* Scattered upward arrows */}
          <div className="absolute top-12 left-1/4 hidden md:block animate-pulse">
            <svg width="20" height="20" viewBox="0 0 24 24" className="text-cyan-300">
              <path fill="currentColor" d="M7 14l5-5 5 5z"/>
            </svg>
          </div>
          <div className="absolute top-20 right-1/4 hidden md:block animate-pulse" style={{animationDelay: '0.3s'}}>
            <svg width="18" height="18" viewBox="0 0 24 24" className="text-blue-300">
              <path fill="currentColor" d="M7 14l5-5 5 5z"/>
            </svg>
          </div>
          <div className="absolute bottom-32 left-1/3 hidden lg:block animate-pulse" style={{animationDelay: '0.7s'}}>
            <svg width="16" height="16" viewBox="0 0 24 24" className="text-cyan-300">
              <path fill="currentColor" d="M7 14l5-5 5 5z"/>
            </svg>
          </div>
        </div>

        {/* Strategy cards - positioned at the bottom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {strategies.map((strategy) => (
            <div key={strategy.number} className="relative">
              {/* Upward arrow above card */}
              <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-10">
                <svg width="14" height="14" viewBox="0 0 24 24" className="text-cyan-300 sm:w-4 sm:h-4 animate-pulse">
                  <path fill="currentColor" d="M7 14l5-5 5 5z"/>
                </svg>
              </div>
              
              <div className="bg-blue-700/90 backdrop-blur-sm rounded-lg p-4 sm:p-6 text-center border border-blue-400/40 shadow-2xl hover:bg-blue-600/90 transition-colors duration-300">
                {/* Number circle */}
                <div 
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg mx-auto mb-3 sm:mb-4 shadow-lg" 
                  data-testid={`strategy-number-${strategy.number}`}
                >
                  {strategy.number}
                </div>
                
                {/* Strategy text */}
                <p 
                  className="text-white text-xs sm:text-sm leading-relaxed px-1" 
                  data-testid={`strategy-text-${strategy.number}`}
                >
                  {strategy.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
