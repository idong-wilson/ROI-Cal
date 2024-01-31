// setup 
const invest = document.getElementById('invest');
const gain = document.getElementById('gain');
const duration = document.getElementById('duration');

const data = {
  labels: ['Investment', 'Profit'],
  datasets: [{
    label: 'ROI Calculator',
    data: [invest.value, gain.value],
    backgroundColor: [
      'rgba(255, 26, 104, 1)',
      'rgba(255, 206, 86, 1',
      
    ],
    borderColor: [
      'rgba(255, 26, 104, 1)',
      'rgba(255, 206, 86, 1)',
      
    ],
    
  }]
};

// config 
const config = {
  type: 'pie',
  data,
  options: {
  }
};

// render init block
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);

function updateChart() {
  //input of function
  myChart.data.datasets[0].data = [invest.value, gain.value];
  myChart.update();

  // 2nd function
  calculator();
};

function calculator() {
  const investment = document.getElementById('investment');
  investment.innerHTML = invest.value;

  const profit = document.getElementById('profit');
  profit.innerHTML = gain.value;

  const tenure = document.getElementById('tenure');
  tenure.innerHTML = duration.value;

  const returns = document.getElementById('returns');
  const roi = (gain.value / invest.value) * 100;
  returns.innerHTML = roi.toFixed(2);
};