import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import {useEffect, useState} from 'react';
import FinalScore from "./FinalScore";


//Should move containerStyle to index.css and import
const containerStyle = {
    width: "600px",
    height: "300px",
};

const center = {
    lat: 33.64612420745602,
    lng: -117.84259292563124,
};

function Quiz() {

    const { isLoaded } = useJsApiLoader({
      id: "google-map-script",
      googleMapsApiKey: import.meta.env.VITE_API_KEY, // Replace with your actual API key
});
    const [currentScore, setCurrentScore] = useState(0);
    const [score, setScore] = useState(0);
    const [questionsAnswered, setQuestionsAnswered] = useState(0);
    // clickedonmap?
    const [markers, setMarkers] = useState([]);
    const [userClicked, setUserClicked] = useState(false);

    const[locationImages, setLocationImages] = useState([]);
    const[loadedImage, setLoadedImage] = useState(false);

    const[isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!loadedImage) {
            setIsLoading(true)
            // Fetch data from the back end API to get location images
            fetch('https://uciseek-back.vercel.app/getPrompts')
            .then(setLoadedImage(true))
            .then(response => response.json())
            .then(data => {
                console.log(data)
            setLocationImages(data)
            setIsLoading(false)
            console.log(locationImages[questionsAnswered])
        })
        }
    });

const handleClick = (event) => {
    console.log(currentScore)   
    if (!userClicked) {
        fetch (`https://uciseek-back.vercel.app/score?prompt_id=${locationImages[questionsAnswered].id}&latitude=${event.latLng.lat()}&longitude=${event.latLng.lng()}`)
        .then(response => response.json())
        .then(json => {
            setUserClicked(true);
            console.log(json)
            setMarkers((prevItems) => [...prevItems, {id: 1, position: {lat: event.latLng.lat(), lng: event.latLng.lng()}}])
            setMarkers((prevItems) => [...prevItems, {id: 2, position: {lat: json.latitude, lng: json.longitude}}])
            setCurrentScore(json.score);
            setScore(score + json.score);
            console.log(markers)
        })
        .catch(error => console.error(error));
    }
}

const nextButtonClick = () => {
    setQuestionsAnswered(questionsAnswered+1)
    setUserClicked(false)
    console.log(questionsAnswered)
    setMarkers([])
}

if (questionsAnswered >= 3) {
    return (<FinalScore score={Math.round(score)}>
            </FinalScore>)
    }

return (isLoaded && !isLoading) ? (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh' // Optional: to make it full height of the viewport
      }}
    >
        <p>Guess this Place...</p>
        <img src={locationImages[questionsAnswered].url} width= "600"></img>
        <p>Total Score: {Math.round(score)}</p>
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onClick={handleClick}
        >
            {markers.map(marker => (
                <Marker key={marker.id} position={marker.position} />
            ))}
        </GoogleMap>
        <p>Score: {Math.round(currentScore)}</p>
        <div>
        <a href="/">
        <button>Quit Quiz</button>
        </a>
        <button onClick={nextButtonClick}>Next Question</button>
        </div>
    </div>
) : (
    <></>
);

}

export default Quiz;
