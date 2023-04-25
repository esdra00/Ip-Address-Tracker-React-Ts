import {LatLngExpression} from "leaflet";
import {useEffect, useRef, useState} from "react";
import {MapContainer, Marker, TileLayer, useMap} from "react-leaflet";

interface MapProps {
	coordinates: {lat: number; lng: number};
}

export default function Map({coordinates}: MapProps) {
	const [markerPosition, setMarkerPosition] = useState(coordinates);
	const markerRef = useRef(null);
	const mapCenter: LatLngExpression = [coordinates.lat + 0.0015, coordinates.lng];

	const zoom = 15;

	useEffect(() => {
		setMarkerPosition(coordinates);
	}, [coordinates]);

	function SetViewOnClick({coords}: {coords: LatLngExpression}) {
		const map = useMap();
		map.setView(coords, map.getZoom());
		return null;
	}

	return (
		<MapContainer
			id="map"
			center={mapCenter}
			zoom={15}
			scrollWheelZoom={false}
			zoomControl={true}
			doubleClickZoom={false}
			trackResize={false}
			attributionControl={false}
			touchZoom={false}
			maxZoom={zoom}
			minZoom={zoom}
			dragging={true}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={markerPosition} ref={markerRef}>
				<SetViewOnClick coords={markerPosition} />
			</Marker>
		</MapContainer>
	);
}
