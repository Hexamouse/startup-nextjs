"use client";
import { ReactNode, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

interface PricingProps {
  children?: ReactNode;
}

const formatRupiah = (number: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

const Pricing = ({ children }: PricingProps) => {
  const [isMonthly, setIsMonthly] = useState(true);

  const plans = [
    {
      packageName: "Starter",
      priceMonthly: 99000,
      priceYearly: 899000,
      subtitle:
        "Untuk pelajar yang ingin belajar mandiri dengan bantuan AI personal assistant.",
      offers: [
        { text: "Asisten Pembelajaran AI", status: "active" },
        { text: "Kuis Interaktif", status: "active" },
        { text: "Pelacak Kemajuan Dasar", status: "active" },
        { text: "Bimbingan Belajar AI Terbatas (10x/bln)", status: "active" },
        { text: "Akses Kelas Langsung", status: "inactive" },
        { text: "Jalur Pembelajaran Khusus", status: "inactive" },
      ],
    },
    {
      packageName: "Pro",
      priceMonthly: 199000,
      priceYearly: 1599000,
      subtitle:
        "Paket lengkap dengan akses kelas live & konsultasi AI Tutor tak terbatas.",
      offers: [
        { text: "Asisten Pembelajaran AI", status: "active" },
        { text: "Bimbingan Belajar AI Tanpa Batas", status: "active" },
        { text: "Dasbor Kemajuan & Analisis", status: "active" },
        { text: "Akses Kelas Langsung", status: "active" },
        { text: "jalur Pembelajaran Khusus", status: "active" },
        { text: "Pemantauan Orang Tua", status: "inactive" },
      ],
    },
    {
      packageName: "Ultra",
      priceMonthly: 499000,
      priceYearly: 3999000,
      subtitle:
        "Solusi menyeluruh untuk sekolah & lembaga pendidikan berbasis AI.",
      offers: [
        { text: "Asisten AI untuk Institusi", status: "active" },
        { text: "Pembuat Konten AI Khusus", status: "active" },
        { text: "Panel Admin & Guru", status: "active" },
        { text: "Akses Pemantauan Orang Tua", status: "active" },
        { text: "Dukungan Khusus", status: "active" },
        { text: "Rangkaian Analisis Institusional", status: "active" },
      ],
    },
  ];

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Educraft AI Pricing Plans"
          paragraph="Pilih paket yang sesuai untuk menunjang proses belajar lebih interaktif, personal, dan cerdas dengan dukungan AI."
          center
          width="665px"
        />

        {/* <div className="flex justify-center mb-10">
          <button
            onClick={() => setIsMonthly(true)}
            className={`px-4 py-2 border rounded-l-lg ${
              isMonthly ? "bg-blue-600 text-white" : "bg-white text-gray-700"
            }`}
          >
            Bulanan
          </button>
          <button
            onClick={() => setIsMonthly(false)}
            className={`px-4 py-2 border rounded-r-lg ${
              !isMonthly ? "bg-blue-600 text-white" : "bg-white text-gray-700"
            }`}
          >
            Tahunan
          </button>
        </div> */}

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingBox
              key={plan.packageName}
              packageName={plan.packageName}
              price={
                isMonthly
                  ? formatRupiah(plan.priceMonthly)
                  : formatRupiah(plan.priceYearly)
              }
              duration={isMonthly ? "bln" : "thn"}
              subtitle={plan.subtitle}
            >
              {plan.offers.map((offer, idx) => (
                <OfferList
                  key={idx}
                  text={offer.text}
                  status={offer.status as "active" | "inactive"}
                />
              ))}
            </PricingBox>
          ))}
        </div>

        {children && children} {/* <-- Ini tempat untuk children yang dipanggil dari page.tsx */}
      </div>

      {/* Background SVG */}
      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;