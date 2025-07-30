import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Brands from "@/components/Brands";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EduCraft AI - Platform Pembelajaran AI yang Dipersonalisasi",
  description:
    "EduCraft AI adalah platform pembelajaran berbasis Kecerdasan Buatan (AI) yang membantu pelajar dan profesional mencapai tujuan belajar mereka dengan materi, kuis, dan rencana belajar yang disesuaikan secara cerdas.",
  keywords: [
    "EduCraft AI",
    "Pembelajaran AI",
    "Platform Edukasi AI",
    "Kursus Online",
    "Pembelajaran Adaptif",
    "E-Learning AI",
    "Platform Belajar Digital",
    "AI Learning Platform",
    "Belajar Otomatis",
    "Pembelajaran Personal AI"
  ],
  authors: [{ name: "Tim EduCraft AI" }],
  openGraph: {
    title: "EduCraft AI - Platform Pembelajaran AI yang Dipersonalisasi",
    description:
      "Capai tujuan belajarmu dengan platform EduCraft AI yang memberikan pengalaman belajar adaptif sesuai dengan kebutuhan dan gaya belajar unikmu.",
    type: "website",
    locale: "id_ID",
    siteName: "EduCraft AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "EduCraft AI - Platform Pembelajaran AI yang Dipersonalisasi",
    description:
      "Belajar lebih efektif dengan teknologi AI dari EduCraft AI. Materi, kuis, dan rencana belajar otomatis yang disesuaikan dengan kecepatan belajarmu.",
  },
  category: "Education",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      {/* <Video /> */}
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      {/* <Blog /> */}
      <Contact />
    </>
  );
}