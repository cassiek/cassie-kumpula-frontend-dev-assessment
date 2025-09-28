import { useState } from "react"
import Papa from "papaparse"

function CSVDisplay() {
        const [csvData, setCsvData] = useState([]);
        const [colHeaders, setColHeaders] = useState([]);

        Papa.parse("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv", {
    	download: true,
        header: true,
        worker: true,
	    step: function(row) {
		    console.log("Row:", row.data);
	    },
	    complete: function(result) {
            setColHeaders(Object.keys(result.data[0] || {}));
            setCsvData(result.data);
		    console.log("All done!", result);
	    },
        error: function(error) {
            console.error("Error parsing CSV:", error.message);
        }
    });
    

    return (
        <section>
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
                        {csvData.Data.map((row) => (
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