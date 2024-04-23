# Generalized Rock-Paper-Scissors Game in JavaScript

This repository contains a JavaScript implementation of a generalized rock-paper-scissors game. The game supports an arbitrary odd number of arbitrary combinations of moves.

## Features

- Supports an arbitrary odd number of moves
- Cryptographically strong random key generation
- HMAC generation for ensuring fairness
- ASCII-graphic table for help
- Command-line interface

## Usage

1. Clone the repository:
```git
git clone https://github.com/your-username/generalized-rps-game-js.git
```

2. Navigate to the repository:
```
cd generalized-rps-game-js
```

3. Install dependencies:
```
npm install
```

4. Run the game with your desired moves:
```
node main.js move1 move2 move3
```

Replace `move1`, `move2`, `move3`, etc. with your desired moves. Ensure that the number of moves is **odd** and they are non-repeating.

5. Follow the on-screen instructions to play the game.

## Example
```
$ node game.js rock paper scissors
HMAC: 9ED68097B2D5D9A968E85BD7094C75D00F96680DC43CDD6918168A8F50DE8507
Available moves:
1 - rock
2 - paper
3 - scissors
0 - exit
? - help
Enter your move: 2
Your move: paper
Computer move: rock
You win!
HMAC key: BD9BE48334BB9C5EC263953DA54727F707E95544739FCE7359C267E734E380A2
```



