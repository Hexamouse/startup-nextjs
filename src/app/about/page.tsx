import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang EduCraft AI | Platform Pembelajaran Cerdas & Adaptif",
  description:
    "Kenali lebih jauh EduCraft AI, platform pembelajaran berbasis AI yang menghadirkan pengalaman belajar yang personal, adaptif, dan efisien untuk siswa dan profesional.",
  keywords: [
    "EduCraft AI",
    "Platform Belajar AI",
    "E-learning Cerdas",
    "Pembelajaran Adaptif",
    "Kursus Online AI",
    "Pembelajaran Digital",
    "EdTech Indonesia"
  ],
  openGraph: {
    title: "Tentang EduCraft AI | Platform Pembelajaran Cerdas & Adaptif",
    description:
      "EduCraft AI membantu Anda mencapai tujuan belajar dengan teknologi kecerdasan buatan yang mempersonalisasi materi sesuai gaya belajar Anda.",
    type: "website",
    locale: "id_ID",
    siteName: "EduCraft AI"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tentang EduCraft AI | Platform Pembelajaran Cerdas & Adaptif",
    description:
      "Platform belajar berbasis AI yang dirancang untuk siswa dan profesional mencapai tujuan belajar secara efisien dan personal.",
  },
  authors: [{ name: "EduCraft AI Team" }],
  category: "Education",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Tentang Kami"
        description="EduCraft AI adalah platform pembelajaran berbasis Kecerdasan Buatan (AI) yang dirancang untuk membantu pelajar dan profesional mencapai tujuan belajar mereka. Kami menyediakan kursus, kuis, dan rencana belajar yang disesuaikan dengan kebutuhan unik setiap individu."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;