import { ResponsiveContainer, ScatterChart, CartesianGrid, XAxis, YAxis, Legend } from "recharts";
import "./Chart.scss";
const data = [{}];

function Chart() {

    return (
        <ResponsiveContainer width="30rem" height="40rem" className="chart">
            <ScatterChart data={data}>
                <CartesianGrid />
                <XAxis />
                <YAxis />
                <Legend />
            </ScatterChart>
        </ResponsiveContainer>
    )
}

export default Chart;