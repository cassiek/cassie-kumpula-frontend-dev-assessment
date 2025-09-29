import { ResponsiveContainer, ScatterChart, CartesianGrid, XAxis, YAxis, Legend, CartesianGrid } from "recharts";
import "Chart.scss";
const data = [{}];

function Chart() {

    return (
        <ResponsiveContainer width="30rem" height="40rem">
            <ScatterChart data={data} className="chart">
                <CartesianGrid />
                <XAxis />
                <YAxis />
                <Legend />
            </ScatterChart>
        </ResponsiveContainer>
    )
}

export default Chart;