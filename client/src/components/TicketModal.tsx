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
      <DialogContent className="max-w-6xl bg-slate-900 border-slate-700">
        <DialogHeader className="text-center pb-4">
          <DialogTitle className="text-3xl font-bold text-white">
            Choose your ticket
          </DialogTitle>
        </DialogHeader>
        
        <div className="px-6 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tickets.map((ticket, index) => (
              <div key={ticket.type} className="relative">
                {/* Ticket Card */}
                <div className={`${ticket.bgColor} ${ticket.borderColor} border-2 rounded-lg p-4 h-full flex flex-col backdrop-blur-sm`}>
                  {/* Ticket Type Header with Badge */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between bg-slate-800/50 py-3 px-4 rounded-lg border border-gray-600">
                      <h3 className="text-xl font-bold text-white">{ticket.type}</h3>
                      {ticket.isLimited && (
                        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                          20 TICKETS ONLY
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Features List */}
                  <div className="flex-1 mb-4">
                    {ticket.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 mb-2">
                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white text-[13px] leading-relaxed">
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
                      <div className="mt-2 text-center">
                        <div className="bg-slate-800/70 rounded-lg p-2 inline-block">
                          <span className="text-orange-400 font-bold text-sm">AKON</span>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}