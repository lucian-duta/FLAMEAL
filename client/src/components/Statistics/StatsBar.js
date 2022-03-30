import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import React from "react";
import { fetchPeopleAidedLM } from "../../Web3/extractFeatures";

export function StatsBar() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "People aided",
      },
    },
    scales: {
      y: {
        ticks: {
          color: "#d4d4d4",
          fontSize: 18,
          stepSize: 100,
          beginAtZero: true,
        },
      },

      x: {
        ticks: {
          color: "#d4d4d4",
          fontSize: 14,

          beginAtZero: true,
        },
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map((label) => {
          if (label === "March") {
            console.log("DSADASDASDASDdsA", fetchPeopleAidedLM());
            return fetchPeopleAidedLM();
          }
          if (
            label === "March" ||
            label === "April" ||
            label === "May" ||
            label === "June" ||
            label === "July" ||
            label === "August" ||
            label === "September" ||
            label === "October" ||
            label === "November" ||
            label === "December"
          ) {
            return 0;
          }
          console.log("labbb", label);
          return Math.floor(Math.random() * 50);
        }),
        backgroundColor: "rgba(0, 232, 236)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
