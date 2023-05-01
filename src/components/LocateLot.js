import React from "react";
import { useState, useEffect } from "react";
import $ from "jquery";
import "../styles.css";
import { useRef, useCallback } from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '50vw',
  height: '75vh'
};

const center = {
  lat: 34.23850852458648,
  lng: -118.52935810887638
};

const schedule = [
	{
		building: '',
		duration: '2.5h'
	}
]

const pois = {
	"buildings": [
		{
			name: '',
			abr: ''
		}
	],

	"lot": []
}

export default function LocateLot() {

	const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCj7S4zGOZuSNgkMm8n_K9jIxCk2N90Sjg"
  })
  const [map, setMap] = useState(null)

	const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    //map.fitBounds(bounds);

    setMap(map)
  }, [])

	const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  useEffect(() => {}, []);

  return (
    <>
      <div className="d-flex justify-content-center" style={{width: '100%', height: '100%'}}>
				{isLoaded && 
				<GoogleMap
        	mapContainerStyle={containerStyle}
        	center={center}
        	zoom={0}
					defaultZoom={0}
        	onLoad={onLoad}
        	onUnmount={onUnmount}
      	>
					
      </GoogleMap>}
      </div>
			<button onClick={() => {
				console.log(map)
			}}>map</button>
    </>
  );
}
