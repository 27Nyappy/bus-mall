const ctx = document.getElementById('chart').getContext('2d');

const data = [9, 20, 10, 4, 12, 6];
const labelColors = ['black', 'pink', 'red', 'purple', 'blue', 'yellow'];

const clickChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labelColors,
        datasets: [
            {
                label: '# of Clicks',
                data: data,
                backgroundColor: 'white'
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});