import { useState, useEffect } from "react";
import Papa from "papaparse";
import axios from "axios";
import "./CSVDisplay.scss";

function CSVDisplay() {
    const [csvData, setCsvData] = useState([]);
    const [colHeaders, setColHeaders] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        async function getCSV() {
            try {
                setLoading(true);
                const response = await axios.get("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv", { responseType: "text" });
                console.log("RESPONSE", response)
                const csvText = await response.data;

                Papa.parse(csvText, {
    	            skipEmptyLines: true,
                    header: true,
                    worker: true,
	                complete: function(result) {
                        const headers = Object.keys(result.data[0]);
                        setColHeaders(headers);
                        setCsvData(result.data);
                        setLoading(false);
		                console.log("All done!", result);
                    },
                    error: function(error) {
                        setLoading(false);
                        console.error("CSV parsing error:", error.message);
                    }
                });
            } catch(error) {
                console.error("Error fetching CSV:", error.message);
                setLoading(false);
            }
        }
        getCSV();
    }, []);

    return (
        <section className="csv-display">
            {loading && <div>Loading CSV Data...</div>}
            {!loading && csvData.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            {colHeaders.map((header) => (
                                <th>
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {csvData.map((row) => (
                            <tr>
                                {colHeaders.map((header) => (
                                    <td>{row[header]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {!loading && csvData.length === 0 && <div>No CSV Data Available</div>}
        </section>
    )
};

export default CSVDisplay;