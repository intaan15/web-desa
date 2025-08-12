import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const data = [
  { name: "Pelajar/Mahasiswa", value: 323 },
  { name: "Mengurus Rumah Tangga", value: 269 },
  { name: "Belum/Tidak Bekerja", value: 268 },
  { name: "Karyawan Swasta", value: 117 },
  { name: "Nelayan/Perikanan", value: 51 },
  { name: "Petani/Pekebun", value: 38 },
];

export default function DiagramPekerjaan() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 20, left: 0, bottom: 50 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          angle={-20}
          textAnchor="end"
          interval={0}
          height={80}
        />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#1976d2" radius={[4, 4, 0, 0]}>
          <LabelList dataKey="value" position="top" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

