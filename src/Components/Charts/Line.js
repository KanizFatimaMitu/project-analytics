import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons'

const Line = () => {
    const [state, setState] = useState({
        series: [{
            name: 'Sales',
            data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
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
                categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
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
        <h1 className='font-bold text-xl text-success-content'>Dashboard</h1>
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