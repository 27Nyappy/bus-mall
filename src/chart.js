const ctx = document.getElementById('chart').getContext('2d');

const data = [9, 20, 10, 4, 12, 6];
const clickLabel = ['click1', 'click2', 'click3', 'click4', 'click5', 'click6'];

const clickChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: clickLabel,
        datasets: [
            {
                label: '# of Clicks',
                data: data,
                backgroundColor: 'white'
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});