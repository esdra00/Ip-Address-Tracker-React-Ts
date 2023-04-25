import styled from "styled-components";

export const Form = styled.form`
	width: 555px;
	height: 58px;
	display: flex;
	border-radius: 15px;
	overflow: hidden;
	background-color: white;
   
	@media (max-width: 768px) {
		width: 327px;	
	}
`;

export const Button = styled.button`
	height: 58px;
	width: 58px;
	background-color: black;
	display: flex;
	align-items: center;
	justify-content: center;
`;