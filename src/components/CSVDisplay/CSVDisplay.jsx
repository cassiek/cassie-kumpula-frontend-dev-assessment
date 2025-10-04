import { useState, useEffect, createContext, useContext } from "react";
import "./CSVDisplay.scss";
import { DataContext, HeaderContext, LoadingContext } from "../../pages/Homepage/Homepage.jsx";

function CSVDisplay() {
    const csvData = useContext(DataContext);
    const colHeaders = useContext(HeaderContext);
    const loading = useContext(LoadingContext);
    const [hoveredRowIndex, setHoveredRowIndex] = useState(null);
    

    return (
        <section className="csv-display">
            {loading && <div>Loading CSV Data...</div>}
            {!loading && csvData.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            {colHeaders.map((header) => (
                                <th className="csv-display__header">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {csvData.map((row, index) => (
                            <tr
                                key={index}
                                onMouseEnter={() => setHoveredRowIndex(index)}
                                onMouseLeave={() => setHoveredRowIndex(null)}
                            >
                                {colHeaders.map((header) => (
                                    <td key={header}>{row[header]}</td>
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