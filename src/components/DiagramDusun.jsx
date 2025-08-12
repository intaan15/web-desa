import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Dusun Karang Tengah', value: 1303 },
  { name: 'Dusun Plampean', value: 1154 },
  { name: 'Dusun Jawaan', value: 745 },
  { name: 'Dusun Bringinan', value: 1132 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f7f'];

const DiagramDusun = () => {
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
                  `${name.split(' ')[1]} : ${(percent * 100).toFixed(2)}%`
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
        <div className='flex flex-col '>
          <h3 className="font-semibold">Keterangan :</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              • Dusun Karang Tengah{' '}
              <span className="text-red-500">1.303</span>{' '}
              <span className="text-blue-500">Jiwa</span>
            </li>
            <li>
              • Dusun Plampean{' '}
              <span className="text-red-500">1.154</span>{' '}
              <span className="text-blue-500">Jiwa</span>
            </li>
            <li>
              • Dusun Jawaan{' '}
              <span className="text-red-500">745</span>{' '}
              <span className="text-blue-500">Jiwa</span>
            </li>
            <li>
              • Dusun Bringinan{' '}
              <span className="text-red-500">1.132</span>{' '}
              <span className="text-blue-500">Jiwa</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default DiagramDusun