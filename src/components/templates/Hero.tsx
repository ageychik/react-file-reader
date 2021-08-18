import styled from "styled-components";
import particles from "../../libs/particles";
import HeroDescription from "../organisms/HeroDescription";

import Canvas from "../athoms/Canvas";
import { FlexBox, sizes } from "../_settings";

const HeroWrapper = styled( FlexBox )`
  height: 100vh;
`

const Preview = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(25%, -50%);
  height: 80vh;

  svg {
    max-width: 100%;
    max-height: 100%;
  }
`

const Sidebar = styled.aside`
  position: relative;
  width: 60%;
  height: 100%;
  overflow: hidden;

  canvas {
    width: 100%;
    height: 100%;
  }
`

const HeroMain = styled( FlexBox )`
  flex: 1;
  padding: 0 ${ sizes.ML }px;
`

const Hero = () => {
	return (
		<HeroWrapper>
			<HeroMain align='center'>
				<HeroDescription />
			</HeroMain>
			<Sidebar>
				<Preview>
					<svg width="1874" height="1060" viewBox="0 0 1874 1060" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule='evenodd'
						      clipRule="evenodd"
						      d="M221 0.427734H1651C1675.3 0.427734 1695 20.1272 1695 44.4277V1000.43C1695 1024.73 1675.3 1044.43 1651 1044.43H221C196.699 1044.43 177 1024.73 177 1000.43V44.4277C177 20.1272 196.699 0.427734 221 0.427734Z"
						      fill="#444444" />
						<path fillRule="evenodd"
						      clipRule="evenodd"
						      d="M221 4.42773H1651C1673.09 4.42773 1691 22.3363 1691 44.4277V1000.43C1691 1022.52 1673.09 1040.43 1651 1040.43H221C198.909 1040.43 181 1022.52 181 1000.43V44.4277C181 22.3363 198.909 4.42773 221 4.42773Z"
						      fill="#141414" />
						<path d="M0 1021.43C0 1017.01 3.58172 1013.43 8 1013.43H1866C1870.42 1013.43 1874 1017.01 1874 1021.43V1043.43H0V1021.43Z"
						      fill="#444444" />
						<path fillRule="evenodd"
						      clipRule="evenodd"
						      d="M4 1021.43C4 1019.22 5.79086 1017.43 8 1017.43H1866C1868.21 1017.43 1870 1019.22 1870 1021.43V1039.43H4V1021.43Z"
						      fill="#141414" />
						<path fillRule="evenodd"
						      clipRule="evenodd"
						      d="M0 1043.43H1874L1866.06 1047.67C1851.58 1055.39 1835.41 1059.43 1819 1059.43H55.0001C38.586 1059.43 22.4242 1055.39 7.94118 1047.67L0 1043.43Z"
						      fill="#444444" />
						<path fillRule="evenodd"
						      clipRule="evenodd"
						      d="M6 1043.43H1868L1858.87 1047.34C1846.42 1052.68 1833.02 1055.43 1819.47 1055.43H54.5257C40.983 1055.43 27.5815 1052.68 15.1338 1047.34L6 1043.43Z"
						      fill="#141414" />
						<path d="M803 1013.43H1072V1014.43C1072 1025.48 1063.05 1034.43 1052 1034.43H823C811.954 1034.43 803 1025.48 803 1014.43V1013.43Z"
						      fill="#444444" />
						<rect x="216" y="63.4302" width="1440" height="900" fill="#212121" />
					</svg>
				</Preview>
				<Canvas event={ particles } />
			</Sidebar>
		</HeroWrapper>
	)
}

export default Hero;