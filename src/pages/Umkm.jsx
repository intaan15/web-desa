// import React from 'react'
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
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

import desa from '../images/bgdesa.jpg'; 
import kkn from '../images/logokkn.png'; 
import logo from '../images/logo.png'; 

function Umkm() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
            {/* Navigation Links (Desktop & Mobile) */}
            {/* For desktop: flex, For mobile: hidden by default, visible when menu is open */}
            <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-6 absolute md:static top-16 right-4 bg-white md:bg-transparent p-4 md:p-0 rounded-lg shadow-lg md:shadow-none w-48 md:w-auto`}>
                <ul className='flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0'>
                <li>
                    <a href="/" className='block px-4 py-2 text-black font-semibold font-raleway hover:underline transition duration-300'>Home</a>
                </li>
                <li>
                    <a href="/profil" className='block px-4 py-2 text-black font-semibold font-raleway hover:underline transition duration-300'>Profil Desa</a>
                </li>
                <li>
                    <a href="/infografis" className='block px-4 py-2 text-black font-semibold font-raleway hover:underline transition duration-300'>Infografis</a>
                </li>
                <li>
                    <a href="/umkm" className='block underline px-4 py-2 text-black font-semibold font-raleway hover:underline transition duration-300'>UMKM</a>
                </li>
                </ul>
            </nav>
        </header>

        {/* isi tengah */}

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
                <p>0138414091</p>
                </div>
                <div className="flex items-center gap-2">
                <CiMail size={20} />
                <p>contoh@email.com</p>
                </div>
            </div>
            </div>
        </div>

        {/* sosmed */}
        <div className='flex justify-end px-9 py-5 gap-3'>
            <a href="" ><FaFacebook size={30} /></a>
            <a href="" ><FaSquareInstagram size={30} /></a>
            <a href="" ><FaYoutube size={30} /></a>
            <a href="" ><FaTiktok size={30} /></a>
        </div>
        <footer className="text-black text-center border-t border-black py-4 text-sm">
            &copy; {new Date().getFullYear()} 2025 KKN Desa Tegal Ciut.
        </footer>
        

    </div>
  )
}

export default Umkm