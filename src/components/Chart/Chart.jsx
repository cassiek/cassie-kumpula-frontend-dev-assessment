import { ResponsiveContainer, ScatterChart, CartesianGrid, XAxis, YAxis, Legend, Scatter } from "recharts";
import "./Chart.scss";
import { useContext } from "react";
import { DataContext } from "../../pages/Homepage/Homepage";

function Chart() {
    const csvData = useContext(DataContext);

    return (
        <section className="chart">
            <ResponsiveContainer width="100%" height="100%" className="chart-container">
                <ScatterChart>
                    <CartesianGrid />
                    <XAxis dataKey="time" type="number" name="Time" unit="" />
                    <YAxis dataKey="mag" type="number" name="Magnitude of Event" unit="" />
                    <Legend />
                    <Scatter name="Earthquake Event Data" data={csvData} fill="#8884d8" />
                </ScatterChart>
            </ResponsiveContainer>
        </section>
    )
}

export default Chart;