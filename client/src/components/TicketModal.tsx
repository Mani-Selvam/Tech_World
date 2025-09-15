import { X, Check } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TicketModal({ isOpen, onClose }: TicketModalProps) {
  const tickets = [
    {
      type: "STANDARD",
      color: "from-blue-600 to-blue-800",
      borderColor: "border-blue-500",
      bgColor: "bg-gradient-to-b from-blue-600/20 to-blue-800/40",
      originalPrice: "$379",
      currentPrice: "$219",
      features: [
        "Expo access",
        "Access to the conference halls", 
        "Access to Blockchain Life Trading Tournament",
        "Access to the official app for smart networking",
        "Free water, coffee & tea"
      ]
    },
    {
      type: "BUSINESS", 
      color: "from-green-600 to-green-800",
      borderColor: "border-green-500",
      bgColor: "bg-gradient-to-b from-green-600/20 to-green-800/40",
      originalPrice: "$659",
      currentPrice: "$349",
      features: [
        "All options included in the STANDARD ticket",
        "Lunch box (2 days)",
        "Video recordings of speeches"
      ]
    },
    {
      type: "VIP",
      color: "from-purple-600 to-purple-800", 
      borderColor: "border-purple-500",
      bgColor: "bg-gradient-to-b from-purple-600/20 to-purple-800/40",
      originalPrice: "$1999",
      currentPrice: "$1699",
      features: [
        "All options included in the BUSINESS ticket",
        "VIP registration desks",
        "VIP/Speaker Lounge : network with speakers and VIP attendees, fancy coffee breaks and lunches",
        "Official AfterParty at Soho Garden DXB (food, drinks, show are included) October 29, 9 p.m - 2 a.m with AKON"
      ],
      isLimited: true
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-slate-900 border-slate-700">
        <DialogHeader className="text-center pb-6">
          <DialogTitle className="text-4xl font-bold text-white">
            Choose your ticket
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {tickets.map((ticket, index) => (
            <div key={ticket.type} className="relative">
              {/* Happy Bird Tag */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  HAPPY BIRD
                </div>
              </div>
              
              {/* Ticket Card */}
              <div className={`${ticket.bgColor} ${ticket.borderColor} border-2 rounded-lg p-6 h-full flex flex-col backdrop-blur-sm`}>
                {/* Ticket Type Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white bg-slate-800/50 py-3 rounded-lg border border-gray-600">
                    {ticket.type}
                  </h3>
                </div>
                
                {/* Features List */}
                <div className="flex-1 mb-6">
                  {ticket.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 mb-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white text-sm leading-relaxed">
                        {feature === "All options included in the STANDARD ticket" && (
                          <>All options included in the <span className="underline font-semibold">STANDARD</span> ticket</>
                        )}
                        {feature === "All options included in the BUSINESS ticket" && (
                          <>All options included in the <span className="underline font-semibold">BUSINESS</span> ticket</>
                        )}
                        {feature.includes("AKON") && (
                          <>
                            {feature.split("with AKON")[0]}
                            with <span className="text-orange-400 font-bold">AKON</span>
                          </>
                        )}
                        {!feature.includes("All options included") && !feature.includes("AKON") && feature}
                      </span>
                    </div>
                  ))}
                  
                  {/* AKON Image for VIP */}
                  {ticket.type === "VIP" && (
                    <div className="mt-4 text-center">
                      <div className="bg-slate-800/70 rounded-lg p-3 inline-block">
                        <span className="text-orange-400 font-bold text-lg">AKON</span>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Pricing */}
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">PROMO</span>
                    <span className="text-gray-500 line-through">{ticket.originalPrice}</span>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-3">
                    {ticket.currentPrice}
                  </div>
                  <button 
                    data-testid={`button-buy-${ticket.type.toLowerCase()}`}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>💳</span> BUY
                  </button>
                </div>
                
                {/* Limited Tickets Badge */}
                {ticket.isLimited && (
                  <div className="mt-3 text-center">
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      20 TICKETS ONLY
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}