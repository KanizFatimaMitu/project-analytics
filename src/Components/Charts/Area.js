import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'

const Area = () => {

    const [state, setState] = useState({
        series: [{
            name: 'Online sell',
            data: [31, 40, 28, 51, 42, 120, 90]
        }, {
            name: 'Offline sell',
            data: [11, 32, 45, 32, 34, 72, 41]
        }],
        options: {
            chart: {
                height: 300,
                type: 'area'
            },
            dataLabels: {
                enabled: true
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'datetime',
                categories: ["2022-11-19T00:00:00.000Z", "2022-12-19T01:30:00.000Z", "2023-01-19T02:30:00.000Z", "2023-02-19T03:30:00.000Z", "2023-03-19T04:30:00.000Z", "2023-04-19T05:30:00.000Z", "2023-05-19T06:30:00.000Z"]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        },


    })


    return (
        <div>
            <div className='flex justify-center items-center mt-0 ml-4'>
            <span className='mr-2 text-success-content'> <FontAwesomeIcon icon={faPaperclip} /></span>
               <h1 className='font-bold text-xl text-success-content'>Sell Online v/s Offline</h1>
            </div>
            <ReactApexChart
                options={state.options}
                series={state.series}
                type="area"
                height={300}
            />

        </div>
    );
};

export default Area;

