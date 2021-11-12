# Backgammon!

Okay, let's bust this out quick. Logic, graphical and interactive elements, awesomeness, go.

## Rules

A quick paraphrase of the rules as I understand them:

- The game is set up with pieces in your home board, the outer board, and your opponent's home board, and you have to get them all into your own home board and then can take them off the board, and the first person to get all their pieces off the board wins(, and betting continues).
- Each player rolls one die to determine initiative and the first roll, the higher roll winning. (Redo in tie.)
- You may only move chips in the direction of your home board, and cannot move to any space occupied by two or more of your opponent's pieces.
- If an opponent lands on a space with just one of your pieces on it, it's captured and goes on the 'bar' in the middle, and your next move is obligated to be to try and move them back onto the board starting at the back of the opponent's home board.
- You have to use your moves, if you can, and I just read that you have to use the larger of the two if you can do one or another (crazy!)
- If you can't move, it's the other player's turn.
- If you get doubles, you (aside: this is totally where Chaos Backgammon should come in, every once and a while with double rolls and every time with doubling the bet, it should spin the Wheel of Havoc!) get four moves of that value.
- You can only take chips off the board with exact rolls (or higher if other options exhausted), and only when all of your pieces are in your home board.
- If you can get all your pieces off before your opponent can get even one off, it's a 'gammon' and the points are doubled, and if they still have a piece on the bar, it's a 'backgammon' and points are tripled!
- Initially, either player can offer to double the bet with the doubling cube, which can either be refused and defeat accepted, or taken, and then it's in that player's control to double again or not.

## Starting

Okay, to test the logic, let's get a really basic graphical setup. What's the markup like? Well, we've got a board, and then there's the four sub-boards and the bar, and a place for the chips to go when they're taken out, and you'll need the dice, the doubling cube before it goes on the bar (that's right, right?) and then the spaces and the chips, and possible a place for other info, let's build and if I'm missing something it will become evident.

Initial conditions, 2 on space 24, 5 on space 13, 3 on space 8, and 5 on space 6.

Design decision, it's going to be from player one's POV, and we can split it out when we add networking.
