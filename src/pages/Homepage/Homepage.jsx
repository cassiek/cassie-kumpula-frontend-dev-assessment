import CSVDisplay from "../../components/CSVDisplay/CSVDisplay";
import Chart from "../../components/Chart/Chart";
import "./Homepage.scss";

function Homepage() {


    return (
        <main className="homepage">
            <Chart />
            <CSVDisplay />
        </main>
    )
}

export default Homepage;