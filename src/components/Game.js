import styled from 'styled-components';

const Board = styled.div`
	width: 200px;
	height: 400px;
	background: brown;
	display: grid;
	place-items: center;
	text-align: center;
`;

const Text = styled.p`
	font-size: 8em;
	color: #fefefe;
`;

const Game = ({ state }) => (
	<Board>
		<Text>{state}</Text>
	</Board>
);

export default Game;
