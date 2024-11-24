"use client";

import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <header className="text-center py-6 mt-10">
        <h1 className="text-4xl font-semibold text-main-primary mb-2">Tentang Kami</h1>
        <p className="text-textColor-secondary max-w-2xl mx-auto">
        Temukan cerita di balik perjalanan kami dalam memberikan layanan kebersihan terbaik untuk Anda.
        </p>
      </header>

      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Image */}
          <div className="w-full">
            <Image src="/images/logo2.png" alt="About Us" width={600} height={400} className="rounded-lg shadow-lg" />
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-textColor-primary">Siapa Kami?</h2>
            <p className="leading-relaxed text-textColor-secondary">
              RoyCleaner adalah perusahaan yang berdedikasi dalam memberikan solusi kebersihan untuk rumah, kantor, dan furnitur Anda. Kami percaya bahwa kebersihan adalah kunci untuk kenyamanan dan produktivitas.
            </p>
            <p className="text-textColor-secondary leading-relaxed mt-4">Dengan tim profesional dan peralatan modern, kami siap membantu Anda menjaga lingkungan tetap bersih, nyaman, dan sehat.</p>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-textColor-primary">Misi dan Visi Kami</h2>
            <p className="text-textColor-secondary leading-relaxed">
              <span className="font-semibold">Misi:</span> Memberikan layanan kebersihan yang berkualitas tinggi dengan harga yang terjangkau untuk setiap pelanggan.
            </p>
            <p className="text-textColor-secondary leading-relaxed mt-4">
              <span className="font-semibold">Visi:</span> Menjadi pilihan utama dalam layanan kebersihan di seluruh Indonesia.
            </p>
          </div>

          {/* Right: Image */}
          <div className="w-full">
            <Image src="/images/logo.png" alt="Mission and Vision" width={600} height={400} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold mb-8 text-textColor-primary">Tim Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white grid grid-rows-1 rounded-lg shadow-md hover:shadow-lg transition-all">
              <Image src="/images/novita.jpg" alt="Team Member 1" width={300} height={300} className="w-55 h-30 rounded-full mx-auto" />
              <h3 className="text-xl font-bold mt-4 text-textColor-primary">Novita Basauli</h3>
              <p className="text-textColor-secondary">Manajer</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image src="/images/andre.jpg" alt="Team Member 2" width={300} height={300} className="w-55 h-30 rounded-full mx-auto" />
              <h3 className="text-xl font-bold mt-4 text-textColor-primary">Andre Sianturi</h3>
              <p className="text-textColor-secondary">Worker</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image src="/images/roy.jpg" alt="Team Member 3" width={300} height={300} className="w-55 h-30 rounded-full mx-auto" />
              <h3 className="text-xl font-bold mt-4 text-textColor-primary">Roy Priman</h3>
              <p className="text-textColor-secondary">Ceo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 text-gray-100 py-12">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold mb-4 text-textColor-white">Ingin tahu lebih banyak?</h2>
          <p className="mb-6 text-textColor-white">Hubungi kami untuk informasi lebih lanjut atau bekerja sama dengan kami.</p>
          <Link href="https://api.whatsapp.com/send?phone=6282215647042">
            <button className="btn btn-primary text-textColor-white">Hubungi Kami</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
