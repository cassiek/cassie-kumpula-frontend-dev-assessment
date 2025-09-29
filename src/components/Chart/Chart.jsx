import { ResponsiveContainer, ScatterChart, CartesianGrid, XAxis, YAxis, Legend } from "recharts";
import "./Chart.scss";


function Chart({ data }) {

    return (
        <ResponsiveContainer width="40rem" height="40rem" className="chart">
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