// import React from 'react'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { FaPeopleRoof } from "react-icons/fa6";
import { IoIosWoman } from "react-icons/io";
import { IoMdMan } from "react-icons/io";
import { BsPeopleFill } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

import sdgs from '../images/sdgs.jpg'; 
import logo from '../images/logo.png'; 
import demografi from '../images/demografi.jpg'; 

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

// components
import Diagrampenduduk from '../components/Diagrampenduduk';
import SDGsCardGrid from '../components/SDGsCardGrid';
import Diagramdusun from '../components/DiagramDusun';
import Diagrampendidikan from '../components/DiagramPendidikan';
import Diagrampekerjaan from '../components/DiagramPekerjaan';
import Diagramperkawinan from '../components/DiagramPerkawinan';
import Cardagama from '../components/CardAgama';

function Infografis() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('demografi');

  useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: false,    
    offset: 100,    
  });
}, []);

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 overflow-x-hidden'>
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
                    <a href="/profil" className='block px-4 py-2 text-black font-semibold font-raleway hover:underline transition duration-300'>Profil Desa</a>
                </li>
                <li>
                    <a href="/infografis" className='block underline px-4 py-2 text-black font-semibold font-raleway hover:underline transition duration-300'>Infografis</a>
                </li>
                <li>
                    <a href="/umkm" className='block px-4 py-2 text-black font-semibold font-raleway hover:underline transition duration-300'>UMKM</a>
                </li>
                </ul>
            </nav>
        </header>

        {/* isi tengah */}
        <section className="flex flex-col my-10 px-6 md:px-12 gap-3">
            <div className='flex justify-between gap-3' data-aos="zoom-in">
                <h2 className='text-xl md:text-3xl font-bold text-slate-800 mb-4 text-left font-raleway'>INFOGRAFIS DESA TEGAL CIUT</h2>
                <div className="flex space-x-6 justify-center">
                    <button
                    onClick={() => setActiveTab('demografi')}
                    className={`flex flex-col items-center justify-center px-2 py-2 font-semibold w-23 sm:w-32 md:w-36 text-center ${activeTab === 'demografi' ? ' border border-black rounded-xl' : 'text-black '}`}
                    >
                        <BsPeopleFill size={45} className='flex text-3xl sm:text-4xl md:text-5xl '/>
                        <span className='text-sm sm:text-base md:text-lg'>
                            Demografi
                        </span>
                    </button>
                    <button
                    onClick={() => setActiveTab('sdgs')}
                    className={`flex flex-col items-center justify-center px-4 py-2 font-semibold w-23 sm:w-32 md:w-36 text-center  ${activeTab === 'sdgs' ? 'border border-black rounded-xl' : 'text-black'}`}
                    >
                        <FaGlobe size={45} className='flex ' />
                        <span className='text-sm sm:text-base md:text-lg'>
                            SDGs
                        </span>
                    </button>
                </div>
            </div>

            <div className="mt-8">
                {activeTab === 'demografi' && (
                <div>
                    {/* atas */}
                    <div className='flex flex-col md:flex-row gap-6 items-center'>
                        <div className='w-full md:w-1/2' data-aos="zoom-in" data-aos-delay="400">
                            <img src={demografi} alt="" className="w-[500px] h-auto object-cover rounded-xl"/>
                        </div>
                        <div className='w-full md:w-1/2 text-justify' data-aos="zoom-in" data-aos-delay="400">
                            <h2 className='text-xl md:text-2xl font-bold mb-2 text-slate-800'>DEMOGRAFI DESA TEGAL CIUT</h2>
                            <p className='text-sm md:text-base text-slate-700 leading-relaxed'>
                                Memberikan informasi lengkap mengenai karakteristik demografi penduduk suatu wilayah. 
                                Mulai dari jumlah penduduk, usia, jenis kelamin, tingkat pendidikan, pekerjaan, dan 
                                aspek penting lainnya yang menggambarkan komposisi populasi secara rinci.
                            </p>
                        </div>
                    </div>
                    {/* penduduk */}
                    <div className='flex flex-col gap-5 items-center pt-3 md:pt-9'>
                        <h2 className='text-2xl md:text-3xl font-bold text-slate-800 text-center font-raleway' data-aos="zoom-in" data-aos-delay="400">Jumlah Penduduk dan Kepadatan Penduduk</h2>
                        {/* Grid Data */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* Kartu 1 */}
                            <div className="flex bg-slate-100 p-4 rounded-xl items-center gap-4 shadow" data-aos="zoom-in" data-aos-delay="400">
                                <IoPeople size={56} className="text-blue-500" />
                                <div>
                                    <p className="text-base font-semibold font-raleway">Total Penduduk</p>
                                    <p className="font-nunito text-lg">4.444 Jiwa</p>
                                </div>
                            </div>
                            {/* Kartu 2 */}
                            <div className="flex bg-slate-100 p-4 rounded-xl items-center gap-4 shadow" data-aos="zoom-in" data-aos-delay="400">
                                <FaPeopleRoof size={56} className="text-purple-500" />
                                <div>
                                    <p className="text-base font-semibold font-raleway">Kepadatan Penduduk</p>
                                    <p className="font-nunito text-lg">643 Jiwa/km²</p>
                                </div>
                            </div>
                            {/* Kartu 3 */}
                            <div className="flex bg-slate-100 p-4 rounded-xl items-center gap-4 shadow" data-aos="zoom-in" data-aos-delay="400">
                                <IoIosWoman size={56} className="text-pink-500" />
                                <div>
                                    <p className="text-base font-semibold font-raleway">Perempuan</p>
                                    <p className="font-nunito text-lg">2.309 Jiwa</p>
                                </div>
                            </div>
                            {/* Kartu 4 */}
                            <div className="flex bg-slate-100 p-4 rounded-xl items-center gap-4 shadow" data-aos="zoom-in" data-aos-delay="400">
                                <IoMdMan size={56} className="text-green-500" />
                                <div>
                                    <p className="text-base font-semibold font-raleway">Laki - Laki</p>
                                    <p className="font-nunito text-lg">2.135 Jiwa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* diagram penduduk */}
                    <div className='flex flex-col gap-5 pt-7' data-aos="zoom-in" data-aos-delay="400">
                        <h2 className='text-2xl md:text-3xl font-bold text-slate-800 text-center font-raleway'>Berdasarkan kelompok Umur</h2>
                        <div className="flex justify-center items-center">
                            <Diagrampenduduk />
                        </div>
                    </div>
                    {/* diagram dusun */}
                    <div className='flex flex-col gap-5 pt-7' data-aos="zoom-in" data-aos-delay="400">
                        <h2 className='text-2xl md:text-3xl font-bold text-slate-800 text-center font-raleway'>Berdasarkan Dusun</h2>
                        <div className=" flex justify-center items-center">
                            <Diagramdusun />
                        </div>
                    </div>
                    {/* diagram pendidikan */}
                    <div className='flex flex-col gap-5 pt-7' data-aos="zoom-in" data-aos-delay="400">
                        <h2 className='text-2xl md:text-3xl font-bold text-slate-800 text-center font-raleway'>Berdasarkan Pendidikan</h2>
                        <div className=" flex justify-center items-center">
                            <Diagrampendidikan />
                        </div>
                    </div>
                    {/* diagram pekerjaan */}
                    <div className='flex flex-col gap-5 pt-7' data-aos="zoom-in" data-aos-delay="400">
                        <h2 className='text-2xl md:text-3xl font-bold text-slate-800 text-center font-raleway'>Berdasarkan Pekerjaan</h2>
                        <div className=" flex justify-center items-center">
                            <Diagrampekerjaan />
                        </div>
                    </div>
                    {/* diagram perkawinan */}
                    <div className='flex flex-col gap-5 pt-7' data-aos="zoom-in" data-aos-delay="400">
                        <h2 className='text-2xl md:text-3xl font-bold text-slate-800 text-center font-raleway'>Berdasarkan Perkawinan</h2>
                        <div className=" flex justify-center items-center">
                            <Diagramperkawinan />
                        </div>
                    </div>
                    {/* diagram agama */}
                    <div className='flex flex-col gap-5 pt-7' data-aos="zoom-in" data-aos-delay="400">
                        <h2 className='text-2xl md:text-3xl font-bold text-slate-800 text-center font-raleway'>Berdasarkan Agama</h2>
                        <div className=" flex justify-center items-center">
                            <Cardagama />
                        </div>
                    </div>
                </div>
                )}

                {activeTab === 'sdgs' && (
                <div>
                    {/* atas */}
                    <div className='flex flex-col md:flex-row gap-6 items-center'>
                        <div className='w-full md:w-1/2' data-aos="zoom-in" data-aos-delay="400">
                            <img src={sdgs} alt="" className="w-[500px] h-auto object-cover rounded-xl"/>
                        </div>
                        <div className='w-full md:w-1/2 text-justify' data-aos="zoom-in" data-aos-delay="400">
                            <h2 className='text-xl md:text-2xl font-bold mb-2 text-slate-800'>SDGs DESA TEGAL CIUT</h2>
                            <p className='text-sm md:text-base text-slate-700 leading-relaxed'>
                                SDGs Desa mengacu pada upaya yang dilakukan di tingkat Desauntuk mencapai Tujuan Pembangunan 
                                Berkelanjutan (Sustainable Development Goals/SDGs). SDGs merupakan agenda global yang ditetapkan 
                                oleh Perserikatan Bangsa-Bangsa (PBB) untuk mengatasi berbagai tantangan sosial, ekonomi, dan 
                                lingkungan di seluruh dunia
                            </p>
                        </div>
                    </div>
                    
                    {/* skor */}
                    <div className='text-center pt-5 md:pt-9' data-aos="zoom-in" data-aos-delay="400">
                        <div className='inline-block bg-[#F9FCFD] text-[#1B2C42] rounded-2xl shadow-sm px-6 py-3 items-center text-center'>
                            <p className='text-sm md:text-base font-bold'>SKOR SDGs DESA TEGAL CIUT</p>
                            <p className='text-2xl md:text-3xl font-semibold'>34,29</p>
                        </div>
                    </div>

                    {/* card-card */}
                    <div className="min-h-screen" data-aos="zoom-in" data-aos-delay="400">
                        <SDGsCardGrid />
                    </div>
                </div>
                )}
            </div>
        </section>


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
            <a href="https://www.facebook.com/profile.php?id=61578902762060" target="_blank"><FaFacebook size={30} /></a>
            <a href="https://www.instagram.com/desa_tegalciut_lumajang" target="_blank" ><FaSquareInstagram size={30} /></a>
        </div>

        <footer className="text-black text-center border-t border-black py-4 text-sm">
            &copy; 2025 KKN Desa Tegal Ciut.
        </footer>

    </div>
  )
}

export default Infografis