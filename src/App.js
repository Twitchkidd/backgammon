import { useEffect, useState } from 'react';
import Game from './components/Game';
import Main from './components/Main';

const App = () => {
	const [gameState, setGameState] = useState('flippin sweet');
	useEffect(() => {
		const timer = setTimeout(() => {
			if (gameState !== 'extra amazing') {
				setGameState('extra amazing');
			}
		}, 1500);
		return clearTimeout(timer);
	}, [gameState]);
	return (
		<Main>
			<Game state={gameState} />
		</Main>
	);
};

export default App;
