import { useState } from "react"
import Papa from "papaparse"

function CSVDisplay() {
        const [csvData, setCsvData] = useState([]);
        const [colHeaders, setColHeaders] = useState([]);

        Papa.parse("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv", {
    	download: true,
        header: true,
	    step: function(row) {
		    console.log("Row:", row.data);
	    },
	    complete: function(result) {
            setColHeaders(Object.keys(result.data[0]));
            setCsvData(result.data);
		    console.log("All done!");
	    },
        error: function(error) {
            console.error("Error parsing CSV:", error.message);
        }
    });
    

    return (
        <section>
            
        </section>
    )
};

export default CSVDisplay;