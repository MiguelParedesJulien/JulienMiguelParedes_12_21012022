import React from "react";
import { Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, RadarChart } from "recharts";
import "./graphicPerformance.css";

function GraphicPerformance(props) {
   return (
      <div>
         <RadarChart outerRadius={90} width={260} height={270} data={props.perf.data}>
            <PolarAngleAxis dataKey={"kind"} />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
         </RadarChart>
      </div>
   );
}

export default GraphicPerformance;
