import React from 'react';
import { FaMosque, FaCross, FaBible, FaOm } from 'react-icons/fa';
import { GiLotus } from 'react-icons/gi';
import { FaToriiGate } from 'react-icons/fa6';
import { MdOutlineCircle } from 'react-icons/md';

const agamaData = [
  { name: 'Islam', value: 1147, icon: <FaMosque className="text-green-600 text-5xl" /> },
  { name: 'Buddha', value: 0, icon: <GiLotus className="text-yellow-500 text-5xl" /> },
  { name: 'Konghucu', value: 0, icon: <FaToriiGate className="text-green-700 text-5xl" /> },
  { name: 'Kepercayaan lainnya', value: 0, icon: <MdOutlineCircle className="text-gray-500 text-5xl" /> },
  { name: 'Kristen', value: 0, icon: <FaCross className="text-green-600 text-5xl" /> },
  { name: 'Katolik', value: 0, icon: <FaBible className="text-green-700 text-5xl" /> },
  { name: 'Hindu', value: 0, icon: <FaOm className="text-green-700 text-5xl" /> },
];

const CardAgama = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-7 gap-4 p-4" >
      {agamaData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center border rounded-lg shadow p-4 bg-white"
        >
          {item.icon}
          <p className="mt-2 text-gray-600">{item.name}</p>
          <p className="text-lg font-bold text-red-500">
            {item.value.toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CardAgama;
