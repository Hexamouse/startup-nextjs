"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/educraft.png"
                    alt="EduCraft AI Logo"
                    className="w-full dark:hidden"
                    width={140}
                    height={30}
                  />
                  <Image
                    src="/images/logo/educraft.png"
                    alt="EduCraft AI Logo"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  EduCraft AI adalah platform pembelajaran cerdas berbasis AI yang membantu pelajar dan profesional meningkatkan kompetensi dengan materi dan kuis yang disesuaikan secara otomatis.
                </p>
                <div className="flex items-center">
                  {/* Sosial Media Icons */}
                  <a href="/" aria-label="Facebook" className="mr-6 text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"> {/* Facebook Icon */} </a>
                  <a href="/" aria-label="Twitter" className="mr-6 text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"> {/* Twitter Icon */} </a>
                  <a href="/" aria-label="YouTube" className="mr-6 text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"> {/* YouTube Icon */} </a>
                  <a href="/" aria-label="LinkedIn" className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"> {/* LinkedIn Icon */} </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Tautan Berguna
                </h2>
                <ul>
                  <li>
                    <Link href="/blog" className="mb-4 inline-block text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                      Blog & Artikel
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="mb-4 inline-block text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                      Harga
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="mb-4 inline-block text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                      Tentang Kami
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Kebijakan
                </h2>
                <ul>
                  <li>
                    <Link href="/terms-of-service" className="mb-4 inline-block text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                      Syarat & Ketentuan
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" className="mb-4 inline-block text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                      Kebijakan Privasi
                    </Link>
                  </li>
                  <li>
                    <Link href="/refund-policy" className="mb-4 inline-block text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                      Kebijakan Pengembalian
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Bantuan & Dukungan
                </h2>
                <ul>
                  <li>
                    <Link href="/contact" className="mb-4 inline-block text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                      Hubungi Kami
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="mb-4 inline-block text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/support" className="mb-4 inline-block text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                      Pusat Bantuan
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-linear-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-body-color dark:text-white">
              © {new Date().getFullYear()} EduCraft AI. Hak Cipta Dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;