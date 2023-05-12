import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons'

const Line = () => {
    const [state, setState] = useState({
        series: [{
            name: 'Sales',
            data: [14, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 17, 12, 37, 9, 19, 5]
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
            },
            forecastDataPoints: {
                count: 7
            },
            stroke: {
                width: 5,
                curve: 'smooth'
            },
            xaxis: {
                type: 'datetime',
                categories: ['3/1/2023', '3/5/2023', '3/10/2023', '3/15/2023', '3/20/2023', '3/25/2023', '3/30/2023', '4/5/2023', '4/15/2023', '4/20/2023', '4/25/2023', '4/30/2023', '5/5/2023', '5/15/2023', '5/20/2023', '5/25/2023', '5/30/2023', '6/5/2023'],
                tickAmount: 10,
                labels: {
                    formatter: function (value, timestamp, opts) {
                        return opts.dateFormatter(new Date(timestamp), 'dd MMM')
                    }
                }
            },
            title: {

                align: 'left',
                style: {
                    fontSize: "16px",
                    color: '#47B5FF'
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    gradientToColors: ['#54E346'],
                    shadeIntensity: 1,
                    type: 'horizontal',
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100, 100, 100]
                },
            },
            yaxis: {
                min: 0,
                max: 40
            }
        },



    })
    return (
        <div>
            <div className='flex justify-center items-center mt-4 ml-4'>
                <span className='mr-2 text-success-content'> <FontAwesomeIcon icon={faBarsProgress} /></span>
                <h1 className='font-bold text-xl text-success-content'>Monthly sales</h1>
            </div>
            <ReactApexChart
                options={state.options}
                series={state.series}
                type="area"
                height={300}
                width={800} />
        </div>
    );
};

export default Line;