# Deep Dive into Chart.js-Node-Canvas

## Selected Package/Library

The focus of my exploration is `chartjs-node-canvas`, a powerful library that bridges Chart.js with Node Canvas [1].

## What is Chart.js-Node-Canvas?

### Purpose

`chartjs-node-canvas` is a Node.js library designed to render Chart.js charts on the server side. It uses the `canvas` library to draw charts in a Node.js environment, enabling the generation of images or PDFs with Chart.js charts without a browser. This is especially useful for server-side applications needing to send charts directly to the client without relying on client-side rendering.

### How to Use

To use `chartjs-node-canvas`[2], first install it along with Chart.js in your Node.js project:

```bash
npm install chartjs-node-canvas chart.js
```
Then, create a canvas renderer and generate a chart image as follows:
```bash

const { ChartJSNodeCanvas } = require('chartjs-node-canvas');
const width = 400; ## width of the canvas
const height = 400; ## height of the canvas
const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height });

## this example is of chart type bar.
const configuration = {
    type: 'bar', 
    data: { /* data configuration */ },
    options: { /* options configuration */ }
};


const image = await chartJSNodeCanvas.renderToBuffer(configuration);

```
You can then save this image to a file or even embed it in PDF documents.

### Functionalities

`chartjs-node-canvas` supports all chart types available in Chart.js, including line, bar, pie, doughnut, etc. Here's how you can create a pie chart:

```bash
const configuration = {
    type: 'pie', 
    data: {
        labels: ['January', 'February', 'March'],
        datasets: [{
            label: 'Dataset 1',
            data: [50, 60, 70], 
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)', 
                'rgba(255, 206, 86, 0.2)'   
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top', 
            },
            title: {
                display: true,
                text: 'Monthly Data' 
            }
        }
    }
};
```

## Creation
Chart.js was created and announced in 2013 but has come a long way since then [3]. The library was developed to extend the capabilities of Chart.js to Node.js environments, utilizing the canvas package for drawing. `chartjs-node-canvas` has been around since at least early 2020, evolving alongside Chart.js.

## Selection Reason
I chose this library for its unique position in enabling chart generation with the same flexibility and design options offered by Chart.js, a popular client-side charting library. Its rendering capability is crucial for applications that need to generate and distribute charts programmatically, such as in automated reports or email campaigns. I wanted to create something informative and useful which would be easy to use, and implement the topic of Covid-19, which everyone is familiar with.

## Learning Influence
Learning how to use `chartjs-node-canvas` really opened my eyes to what's possible with server-side JavaScript and how we can show data in interesting ways. It was like learning to build neat charts we see in reports, but all through code that runs on a server, not in a web browser. I got to play around with making charts look exactly how I wanted, figuring out how to manage data, and making sure everything runs smoothly without slowing things down. I learned how to make my charts fast and ready to be shown anywhere, from websites to emails. It was a lot of fun and I feel ready to tackle any project that needs charts to help tell its story.

## Overall Experience
The experience with chartjs-node-canvas has been overwhelmingly positive. Its integration with Chart.js makes it a valuable tool for developers familiar with Chart.js who are looking to extend their applications to include server-side chart generation.
I would recommend chartjs-node-canvas to anyone needing to generate charts on the server side, especially in contexts where chart generation is required without a browser. Whether for reports, automated emails, or web applications that serve images directly, it provides a strong solution.

## References 
1. Chartjs-node-canvas. npm. (n.d.). https://www.npmjs.com/package/chartjs-node-canvas 
2. Chartjs-node-canvas. npm. (n.d.-a). https://www.npmjs.com/package/chartjs-node-canvas/v/4.0.0 
3. Chart.js. Chart.js | Chart.js. (n.d.). https://www.chartjs.org/docs/latest/ 
