import React from 'react';
import LineChart from 'britecharts/dist/umd/line.min';

var d3Selection = require('d3-selection');
	
    
export default () => {
	return (
		<div>
			<h2>Line Chart with a single data source</h2>
            <div class="britechart js-single-line-chart-container card--chart"></div>
		</div>
	)
};


