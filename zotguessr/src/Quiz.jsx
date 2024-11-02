import React, { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "400px",
    height: "400px",
};

const center = {
    lat: 33.64612420745602,
    lng: -117.84259292563124,
};

function Quiz() {
    // header
    <header>
            <h1>Quiz Page</h1>
            <nav>
            <a href="#home">Home</a>
        </nav>
    </header>

    const { isLoaded } = useJsApiLoader({
      id: "google-map-script",
      googleMapsApiKey: "AIzaSyCkIR4KjZgI-gT2mEn8Ix_ZFBHkIQxR2S8", // Replace with your actual API key
});

const [markers, setMarkers] = useState([]);

const handleClick = (event) => {
    console.log(event.latLng.lat(), event.latLng.lng())
};
return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={16}
      onClick={handleClick}
    >
    </GoogleMap>
) : (
    <></>
);
}

export default Quiz;