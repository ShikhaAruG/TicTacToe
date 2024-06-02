// Starting the game again
function startagain() {
    console.log("Hello, It's connected!.. Lets Play the game.!ARU");

    // Restart game button
    var restart = document.querySelector("#b");

    // Grab all squares
    var square = document.querySelectorAll('td');

    // Player indicator
    var currentPlayer = 'X';

    // Clear all the squares
    function clearBoard() {
        for (var i = 0; i < square.length; i++) {
            square[i].textContent = '';
        }
        currentPlayer = 'X'; // Reset current player to 'X'
    }

    // Register event listener for restart button
    restart.addEventListener('click', function () {
        clearBoard();
    });

    // Register event listeners for squares
    for (var i = 0; i < square.length; i++) {
        square[i].addEventListener('click', changeSymbol);
    }

    // Check the square marker
    function changeSymbol() {
        if (this.textContent === '') {
            this.textContent = currentPlayer;
            // Switch player after each turn
            currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
            // Check if the game ends after each turn
            if (checkWin()) {
                alert("Player " + this.textContent + " wins!");
                clearBoard();
            } else if (checkDraw()) {
                alert("It's a draw!");
                clearBoard();
            }
        }
    }

    // Function to check for a winning condition
    function checkWin() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]              // Diagonals
        ];

        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            if (square[a].textContent !== '' &&
                square[a].textContent === square[b].textContent &&
                square[a].textContent === square[c].textContent) {
                return true; // Winning combination found
            }
        }
        return false; // No winning combination found
    }

    // Function to check for a draw condition (all squares filled without a win)
    function checkDraw() {
        for (let i = 0; i < square.length; i++) {
            if (square[i].textContent === '') {
                square[i].textContent ===(currentPlayer === 'X') ? 'O' : 'X';
                return false; // If any square is empty, game is not a draw
            }
        }
        return true; // All squares are filled, game is a draw
    }
}

startagain();
