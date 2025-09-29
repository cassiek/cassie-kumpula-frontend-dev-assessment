import { ResponsiveContainer, ScatterChart, CartesianGrid, XAxis, YAxis, Legend, Scatter } from "recharts";
import "./Chart.scss";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../pages/Homepage/Homepage";

function Chart() {
    const csvData = useContext(DataContext);
    //const [updatedData, setUpdatedData] = useState([]);
    //
    let updatedData = [];

    if (csvData) {
        updatedData = [...csvData];
        updatedData.forEach(obj => {
            obj.mag = parseFloat(obj.mag);
        })
    }

    console.log("UPDATED DATA", updatedData);
        // useEffect(() => {
        //     function parseCsvData(csvData) {
        //         const formattedData = csvData.map((entry) => ({
        //             time: entry.time,
        //             mag: parseFloat(entry.mag)
        //         }));
        //         setUpdatedData(formattedData);
        //         console.log("FORMATTED DATA", formattedData);
        //     }
        //     parseCsvData(csvData);
        // }, []);
    

    return (
        <section className="chart">
            <ResponsiveContainer width="100%" height="100%" className="chart-container">
                <ScatterChart>
                    <CartesianGrid />
                    {/* <XAxis dataKey="time" type="string" name="Time" unit="" /> */}
                    <YAxis dataKey="mag" type="number" name="Magnitude of Event" unit="" />
                    <Legend />
                    <Scatter name="Earthquake Event Data" data={updatedData} fill="#8884d8" />
                </ScatterChart>
            </ResponsiveContainer>
        </section>
    )
}

export default Chart;