import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBubbles from "@/components/SectionBubbles";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertEnrollmentSchema, type InsertEnrollment } from "@shared/schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Link } from "wouter";
import { ArrowLeft, GraduationCap, Users, Code, TrendingUp } from "lucide-react";

function EnrollmentPage() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
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
        headers: {
          "Content-Type": "application/json",
        },
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
        description: "Thank you for enrolling. We'll contact you soon with course details.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/enrollments"] });
    },
    onError: (error: any) => {
      toast({
        title: "Enrollment Failed",
        description: error.message || "Something went wrong. Please try again.",
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

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <ScrollReveal variant="fade-up" duration={800}>
        <div className="relative py-20 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
          <SectionBubbles count={4} />
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <Link href="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-6 transition-colors">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Enroll Now
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join the world's leading Web3 academy and start your journey in blockchain technology, 
              crypto, and decentralized applications.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Course Benefits Section */}
      <ScrollReveal variant="fade-up" duration={800} delay={200}>
        <section className="py-16 bg-secondary/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Hands-on Coding</h3>
                <p className="text-muted-foreground">Learn by building real Web3 applications</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Mentorship</h3>
                <p className="text-muted-foreground">Learn from industry professionals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
                <p className="text-muted-foreground">Advance your career in Web3</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Enrollment Form Section */}
      <ScrollReveal variant="fade-up" duration={800} delay={300}>
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-card/50 backdrop-blur-sm border-purple-500/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl font-bold">
                  <GraduationCap className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  Course Enrollment Form
                </CardTitle>
                <CardDescription>
                  Fill out the form below to secure your spot in our next batch
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-purple-400">Personal Information</h3>
                      
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                placeholder="Enter your full name"
                                data-testid="input-fullname"
                                className="bg-background/50"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="mobile"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Mobile Number (WhatsApp Preferred) *</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  placeholder="+1 234 567 8900"
                                  data-testid="input-mobile"
                                  className="bg-background/50"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email ID *</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  type="email"
                                  placeholder="your.email@example.com"
                                  data-testid="input-email"
                                  className="bg-background/50"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>City / Location *</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  placeholder="Enter your city"
                                  data-testid="input-city"
                                  className="bg-background/50"
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
                              <FormLabel>Age Group *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-agegroup" className="bg-background/50">
                                    <SelectValue placeholder="Select age group" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="15-20">15-20</SelectItem>
                                  <SelectItem value="21-25">21-25</SelectItem>
                                  <SelectItem value="26-30">26-30</SelectItem>
                                  <SelectItem value="31+">31+</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="currentRole"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Current Role *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-currentrole" className="bg-background/50">
                                  <SelectValue placeholder="Select your current role" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Student">Student</SelectItem>
                                <SelectItem value="Working Professional">Working Professional</SelectItem>
                                <SelectItem value="Business Owner">Business Owner</SelectItem>
                                <SelectItem value="Others">Others</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Course Interests */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-purple-400">Interested Courses</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormField
                          control={form.control}
                          name="blockchainCoding"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Blockchain Coding</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-blockchain" className="bg-background/50">
                                    <SelectValue placeholder="Select level" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Beginner">Beginner</SelectItem>
                                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                                  <SelectItem value="Advanced">Advanced</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="cryptoDefi"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Crypto & DeFi</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-crypto" className="bg-background/50">
                                    <SelectValue placeholder="Select level" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Beginner">Beginner</SelectItem>
                                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                                  <SelectItem value="Advanced">Advanced</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="nftWeb3"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>NFT & Web3 Business</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-nft" className="bg-background/50">
                                    <SelectValue placeholder="Select level" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Beginner">Beginner</SelectItem>
                                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                                  <SelectItem value="Advanced">Advanced</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Preferences */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-purple-400">Preferences</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="preferredMode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Mode *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-mode" className="bg-background/50">
                                    <SelectValue placeholder="Select mode" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Online">Online</SelectItem>
                                  <SelectItem value="Offline">Offline</SelectItem>
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
                              <FormLabel>Preferred Batch Timing *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-timing" className="bg-background/50">
                                    <SelectValue placeholder="Select timing" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Morning">Morning</SelectItem>
                                  <SelectItem value="Afternoon">Afternoon</SelectItem>
                                  <SelectItem value="Evening">Evening</SelectItem>
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
                            <FormLabel>How did you hear about us? *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-hearabout" className="bg-background/50">
                                  <SelectValue placeholder="Select source" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Instagram">Instagram</SelectItem>
                                <SelectItem value="WhatsApp">WhatsApp</SelectItem>
                                <SelectItem value="Friend">Friend</SelectItem>
                                <SelectItem value="College">College</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
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
                            <FormLabel>Why do you want to learn this? *</FormLabel>
                            <FormControl>
                              <Textarea 
                                {...field} 
                                placeholder="Tell us about your motivation and goals..."
                                data-testid="textarea-whylearn"
                                className="bg-background/50 min-h-20"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                      disabled={isSubmitting}
                      data-testid="button-submit"
                    >
                      {isSubmitting ? "Enrolling..." : "Enroll Now - Secure Your Spot"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </div>
  );
}

export default EnrollmentPage;