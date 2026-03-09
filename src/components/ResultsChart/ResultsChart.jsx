import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';


const resultData=[
  {
    "id": 1,
    "name": "Rahim",
    "physics": 85,
    "chemistry": 78,
    "math": 92,
    "biology": 80
  },
  {
    "id": 2,
    "name": "Karim",
    "physics": 88,
    "chemistry": 82,
    "math": 90,
    "biology": 84
  },
  {
    "id": 3,
    "name": "Salma",
    "physics": 91,
    "chemistry": 86,
    "math": 95,
    "biology": 89
  },
  {
    "id": 4,
    "name": "Nadia",
    "physics": 79,
    "chemistry": 83,
    "math": 87,
    "biology": 85
  },
  {
    "id": 5,
    "name": "Hasan",
    "physics": 76,
    "chemistry": 74,
    "math": 81,
    "biology": 78
  },
  {
    "id": 6,
    "name": "Mim",
    "physics": 89,
    "chemistry": 91,
    "math": 94,
    "biology": 90
  },
  {
    "id": 7,
    "name": "Arif",
    "physics": 82,
    "chemistry": 79,
    "math": 85,
    "biology": 80
  },
  {
    "id": 8,
    "name": "Tania",
    "physics": 87,
    "chemistry": 88,
    "math": 90,
    "biology": 86
  },
  {
    "id": 9,
    "name": "Rafi",
    "physics": 73,
    "chemistry": 76,
    "math": 79,
    "biology": 75
  },
  {
    "id": 10,
    "name": "Sadia",
    "physics": 90,
    "chemistry": 87,
    "math": 93,
    "biology": 91
  }
]
const ResultsChart = () => {
    return (
        <div>
            <LineChart width={500} height={500} data={resultData}>
                <XAxis ></XAxis>
                <YAxis></YAxis>

                <Line dataKey={'physics'} stroke='purple'></Line>
                
                <Line dataKey={'math'} stroke='green'></Line>
                <Line dataKey={'chemistry'} stroke='blue'></Line>
                <Line dataKey={'biology'} stroke='red'></Line>

            </LineChart>
        </div>
    );
};

export default ResultsChart;