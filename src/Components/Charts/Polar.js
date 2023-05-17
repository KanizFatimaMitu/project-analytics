import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Polar = () => {
    const [state, setState] = useState({
        series: [42, 47, 52, 58, 65],
        options: {
            chart: {
                width: 380,
                type: 'polarArea'
            },
            labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
            fill: {
                opacity: 1
            },
            stroke: {
                width: 1,
                colors: undefined
            },
            yaxis: {
                show: false
            },
            legend: {
                position: 'bottom'
            },
            plotOptions: {
                polarArea: {
                    rings: {
                        strokeWidth: 0
                    },
                    spokes: {
                        strokeWidth: 0
                    },
                }
            },
            theme: {
                monochrome: {
                    enabled: true,
                    shadeTo: 'light',
                    shadeIntensity: 0.6
                }
            }
        },
    })
    return (
        <div>
            <ReactApexChart
             options={state.options}
              series={state.series} 
              type="polarArea"
               width={200} />

        </div>
    );
};

export default Polar;