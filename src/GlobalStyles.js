import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
	}

	body {
		margin: 0;
		width: 100vw;
		height: 100vh;
		background-color: #f5f7fb;
		font-family: sans-serif;
	}

	#root {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px;
	}

`;

export default GlobalStyles;
