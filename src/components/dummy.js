import React from 'react';
import LineChart from 'britecharts/dist/umd/line.min';

var d3Selection = require('d3-selection');

export default (props) => {
  
	var container = d3Selection.select('.js-chart-container'),
    	lineChart = new LineChart();

    if (container.node()) {
        lineChart
            .tooltipThreshold(600)
            .margin(chartMargin)
            .height(500)
            .width(containerWidth);
    }

    // This line gets together container, data and chart
    container.datum(data).call(lineChart);


  return (
    <div>
      <LineChart height={120} width={180} data={props.data}>
      </LineChart>
    </div>
  )
}

