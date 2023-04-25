import styled from "styled-components";

export const Ul = styled.ul`
	height: 161px;
	width: 1110px;
	margin-inline: auto;
	background-color: white;
	border-radius: 15px;
	display: flex;
	gap: 25px;
	padding: 30px;

	@media (max-width: 768px) {
		width: 327px;
		height: 304px;
		flex-direction: column;
		align-items: center;
		gap: 8px;
	}
`;

export const Li = styled.li`
	flex: 1;
	list-style-type: none;

	@media (max-width: 768px) {
		text-align: center;
	}
`;

export const H2 = styled.h2`
	text-transform: uppercase;
	font-size: 12px;
	font-weight: 700;
	letter-spacing: 1.75px;
	color: #2c2c2c;
	margin-bottom: 10px;

	@media (max-width: 768px) {
		font-size: 10px;
	}
`;

export const Data = styled.div`
	font-size: 26px;
	font-weight: 500;
	letter-spacing: -0.23px;

	@media (max-width: 768px) {
		font-size: 20px;
	}
`;

export const Line = styled.div`
	width: 1px;
	height: 80%;
	margin-block: auto;
	background-color: gray;

	@media (max-width: 768px) {
		display: none;
	}
`;
