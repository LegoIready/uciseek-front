import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import {useState} from 'react';
import Header from "./Header";
import FinalScore from "./FinalScore";


const containerStyle = {
    width: "400px",
    height: "400px",
};

const center = {
    lat: 33.64612420745602,
    lng: -117.84259292563124,
};

function Quiz() {

    const { isLoaded } = useJsApiLoader({
      id: "google-map-script",
      googleMapsApiKey: "AIzaSyCkIR4KjZgI-gT2mEn8Ix_ZFBHkIQxR2S8", // Replace with your actual API key
});
    const [data, setData] = useState(null);
    const [score, setScore] = useState(0);
    const [questionsAnswered, setQuestionsAnswered] = useState(0);
    // clickedonmap?


const handleClick = (event) => {
    console.log(data)
    fetch (`http://127.0.0.1:5000/score?prompt_id=0&latitude=${event.latLng.lat()}&longitude=${event.latLng.lng()}`)
        .then(response => response.json())
        .then(json => {
            setData(json);
            setScore(score + json.score);
        })
        .catch(error => console.error(error));
    
}

const nextButtonClick = () => {
    setQuestionsAnswered(questionsAnswered+1)
    console.log(questionsAnswered)
}

if (questionsAnswered >= 3) {
    return <FinalScore/>
    }

return isLoaded ? (
    <div>
        {<Header />}
        <p>Total Score: {score}</p>
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onClick={handleClick}
        >
        </GoogleMap>
        <p>Score: {data?.score}</p>
        <a href="/">
        <button>Quit Quiz</button>
        </a>
        <button onClick={nextButtonClick}>Next Question</button>
    </div>
) : (
    <></>
);

}

export default Quiz;