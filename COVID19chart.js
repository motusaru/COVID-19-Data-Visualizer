const fs = require('fs');
const csv = require('csv-parser');
const readline = require('readline');
const { ChartJSNodeCanvas } = require('chartjs-node-canvas');

const width = 800;
const height = 600;
const backgroundColour = 'white';
const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height, backgroundColour });

const getDataForCountry = (countryName) => {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream('worldometer_data.csv') // Ensure the file path is correct
            .pipe(csv())
            .on('data', (data) => {
                if (data.Country.toLowerCase() === countryName.toLowerCase()) {
                    results.push(data);
                }
            })
            .on('end', () => {
                if (results.length > 0) {
                    resolve(results[0]); // Assuming only one entry per country
                } else {
                    reject(new Error(`No data found for ${countryName}`));
                }
            })
            .on('error', reject);
    });
};

const generateChart = async (countryName) => {
    const countryData = await getDataForCountry(countryName);

    const configuration = {
        type: 'bar',
        data: {
            labels: ['Cases', 'Deaths'],
            datasets: [{
                data: [countryData.Cases, countryData.Deaths],
                backgroundColor: [
                    'rgba(24, 162, 255, 0.2)',
                    'rgba(255, 99, 122, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: `COVID-19 - ${countryName}`,
                    position: 'top',
                    align: 'middle',
                    font: {
                        size: 22,
                        weight: 'bold',
                    },
                    padding: {
                        top: 10,
                        bottom: 30
                    }
                },
                legend: {
                    display: false // This hides the legend
                }
            },
            responsive: true,
            maintainAspectRatio: false,
        }
    };

    const image = await chartJSNodeCanvas.renderToBuffer(configuration);
    fs.writeFileSync(`${countryName.replace(/\s/g, '_')}_chart.png`, image);
    console.log(`Chart generated successfully for ${countryName}.`);
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the name of the country you want data for: ', (countryName) => {
    generateChart(countryName.trim()).catch(err => {
        console.error(err);
        rl.close();
    }).finally(() => rl.close());
});
