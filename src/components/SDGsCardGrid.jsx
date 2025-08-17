import React from 'react'

import icon1 from '../images/icons/icon1.png';
import icon2 from '../images/icons/icon2.png';
import icon3 from '../images/icons/icon3.png';
import icon4 from '../images/icons/icon4.png';
import icon5 from '../images/icons/icon5.png';
import icon6 from '../images/icons/icon6.png';
import icon7 from '../images/icons/icon7.png';
import icon8 from '../images/icons/icon8.png';
import icon9 from '../images/icons/icon9.png';
import icon10 from '../images/icons/icon10.png';
import icon11 from '../images/icons/icon11.png';
import icon12 from '../images/icons/icon12.png';
import icon13 from '../images/icons/icon13.png';
import icon14 from '../images/icons/icon14.png';
import icon15 from '../images/icons/icon15.png';
import icon16 from '../images/icons/icon16.png';
import icon17 from '../images/icons/icon17.png';
import icon18 from '../images/icons/icon18.png';

const data = [
  { id: 1, title: "Desa Tanpa Kemiskinan", icon: icon1, value: 62.91 },
  { id: 2, title: "Desa Tanpa Kelaparan", icon: icon2, value: 71.64 },
  { id: 3, title: "Desa Sehat & Sejahtera", icon: icon3, value: 44.24 },
  { id: 4, title: "Pendidikan Desa Berkualitas", icon: icon4, value: 64.66 },
  { id: 5, title: "Keterlibatan Perempuan Desa", icon: icon5, value: 16.38 },
  { id: 6, title: "Desa Layak Air Bersih dan Sanitasi", icon: icon6, value: 63.76 },
  { id: 7, title: "Desa Berenergi Bersih dan Terbarukan", icon: icon7, value: 100.0 },
  { id: 8, title: "Pertumbuhan Ekonomi Desa Merata", icon: icon8, value: 29.25 },
  { id: 9, title: "Infrastruktur dan Inovasi Desa", icon: icon9, value: 0.0 },
  { id: 10, title: "Desa Tanpa Kesenjangan", icon: icon10, value: 41.16 },
  { id: 11, title: "Kawasan Pemukiman Aman", icon: icon11, value: 33.45 },
  { id: 12, title: "Konsumsi dan Produksi Sadar Lingkungan", icon: icon12, value: 0.0 },
  { id: 13, title: "Desa Tanggap Perubahan Iklim", icon: icon13, value: 62.91 },
  { id: 14, title: "Desa Peduli Lingkungan Laut", icon: icon14, value: 0.0 },
  { id: 15, title: "Desa Peduli Lingkungan Darat", icon: icon15, value: 0.0 },
  { id: 16, title: "Desa Damai Berkeadilan", icon: icon16, value: 77.14 },
  { id: 17, title: "Kemitraan Pembangunan Desa", icon: icon17, value: 0.0 },
  { id: 18, title: "Kelembagaan dan Budaya Adaptif", icon: icon18, value: 12.71 },
];

export default function SDGsCardGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-2 border" data-aos="zoom-in" data-aos-delay="400"
        >
            <div className='flex flex-col items-start w-full h-full px-2'>
                <h2 className="text-[10px] md:text-sm font-semibold mb-1 text-center ">{item.title}</h2>
                <div className='flex gap-9 items-center'>
                    <img src={item.icon} alt={item.title} className="text-center w-9 h-9 md:w-16 md:h-16 mb-2" />
                    <div className="w-full mt-2">
                        <div className="text-[10px] md:text-md font-semibold text-right text-gray-600 mb-1">Nilai: {item.value}</div>
                    </div>
                </div>
            </div>
        </div>
      ))}
    </div>
  );
}
