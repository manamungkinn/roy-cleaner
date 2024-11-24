import BookingForm from "@/components/BookingForm";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import KataKataHariIni from "@/components/KataKataHariIni";
import ServiceList from "@/components/ServiceList";
import Testimonials from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div>
          <div className="container">
      <main>
        <HeroSection/>
        <ServiceList />
        <Testimonials/>
        <KataKataHariIni image={'/images/mikael.jpg'} text1={'Kata Kata Hari Ini'} text2={'Judi Tidak Akan Membuatmu Sukses.'} text3={'Bg kael'}/>
        <ContactForm/>
        {/* <BookingForm /> */}
      </main>
    </div>
    </div>
  );
}
