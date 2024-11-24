"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

const HeroSection = () => {
  const images = [
    { image: "/images/clean4.webp", deskripsi: "Cape Bersihin Rumah??..", linkTitle: "RoyCleaner Aja", link: "/" },
    { image: "/images/lastBgIndra.png", deskripsi: "Membersihkan Apa Aja", linkTitle: "Hubungi Indra", link: "https://www.instagram.com/arn28._/" },
    { image: "/images/clean2.jpg", deskripsi: "Pelayanan Terbaik", linkTitle: "Instagram Kami", link: "https://www.instagram.com/roymen.y/" },
    { image: "/images/roy2.png", deskripsi: "Tunggu apa lagi", linkTitle: "Hubungi Roy", link: "https://www.instagram.com/roymen.y/" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const deskripsiRef = useRef(null);

  useEffect(() => {
    // Animasi awal untuk teks
    gsap.fromTo(deskripsiRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1, ease: "power3.out" });
  }, []);

  // Ganti gambar setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);

        // Hilangkan teks dengan animasi zoom out
        gsap.to(deskripsiRef.current, {
          opacity: 0,
          scale: 0.8,
          duration: 0.5,
          onComplete: () => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);

            // Tampilkan teks baru dengan animasi zoom in
            gsap.fromTo(deskripsiRef.current, { opacity: 0, scale: 1.2 }, { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" });
            setIsAnimating(false);
          },
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const handleDotClick = (index) => {
    if (!isAnimating) {
      setIsAnimating(true);

      // Hilangkan teks dengan animasi zoom out
      gsap.to(deskripsiRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        onComplete: () => {
          setCurrentImageIndex(index);

          // Tampilkan teks baru dengan animasi zoom in
          gsap.fromTo(deskripsiRef.current, { opacity: 0, scale: 1.2 }, { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" });
          setIsAnimating(false);
        },
      });
    }
  };

  return (
    <div className="container hero relative overflow-hidden mt-6">
      <div className="relative w-full md:h-screen">
        {/* Full-width Image */}
        <div className="inset-0">
          <Image src={images[currentImageIndex].image} alt={`Hero Image ${currentImageIndex + 1}`} width={1000} height={1000} quality={100} className="w-full transition-opacity duration-700" />
        </div>
        
          {/* Centered Description */}
          <div ref={deskripsiRef} key={currentImageIndex} className="absolute top-[60%] md:top-[50%] min-[800px]:top-[30%] lg:top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[200px] md:w-[600px] md:max-w-[90%]">
            <p className="text-base sm:text-4xl md:text-5xl lg:text-6xl text-white bg-black bg-opacity-20 px-4 py-2 rounded-lg font-bold mb-6">{images[currentImageIndex].deskripsi}</p>
            <Link href={images[currentImageIndex].link} className="text-xs md:text-base inline-block bg-main-dark bg-opacity-80 hover:bg-opacity-100 text-white border border-white px-4 py-2 rounded transition-all duration-300">
              {images[currentImageIndex].linkTitle}
            </Link>
          </div>

          {/* Pagination Dots */}
          <div className="absolute bottom-3 md:bottom-[20%] min-[800px]:bottom-[45%] lg:bottom-[15%] xl:bottom-[10%] left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button key={index} onClick={() => handleDotClick(index)} className={`w-1 h-1 md:w-3 md:h-3 rounded-full ${index === currentImageIndex ? "bg-primary" : "bg-gray-400"}`}></button>
            ))}
          </div>
      </div>
    </div>
  );
};

export default HeroSection;
