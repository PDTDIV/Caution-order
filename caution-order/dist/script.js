document.addEventListener('DOMContentLoaded', function () {
    // Initialize Chart.js
    var ctx = document.getElementById('caution-chart').getContext('2d');
    var cautionChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Caution Orders',
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                data: [],
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'Kilometer'
                    },
                    min: 500,
                    max: 650
                },
                y: {
                    type: 'linear',
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Speed (km/h)'
                    },
                    min: 5,
                    max: 120
                }
            }
        }
    });

    // Function to handle form submission
    window.submitForm = function () {
        var date = document.getElementById('date').value;
        var time = document.getElementById('time').value;
        var from = parseFloat(document.getElementById('from').value);
        var to = parseFloat(document.getElementById('to').value);
        var speed = parseFloat(document.getElementById('speed').value);

        if (isNaN(from) || isNaN(to) || isNaN(speed)) {
            alert('Please enter valid numeric values for From, To, and Speed.');
            return;
        }

        var newData = { x: from, y: speed, date, time, from, to, speed };
        cautionChart.data.datasets[0].data.push(newData);
        cautionChart.update();

        // Reset form fields
        document.getElementById('date').value = '';
        document.getElementById('time').value = '';
        document.getElementById('from').value = '';
        document.getElementById('to').value = '';
        document.getElementById('speed').value = '';
    };
});
