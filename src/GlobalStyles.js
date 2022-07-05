import { createGlobalStyle } from 'styled-components';

import Inter from './assets/fonts/Inter-VariableFont.ttf';
import Karla from './assets/fonts/Karla-VariableFont.ttf';

const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
	}

	body {
		margin: 0;
		width: 100vw;
		height: 100vh;
		background-color: #f5f7fb;
	}

	#root {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

`;

export default GlobalStyles;
