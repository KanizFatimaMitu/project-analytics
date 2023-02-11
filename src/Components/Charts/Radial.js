import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Radial = () => {
    const [state, setState] = useState({
          
            series: [76, 67, 61, 90],
            options: {
              chart: {
                height: 390,
                type: 'radialBar',
              },
              plotOptions: {
                radialBar: {
                  offsetY: 0,
                  startAngle: 0,
                  endAngle: 270,
                  hollow: {
                    margin: 5,
                    size: '30%',
                    background: 'transparent',
                    image: undefined,
                  },
                  dataLabels: {
                    name: {
                      show: false,
                    },
                    value: {
                      show: false,
                    }
                  }
                }
              },
              colors: ['#139487', '#30E3DF', '#F94A29', '#D29D2B'],
              labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
              legend: {
                show: true,
                floating: true,
                fontSize: '16px',
                position: 'left',
                offsetX: 160,
                offsetY: 15,
                labels: {
                  useSeriesColors: true,
                },
                markers: {
                  size: 0
                },
                formatter: function(seriesName, opts) {
                  return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                },
                itemMargin: {
                  vertical: 3
                }
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  legend: {
                      show: false
                  }
                }
              }]
            },
        })
    return (
        <div>

            <ReactApexChart
             options={state.options} 
             series={state.series}
             type="radialBar"
             height={300} />
        </div>
    );
};

export default Radial;