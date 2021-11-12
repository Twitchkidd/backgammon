import styled, { keyframes } from 'styled-components';
import { dark, light } from '../utils/colors';

const breatheAnimation = keyframes`
  0% { border-radius: 4rem; }
  30% { border-radius: 2rem; }
  40% { border-radius: 1.5rem; }
  100% { border-radius: 4rem; }
`;

const Wrapper = styled.div`
	display: grid;
	place-items: center;

	min-width: 80vw;
	max-width: 100vw;
	aspect-ratio: 3 / 1;
	background: ${light};

	color: ${dark};
	text-align: center;

	/* border-radius: 2rem; */
	animation: ${breatheAnimation} 4s infinite;
`;

const Title = () => (
	<Wrapper>
		<h1>Backgammon!</h1>
	</Wrapper>
);

export default Title;
