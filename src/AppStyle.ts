import styled from "styled-components";
import bg_desktop from "./assets/pattern-bg-desktop.png";
import bg_mobile from "./assets/pattern-bg-mobile.png";

export const Main = styled.main`
	height: 100svh;
	width: 100svw;
	display: flex;
	flex-direction: column;
	position: relative;
`;

export const Pattern_bg = styled.div`
	min-height: 280px;
	width: 100%;
	background-image: url(${bg_desktop});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

	@media (max-width: 768px) {
		min-height: 300px;
		background-image: url(${bg_mobile});
	}
`;

export const Section = styled.section`
	width: 100%;
	height: fit-content;
	position: absolute;
	inset: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 50px;
	gap: 50px;
	z-index: 500;

	@media (max-width: 768px) {
		padding-top: 25px;
		gap: 25px;
	}
`;

export const Header = styled.header`
	font-size: 32px;
	font-weight: 500;
	color: white;
`;
