import {FormEvent, useEffect, useState} from "react";
import {Header, Main, Pattern_bg, Section} from "./AppStyle";
import InfoBar from "./components/InfoBar/InfoBar";
import Map from "./components/Map/Map";
import SearchBar from "./components/SearchBar/SearchBar";

interface GeoData {
	[key: string]: unknown;
	ipAddress: string;
	location: string;
	timezone: string;
	coordinates: {
		lat: number;
		lng: number;
	};
	isp: string;
}

export default function App() {
	let [inputIp, setInputIp] = useState("");
	let [state, setState] = useState<undefined | GeoData>(undefined);

	function inputChangeHandler(event: {target: HTMLInputElement}) {
		setInputIp(event.target.value);
	}

	async function fetchData(event: FormEvent) {
		event.preventDefault();

		console.log(inputIp);

		const response = await fetch(
			`https://geo.ipify.org/api/v2/country,city?apiKey=${
				import.meta.env.MY_API_KEY
			}&ipAddress=${inputIp}`
		);

		console.log("response", response);

		const data = await response.json();
		const geoData: GeoData = {
			ipAddress: data.ip,
			location: data.location.city,
			timezone: "UTC " + data.location.timezone,
			coordinates: {
				lat: Number(data.location.lat),
				lng: Number(data.location.lng),
			},
			isp: data.isp,
		};
		
		setState(geoData);
	}

	async function initialFetch() {
		const resp = await fetch(
			`https://geo.ipify.org/api/v2/country,city?apiKey=${
				import.meta.env.MY_API_KEY
			}`
		);
		const data = await resp.json();
		const geoData: GeoData = {
			ipAddress: data.ip,
			location: data.location.city,
			timezone: "UTC " + data.location.timezone,
			coordinates: {
				lat: Number(Number(data.location.lat).toFixed(2)),
				lng: Number(Number(data.location.lng).toFixed(2)),
			},
			isp: data.isp,
		};
		setState(geoData);
	}

	useEffect(() => {
		initialFetch();
	}, []);

	return (
		<Main>
			<Pattern_bg></Pattern_bg>
			<Section>
				<Header>IP Address Tracker</Header>
				<SearchBar
					onChange={inputChangeHandler}
					onSubmit={fetchData}
					value={inputIp}
				/>
				{state && <InfoBar geoData={state} />}
			</Section>
			{state ? (
				<Map coordinates={state!.coordinates} />
			) : (
				<Map coordinates={{lat: 51.505, lng: -0.09}} />
			)}
		</Main>
	);
}
