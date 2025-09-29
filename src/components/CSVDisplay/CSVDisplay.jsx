import { useState, useEffect } from "react";
import Papa from "papaparse";
import "./CSVDisplay.scss";

function CSVDisplay() {
    const [csvData, setCsvData] = useState([]);
    const [colHeaders, setColHeaders] = useState([]);

    useEffect(() => {
        async function getCSV() {
            try {
                Papa.parse("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv", {
    	        download: true,
                header: true,
                worker: true,
	            step: function(row) {
		            //console.log("Row:", row.data);
	            },
	            complete: function(result) {
                    setColHeaders(result.data[0] || []);
                    setCsvData(result.data);
		            console.log("All done!", result);
                },
                })
            } catch(error) {
                console.error("Error parsing CSV:", error.message);
            }
        }
        getCSV();
    }, []);


    console.log("HEY", csvData.length)

    return (
        <section className="csv-display">
            {csvData.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            {colHeaders.map((header) => (
                                <th key="">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {csvData.map((row) => (
                            <tr key="">
                                {colHeaders.map((header) => (
                                    <td key="">{row[header]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </section>
    )
};

export default CSVDisplay;