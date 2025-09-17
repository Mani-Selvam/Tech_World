export default function StickyBottomBanner() {
    const scrollToAttendees = () => {
        const attendeesSection = document.getElementById("attendees");
        if (attendeesSection) {
            attendeesSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const openRegistrationForm = () => {
        setTimeout(() => {
            const attendeesSection = document.getElementById("attendees");
            if (attendeesSection) {
                attendeesSection.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
                // Directly set showForm to true in the Attendees component using custom event
                const event = new CustomEvent("openRegistrationForm");
                document.dispatchEvent(event);
            }
        }, 300);
    };
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-t border-red-500/30">
            <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
                <div className="flex items-center gap-6">
                    <span className="text-red-500 font-bold text-sm uppercase tracking-wider animate-pulse">
                        HIGH DEMAND
                    </span>
                </div>

                <button
                    onClick={openRegistrationForm}
                    data-testid="button-buy-tickets-sticky"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-6 py-2 rounded-lg text-white font-semibold text-sm uppercase tracking-wide transition-all duration-300 animate-pulse hover:animate-none shadow-lg hover:shadow-orange-500/30">
                    REGISTER NOW
                </button>
            </div>
        </div>
    );
}
