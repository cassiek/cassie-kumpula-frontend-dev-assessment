import { ResponsiveContainer, ScatterChart, CartesianGrid, XAxis, YAxis, Legend, Scatter } from "recharts";
import "./Chart.scss";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../pages/Homepage/Homepage";

function Chart() {
    const csvData = useContext(DataContext);
    
    let updatedData = [];

    if (csvData) {
        updatedData = [...csvData];
        updatedData.forEach(obj => {
            obj.mag = parseFloat(obj.mag);
            const timeDate = new Date(obj.time);
            const miliDate = timeDate.getTime();
            const secDate = Math.floor(miliDate / 1000);
            obj.time = secDate;
        })
    }

    console.log("UPDATED DATA", updatedData);

    return (
        <section className="chart">
            <ResponsiveContainer width="100%" height="100%" className="chart__container">
                <ScatterChart>
                    <CartesianGrid strokeDasharray={4}/>
                    <XAxis dataKey="time" type="number" name="Time" unit="s" domain={[1756000, 1760000]} />
                    <YAxis dataKey="mag" type="number" name="Magnitude of Event" unit="mag." />
                    <Legend />
                    <Scatter name="Earthquake Event Data" data={updatedData} fill="#8884d8" />
                </ScatterChart>
            </ResponsiveContainer>
        </section>
    )
}

export default Chart;