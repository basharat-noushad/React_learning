import seriesData from "../apis/seriesData.json"
import CardData from "./CardData";


const NetfilixSeries = () => {
    return (
        <div className="series-container">
            {seriesData.map((series) => {
                return (
                    <CardData key={series.id} data={series} />
                );
            })
            }
        </div>
    );
}

export default NetfilixSeries;