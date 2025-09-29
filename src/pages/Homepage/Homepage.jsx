import { useState, createContext, useContext, useEffect } from "react";
import CSVDisplay from "../../components/CSVDisplay/CSVDisplay";
import Chart from "../../components/Chart/Chart";
import "./Homepage.scss";
import Papa from "papaparse";
import axios from "axios";

export const DataContext = createContext();
export const HeaderContext = createContext();
export const LoadingContext = createContext();

function Homepage() {
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
        <main className="homepage">
            <DataContext.Provider value={csvData} className="homepage">
                <HeaderContext.Provider value={colHeaders}>
                    <LoadingContext.Provider value={loading}>
                        <Chart data={csvData} />
                        <CSVDisplay />
                    </LoadingContext.Provider>
                </HeaderContext.Provider>
            </DataContext.Provider>
        </main>
    )
}

export default Homepage;