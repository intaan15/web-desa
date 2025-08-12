// components/Diagrampenduduk.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { usia: '0 - 4', lakiLaki: 64, perempuan: 65 },
  { usia: '5 - 9', lakiLaki: 74, perempuan: 76 },
  { usia: '10 - 14', lakiLaki: 85, perempuan: 73 },
  { usia: '15 - 19', lakiLaki: 72, perempuan: 101 },
  { usia: '20 - 24', lakiLaki: 102, perempuan: 96 },
  { usia: '25 - 29', lakiLaki: 83, perempuan: 82 },
  { usia: '30 - 34', lakiLaki: 86, perempuan: 91 },
  { usia: '35 - 39', lakiLaki: 94, perempuan: 117 },
  { usia: '40 - 44', lakiLaki: 93, perempuan: 99 },
  { usia: '45 - 49', lakiLaki: 94, perempuan: 86 },
  { usia: '50 - 54', lakiLaki: 67, perempuan: 90 },
  { usia: '55 - 59', lakiLaki: 75, perempuan: 67 },
  { usia: '60 - 64', lakiLaki: 56, perempuan: 72 },
  { usia: '65 - 69', lakiLaki: 37, perempuan: 44 },
  { usia: '70 - 74', lakiLaki: 29, perempuan: 46 },
  { usia: '75+', lakiLaki: 21, perempuan: 35 },
];

// Format data agar laki-laki negatif untuk visual piramida
const formattedData = data.map(item => ({
  usia: item.usia,
  lakiLaki: -item.lakiLaki,
  perempuan: item.perempuan,
}));

const Diagrampenduduk = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="h-[550px] bg-white p-4 rounded shadow">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={formattedData}
            margin={{ top: 20, right: 10, bottom: 20, left: 10 }} // margin dikurangi
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              type="number"
              tickFormatter={(value) => Math.abs(value)}
            />
            <YAxis dataKey="usia" type="category" />
            <Tooltip formatter={(value) => Math.abs(value)} />
            <Legend />
            <Bar dataKey="lakiLaki" fill="#009999" name="Laki-Laki" />
            <Bar dataKey="perempuan" fill="#FF4D4D" name="Perempuan" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Diagrampenduduk
