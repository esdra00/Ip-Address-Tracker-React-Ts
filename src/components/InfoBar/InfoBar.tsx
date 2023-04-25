import {Data, H2, Li, Line, Ul} from "./InfoBarStyle";

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

interface InfoCardProps {
	geoData: GeoData;
}

export default function InfoBar({geoData}: InfoCardProps) {
	return (
		<>
			<Ul>
				<Li>
					<H2>ip address</H2>
					<Data>{geoData.ipAddress}</Data>
				</Li>
				<Line></Line>
				<Li>
					<H2>location</H2>
					<Data>{geoData.location}</Data>
				</Li>
				<Line></Line>
				<Li>
					<H2>timezone</H2>
					<Data>{geoData.timezone}</Data>
				</Li>
				<Line></Line>
				<Li>
					<H2>isp</H2>
					<Data>{geoData.isp}</Data>
				</Li>
			</Ul>
		</>
	);
}
