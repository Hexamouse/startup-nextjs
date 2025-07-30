import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      // SVG Icon Tetap Sama
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-brain-icon lucide-brain"
      >
        <path d="M12 18V5" />
        <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" />
        <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" />
        <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" />
        <path d="M18 18a4 4 0 0 0 2-7.464" />
        <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" />
        <path d="M6 18a4 4 0 0 1-2-7.464" />
        <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" />
      </svg>
    ),
    title: "Pembelajaran Personal dengan Kecerdasan Buatan",
    paragraph:
      "EduCraft AI menganalisis gaya belajar dan perkembangan Anda untuk menciptakan jalur pembelajaran yang disesuaikan khusus untuk Anda.",
  },
  {
    id: 2,
    icon: (
      // SVG Icon Tetap Sama
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-newspaper-icon lucide-newspaper"
      >
        <path d="M15 18h-5" />
        <path d="M18 14h-8" />
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2" />
        <rect width="8" height="4" x="10" y="6" rx="1" />
      </svg>
    ),
    title: "Kuis Adaptif & Umpan Balik Real-Time",
    paragraph:
      "Tantang diri Anda dengan kuis yang menyesuaikan tingkat kesulitan sesuai kemampuan, dan dapatkan umpan balik instan untuk terus berkembang.",
  },
  {
    id: 3,
    icon: (
      // SVG Icon Tetap Sama
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-chart-no-axes-combined-icon lucide-chart-no-axes-combined"
      >
        <path d="M12 16v5" />
        <path d="M16 14v7" />
        <path d="M20 10v11" />
        <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />
        <path d="M4 18v3" />
        <path d="M8 14v7" />
      </svg>
    ),
    title: "Pelacak Kemajuan & Analitik Data",
    paragraph:
      "Pantau perjalanan belajar Anda dengan laporan visual dan wawasan berbasis data agar tetap selaras dengan target pembelajaran.",
  },
  {
    id: 4,
    icon: (
      // SVG Icon Tetap Sama
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-clock-fading-icon lucide-clock-fading"
      >
        <path d="M12 2a10 10 0 0 1 7.38 16.75" />
        <path d="M12 6v6l4 2" />
        <path d="M2.5 8.875a10 10 0 0 0-.5 3" />
        <path d="M2.83 16a10 10 0 0 0 2.43 3.4" />
        <path d="M4.636 5.235a10 10 0 0 1 .891-.857" />
        <path d="M8.644 21.42a10 10 0 0 0 7.631-.38" />
      </svg>
    ),
    title: "Asisten Tutor AI 24/7",
    paragraph:
      "Dapatkan bantuan instan mengenai konsep dan pertanyaan kapan saja melalui sistem dukungan Tutor AI yang cerdas.",
  },
  {
    id: 5,
    icon: (
      // SVG Icon Tetap Sama
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-clock-fading-icon lucide-clock-fading"
      >
        <path d="M12 2a10 10 0 0 1 7.38 16.75" />
        <path d="M12 6v6l4 2" />
        <path d="M2.5 8.875a10 10 0 0 0-.5 3" />
        <path d="M2.83 16a10 10 0 0 0 2.43 3.4" />
        <path d="M4.636 5.235a10 10 0 0 1 .891-.857" />
        <path d="M8.644 21.42a10 10 0 0 0 7.631-.38" />
      </svg>
    ),
    title: "Akses Pembelajaran di Berbagai Perangkat",
    paragraph:
      "Kursus dan kemajuan Anda akan tersinkronisasi di berbagai perangkat, memungkinkan Anda belajar di mana saja dan kapan saja.",
  },
  {
    id: 6,
    icon: (
      // SVG Icon Tetap Sama
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-leaf-icon lucide-leaf"
      >
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
    title: "Rencana Belajar Fleksibel & Gratis",
    paragraph:
      "Mulai secara gratis dan pilih paket langganan fleksibel sesuai kebutuhan, dirancang untuk pelajar, pendidik, dan profesional.",
  },
];

export default featuresData;
