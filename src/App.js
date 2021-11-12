import { useEffect, useState } from 'react';
import Game from './components/Game';
import Main from './components/Main';

const App = () => {
	const [gameState, setGameState] = useState('flippin sweet');
	useEffect(() => {
		console.log('useEffect running');
		setTimeout(() => {
			if (gameState !== 'extra amazing') {
				setGameState('extra amazing');
			}
		}, 1500);
	}, [gameState]);
	return (
		<Main>
			<Game state={gameState} />
		</Main>
	);
};

export default App;
