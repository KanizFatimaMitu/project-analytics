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
                        x: 'ABC',
                        y: 10
                    },
                    {
                        x: 'DEF',
                        y: 60
                    },
                    {
                        x: 'XYZ',
                        y: 41
                    }
                ]
            },
            {
                name: 'Mobile',
                data: [
                    {
                        x: 'ABCD',
                        y: 10
                    },
                    {
                        x: 'DEFG',
                        y: 20
                    },
                    {
                        x: 'WXYZ',
                        y: 51
                    },
                    {
                        x: 'PQR',
                        y: 30
                    },
                    {
                        x: 'MNO',
                        y: 20
                    },
                    {
                        x: 'CDE',
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
                <h1 className='font-bold text-xl text-success-content'>Audience Growth</h1>
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