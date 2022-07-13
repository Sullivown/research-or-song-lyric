import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
	}

	html {
		height: 100%;
	}

	body {
		margin: 0;
		width: 100vw;
		min-height: 100%;
		background-color: #f5f7fb;
		font-family: sans-serif;
	}

	#root {
		min-height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem;
	}

`;

export default GlobalStyles;
