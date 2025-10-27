import image1 from "@assets/Image 1.jpg";
import image2 from "@assets/image 2.jpg";
import image3 from "@assets/image 3.jpg";
import image4 from "@assets/image 4.jpg";
import image5 from "@assets/image 5.jpg";
import image6 from "@assets/image 6.jpeg";
import { useEffect, useRef, useState } from "react";

export default function PhotoGallery() {
    const images = [
        {
            src: image1,
            alt: "BNI Erode Beacon's 500th Week Celebration!",
        },
        {
            src: image2,
            alt: "I'm Overjoyed to Announce My Leadership Graduation!",
        },
        {
            src: image5,
            alt: "JCI India Installation Ceremony!",
        },
        {
            src: image4,
            alt: "VIP networking area at Blockchain Life",
        },
        {
            src: image3,
            alt: "BNI BeIcon Award Function and representing Blockchain Technology",
        },
        {
            src: image6,
            alt: "BNI BeIcon Award Function and representing Blockchain Technology",
        },
    ];

    // Duplicate images for seamless loop
    const duplicatedImages = [...images, ...images];
    const galleryRef = useRef<HTMLDivElement>(null);
    const [scrollSpeed, setScrollSpeed] = useState(15); // Default speed in seconds

    useEffect(() => {
        // Set scroll speed based on screen size
        const updateScrollSpeed = () => {
            if (window.innerWidth < 640) {
                setScrollSpeed(12); // Fast on mobile
            } else if (window.innerWidth < 1024) {
                setScrollSpeed(12); // Medium on tablet
            } else {
                setScrollSpeed(15); // Normal on desktop
            }
        };

        updateScrollSpeed();
        window.addEventListener("resize", updateScrollSpeed);
        return () => window.removeEventListener("resize", updateScrollSpeed);
    }, []);

    useEffect(() => {
        const gallery = galleryRef.current;
        if (!gallery) return;

        let animationId: number;
        let startTime: number;
        const totalWidth = gallery.scrollWidth / 2; // Half because we duplicated

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;

            // Calculate position based on elapsed time and speed
            const progress =
                (elapsed % (scrollSpeed * 1000)) / (scrollSpeed * 1000);
            const position = -totalWidth * progress;

            gallery.style.transform = `translateX(${position}px)`;

            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, [scrollSpeed]);

    return (
        <section className="py-16 bg-background" id="gallery">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <div
                        ref={galleryRef}
                        className="flex space-x-4 sm:space-x-6 select-none"
                        style={{ touchAction: "none" }} // prevent touch gestures
                    >
                        {duplicatedImages.map((image, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 pointer-events-none" // ignore touch/hover interaction
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    loading="lazy"
                                    className="w-60 sm:w-72 md:w-80 h-48 sm:h-56 md:h-60 object-cover rounded-lg transition-transform duration-1000"
                                    data-testid={`gallery-image-${index}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
