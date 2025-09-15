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
    <section className="py-20 relative overflow-hidden" id="bullrun" style={{
      background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 50%, #1e1b4b 100%)'
    }}>
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content area */}
        <div className="relative">
          {/* Left Bull */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <div className="relative">
              <svg width="200" height="150" viewBox="0 0 200 150" className="text-blue-400">
                <defs>
                  <linearGradient id="bullGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                  </linearGradient>
                </defs>
                {/* Bull silhouette */}
                <path d="M50 120 C30 110, 20 90, 25 70 C30 50, 45 40, 60 45 L70 35 C75 30, 85 35, 80 45 L90 40 C95 35, 105 40, 100 50 L110 45 C120 40, 130 50, 125 60 C130 70, 125 80, 115 85 L120 95 C125 105, 115 115, 105 110 L95 120 L85 125 L75 120 L65 125 Z" 
                      fill="url(#bullGradient)" />
                {/* Bull horns */}
                <path d="M65 35 C60 25, 65 15, 75 20 C80 15, 85 25, 80 35" fill="url(#bullGradient)" />
              </svg>
              {/* Upward arrows */}
              <div className="absolute -top-5 -right-5">
                <svg width="30" height="30" viewBox="0 0 24 24" className="text-blue-300">
                  <path fill="currentColor" d="M7 14l5-5 5 5z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Bull */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <div className="relative">
              <svg width="200" height="150" viewBox="0 0 200 150" className="text-blue-400 scale-x-[-1]">
                <defs>
                  <linearGradient id="bullGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                  </linearGradient>
                </defs>
                {/* Bull silhouette */}
                <path d="M50 120 C30 110, 20 90, 25 70 C30 50, 45 40, 60 45 L70 35 C75 30, 85 35, 80 45 L90 40 C95 35, 105 40, 100 50 L110 45 C120 40, 130 50, 125 60 C130 70, 125 80, 115 85 L120 95 C125 105, 115 115, 105 110 L95 120 L85 125 L75 120 L65 125 Z" 
                      fill="url(#bullGradient2)" />
                {/* Bull horns */}
                <path d="M65 35 C60 25, 65 15, 75 20 C80 15, 85 25, 80 35" fill="url(#bullGradient2)" />
              </svg>
              {/* Upward arrows */}
              <div className="absolute -top-5 -left-5">
                <svg width="30" height="30" viewBox="0 0 24 24" className="text-blue-300">
                  <path fill="currentColor" d="M7 14l5-5 5 5z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Center content */}
          <div className="text-center py-12">
            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight max-w-4xl mx-auto" data-testid="text-bullrun-title">
              The peak of Bull Run is yet to come. Join to earn the maximum
            </h2>

            {/* Cryptocurrency coins */}
            <div className="flex justify-center items-center gap-4 mb-12">
              {/* Bitcoin */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-b from-yellow-300 to-yellow-500 flex items-center justify-center shadow-lg">
                <svg width="32" height="32" viewBox="0 0 24 24" className="text-yellow-800">
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 6.84c.24-.15.43-.31.56-.5.13-.18.19-.38.19-.6 0-.33-.12-.59-.36-.78-.24-.19-.58-.29-1.01-.29-.88 0-1.52.39-1.92 1.17l-.84-.35c.54-1.06 1.47-1.59 2.79-1.59.73 0 1.32.18 1.76.54.44.36.66.84.66 1.44 0 .37-.08.69-.24.96-.16.27-.4.5-.72.69v.05c.45.14.79.37 1.02.69.23.32.35.71.35 1.17 0 .73-.25 1.3-.76 1.71-.51.41-1.2.62-2.07.62-1.41 0-2.4-.54-2.96-1.62l.84-.35c.44.78 1.12 1.17 2.05 1.17.43 0 .77-.1 1.01-.29.24-.19.36-.45.36-.78 0-.22-.06-.42-.19-.6-.13-.18-.32-.34-.56-.48z"/>
                </svg>
              </div>
              
              {/* Ethereum */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-b from-gray-300 to-gray-500 flex items-center justify-center shadow-lg">
                <svg width="32" height="32" viewBox="0 0 24 24" className="text-gray-800">
                  <path fill="currentColor" d="M12 1.5L6 12.5l6 3.5 6-3.5L12 1.5zM6 13.5l6 8.5 6-8.5-6 3.5-6-3.5z"/>
                </svg>
              </div>

              {/* Another coin */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-b from-orange-300 to-orange-500 flex items-center justify-center shadow-lg">
                <span className="text-orange-800 font-bold text-lg">₿</span>
              </div>
            </div>

            {/* Upward arrows scattered around */}
            <div className="absolute top-10 left-1/4 hidden md:block">
              <svg width="24" height="24" viewBox="0 0 24 24" className="text-blue-300">
                <path fill="currentColor" d="M7 14l5-5 5 5z"/>
              </svg>
            </div>
            <div className="absolute top-16 right-1/4 hidden md:block">
              <svg width="20" height="20" viewBox="0 0 24 24" className="text-blue-300">
                <path fill="currentColor" d="M7 14l5-5 5 5z"/>
              </svg>
            </div>
            <div className="absolute bottom-20 left-1/3 hidden md:block">
              <svg width="18" height="18" viewBox="0 0 24 24" className="text-blue-300">
                <path fill="currentColor" d="M7 14l5-5 5 5z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Strategy cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {strategies.map((strategy) => (
            <div key={strategy.number} className="relative">
              <div className="bg-blue-600/80 backdrop-blur-sm rounded-lg p-6 text-center border border-blue-400/30 shadow-lg">
                {/* Number circle */}
                <div className="w-12 h-12 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 shadow-lg" data-testid={`strategy-number-${strategy.number}`}>
                  {strategy.number}
                </div>
                
                {/* Strategy text */}
                <p className="text-white text-sm leading-relaxed" data-testid={`strategy-text-${strategy.number}`}>
                  {strategy.text}
                </p>
              </div>
              
              {/* Upward arrow above card */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <svg width="16" height="16" viewBox="0 0 24 24" className="text-blue-300">
                  <path fill="currentColor" d="M7 14l5-5 5 5z"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
