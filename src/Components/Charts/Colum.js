import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Colum = () => {
    const [state, setState] = useState({
        series: [{
            name: 'Boys',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
            name: 'Girls',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
            name: 'Unkown',
            data: [31, 41, 36, 26, 59, 48, 52, 15, 35]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
            },
            yaxis: {
                title: {
                    text: '"People"'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands"
                    }
                }
            }
        },
    })
    return (
        <div>
            <div className='flex justify-center items-center mt-4 ml-4'>
                <span className='mr-2 text-success-content'> <FontAwesomeIcon icon={faBarsProgress} /></span>
                <h1 className='font-bold text-xl text-success-content'>Audience Growth</h1>
            </div>
            <ReactApexChart
                options={state.options}
                series={state.series}
                type="bar"
                height={350} />
        </div>


    );
};

export default Colum;