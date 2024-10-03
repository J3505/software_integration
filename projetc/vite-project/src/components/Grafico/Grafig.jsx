
import { Chart } from 'primereact/chart';
// npm install chart.js
import  { useState, useEffect } from 'react';



export default function Grafig() {
    
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        // const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [540, 325, 702],

                    backgroundColor: ['#6c9bffce', '#6c9bffce', '#6c9bffce' ],
                    hoverBackgroundColor: [
                        '#6c9bffce','#6c9bffce', '#6c9bffce'
                    ]
                }
            ]
        }
        const options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

  return (
    <>
        <div className="card flex justify-content-center">
            <Chart  type="pie" data={chartData} options={chartOptions} className=" md:w-30rem" />
        </div>
    </>
  )
}
