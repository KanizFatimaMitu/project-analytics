import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Dounuts = () => {
    // const [chart, setChart] = useState([]);
    const [year, setYear] = useState([]);
    const [growth, setGrowth] = useState([]);

    useEffect(() => {
        const getdata= async()=>{
            const  dYears=[];
            const dGrowth=[];
  
          const reqData= await fetch("data.json"); 
          const resData= await reqData.json();
          // for(let i=0; i<6; i++)
          for(let i=0; i<resData.length; i++)
          {
            dYears.push(resData[i].year);
            dGrowth.push((resData[i].growth));
          }
          setYear( dYears);
          setGrowth( dGrowth);
      
  
       }
       getdata();
    },[])
    return (
        <div>
            <ReactApexChart
                
            type= 'donut'
            width={500}
            height={300}
            series= {year}
            options= {{
                labels: growth,
                responsive: [{
                     breakpoint: 480,
                     options: {
                      chart: {
                        width: 200
                      },
                      legend: {
                        position: 'bottom'
                      }
                    }
                  }]
                  
            }} />

        </div>
    );
};

export default Dounuts;