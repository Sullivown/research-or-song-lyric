import styled from 'styled-components';

const Button = styled.button`
	background-color: #4d5b9e;
	color: #f5f7fb;
	font-family: sans-serif;
	border: none;
	padding: 2rem 4rem;
	border-radius: 15px;
	font-size: 1.5rem;
	min-width: 250px;

	&:hover {
		cursor: pointer;
		opacity: 0.9;
	}

	&:active {
		box-shadow: inset 1px 1px 10px #242d57;
	}
`;

export default Button;
