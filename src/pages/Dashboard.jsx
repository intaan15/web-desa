import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { IoIosHome } from "react-icons/io";
import { FaChartBar } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

import desa from '../images/bgdesa.jpg'; 
import logo from '../images/logo.png'; 

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import sambut from '../images/sambutan.png';


function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: false,    
    offset: 100,    
  });
}, []);

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-100 to-gray-200'>
        {/* header */}
        <header className='flex items-center justify-between p-4 bg-white shadow-sm sticky top-0 z-50'>
            <div className="flex items-center space-x-3">
                <img src={logo} alt="Logo" className='h-12 w-auto object-contain' />
                <div className='leading-tight'>
                    <p className='text-sm md:text-base font-semibold font-raleway'>Desa Tegal Ciut</p>
                    <p className='text-xs md:text-sm text-gray-600 font-raleway'>Kabupaten Lumajang</p>
                </div>
            </div>
            {/* burger menu */}
            <div className='md:hidden'>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-gray-800 focus:outline-none'>
                <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  {isMenuOpen ? (
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                  ) : (
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
                  )}
                </svg>
              </button>
            </div>
            {/* menu */}
            <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-6 absolute md:static top-16 right-4 bg-white md:bg-transparent p-4 md:p-0 rounded-lg shadow-lg md:shadow-none w-48 md:w-auto`}>
              <ul className='flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0'>
                <li>
                  <a href="/" className='block underline px-4 py-2 text-black font-semibold font-raleway hover:underline transition duration-300'>Home</a>
                </li>
                <li>
                  <a href="/profil" className='block px-4 py-2 text-black font-semibold font-raleway hover:underline transition duration-300'>Profil Desa</a>
                </li>
                <li>
                  <a href="/infografis" className='block px-4 py-2 text-black font-semibold font-raleway hover:underline transition duration-300'>Infografis</a>
                </li>
                <li>
                  <a href="/umkm" className='block px-4 py-2 text-black font-semibold font-raleway hover:underline transition duration-300'>UMKM</a>
                </li>
              </ul>
            </nav>
        </header>
        {/* selamat datang atas */}
        <div className="w-full bg-white" data-aos="zoom-in">
          <div className="relative w-full h-[50vh]">
            {/* atas */}
            <img
              src={desa}
              alt="Gambar Desa"
              className="absolute opacity-75 inset-0 w-full h-full object-cover z-0"
            />

            {/* Overlay tulisan di tengah gambar */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
              <div className="text-center px-4">
                <h1 className="text-[32px] sm:text-[40px] md:text-[50px] font-bold font-raleway text-white">
                  Selamat Datang di Website Desa Tegal Ciut
                </h1>
                <p className="mt-4 text-[16px] sm:text-[18px] font-medium font-raleway text-white max-w-3xl mx-auto">
                  Bersama membangun desa yang lebih maju, mandiri, dan sejahtera melalui pelayanan publik,
                  pemberdayaan masyarakat, serta pengembangan potensi lokal secara berkelanjutan.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* jelajahi desa */}
        <div className='flex flex-col items-center text-center'>
          <div className='flex flex-col items-center justify-center px-4 py-8' data-aos="zoom-in" data-aos-delay="400">
            <p className='text-[22px] sm:text-[25px] font-bold font-raleway text-center text-[#237274]'>Jelajahi Desa</p>
            <p className='mt-2 text-[14px] sm:text-[15px] font-medium font-raleway text-center w-full max-w-4xl'>Jelajahi semua hal terkait dengan Desa Tegal Ciut, Kecamatan Klakah, Kabupaten Lumajang. Jelajahi mulai dari Aspek pemerintahan, penduduk, demografi, UMKM desa dan galeri desa.</p>
          </div>
          <div className='flex w-[90%] justify-around gap-10 py-6 flex-wrap'>
            <div className='flex flex-col w-full md:w-[45%] items-center text-center gap-2' data-aos="zoom-in" data-aos-delay="400">
              <IoIosHome size={48} color="#46B5B6" />
              <p className='font-bold text-[#237274]'>Profil Desa</p>
              <p className='text-sm'>Temukan informasi lengkap seputar progilfil Desa Tegal Ciut.</p>
            </div>
            <div className='flex flex-col w-full md:w-[45%] items-center text-center gap-2' data-aos="zoom-in" data-aos-delay="400">
              <FaChartBar size={48} color="#46B5B6" />
              <p className='font-bold text-[#237274]'>Infografis</p>
              <p className='text-sm'>Data Statistik seputar kependudukan Desa Tegal Ciut .</p>
            </div>
          </div>
          <div className='flex flex-col w-[90%] md:w-[45%] items-center text-center gap-2' data-aos="zoom-in" data-aos-delay="400">
            <FaStore size={48} className='text-center' color="#46B5B6" />
            <p className='font-bold text-[#237274]'>UMKM</p>
            <p className='text-sm'>Jelajahi UMKM di Desa Tegal Ciut.</p>
          </div>
        </div>
        
        {/* logo tegal ciut */}
        <div className='flex flex-col md:flex-row items-center justify-center gap-3 md:gap-9 px-4 pt-6'>
          <img src={sambut} alt="" className='w-[200px] md:w-[300px] object-contain'data-aos="zoom-in" data-aos-delay="400"/>
          <div className='w-full md:w-[50%] flex flex-col items-center text-center gap-3' data-aos="zoom-in" data-aos-delay="400">
            <p className='text-xl sm:text-2xl md:text-[25px] font-bold font-raleway'>Sambutan Kepala Desa Tegal Ciut</p>
            <p className='text-sm md:text-base font-nunito text-justify'>
              Assalamu’alaikum warahmatullahi wabarakatuh, selamat datang di website resmi Desa Tegal Ciut. 
              Website ini hadir sebagai sarana informasi, transparansi, dan komunikasi antara pemerintah 
              desa dengan masyarakat, sekaligus sebagai media promosi potensi desa. Tahun 2025 ini, kami 
              berbangga hati mendapat dukungan dari program KKN Kolaboratif Universitas Jember (UNEJ) dan UIN 
              Khas Jember, yang turut berperan dalam pemberdayaan masyarakat serta pengembangan program 
              kerja di desa kami. Semoga kerjasama ini membawa manfaat besar bagi kemajuan Desa Tegal Ciut 
              dan kesejahteraan warganya. Wassalamu’alaikum warahmatullahi wabarakatuh.
            </p>
            <p>- Zaeni, Kepala Desa Tegal Ciut 2025 -</p>
          </div>
        </div>

        {/* video profil desa */}
        <div className='flex flex-col md:flex-row items-center px-9 md:px-9 gap-6'>
          <h2 className='text-2xl md:text-3xl font-bold text-center md:text-left w-full md:w-1/2 pt-5 md:pt-0' data-aos="zoom-in" data-aos-delay="400">Video Profil Desa</h2>
          <a
            href="https://youtu.be/lT2X-1EYV-U"
            target="_blank"
            rel=""
            className="w-3/4 md:w-1/2"
          > 
            <img
              src="https://img.youtube.com/vi/lT2X-1EYV-U/hqdefault.jpg"
              alt="Thumbnail YouTube"
              className="w-full h-auto rounded-lg hover:opacity-80 transition duration-300"
              data-aos="zoom-in" data-aos-delay="400"
            />
          </a>
        </div>

        {/* galeri desa */}
        <div className='pt-5' data-aos="zoom-in" data-aos-delay="400">
          <p className='text-[22px] sm:text-[25px] font-bold font-raleway text-center pb-9'>Galeri Desa</p>
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            className="w-full h-[200px] sm:h-[400px] md:h-[500px] rounded-lg"
          >
            <SwiperSlide>
              <img src={img1} alt="Slide 1" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="Slide 2" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="Slide 3" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="Slide 4" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="Slide 5" className="w-full h-full object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* kontak */}
        <div className=" px-6 py-5 text-sm md:text-base">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8 text-center md:text-left">
            {/* Logo */}
            <div className="w-full md:w-[25%] flex flex-col items-center md:items-start">
              <img src={logo} alt="Logo" className="w-[100px]" />
            </div>

            {/* Alamat */}
            <div className="w-full md:w-[38%] flex flex-col items-center md:items-start">
              <p className="text-[15px] font-bold font-raleway mb-2">Pemerintah Desa Tegal Ciut</p>
              <div className="flex items-start gap-2">
                <CiLocationOn size={24} />
                <p className="max-w-xs">
                  Jalan Gunung Ringgit No. 64, Desa Tegal Ciut, Kecamatan Klakah, Kabupaten Lumajang
                </p>
              </div>
            </div>

            {/* Kontak */}
            <div className="w-full md:w-[37%] flex flex-col items-center md:items-start space-y-2">
              <p className="text-[15px] font-bold font-raleway">Hubungi Kami</p>
              <div className="flex items-center gap-2">
                <IoCallOutline size={20} />
                <a href="tel:+6285330209635" target="_blank">+62 853-3020-9635</a>
              </div>
              <div className="flex items-center gap-2">
                <CiMail size={20} />
                <p>desategalciutklakah@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* sosmed */}
        <div className='flex justify-end px-9 py-5 gap-3'>
          <a href="https://www.facebook.com/profile.php?id=61578902762060" target="_blank"><FaFacebook size={30} /></a>
          <a href="https://www.instagram.com/desa_tegalciut_lumajang" target="_blank" ><FaSquareInstagram size={30} /></a>
        </div>

        <footer className="text-black text-center border-t border-black py-4 text-sm">
          &copy; 2025 KKN Desa Tegal Ciut.
        </footer>
    </div>
  )
}

export default Dashboard