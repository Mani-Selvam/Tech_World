import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBubbles from "@/components/SectionBubbles";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    ArrowLeft,
    GraduationCap,
    Users,
    Code,
    TrendingUp,
    Trophy,
    Briefcase,
    Rocket,
    Star,
    Target,
    Zap,
} from "lucide-react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertEnrollmentSchema, type InsertEnrollment } from "@shared/schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Link } from "wouter";

function EnrollmentPage() {
    const { toast } = useToast();
    const queryClient = useQueryClient();
    const [isSubmitting, setIsSubmitting] = useState(false);

    // 🌟 NEW: step state
    // 1=Personal, 2=Courses, 3=Preferences

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, []);

    const form = useForm<InsertEnrollment>({
        resolver: zodResolver(insertEnrollmentSchema),
        defaultValues: {
            fullName: "",
            mobile: "",
            email: "",
            city: "",
            ageGroup: undefined,
            currentRole: undefined,
            blockchainCoding: undefined,
            cryptoDefi: undefined,
            nftWeb3: undefined,
            preferredMode: undefined,
            preferredTiming: undefined,
            hearAboutUs: undefined,
            whyLearn: "",
        },
    });

    const enrollmentMutation = useMutation({
        mutationFn: async (data: InsertEnrollment) => {
            const response = await fetch("/api/enroll", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Enrollment failed");
            }
            return response.json();
        },
        onSuccess: () => {
            toast({
                title: "Enrollment Successful!",
                description:
                    "Thank you for enrolling. We'll contact you soon with course details.",
            });
            form.reset();
            queryClient.invalidateQueries({ queryKey: ["/api/enrollments"] });
            setStep(1); // reset to first step
        },
        onError: (error: any) => {
            toast({
                title: "Enrollment Failed",
                description:
                    error.message || "Something went wrong. Please try again.",
                variant: "destructive",
            });
        },
    });

    const onSubmit = async (data: InsertEnrollment) => {
        setIsSubmitting(true);
        try {
            await enrollmentMutation.mutateAsync(data);
        } finally {
            setIsSubmitting(false);
        }
    };

    // 🌟 step navigation handlers
    const [step, setStep] = useState(1);

    const nextStep = () => setStep((s) => Math.min(s + 1, 3));
    const prevStep = () => setStep((s) => Math.max(s - 1, 1));

    return (
        <div className="min-h-screen bg-background text-foreground overflow-hidden scrollbar-none ">
            <Navigation />

            {/* Modern Hero Section */}
            <ScrollReveal variant="fade-up" duration={400}>
                <div className="relative min-h-screen flex items-center justify-center ">
                    <SectionBubbles count={6} />

                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 parallax-layer">
                        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500/20 to-transparent animate-spin-slow"></div>
                        <div className="absolute top-40 right-32 w-24 h-24 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-transparent animate-pulse"></div>
                        <div className="absolute bottom-32 left-1/3 w-40 h-40 rounded-full bg-gradient-to-r from-purple-500/20 to-transparent animate-bounce"></div>
                    </div>

                    <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
                        {/* Glass Hero Card */}
                        <div className="glass-card-strong rounded-3xl p-12 mx-auto max-w-4xl modern-glow-purple">
                            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                                <span
                                    className="bg-clip-text text-transparent"
                                    style={{
                                        backgroundImage:
                                            "var(--gradient-aurora)",
                                    }}>
                                    Transform Your Future
                                </span>
                                <br />
                                <span className="text-3xl md:text-4xl text-foreground/90 font-normal">
                                    with Web3 Mastery
                                </span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                                Join thousands of innovators who've launched
                                successful Web3 careers. Master blockchain
                                technology, DeFi protocols, and decentralized
                                applications with expert guidance.
                            </p>

                            {/* CTA Button */}
                            <button
                                onClick={() =>
                                    document
                                        .getElementById("enrollment-form")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="animated-gradient-btn text-white px-12 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 neon-pulse">
                                Start Your Journey Today
                            </button>

                            {/* Trust Indicators */}
                            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                                    <span>5000+ Graduates</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                                    <span>Industry Certified</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
                                    <span>Career Guaranteed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Enhanced Course Benefits Section */}
            {/* <ScrollReveal variant="fade-up" duration={800} delay={200}>
                <section className="py-24 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                <span
                                    className="bg-clip-text text-transparent"
                                    style={{
                                        backgroundImage:
                                            "var(--gradient-aurora)",
                                    }}>
                                    Why Choose TechARA Academy?
                                </span>
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                                Experience the future of education with our
                                cutting-edge curriculum and immersive learning
                                environment
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-grid">
                            <div className="glass-card rounded-2xl p-8 text-center tilt-hover hover:scale-105 transition-all duration-300 modern-glow-cyan">
                                <div
                                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 neon-ring"
                                    style={{
                                        background: "var(--gradient-cta)",
                                    }}>
                                    <Code className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
                                    Hands-on Coding
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Build real-world DApps, smart contracts, and
                                    blockchain solutions with our project-based
                                    learning approach
                                </p>
                                <div className="mt-6 flex justify-center">
                                    <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
                                </div>
                            </div>

                            <div className="glass-card rounded-2xl p-8 text-center tilt-hover hover:scale-105 transition-all duration-300 modern-glow-magenta">
                                <div
                                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 neon-ring"
                                    style={{
                                        background: "var(--gradient-cta)",
                                    }}>
                                    <Users className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-4 text-purple-300">
                                    Expert Mentorship
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Learn directly from industry veterans who've
                                    built successful Web3 companies and
                                    protocols
                                </p>
                                <div className="mt-6 flex justify-center">
                                    <div className="h-1 w-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
                                </div>
                            </div>

                            <div className="glass-card rounded-2xl p-8 text-center tilt-hover hover:scale-105 transition-all duration-300 modern-glow-purple">
                                <div
                                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 neon-ring"
                                    style={{
                                        background: "var(--gradient-cta)",
                                    }}>
                                    <TrendingUp className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-4 text-pink-300">
                                    Career Growth
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Join our network of 5000+ alumni working at
                                    top Web3 companies with 300% average salary
                                    increase
                                </p>
                                <div className="mt-6 flex justify-center">
                                    <div className="h-1 w-16 bg-gradient-to-r from-pink-400 to-cyan-500 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal> */}

            {/* Outcomes Section */}
            <ScrollReveal variant="fade-up" duration={800} delay={400}>
                <section className="py-24 bg-gradient-to-br from-slate-900/50 to-purple-900/20 relative overflow-hidden">
                    {/* Background Effects */}
                    <div className="absolute inset-0">
                        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-500/10 to-transparent animate-pulse"></div>
                        <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-gradient-to-r from-purple-500/10 to-transparent animate-bounce"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                <span
                                    className="bg-clip-text text-transparent"
                                    style={{
                                        backgroundImage:
                                            "var(--gradient-aurora)",
                                    }}>
                                    What You'll Achieve
                                </span>
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                                Our graduates don't just learn Web3 — they
                                become industry leaders, innovators, and
                                successful entrepreneurs
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-grid">
                            {/* Outcome Card 1 */}
                            <div className="glass-card rounded-2xl p-8 tilt-hover group hover:scale-105 transition-all duration-500 modern-glow-cyan">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center neon-ring bg-gradient-to-r from-cyan-400 to-blue-500">
                                        <Trophy className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-2xl font-bold text-cyan-300">
                                        01
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-cyan-300">
                                    Industry Recognition
                                </h3>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    Earn certifications recognized by top Web3
                                    companies like Coinbase, Uniswap, and
                                    ConsenSys
                                </p>
                                <div className="h-1 w-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full group-hover:animate-pulse"></div>
                            </div>

                            {/* Outcome Card 2 */}
                            <div className="glass-card rounded-2xl p-8 tilt-hover group hover:scale-105 transition-all duration-500 modern-glow-magenta">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center neon-ring bg-gradient-to-r from-purple-400 to-pink-500">
                                        <Briefcase className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-2xl font-bold text-purple-300">
                                        02
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-purple-300">
                                    Dream Job Placement
                                </h3>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    95% job placement rate with average starting
                                    salaries of $120K+ in blockchain development
                                    roles
                                </p>
                                <div className="h-1 w-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full group-hover:animate-pulse"></div>
                            </div>

                            {/* Outcome Card 3 */}
                            <div className="glass-card rounded-2xl p-8 tilt-hover group hover:scale-105 transition-all duration-500 modern-glow-purple">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center neon-ring bg-gradient-to-r from-pink-400 to-red-500">
                                        <Rocket className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-2xl font-bold text-pink-300">
                                        03
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-pink-300">
                                    Launch Your Startup
                                </h3>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    Join our incubator program and get funding
                                    for your Web3 startup with our investor
                                    network
                                </p>
                                <div className="h-1 w-full bg-gradient-to-r from-pink-400 to-red-500 rounded-full group-hover:animate-pulse"></div>
                            </div>

                            {/* Outcome Card 4 */}
                            <div className="glass-card rounded-2xl p-8 tilt-hover group hover:scale-105 transition-all duration-500 modern-glow-cyan">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center neon-ring bg-gradient-to-r from-green-400 to-cyan-500">
                                        <Star className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-2xl font-bold text-green-300">
                                        04
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-green-300">
                                    Build Real DApps
                                </h3>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    Create 5+ production-ready decentralized
                                    applications that solve real-world problems
                                </p>
                                <div className="h-1 w-full bg-gradient-to-r from-green-400 to-cyan-500 rounded-full group-hover:animate-pulse"></div>
                            </div>

                            {/* Outcome Card 5 */}
                            <div className="glass-card rounded-2xl p-8 tilt-hover group hover:scale-105 transition-all duration-500 modern-glow-magenta">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center neon-ring bg-gradient-to-r from-yellow-400 to-orange-500">
                                        <Target className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-2xl font-bold text-yellow-300">
                                        05
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-yellow-300">
                                    Master DeFi Protocols
                                </h3>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    Become an expert in yield farming, liquidity
                                    mining, and automated market makers
                                </p>
                                <div className="h-1 w-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full group-hover:animate-pulse"></div>
                            </div>

                            {/* Outcome Card 6 */}
                            <div className="glass-card rounded-2xl p-8 tilt-hover group hover:scale-105 transition-all duration-500 modern-glow-purple">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center neon-ring bg-gradient-to-r from-indigo-400 to-purple-500">
                                        <Zap className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-2xl font-bold text-indigo-300">
                                        06
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-indigo-300">
                                    Global Network Access
                                </h3>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    Connect with 5000+ alumni worldwide and
                                    access exclusive Web3 job opportunities
                                </p>
                                <div className="h-1 w-full bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full group-hover:animate-pulse"></div>
                            </div>
                        </div>

                        {/* Stats Banner */}
                        <div className="mt-20 glass-card-strong rounded-3xl p-8">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                                <div>
                                    <div className="text-3xl md:text-4xl font-bold text-cyan-300 mb-2">
                                        5000+
                                    </div>
                                    <div className="text-muted-foreground">
                                        Success Stories
                                    </div>
                                </div>
                                <div>
                                    <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">
                                        95%
                                    </div>
                                    <div className="text-muted-foreground">
                                        Job Placement
                                    </div>
                                </div>
                                <div>
                                    <div className="text-3xl md:text-4xl font-bold text-pink-300 mb-2">
                                        $120K+
                                    </div>
                                    <div className="text-muted-foreground">
                                        Average Salary
                                    </div>
                                </div>
                                <div>
                                    <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2">
                                        50+
                                    </div>
                                    <div className="text-muted-foreground">
                                        Partner Companies
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* Modern Enrollment Form Section */}
            <ScrollReveal variant="fade-up" duration={800} delay={300}>
                <section className="py-24 relative" id="enrollment-form">
                    {/* Background Effects */}
                    <div className="absolute inset-0">
                        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/10 to-transparent animate-spin-slow"></div>
                        <div className="absolute bottom-10 right-20 w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500/10 to-transparent animate-pulse"></div>
                    </div>

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="glass-card-strong rounded-3xl overflow-hidden modern-glow-purple">
                            <div className="text-center p-12 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
                                <div
                                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 neon-ring"
                                    style={{
                                        background: "var(--gradient-cta)",
                                    }}>
                                    <GraduationCap className="w-10 h-10 text-white" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    <span
                                        className="bg-clip-text text-transparent"
                                        style={{
                                            backgroundImage:
                                                "var(--gradient-aurora)",
                                        }}>
                                        Secure Your Future Today
                                    </span>
                                </h2>
                                <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                                    Join the next generation of Web3 innovators.
                                    Limited seats available for our upcoming
                                    batch.
                                </p>
                            </div>

                            <div className="p-12">
                                <Form {...form}>
                                    <form
                                        onSubmit={form.handleSubmit(onSubmit)}
                                        className="space-y-8">
                                        {/* =================== STEP 1 =================== */}
                                        {step === 1 && (
                                            <div className="space-y-6">
                                                <h3 className="text-lg font-semibold text-purple-300">
                                                    Personal Information
                                                </h3>
                                                {/* ---- all your Personal Information fields unchanged ---- */}
                                                {/* Full Name */}
                                                <FormField
                                                    control={form.control}
                                                    name="fullName"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-gray-200">
                                                                Full Name *
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    {...field}
                                                                    placeholder="Enter your full name"
                                                                    className="
        bg-background/50 
        text-black 
        placeholder-gray-400 
        placeholder:text-[14px] text-[14px]    /* 📱 Mobile: ~14px */
        sm:placeholder:text-[12px] sm:text-[12px] /* Tablet: ~12px */
        md:placeholder:text-[14px] md:text-[14px] /* Desktop: ~14px */
        px-4 py-2 
        border border-gray-300 
        rounded-[10px] 
        focus:border-purple-500 
        focus:ring-1 focus:ring-purple-500
    "
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />

                                                {/* Mobile & Email */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    {/* Mobile */}
                                                    <FormField
                                                        control={form.control}
                                                        name="mobile"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-gray-200">
                                                                    Mobile
                                                                    Number
                                                                    (WhatsApp
                                                                    Preferred) *
                                                                </FormLabel>
                                                                <FormControl>
                                                                    <Input
                                                                        {...field}
                                                                        placeholder="+1 234 567 8900"
                                                                        data-testid="input-mobile"
                                                                        className="bg-background/50 text-black placeholder-gray-400 
                                                                         placeholder:text-[14px] text-[14px]    /* 📱 Mobile: ~14px */
        sm:placeholder:text-[12px] sm:text-[12px] /* Tablet: ~12px */
        md:placeholder:text-[14px] md:text-[14px] /* Desktop: ~14px */ focus:placeholder-gray-500 px-4 py-2 border border-gray-300 rounded-[10px] focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                                                                    />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    {/* Email */}
                                                    <FormField
                                                        control={form.control}
                                                        name="email"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-gray-200">
                                                                    Email ID *
                                                                </FormLabel>
                                                                <FormControl>
                                                                    <Input
                                                                        {...field}
                                                                        type="email"
                                                                        placeholder="your.email@example.com"
                                                                        data-testid="input-email"
                                                                        className="bg-background/50 text-black placeholder-gray-400 focus:placeholder-gray-500 px-4 py-2 border border-gray-300 rounded-[10px] focus:border-purple-500 focus:ring-1 focus:ring-purple-500
                                                                         placeholder:text-[14px] text-[14px]    /* 📱 Mobile: ~14px */
        sm:placeholder:text-[12px] sm:text-[12px] /* Tablet: ~12px */
        md:placeholder:text-[14px] md:text-[14px] /* Desktop: ~14px */"
                                                                    />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>

                                                {/* City & Age */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <FormField
                                                        control={form.control}
                                                        name="city"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-gray-200">
                                                                    City /
                                                                    Location *
                                                                </FormLabel>
                                                                <FormControl>
                                                                    <Input
                                                                        {...field}
                                                                        placeholder="Enter your city"
                                                                        data-testid="input-city"
                                                                        className="bg-background/50 text-black placeholder-gray-400 focus:placeholder-gray-500 px-4 py-2 border border-gray-300 rounded-[10px] focus:border-purple-500 focus:ring-1 focus:ring-purple-500  placeholder:text-[14px] text-[14px]    /* 📱 Mobile: ~14px */
        sm:placeholder:text-[12px] sm:text-[12px] /* Tablet: ~12px */
        md:placeholder:text-[14px] md:text-[14px] /* Desktop: ~14px */"
                                                                    />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={form.control}
                                                        name="ageGroup"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-gray-200">
                                                                    Age Group *
                                                                </FormLabel>
                                                                <Select
                                                                    onValueChange={
                                                                        field.onChange
                                                                    }
                                                                    defaultValue={
                                                                        field.value
                                                                    }>
                                                                    <FormControl>
                                                                        <SelectTrigger
                                                                            data-testid="select-agegroup"
                                                                            className="bg-background/50 text-white placeholder-gray-400 px-4 py-2 rounded-lg">
                                                                            <SelectValue placeholder="Select age group" />
                                                                        </SelectTrigger>
                                                                    </FormControl>
                                                                    <SelectContent>
                                                                        <SelectItem value="15-20">
                                                                            15-20
                                                                        </SelectItem>
                                                                        <SelectItem value="21-25">
                                                                            21-25
                                                                        </SelectItem>
                                                                        <SelectItem value="26-30">
                                                                            26-30
                                                                        </SelectItem>
                                                                        <SelectItem value="31+">
                                                                            31+
                                                                        </SelectItem>
                                                                    </SelectContent>
                                                                </Select>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>

                                                {/* Current Role */}
                                                <FormField
                                                    control={form.control}
                                                    name="currentRole"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-gray-200">
                                                                Current Role *
                                                            </FormLabel>
                                                            <Select
                                                                onValueChange={
                                                                    field.onChange
                                                                }
                                                                defaultValue={
                                                                    field.value
                                                                }>
                                                                <FormControl>
                                                                    <SelectTrigger
                                                                        data-testid="select-currentrole"
                                                                        className="bg-background/50 text-white placeholder-gray-400 px-4 py-2 rounded-lg">
                                                                        <SelectValue placeholder="Select your current role" />
                                                                    </SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent>
                                                                    <SelectItem value="Student">
                                                                        Student
                                                                    </SelectItem>
                                                                    <SelectItem value="Working Professional">
                                                                        Working
                                                                        Professional
                                                                    </SelectItem>
                                                                    <SelectItem value="Business Owner">
                                                                        Business
                                                                        Owner
                                                                    </SelectItem>
                                                                    <SelectItem value="Others">
                                                                        Others
                                                                    </SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                        )}

                                        {/* =================== STEP 2 =================== */}
                                        {step === 2 && (
                                            <div className="space-y-6">
                                                <h3 className="text-lg font-semibold text-purple-300">
                                                    Interested Courses
                                                </h3>
                                                {/* ---- your Interested Courses fields unchanged ---- */}
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                    {/* Blockchain */}
                                                    <FormField
                                                        control={form.control}
                                                        name="blockchainCoding"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-gray-200">
                                                                    Blockchain
                                                                    Coding
                                                                </FormLabel>
                                                                <Select
                                                                    onValueChange={
                                                                        field.onChange
                                                                    }
                                                                    defaultValue={
                                                                        field.value
                                                                    }>
                                                                    <FormControl>
                                                                        <SelectTrigger className="bg-background/50 text-white placeholder-gray-400 px-4 py-2 rounded-lg">
                                                                            <SelectValue placeholder="Select level" />
                                                                        </SelectTrigger>
                                                                    </FormControl>
                                                                    <SelectContent>
                                                                        <SelectItem value="Beginner">
                                                                            Beginner
                                                                        </SelectItem>
                                                                        <SelectItem value="Intermediate">
                                                                            Intermediate
                                                                        </SelectItem>
                                                                        <SelectItem value="Advanced">
                                                                            Advanced
                                                                        </SelectItem>
                                                                    </SelectContent>
                                                                </Select>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    {/* Crypto */}
                                                    <FormField
                                                        control={form.control}
                                                        name="cryptoDefi"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-gray-200">
                                                                    Crypto &
                                                                    DeFi
                                                                </FormLabel>
                                                                <Select
                                                                    onValueChange={
                                                                        field.onChange
                                                                    }
                                                                    defaultValue={
                                                                        field.value
                                                                    }>
                                                                    <FormControl>
                                                                        <SelectTrigger className="bg-background/50 text-white placeholder-gray-400 px-4 py-2 rounded-lg">
                                                                            <SelectValue placeholder="Select level" />
                                                                        </SelectTrigger>
                                                                    </FormControl>
                                                                    <SelectContent>
                                                                        <SelectItem value="Beginner">
                                                                            Beginner
                                                                        </SelectItem>
                                                                        <SelectItem value="Intermediate">
                                                                            Intermediate
                                                                        </SelectItem>
                                                                        <SelectItem value="Advanced">
                                                                            Advanced
                                                                        </SelectItem>
                                                                    </SelectContent>
                                                                </Select>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    {/* NFT */}
                                                    <FormField
                                                        control={form.control}
                                                        name="nftWeb3"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-gray-200">
                                                                    NFT & Web3
                                                                    Business
                                                                </FormLabel>
                                                                <Select
                                                                    onValueChange={
                                                                        field.onChange
                                                                    }
                                                                    defaultValue={
                                                                        field.value
                                                                    }>
                                                                    <FormControl>
                                                                        <SelectTrigger className="bg-background/50 text-white placeholder-gray-400 px-4 py-2 rounded-lg">
                                                                            <SelectValue placeholder="Select level" />
                                                                        </SelectTrigger>
                                                                    </FormControl>
                                                                    <SelectContent>
                                                                        <SelectItem value="Beginner">
                                                                            Beginner
                                                                        </SelectItem>
                                                                        <SelectItem value="Intermediate">
                                                                            Intermediate
                                                                        </SelectItem>
                                                                        <SelectItem value="Advanced">
                                                                            Advanced
                                                                        </SelectItem>
                                                                    </SelectContent>
                                                                </Select>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        {/* =================== STEP 3 =================== */}
                                        {step === 3 && (
                                            <div className="space-y-6">
                                                <h3 className="text-lg font-semibold text-purple-300">
                                                    Preferences
                                                </h3>
                                                {/* ---- your Preferences fields unchanged ---- */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <FormField
                                                        control={form.control}
                                                        name="preferredMode"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-gray-200">
                                                                    Preferred
                                                                    Mode *
                                                                </FormLabel>
                                                                <Select
                                                                    onValueChange={
                                                                        field.onChange
                                                                    }
                                                                    defaultValue={
                                                                        field.value
                                                                    }>
                                                                    <FormControl>
                                                                        <SelectTrigger className="bg-background/50 text-white placeholder-gray-400 px-4 py-2 rounded-lg">
                                                                            <SelectValue placeholder="Select mode" />
                                                                        </SelectTrigger>
                                                                    </FormControl>
                                                                    <SelectContent>
                                                                        <SelectItem value="Online">
                                                                            Online
                                                                        </SelectItem>
                                                                        <SelectItem value="Offline">
                                                                            Offline
                                                                        </SelectItem>
                                                                    </SelectContent>
                                                                </Select>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={form.control}
                                                        name="preferredTiming"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-gray-200">
                                                                    Preferred
                                                                    Batch Timing
                                                                    *
                                                                </FormLabel>
                                                                <Select
                                                                    onValueChange={
                                                                        field.onChange
                                                                    }
                                                                    defaultValue={
                                                                        field.value
                                                                    }>
                                                                    <FormControl>
                                                                        <SelectTrigger className="bg-background/50 text-white placeholder-gray-400 px-4 py-2 rounded-lg">
                                                                            <SelectValue placeholder="Select timing" />
                                                                        </SelectTrigger>
                                                                    </FormControl>
                                                                    <SelectContent>
                                                                        <SelectItem value="Morning">
                                                                            Morning
                                                                        </SelectItem>
                                                                        <SelectItem value="Afternoon">
                                                                            Afternoon
                                                                        </SelectItem>
                                                                        <SelectItem value="Evening">
                                                                            Evening
                                                                        </SelectItem>
                                                                    </SelectContent>
                                                                </Select>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>
                                                <FormField
                                                    control={form.control}
                                                    name="hearAboutUs"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-gray-200">
                                                                How did you hear
                                                                about us? *
                                                            </FormLabel>
                                                            <Select
                                                                onValueChange={
                                                                    field.onChange
                                                                }
                                                                defaultValue={
                                                                    field.value
                                                                }>
                                                                <FormControl>
                                                                    <SelectTrigger className="bg-background/50 text-white placeholder-gray-400 px-4 py-2 rounded-lg">
                                                                        <SelectValue placeholder="Select source" />
                                                                    </SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent>
                                                                    <SelectItem value="Instagram">
                                                                        Instagram
                                                                    </SelectItem>
                                                                    <SelectItem value="WhatsApp">
                                                                        WhatsApp
                                                                    </SelectItem>
                                                                    <SelectItem value="Friend">
                                                                        Friend
                                                                    </SelectItem>
                                                                    <SelectItem value="College">
                                                                        College
                                                                    </SelectItem>
                                                                    <SelectItem value="Other">
                                                                        Other
                                                                    </SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="whyLearn"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-black">
                                                                Why do you want
                                                                to learn this? *
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Textarea
                                                                    {...field}
                                                                    placeholder="Tell us about your motivation and goals..."
                                                                    data-testid="textarea-whylearn"
                                                                    className="bg-background/50 text-black placeholder-gray-400 focus:placeholder-gray-500 min-h-20 px-4 py-2 rounded-lg"
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                        )}

                                        {/* ---- Navigation Buttons ---- */}
                                        <div className="flex justify-between pt-4">
                                            {step > 1 && (
                                                <Button
                                                    type="button"
                                                    variant="outline"
                                                    onClick={prevStep}>
                                                    Back
                                                </Button>
                                            )}
                                            {step < 3 && (
                                                <Button
                                                    type="button"
                                                    className="ml-auto bg-purple-600 hover:bg-purple-700"
                                                    onClick={nextStep}>
                                                    Next
                                                </Button>
                                            )}
                                            {step === 3 && (
                                                <Button
                                                    type="submit"
                                                    className="ml-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                                                    disabled={isSubmitting}
                                                    data-testid="button-submit">
                                                    {isSubmitting
                                                        ? "Enrolling..."
                                                        : "Enroll Now - Secure Your Spot"}
                                                </Button>
                                            )}
                                        </div>
                                    </form>
                                </Form>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>
        </div>
    );
}
export default EnrollmentPage;
