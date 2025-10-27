import image1 from "@assets/Image 1.webp";
import image1_400 from "@assets/Image 1-400w.webp";
import image1_800 from "@assets/Image 1-800w.webp";
import image2 from "@assets/image 2.webp";
import image2_400 from "@assets/image 2-400w.webp";
import image2_800 from "@assets/image 2-800w.webp";
import image3 from "@assets/image 3.webp";
import image3_400 from "@assets/image 3-400w.webp";
import image3_800 from "@assets/image 3-800w.webp";
import image4 from "@assets/image 4.webp";
import image4_400 from "@assets/image 4-400w.webp";
import image4_800 from "@assets/image 4-800w.webp";
import image5 from "@assets/image 5.webp";
import image5_400 from "@assets/image 5-400w.webp";
import image5_800 from "@assets/image 5-800w.webp";
import image6 from "@assets/image 6.webp";
import image6_400 from "@assets/image 6-400w.webp";
import image6_800 from "@assets/image 6-800w.webp";
import { useEffect, useRef, useState } from "react";

export default function PhotoGallery() {
    const images = [
        {
            src: image1,
            srcset: `${image1_400} 400w, ${image1_800} 800w, ${image1} 1200w`,
            alt: "BNI Erode Beacon's 500th Week Celebration!",
        },
        {
            src: image2,
            srcset: `${image2_400} 400w, ${image2_800} 800w, ${image2} 1200w`,
            alt: "I'm Overjoyed to Announce My Leadership Graduation!",
        },
        {
            src: image5,
            srcset: `${image5_400} 400w, ${image5_800} 800w, ${image5} 1200w`,
            alt: "JCI India Installation Ceremony!",
        },
        {
            src: image4,
            srcset: `${image4_400} 400w, ${image4_800} 800w, ${image4} 1200w`,
            alt: "VIP networking area at Blockchain Life",
        },
        {
            src: image3,
            srcset: `${image3_400} 400w, ${image3_800} 800w, ${image3} 1200w`,
            alt: "BNI BeIcon Award Function and representing Blockchain Technology",
        },
        {
            src: image6,
            srcset: `${image6_400} 400w, ${image6_800} 800w, ${image6} 1200w`,
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
                                    srcSet={image.srcset}
                                    sizes="(max-width: 640px) 240px, (max-width: 768px) 288px, 320px"
                                    alt={image.alt}
                                    loading="lazy"
                                    decoding="async"
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
