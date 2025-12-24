import { lazy, Suspense, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useAnimationDefer } from "@/hooks/useAnimationDefer";
import { useCarousel } from "@/hooks/useCarousel";
import { useWhatsAppMessage } from "@/hooks/useWhatsAppMessage";
import { AcademyHeroBackground } from "@/components/AcademyHeroBackground";
import { AcademyHeroContent } from "@/components/AcademyHeroContent";
import { AcademyHeroGallery } from "@/components/AcademyHeroGallery";
import { ACADEMY_CAROUSEL_IMAGES, ACADEMY_FLOATING_IMAGES, preloadAcademyImages } from "@/constants/academy";

const Ecosystem = lazy(() => import("@/components/Ecosystem"));
const Career = lazy(() => import("@/components/Career"));
const CertificationPrograms = lazy(() => import("@/components/CertificationPrograms"));
const CryptoDigitalAssetProgram = lazy(() => import("@/components/CryptoDigitalAssetProgram"));

export default function Academy() {
    const animationsEnabled = useAnimationDefer(1500);
    const carouselIndex = useCarousel(ACADEMY_CAROUSEL_IMAGES, animationsEnabled);
    const { sendWorkshopMessage, sendConsultationMessage } = useWhatsAppMessage();

    // Preload all academy images on component mount
    useEffect(() => {
        preloadAcademyImages();
    }, []);

    return (
        <>
            <Navigation />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
                <AcademyHeroBackground animationsEnabled={animationsEnabled} />

                <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20">
                    <div className="min-h-screen flex items-center">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full">
                        <AcademyHeroContent
                            animationsEnabled={animationsEnabled}
                            onWorkshopClick={sendWorkshopMessage}
                            onConsultationClick={sendConsultationMessage}
                        />

                        <AcademyHeroGallery
                            animationsEnabled={animationsEnabled}
                            floatingImages={ACADEMY_FLOATING_IMAGES}
                            carouselImages={ACADEMY_CAROUSEL_IMAGES}
                            carouselIndex={carouselIndex}
                        />
                        </div>
                    </div>
                </div>
            </section>

            {/* Lazy Loaded Sections */}
            <Suspense fallback={<div className="h-96" />}>
                <Ecosystem />
            </Suspense>
            <Suspense fallback={<div className="h-96" />}>
                <Career />
            </Suspense>
            <Suspense fallback={<div className="h-96" />}>
                <CertificationPrograms />
            </Suspense>
            <Suspense fallback={<div className="h-96" />}>
                <CryptoDigitalAssetProgram />
            </Suspense>

            <Footer />
        </>
    );
}
