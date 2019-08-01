const ctx = document.getElementById('chart').getContext('2d');

const data = [9, 20, 10, 4, 12, 6];

const myChart = new myChart(ctx, {
    type: 'bar',
    data: {
        labels: 'black',
        datasets: [{
            label: '# of Clicks',
            data: data,
            backgroundColor: 'white'
        }]
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