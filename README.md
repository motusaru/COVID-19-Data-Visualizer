# COVID-19 Data Visualization
This Node.js program demonstrates the use of several packages/libraries for processing and visualizing COVID-19 data specific to countries. The main libraries used include `fs` for file system operations, `csv-parser` for parsing CSV files, `readline` for reading input from the command line, and most importantly `chartjs-node-canvas` for generating charts as images.

## Running the Program
To run this program, you'll need Node.js installed on your system. Follow these steps:
1. Clone this repository.
2. Navigate to the directory in your terminal.
3. If you don't have `chart.js` installed, move on to the next step. If you do have `chart.js` installed, then first run `npm uninstall chart.js`, then move on to the next step.
4. Run `npm install chart.js@^3.5.1`. Next, run `npm install chartjs-node-canvas`. Then, run `npm install csv-parser`.
5. Ensure you have a `worldometer_data.csv` file in the directory. This file contains COVID-19 data up until March of 2024, including the number of cases and deaths for various countries.
6. Run the program using the command `node COVID19chart.js`.
7. When prompted, enter the name of the country you want data for.
8. A chart will be generated in the same working directory.

## Purpose of the Program

This program serves to provide a quick visualization of COVID-19 data [1] (cases and deaths) for a specified country. By generating a bar chart image, it allows for an easy-to-understand comparison between the number of cases and deaths.

## Sample Input/Output

### Input
![alt text](https://github.com/CS2613-WI24-FR01B/exploration-activity-2-motusaru/blob/main/Screenshot%202024-04-02%20224141.png)

### Output
![alt text](https://github.com/CS2613-WI24-FR01B/exploration-activity-2-motusaru/blob/main/China_chart.png)


## References 
1. Coronavirus cases:. Worldometer. (n.d.). https://www.worldometers.info/coronavirus/ 
