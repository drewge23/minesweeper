const express = require('express')
const cors = require('cors');

const app = express()

app.use(cors());

app.get('/api/newgame', (req, res) => {
    const size = 10 //JSON.parse(req.body)
    const boardMap = generateMap(size, size, size)
    res.json({ data: boardMap })
})

app.listen(4000, () => {
    console.log('listening on port 4000')
})

function generateMap(rows, columns, totalMines) {
    const board = [];

    // Create the empty board
    for (let i = 0; i < rows; i++) {
        board[i] = Array(columns).fill(0);
    }

    let minesCount = 0;

    // Randomly place mines on the board
    while (minesCount < totalMines) {
        const randomRow = Math.floor(Math.random() * rows);
        const randomCol = Math.floor(Math.random() * columns);

        // Place a mine at the random position if there is no mine already
        if (board[randomRow][randomCol] !== "mine") {
            board[randomRow][randomCol] = "mine";
            minesCount++;
        }
    }

    // Calculate the number of adjacent mines for each cell
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            if (board[row][col] !== "mine") {
                let count = 0;

                // Check adjacent cells for mines
                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        const newRow = row + i;
                        const newCol = col + j;

                        // Skip checking out-of-bounds indices
                        if (
                            newRow < 0 ||
                            newRow >= rows ||
                            newCol < 0 ||
                            newCol >= columns
                        ) {
                            continue;
                        }

                        // Increment count if the adjacent cell is a mine
                        if (board[newRow][newCol] === "mine") {
                            count++;
                        }
                    }
                }

                // Assign the number of adjacent mines to the cell
                board[row][col] = count;
            }
        }
    }

    return board;
}