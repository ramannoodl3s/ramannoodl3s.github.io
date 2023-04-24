import { createGlobalStyle } from 'styled-components';
import font from './assets/fonts/helveticaneue-bold_Gh4Dr/HelveticaNeueBold/HelveticaNeueBold.ttf'
import woff from './assets/fonts/helveticaneue-bold_Gh4Dr/HelveticaNeueBold/HelveticaNeue-Bold.woff';

export const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'myfont';
    src: url(${font}),
        url(${woff}) format('woff');
    font-style: normal;
}

* {
    font-family: 'myfont';
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

    
a {
	text-decoration: none;
}
/* scrollBar */
::-webkit-scrollbar {
	width: 5px;
}
::-webkit-scrollbar-track {
	background: #555;
}
::-webkit-scrollbar-thumb {
	border-radius: 10px;
	transition: 0.3s;
}
img {
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
@media screen and (max-width: 400px) {
	body {
		overflow-x: hidden;
	}
}
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {
	body {
		overflow-x: hidden;
	}
}
`;