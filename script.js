document.getElementById('waterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const showerUsage = parseFloat(document.getElementById('showerUsage').value);
    const toiletUsage = parseFloat(document.getElementById('toiletUsage').value);
    const otherUsage = parseFloat(document.getElementById('otherUsage').value);
    const days = parseFloat(document.getElementById('days').value);

    const totalWaterFootprint = (showerUsage + toiletUsage + otherUsage) * days;

    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('hidden');
    resultDiv.textContent = `Your total water footprint is ${totalWaterFootprint.toFixed(2)} liters.`;

    
    const data = {
        labels: ['Shower', 'Toilet', 'Other'],
        datasets: [{
            label: 'Water Usage (liters)',
            data: [
                showerUsage * days,
                toiletUsage * days,
                otherUsage * days
            ],
            backgroundColor: ['#3498db', '#2ecc71', '#e74c3c'],
        }]
    };
    
    const options = {
        scales: {
            x: {
                ticks: {
                    color: 'black' 
                },
                grid: {
                    color: 'black' 
                }
            },
            y: {
                ticks: {
                    color: 'black' 
                },
                grid: {
                    color: 'black' 
                }
            }
        }
    };

   
    const ctx = document.getElementById('waterChart');
    if (ctx.chart) {
        ctx.chart.destroy();
    }

   
    ctx.chart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options,
       
    });

    ctx.classList.remove('hidden');
});
