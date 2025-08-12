import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList
} from "recharts";

const data = [
  { name: "Tidak/Belum Sekolah", value: 173 },
  { name: "Belum Tamat SD/Sederajat", value: 201 },
  { name: "Tamat SD/Sederajat", value: 285 },
  { name: "SLTP/Sederajat", value: 140 },
  { name: "SLTA/Sederajat", value: 285 },
  { name: "Diploma I/II", value: 22 },
  { name: "Diploma III/S. Muda", value: 13 },
  { name: "Diploma IV/Strata I", value: 26 },
  { name: "Strata II", value: 2 },
  { name: "Strata III", value: 0 },
];

function DiagramPendidikan() {
  return (
    <div className="w-full overflow-x-hidden">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 10, left: 0, bottom: 40 }} 
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
          <Legend />
          <Bar dataKey="value" fill="#b71c1c">
            <LabelList dataKey="value" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DiagramPendidikan;
