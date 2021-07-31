
import React from "react";
import { Fragment } from "react";
import { Line } from "react-chartjs-2";


const LineChart = ({ LineData }) => {
  return (

    <Fragment>
        <h1 style={{textAlign:"center"}}>Academic Details</h1>
    <Line
      height={90}
      options={{
        responsive: true,
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 100,
              },
              scaleLabel: {
                display: true,
                labelString: "Percentage",
              },
            },
          ],
        },
        scales: {
            xAxes: [
              {
                ticks: {
                  min: 0,
                  max: 100,
                },
                scaleLabel: {
                  display: true,
                  labelString: "Subjects",
                },
              },
            ],
          }
      }}
      data={LineData}
    />

</Fragment>
  );
};

export default LineChart;