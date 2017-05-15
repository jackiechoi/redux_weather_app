import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
//import LineChart from 'britecharts/dist/umd/line.min';

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  )
}