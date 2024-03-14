import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";

Chart.defaults.font.size = 13;
Chart.defaults.font.weight = 500;
Chart.defaults.font.family = "mulish";

function SalesChart({ dateArr = [], salesArr = [] }) {
  // Generate default labels for x-axis (1-30)
  const defaultLabels = Array.from({ length: 30 }, (_, index) => index + 1);

  // Set default data for y-axis (Rp0-1000000)
  const defaultData = Array.from({ length: 30 }, () =>
    Math.floor(Math.random() * 1000000)
  );

// Pengecekan tambahan untuk memastikan bahwa dateArr dan salesArr bukan null
if (!dateArr || !salesArr) {
  dateArr = defaultLabels;
  salesArr = defaultData;
} else {
  if (dateArr.length === 1) {
    salesArr = [0, salesArr[0]];
    dateArr = [0, ...dateArr];
  } else {
    // Jika dateArr memiliki lebih dari satu nilai, tambahkan 0 di awal dan akhir salesArr
    salesArr = [0, ...salesArr];
    // Tambahan nilai 0 di awal dateArr
    dateArr = [0, ...dateArr];
  }
}




  return (
<>
<Line
      data={{
        labels: dateArr,
        datasets: [
          {
            label: "# of votes",
            data: salesArr,
            backgroundColor: "#1D4ED887",
            borderColor: "#1D4ED8",
            borderWidth: 2,
            fill: true,
          },
        ],
      }}
      options={{
        tension: 0.4,
        pointStyle: false,
        plugins: {
          legend: false,
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            ticks: {
              callback: (value) => "Rp" + value,
              stepSize: 100000,
              max: 1000000,
              min: 0
            },
            beginAtZero: true,
          },
        },
      }}
      height={200}
      width={600}
    />
</>
  );
}

export default SalesChart;
