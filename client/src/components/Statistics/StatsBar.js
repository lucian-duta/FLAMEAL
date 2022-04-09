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
import { fetchDonPerMonth } from "../../Web3/extractFeatures";

/**
 * The component to display the bar chart of donations over the last 12 months using the chart.js library
 *
 * !WARNING! This component generates fake data for the months with no donations to demonstarte a real world scenario; Look at {@link data} to change the rule
 *
 * @borrows {@link fetchDonPerMonth} to fetch the data from the blockchain
 * @returns {ReactComponent} the {@link ChartJS} {@link Bar} component with the corresponding data and parameters
 */
export const StatsBar = () => {
  //initialize parameters of the chart
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  //set the options of hte chart component
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

  //declare months as labels to be used by the chart
  let labels = [
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
  //function to rearrage months depending on the current month
  const shiftMonths = () => {
    //get current date
    const date = new Date();
    //extract month number (starts from 0)
    let month = date.getMonth();
    //extract months before the current one (including current month) from array
    let lbBefore = labels.slice(0, month + 1);
    //redeclare array to include the months after the current one
    labels = labels.slice(month + 1);
    //add previous and current month after the months after (to represent the last year)
    labels = labels.concat(lbBefore);
  };
  //fetch the hashmap of donations per month from extractFeatures
  let donatePerMonth = fetchDonPerMonth();
  //perform the month shift
  shiftMonths();
  //data to be sent to the chart

  //use object literal lookup instead of switch
  //to transform the month label string to the corresponding number
  let monthToNum = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Donations",
        data: labels.map((label) => {
          //assign the number of donation for the current month to the returning value
          let noOfDonations = donatePerMonth.get(monthToNum[label]);
          //for showcase purposes if there are no donations it will assign a random number
          //!TO BE REMOVED IN FINAL
          if (noOfDonations === 0) {
            noOfDonations = Math.floor(Math.random() * 20);
          }

          return noOfDonations;
        }),
        backgroundColor: "rgba(0, 232, 236)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};
