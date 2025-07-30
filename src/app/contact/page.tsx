import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Kami | EduCraft AI - Platform Pembelajaran Cerdas",
  description:
    "Butuh bantuan atau ingin bertanya tentang EduCraft AI? Hubungi tim kami melalui formulir kontak atau email, kami siap membantu Anda.",
  keywords: [
    "Hubungi EduCraft AI",
    "Kontak EduCraft AI",
    "Dukungan Pelanggan EduCraft AI",
    "Bantuan EduCraft AI",
    "Layanan EduCraft AI",
    "Platform Pembelajaran AI"
  ],
  openGraph: {
    title: "Hubungi Kami | EduCraft AI - Platform Pembelajaran Cerdas",
    description:
      "Jangan ragu untuk menghubungi tim EduCraft AI jika Anda memiliki pertanyaan, saran, atau butuh bantuan mengenai platform pembelajaran kami.",
    type: "website",
    locale: "id_ID",
    siteName: "EduCraft AI"
  },
  twitter: {
    card: "summary_large_image",
    title: "Hubungi Kami | EduCraft AI - Platform Pembelajaran Cerdas",
    description:
      "Hubungi tim EduCraft AI untuk informasi lebih lanjut mengenai layanan dan fitur pembelajaran berbasis AI.",
  },
  authors: [{ name: "EduCraft AI Team" }],
  category: "Education",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Hubungi Kami"
        description="Ada pertanyaan tentang layanan atau fitur EduCraft AI? Tim kami siap membantu Anda. Hubungi kami melalui formulir di bawah ini atau kirim email ke support@educraft.ai."
      />

      <Contact />
    </>
  );
};

export default ContactPage;