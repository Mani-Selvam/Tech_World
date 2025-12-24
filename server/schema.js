// Type exports only - validation schemas are in client/src/schemas.ts
export type InsertAttendee = {
    name: string;
    email: string;
    mobile: string;
    companyName?: string | null;
};

export type InsertEnrollment = {
    fullName: string;
    mobile: string;
    email: string;
    city: string;
    ageGroup: "15-20" | "21-25" | "26-30" | "31+";
    currentRole: "Student" | "Working Professional" | "Business Owner" | "Others";
    blockchainCoding?: "Beginner" | "Intermediate" | "Advanced" | null;
    cryptoDefi?: "Beginner" | "Intermediate" | "Advanced" | null;
    nftWeb3?: "Beginner" | "Intermediate" | "Advanced" | null;
    preferredMode: "Online" | "Offline";
    preferredTiming: "Morning" | "Afternoon" | "Evening";
    hearAboutUs: "Instagram" | "WhatsApp" | "Friend" | "College" | "Other";
    whyLearn: string;
};
