import React, { useState } from 'react';
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

import sejarah from '../images/sejarah.jpg'; 
import logo from '../images/logo.png'; 
import bagan from '../images/bagan.png'; 

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

// foto perangakat
import kades from '../images/perdesa/zaeni.png';
import kaum from '../images/perdesa/abdulhakim.png';
import kuu from '../images/perdesa/satimin.png';
import ksp from '../images/perdesa/nurhayati.png';
import kspm from '../images/perdesa/rohman.png';
import kuk from '../images/perdesa/helmi.png';
import kup from '../images/perdesa/asan.png';
import ksk from '../images/perdesa/abdulkholik.png';
import kasteng from '../images/perdesa/ririd.png';
import kaspel from '../images/perdesa/amir.png';
import kasbring from '../images/perdesa/buari.png';


const perangkatDesa = [
  {
    nama: "Zaeni",
    jabatan: "Kepala Desa",
    foto: kades,
  },
  {
    nama: "Abdul Hakim",
    jabatan: "Sekretaris Desa",
    foto: kaum,
  },
  {
    nama: "Satimin",
    jabatan: "Kepala Urusan Umum",
    foto: kuu,
  },
  {
    nama: "Nur Hayati",
    jabatan: "Kepala Seksi Pelayanan",
    foto: ksp,
  },
  {
    nama: "Abdul Rohman",
    jabatan: "Kepala Seksi Pemerintahan",
    foto: kspm,
  },
  {
    nama: "Helmi Afdilatur Rohma",
    jabatan: "Kepala Urusan Keuangan",
    foto: kuk,
  },
  {
    nama: "Asan",
    jabatan: "Kepala Urusan Perencanaan",
    foto: kup,
  },
  {
    nama: "Abdul Kholik",
    jabatan: "Kepala Seksi Kesejahteraan",
    foto: ksk,
  },
  {
    nama: "Ririd",
    jabatan: "Kepala Dusun Karang Tengah",
    foto: kasteng,
  },
  {
    nama: "Amir",
    jabatan: "Kepala Dusun Pelampean",
    foto: kaspel,
  },
  {
    nama: "Buari",
    jabatan: "Kepala Dusun Beringinan",
    foto: kasbring,
  },
];

function Profil() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const CustomPrevArrow = (props) => (
    <div
      className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-black"
      onClick={props.onClick}
    >
      <FaChevronLeft size={40} />
    </div>
  );

  const CustomNextArrow = (props) => (
    <div
      className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-black"
      onClick={props.onClick}
    >
      <FaChevronRight size={40} />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6, 
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
        {
        breakpoint: 1280, // lg screen
        settings: { slidesToShow: 5 },
        },
        {
        breakpoint: 1024, // md screen
        settings: { slidesToShow: 4 },
        },
        {
        breakpoint: 640, // sm screen
        settings: { slidesToShow: 3 },
        },
    ],
    };

    const balaiLocation = {
        lat: -7.9890703,
        lng: 113.2306519,
        address: "Jl. Gn. Ringgit, Bringinan, Tegalciut, Kec. Klakah, Kabupaten Lumajang, Jawa Timur 67356"
    };

    useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,    
      offset: 100,    
    });
  }, []);


  return (
    <div className='min-h-screen bg-white'>
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
                    <a href="/" className='block px-4 py-2 text-black font-semibold font-raleway hover:underline transition duration-300'>Home</a>
                </li>
                <li>
                    <a href="/profil" className='block underline px-4 py-2 text-black font-semibold font-raleway hover:underline transition duration-300'>Profil Desa</a>
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
        
        {/* ini isi tengah */}
        {/* Visi Misi */}
        <div className="flex flex-col items-center justify-center px-4 py-6 md:px-8 lg:px-16 text-center">
            <div className="mb-8 max-w-3xl" data-aos="zoom-in">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 font-raleway">VISI</h2>
                <p className="text-gray-700 leading-relaxed text-xl font-nunito">
                Terwujudnya masyarakat Tegalciut yang berdaya saing, religius, makmur, dan bermartabat.
                </p>
            </div>
            <div className='max-w-3xl' data-aos="zoom-in" data-aos-delay="400">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 font-raleway">MISI</h2>
                <ol className="list-decimal list-inside text-gray-700 leading-relaxed text-justify space-y-2">
                    <li className='font-nunito'>Mewujudkan masyarakat desa dapat mengenyam pendidikan formal maupun informal.</li>
                    <li className='font-nunito'>Mewujudkan kehidupan masyarakat desa yang semakin baik, sehingga memiliki nilai jual terhadap cipta, rasa, dan karsanya.</li>
                    <li className='font-nunito'>Mewujudkan kehidupan masyarakat desa semakin baik.</li>
                    <li className='font-nunito'>Mewujudkan rasa keadilan masyarakat dalam kerangka pelayanan masyarakat yang lebih baik.</li>
                    <li className='font-nunito'>Mewujudkan pemerataan pembangunan dan hasil-hasilnya yang dapat dirasakan oleh masyarakat desa tanpa memandang kepentingan politik, SARA, dan antar golongan.</li>
                </ol>
            </div>
        </div>
        {/* bagan organisasi */}
        <div className='flex flex-col px-4 py-8 max-w-6xl mx-auto text-center' data-aos="zoom-in" data-aos-delay="400">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 font-raleway">Bagan Desa Tegal Ciut</h2>
            <p className="text-m md:text-base text-slate-600 mb-6">Struktur Organisasi dan Tata Praja Desa Tegalciut Kecamatan Klakah Kabupaten Lumajang</p>
            <img src={bagan} alt="Bagan Organisasi Desa Tegal Ciut" className="w-full h-auto max-h-[600px] object-contain" />
        </div>

        {/* perangkat desa */}
        <div className='flex flex-col px-4 py-8 max-w-6xl mx-auto text-center' data-aos="zoom-in" data-aos-delay="400">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-9 font-raleway">Perangkat Desa Tegal Ciut</h2>
            <div className="relative w-full max-w-6xl mx-auto">
                <Slider {...settings}>
                {perangkatDesa.map((item, index) => (
                    <div key={index} className="px-3">
                      <div className="flex flex-col items-center">
                          <img
                          src={item.foto}
                          alt={item.nama}
                          loading="lazy"
                          className="w-32 h-40 object-cover rounded-lg mb-3 border border-gray-300"
                          />
                          <p className="font-semibold text-gray-800 text-lg">{item.nama}</p>
                          <p className="text-sm text-gray-500">{item.jabatan}</p>
                      </div>
                    </div>
                ))}
                </Slider>
            </div>
        </div>

        {/* sejarah */}
        <div className='flex flex-col px-4 py-8 max-w-6xl mx-auto text-center' data-aos="zoom-in" data-aos-delay="400">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 font-raleway">Sejarah Desa Tegal Ciut</h2>
            <div className='flex flex-col md:flex-row items-center gap-5'>
                <p className='md:w-[60%] text-justify border-l border-green-500 pl-3 font-nunito'>
                    Sebelum tahun 1990, pada masa penjajahan Belanda, wilayah yang kini dikenal sebagai Desa Tegal Ciut 
                    awalnya bernama Desa Bengcelot. Setelah masa penjajahan, kepemimpinan desa dipegang oleh Bapak Muani. 
                    Di bawah kepemimpinannya, desa tersebut mengalami perubahan nama menjadi Desa Tegal Ciut. Selanjutnya, 
                    kepemimpinan desa dilanjutkan oleh Bapak Saniwar. Pada masa kepemimpinan beliau, wilayah Desa Tegal Ciut 
                    dibagi menjadi empat dusun, yaitu ; Dusun Karang Tengah, Dusun Pelampean, Dusun Jawaan, dan Dusun Bringinan
                </p>
                <img src={sejarah} alt="" className='w-full max-w-[400px] h-auto object-contain rounded-xl' />
            </div>
        </div>

        {/* peta lokasi */}
        <div className='flex flex-col px-4 py-8 max-w-6xl mx-auto text-center'>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 font-raleway" data-aos="zoom-in" data-aos-delay="400">Peta Lokasi Desa</h2>
            <div className="flex flex-col md:flex-row gap-6 items-stretch" data-aos="zoom-in" data-aos-delay="400">
                {/* Info Desa */}
                <div className="w-full md:w-1/2 bg-white rounded-3xl shadow p-6 border border-blue-300 text-left">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Batas Desa :</h2>
                <div className="text-sm text-gray-700 space-y-2">
                    <p><span className="font-semibold">Utara</span><br />Desa Meninjo Kecamatan Ranuyoso</p>
                    <p><span className="font-semibold">Timur</span><br />Desa Mlawang Kecamatan Klakah</p>
                    <p><span className="font-semibold">Selatan</span><br />Desa Sruni Kecamatan Klakah</p>
                    <p><span className="font-semibold">Barat</span><br />Desa Sawaran Lor Kecamatan Klakah</p>
                </div>

                <hr className="my-4 border-gray-300" />
                <div className="text-base text-gray-800 mb-2">
                    <span className="font-bold">Luas Desa :</span> ± 9,91 km²
                </div>
                <hr className="my-4 border-gray-300" />
                <div className="text-base text-gray-800">
                    <span className="font-bold">Jumlah Penduduk :</span> 4.444 Jiwa
                </div>
                </div>

                {/* Peta */}
                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg" data-aos="zoom-in" data-aos-delay="400">
                <iframe 
                    title="Lokasi Balai Desa Tegal Ciut"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2740.616850459164!2d113.23065188991207!3d-7.989070347761224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd65bda5b6ca12b%3A0x641041f44f2e50bd!2sBalai%20Desa%20Tegal%20Ciut!5e1!3m2!1sid!2sid!4v1753606044035!5m2!1sid!2sid" 
                    width="100%" 
                    height="100%" 
                    className="h-[350px] md:h-full w-full"
                    style={{ border: 0 }}
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                />
                </div>
            </div>
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
                <p>+62 853-3020-9635</p>
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
          <a href="https://www.facebook.com/profile.php?id=61578902762060" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} /></a>
          <a href="https://www.instagram.com/desa_tegalciut_lumajang" target="_blank" rel="noopener noreferrer"><FaSquareInstagram size={30} /></a>
        </div>

        <footer className="text-black text-center border-t border-black py-4 text-sm">
            &copy; 2025 KKN Desa Tegal Ciut.
        </footer>

    </div>
  )
}

export default Profil