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
import besi from '../images/besisano.jpg'; 
import kue from '../images/kuekripik.jpg'; 
import puli from '../images/puli.jpg'; 



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
        <div className='flex flex-col justify-center items-center px-4 py-8'>
            <h2 className='text-2xl md:text-3xl font-bold text-slate-800 text-center font-raleway px-4 py-2 rounded'>INFORMASI  UMKM DESA TEGAL CIUT</h2>
            <section className="my-4 px-6 md:px-12">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                    Pandai Besi Pak Sano
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Bagian Kiri - Deskripsi dan Gambar */}
                    <div>
                        <p className="text-gray-700 mb-4 text-justify">
                            UMKM Pandai Besi Tegal Ciut, yang dimiliki oleh Bapak Sano, telah berdiri ratusan tahun 
                            dan berfokus pada produksi senjata tajam tradisional seperti golok, clurit, dan pisau dapur. 
                            Dengan jumlah karyawan sebanyak 2 orang, usaha ini masih dijalankan secara manual dengan mengandalkan 
                            keterampilan turun-temurun dari generasi sebelumnya.
                        </p>
                        <img src={besi} alt="" className="rounded shadow-md h-70"/>
                    </div>

                    {/* Bagian Kanan - Detail Informasi */}
                    <div className="text-sm text-gray-800 space-y-4">
                    <div>
                        <h3 className="font-semibold">Hasil Produk UMKM</h3>
                        <p>Keripik singkong, keripik pisang, keripik tempe berbagai rasa (pedas, manis, original).</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Profil UMKM</h3>
                        <p>
                        UMKM ini dikelola oleh Ibu Rani bersama 3 anggota keluarga. 
                        Produksi dilakukan secara manual mulai dari pemotongan, perendaman, penggorengan hingga pengemasan.
                        Kapasitas produksi mencapai 10–20 kg per hari.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Jam Operasional</h3>
                        <p>Setiap Hari, 08:00 - 18:00</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Hubungi Untuk Pemesanan</h3>
                        <p>082234567890</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Alamat UMKM</h3>
                        <p>Dusun Krajan RT 2 RW 1, Desa Tegal Ciut, Kec. Klakah, Lumajang</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Temukan UMKM di Google</h3>
                        <a href="https://bit.ly/KeripikMbakRani" target="_blank" className="text-blue-500 hover:underline">
                        https://bit.ly/KeripikMbakRani
                        </a>
                    </div>
                    </div>
                </div>
            </section>
            <section className='flex flex-col w-full my-4 px-6 md:px-12 items-end'>
                <h2 className='flex text-2xl md:text-3xl font-bold text-right mb-4'>
                    Toko Aneka Kue dan Snack Bu Supiana
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {/* Bagian Kiri - Detail Informasi */}
                    <div className="text-sm text-gray-800 space-y-4 ">
                    <div>
                        <h3 className="font-semibold">Hasil Produk UMKM</h3>
                        <p>Kue basah seperti jenis kue-kue pasar, kue tar, kue kering, keripik pisang, keripik puhung, keripik mbote dan berbagai snack lainnya</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Profil UMKM</h3>
                        <p>
                        UMKM milik Ibu Supiana ini memproduksi aneka kue rumahan dan camilan tradisional seperti kue basah, kue tar, 
                        kue kering, keripik pisang, keripik puhung, dan snack lainnya. Semua produk dibuat secara higienis dengan 
                        bahan pilihan dan cita rasa khas daerah. Usaha ini telah berjalan beberapa tahun dan menjadi pilihan warga 
                        sekitar untuk oleh-oleh dan konsumsi harian. Penjualan dilakukan langsung dari rumah dan melalui pesanan. 
                        Dengan rasa terjaga dan harga terjangkau, usaha ini terus berkembang dan berkomitmen menyajikan produk rumahan 
                        yang enak, aman, dan berkualitas.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Jam Operasional</h3>
                        <p>Senin - Sabtu, 09:00 - 23:00 WIB</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Hubungi Untuk Pemesanan</h3>
                        <p>085231341089</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Alamat UMKM</h3>
                        <p>26PJ+VFH, Pelampean, Tegalciut, Kec. Klakah, Kabupaten Lumajang, Jawa Timur 67357</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Temukan UMKM di Google</h3>
                        <a href="https://bit.ly/TokoAnekaKuedanSnackBuSupiana" target="_blank" className="text-blue-500 hover:underline">
                        https://bit.ly/TokoAnekaKuedanSnackBuSupiana
                        </a>
                    </div>
                    </div>

                    {/* Bagian Kanan - Deskripsi dan Gambar */}
                    <div>
                        <p className="text-gray-700 mb-4 text-justify">
                            UMKM milik Ibu Supiana ini bergerak di bidang produksi aneka kue rumahan dan camilan tradisional 
                            khas daerah. Produk yang ditawarkan meliputi kue basah, kue tar, kue kering, keripik pisang, 
                            keripik puhung, dan berbagai snack lainnya yang cocok untuk konsumsi harian maupun acara khusus.
                        </p>
                        <img src={kue} alt="" className="rounded shadow-md h-70"/>
                    </div>
                </div>
            </section>
            <section className="my-4 px-6 md:px-12">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                    Rumah Kerupuk Puli Lezar Bu Mistia
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Bagian Kiri - Deskripsi dan Gambar */}
                    <div>
                        <p className="text-gray-700 mb-4 text-justify">
                            Rumah Kerupuk Puli Lezar Bu Mistia adalah UMKM rumahan di Desa Tegal Ciut yang berdiri 
                            sejak tahun 2020. Usaha ini dikelola sendiri oleh Ibu Mistia dan memproduksi kerupuk 
                            puli (rambak) secara tradisional dari bahan seperti tepung kanji, tepung terigu, dan singkong. 
                            Dengan proses manual dan cita rasa khas, produk ini telah menjadi camilan favorit di kalangan 
                            warga sekitar dan dipasarkan melalui toko-toko lokal.
                        </p>
                        <img src={puli} alt="" className="rounded shadow-md h-70"/>
                    </div>

                    {/* Bagian Kanan - Detail Informasi */}
                    <div className="text-sm text-gray-800 space-y-4">
                    <div>
                        <h3 className="font-semibold">Hasil Produk UMKM</h3>
                        <p>Kerupuk puli (rambak)</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Profil UMKM</h3>
                        <p>
                        Rumah Kerupuk Puli Lezar Bu Mistia adalah UMKM rumahan di Desa Tegal Ciut yang berdiri sejak 2020. 
                        Dikelola sendiri oleh Ibu Mistia, usaha ini memproduksi kerupuk puli berbahan dasar tepung kanji, 
                        tepung terigu, dan singkong secara manual. Produksi dilakukan setiap dua hari sekali dengan kapasitas 
                        5–6 kg adonan, menghasilkan sekitar 10 renteng kerupuk. Produk dipasarkan melalui sistem titip jual 
                        ke toko-toko lokal dengan bantuan sales, dan dikenal karena rasa gurih dan kerenyahannya. Meski belum 
                        memiliki legalitas resmi dan belum menjangkau pasar online, usaha ini terus berkembang berkat kualitas 
                        produk dan promosi dari mulut ke mulut. Tantangan utama yang dihadapi adalah keterbatasan alat, cuaca 
                        saat proses pengeringan, serta kebutuhan pelatihan dalam pengemasan dan pemasaran.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Jam Operasional</h3>
                        <p>Setiap Hari, 09:00 - 23:00</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Hubungi Untuk Pemesanan</h3>
                        <p>082334283367</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Alamat UMKM</h3>
                        <p>26GP+PCC, Karang Tengah, Tegalciut, Klakah, Lumajang Regency, Jawa Timur, Indonesia</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Temukan UMKM di Google</h3>
                        <a href="https://bit.ly/KerupukPuliLezarBuMistia" target="_blank" className="text-blue-500 hover:underline">
                        https://bit.ly/KerupukPuliLezarBuMistia
                        </a>
                    </div>
                    </div>
                </div>
            </section>
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
            &copy; 2025 KKN Desa Tegal Ciut.
        </footer>
        

    </div>
  )
}

export default Umkm