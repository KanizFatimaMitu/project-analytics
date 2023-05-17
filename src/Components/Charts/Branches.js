import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHomeAlt } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Branches = () => {
    const [state, setState] = useState({
        series: [
            {
                name: 'Desktops',
                data: [
                    {
                        x: 'Jatrabari',
                        y: 10
                    },
                    {
                        x: 'Wari',
                        y: 60
                    },
                    {
                        x: 'Banani',
                        y: 41
                    }
                ]
            },
            {
                name: 'Mobile',
                data: [
                    {
                        x: 'Farmget',
                        y: 10
                    },
                    {
                        x: 'Kalshi',
                        y: 20
                    },
                    {
                        x: 'Jamuna future Park',
                        y: 51
                    },
                    {
                        x: 'Tejgaon',
                        y: 30
                    },
                    {
                        x: 'Mohakhali DOHS',
                        y: 20
                    },
                    {
                        x: 'ECB',
                        y: 30
                    }
                ]
            }
        ],
        options: {
            legend: {
                show: false
            },
            chart: {
                height: 350,
                type: 'treemap'
            },
            title: {
                align: 'center'
            }
        },
    })
    return (
        <div>
             <div className='flex justify-center items-center mt-4 ml-4'>
                <span className='mr-2 text-success-content'> <FontAwesomeIcon icon={faHomeAlt} /></span>
                <h1 className='font-bold text-xl text-success-content'>Our All Branches</h1>
            </div>
            <ReactApexChart
            options={state.options} 
            series={state.series} 
            type="treemap"
            height={250} />
        </div>
    );
};

export default Branches;