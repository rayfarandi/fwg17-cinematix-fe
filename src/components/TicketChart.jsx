import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";

// defaults.global.tooltips.enabled = false;
// defaults.global.legend.position = "bottom";

Chart.defaults.font.size = 13;
Chart.defaults.font.weight = 500;
Chart.defaults.font.family = "mulish";

function TicketChart({ dateTicketArr = [], moneyArr = [] }) {
    // Generate default labels for x-axis (1-30)
    const defaultLabels = Array.from({ length: 30 }, (_, index) => index + 1);

    // Set default data for y-axis (Rp0-1000000)
    const defaultData = Array.from({ length: 30 }, () =>
      Math.floor(Math.random() * 1000000)
    );
  
  // Pengecekan tambahan untuk memastikan bahwa dateTicketArr dan moneyArr bukan null
  if (!dateTicketArr || !moneyArr) {
    dateTicketArr = defaultLabels;
    moneyArr = defaultData;
  } else {
    if (dateTicketArr.length === 1) {
      moneyArr = [0, moneyArr[0]];
      dateTicketArr = [0, ...dateTicketArr];
    } else {
      // Jika dateTicketArr memiliki lebih dari satu nilai, tambahkan 0 di awal dan akhir moneyArr
      moneyArr = [0, ...moneyArr];
      // Tambahan nilai 0 di awal dateTicketArr
      dateTicketArr = [0, ...dateTicketArr];
    }
  }
  
  
  
  
    return (
      <Line
        data={{
          labels: dateTicketArr,
          datasets: [
            {
              label: "# of votes",
              data: moneyArr,
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
    );
  }
  

export default TicketChart;