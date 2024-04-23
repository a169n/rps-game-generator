const crypto = require("crypto");

class KeyGenerator {
  static generateKey() {
    return crypto.randomBytes(32).toString("hex");
  }
}

class HMACGenerator {
  static generateHMAC(message, key) {
    const hmac = crypto.createHmac("sha256", key);
    hmac.update(message);
    return hmac.digest("hex");
  }
}

class GameRules {
  static determineWinner(userMove, computerMove, moves) {
    const moveIndex = moves.indexOf(userMove);
    const half = moves.length / 2;
    const winningMoves = moves.slice(moveIndex + 1, moveIndex + 1 + half);
    const losingMoves = moves.slice(moveIndex - half, moveIndex);

    if (winningMoves.includes(computerMove)) {
      return "You win!";
    } else if (losingMoves.includes(computerMove)) {
      return "You lose!";
    } else {
      return "It's a draw!";
    }
  }
}

class TableGenerator {
  static generateTable(moves) {
    const table = [["Move", ...moves]];

    for (let i = 0; i < moves.length; i++) {
      const row = [moves[i]];
      for (let j = 0; j < moves.length; j++) {
        if (i === j) {
          row.push("Draw");
        } else if ((j - i + moves.length) % moves.length <= moves.length / 2) {
          row.push("Win");
        } else {
          row.push("Lose");
        }
      }
      table.push(row);
    }

    return table;
  }

  static printTable(table) {
    for (const row of table) {
      console.log(row.join("\t"));
    }
  }
}

function printHelp(moves) {
  const table = TableGenerator.generateTable(moves);
  TableGenerator.printTable(table);
}

function main(moves) {
  if (
    moves.length < 3 ||
    moves.length % 2 === 0 ||
    new Set(moves).size !== moves.length
  ) {
    console.error(
      "Invalid arguments. Please provide an odd number of non-repeating moves."
    );
    console.error("Example: node game.js rock paper scissors");
    return;
  }

  const key = KeyGenerator.generateKey();
  const computerMove = moves[Math.floor(Math.random() * moves.length)];

  console.log(`HMAC: ${HMACGenerator.generateHMAC(computerMove, key)}`);
  console.log("Available moves:");
  moves.forEach((move, index) => console.log(`${index + 1} - ${move}`));
  console.log("0 - exit");
  console.log("? - help");

  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question("Enter your move: ", (index) => {
    readline.close();

    if (index === "0") {
      console.log("Exiting the game.");
      return;
    } else if (index === "?") {
      printHelp(moves);
      return;
    }

    const userMove = moves[index - 1];
    console.log(`Your move: ${userMove}`);
    console.log(`Computer move: ${computerMove}`);
    console.log(`${GameRules.determineWinner(userMove, computerMove, moves)}`);
    console.log(`HMAC key: ${key}`);
  });
}

const moves = process.argv.slice(2);
main(moves);
