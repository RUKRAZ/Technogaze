//import BarChartBox from "./emsFiles/barChartBox/BarChartBox.tsx";
import BigChartBox from "./emsFiles/bigChartBox/BigChartBox.tsx";
import ChartBox from "./emsFiles/chartBox/ChartBox.tsx";
//import PieChartBox from "./emsFiles/pieCartBox/PieChartBox.tsx";
import TopBox from "./emsFiles/topBox/TopBox.tsx";
import { SideNavDark } from "./sideNavDark";
import {
  chartBoxConversion,
  chartBoxProduct,
  chartBoxUser,
} from "./emsFiles/data.ts";
import "./emsFiles/ems.scss";
import React from 'react';
export const EMS = (props) => {
  return (
    <div className="home">
      <div className="box1">
        <SideNavDark />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxConversion} />
      </div>
      
      <div className="box box4">git 
        <BigChartBox />
      </div>

      <div className="box box5">
        <TopBox />
      </div>
      

    </div>
  );
};

export default EMS;
