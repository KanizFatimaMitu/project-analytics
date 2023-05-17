import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Polar2 = () => {
    const [state, setState] = useState({
        series: [ 20, 30,50],
        options: {
            chart: {
                width: 380,
                type: 'polarArea'
            },
            labels: [ 'Watch', 'Perfume','Cosmetic'],
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
            <small className='font-bold'>best selling</small>
            <br />

            <ReactApexChart
                options={state.options}
                series={state.series}
                type="polarArea"
                width={200} />

        </div>
    );
};

export default Polar2;