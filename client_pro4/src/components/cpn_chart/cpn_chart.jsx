import { Line, Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { dataChart } from "./data_chart/dataChart";
const Cpn_Chart = (props) => {
  const typeData = props.data;
  const data = dataChart[`${typeData}`];
  return (
    <div>
      <Line
        data={data}
        height={400}
        width={600}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};
export const Pie_Chart = (props) => {
  const typeData = props.data;
  const data = dataChart[`${typeData}`];
  return (
    <div>
      <Pie data={data} />
    </div>
  );
};
export default Cpn_Chart;
