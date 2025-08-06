import styled from "styled-components";

const CardContainer = styled.div`
  width: 250px;
  flex-grow: 1;
  box-shadow: 0px 15px 30px 2px rgba(0, 0, 0, 0.075);
`;

const CardImage = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
`;

const CardButton = styled.button({
    backgroundColor: (props) => (props.rating >= 8.3 ? "#ff0000" : "#000000"),
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    margin: "10px",
    "&:hover": {
        backgroundColor: (props) => (props.rating >= 8.3 ? "#ff4d4d" : "#333333"),
    }
});

const CardData = ({ data }) => {
    const { img_url, name, genre, description, rating, cast, watch_url } = data;
    return (
        <div className="card">
            <div>
                <img src={img_url} alt="vite logo" />
            </div>
            <div className="card-content">
                <h1>Name: {name}</h1>
                <h2>Genre: {genre.join(", ")}</h2>
                <p>Description: {description}</p>
                <i>Rating: {rating}</i>
                <p>Cast: {cast.join(", ")}</p>
            </div>
            <a href={watch_url} target="_blank">
                {/* <button>Watch now</button> */}
                <CardButton rating={rating}>Watch now</CardButton>
            </a>
        </div>
    );
};

export default CardData;