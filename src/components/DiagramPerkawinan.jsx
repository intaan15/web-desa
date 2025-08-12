import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Belum Nikah', value: 770 },
  { name: 'Menikah', value: 1390 },
  { name: 'Cerai Hidup', value: 74 },
  { name: 'Cerai Mati', value: 147 },
];

const COLORS = ['#42a5f5', '#66bb6a', '#ff7043', '#ab47bc'];

const DiagramPerkawinan = () => {
  return (
    <div className="p-4 w-full">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Chart */}
        <div className="w-full md:w-1/2 h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={true}
                label={({ name, percent }) =>
                  `${name} : ${(percent * 100).toFixed(2)}%`
                }
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Keterangan */}
        <div className="flex flex-col">
          <h3 className="font-semibold">Keterangan :</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              • Belum Nikah{' '}
              <span className="text-red-500">770</span>{' '}
              <span className="text-blue-500">Jiwa</span>
            </li>
            <li>
              • Menikah{' '}
              <span className="text-red-500">1.390</span>{' '}
              <span className="text-blue-500">Jiwa</span>
            </li>
            <li>
              • Cerai Hidup{' '}
              <span className="text-red-500">74</span>{' '}
              <span className="text-blue-500">Jiwa</span>
            </li>
            <li>
              • Cerai Mati{' '}
              <span className="text-red-500">147</span>{' '}
              <span className="text-blue-500">Jiwa</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DiagramPerkawinan;
