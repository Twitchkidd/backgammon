// import { useEffect, useState } from 'react';
// import Game from './components/Game';
import Global from './components/Global';
import Main from './components/Main';
import Title from './components/Title';

/*
 *
 * 1. Show Blank Screen
 * 2. Title Drops In
 * 3. Title Fades Out, Fades In At Top Left
 * 4. Player Select Drops In
 * 5. On Submit, Player Select Fades Out
 * 6. Board Drops In
 * 7. Pieces, Names, UI Fade In
 * 8. Roll For Initiative!
 *
 */

// Why not just use the CSS property animation-delay and just load everyone in
// and *then* start things, and keep state less cluttered and probably more
// performant, right? Let's try!

// First let's delete the piece of state, and abstract what we had in the
// useEffect, and comment out those dependencies, then we'll figure out what
// to do with it.

const App = () => {
	return (
		<>
			<Global />
			<Main>
				<Title />
			</Main>
		</>
	);
};

export default App;
