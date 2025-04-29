const ctx = document.getElementById('speedChart').getContext('2d');

const gradient = ctx.createLinearGradient(0, 0, 0, 300);
gradient.addColorStop(0, 'rgba(0,123,255,0.4)');
gradient.addColorStop(1, 'rgba(0,123,255,0.05)');

const speedData = {
  labels: Array.from({length: 40}, (_, i) => i + 1),
  datasets: [{
    label: 'Speed',
    data: [
      0, 20, 40, 60, 80, 90, 100, 110, 115, 120, 125, 134, 130,
      138, 145, 154, 150, 177, 187, 198, 200, 200, 188, 178,
      167, 158, 147, 136, 125, 124, 123, 122, 110, 110, 100, 108,
      107, 100, 100, 90
    ],
    fill: true,
    backgroundColor: gradient,
    borderColor: 'rgba(0,123,255,1)',
    tension: 0.3
  }]
};

const config = {
  type: 'line',
  data: speedData,
  options: {
    scales: {
      y: {
        min: 0,
        max: 200,
        ticks: {
          callback: (val) => `${val} km/h`
        }
      },
      x: {
        display: false
      }
    },
    plugins: {
      legend: { display: false }
    }
  }
};

new Chart(ctx, config);