let square = ($('.square'));
let ticGird = $('#tic.Grid');
const squares = Array.from(document.getElementsByClassName("square"));
let playerO = 'O';
let playerX = 'X';
let ticroundtxt = document.getElementById('ticroundtxt');
let winnerBanner = $('#winnerIsBanner');
//to start
let currentPlayer = playerO;
const startGame = () => {

//to make square clickable
    squares.forEach(square => {
        console.log("table/ box where an x or o can appear", square);
        square.addEventListener('click', squareClicked);
    });

    function squareClicked(e) {
        //currenttarget = squares id
        const id = e.currentTarget;
        //to change the square to currentPlayer
        squares[id] = currentPlayer;
        e.currentTarget.innerHTML = currentPlayer;
        //if player has won then the game will cease 
        if (winOccurs(currentPlayer)) {
        // txt is cleared for turn order
            ticroundtxt.innerHTML = `${currentPlayer} won`;
            return;
        }
        //to rotate the player order
        currentPlayer = currentPlayer === playerO ? playerX : playerO;
        //to reflect the turn order 
        ticroundtxt.innerHTML = `${currentPlayer}'s turn`;

    }
}


const winOccurs = (currentPlayer) => {
    
    console.log(squares);
    if ($('.square.r1.c1').text() === playerO && $('.square.r1.c2').text() === playerO && $('.square.r1.c3').text() === playerO) {
        console.log(`${currentPlayer} has won the top row!!!`);
        return true;
    }
    if ($('.square.r1.c1').text() === playerX && $('.square.r1.c2').text() === playerX && $('.square.r1.c3').text() === playerX) {
        console.log(`${currentPlayer} has won the top row!!!`);
        return true;
    }
    
    else if ($('.square.r2.c1').text() === playerO && $('.square.r2.c2').text() === playerO && $('.square.r2.c3').text() === playerO) {
        console.log(`${currentPlayer} has won the middle row!!!`);
        return true;
    }
    else if ($('.square.r2.c1').text() === playerX && $('.square.r2.c2').text() === playerX && $('.square.r2.c3').text() === playerX) {
        console.log(`${currentPlayer} has won the middle row!!!`);
        return true;
    }
    
    else if ($('.square.r3.c1').text() === playerO && $('.square.r3.c2').text() === playerO && $('.square.r3.c3').text() === playerO) {
        console.log(`${currentPlayer} has won the bottom row!!!`);
        return true;
    }
    else if ($('.square.r3.c1').text() === playerX && $('.square.r3.c2').text() === playerX && $('.square.r3.c3').text() === playerX) {
        console.log(`${currentPlayer} has won the bottom row!!!`);
        return true;
    }
    
    else if ($('.square.r1.c1').text() === playerO && $('.square.r2.c1').text() === playerO && $('.square.r3.c1').text() === playerO) {
        console.log(`${currentPlayer} has won the left row!!!`);
        return true;
    }
    else if ($('.square.r1.c1').text() === playerX && $('.square.r2.c1').text() === playerX && $('.square.r3.c1').text() === playerX) {
        console.log(`${currentPlayer} has won the left row!!!`);
        return true;
    }
    else if ($('.square.r1.c2').text() === playerO&& $('.square.r2.c2').text() === playerO && $('.square.r3.c3').text() === playerO) {
        console.log(`${currentPlayer} has won the vertical row!!!`);
        return true;
    }
    else if ($('.square.r1.c2').text() === playerX && $('.square.r2.c2').text() === playerX && $('.square.r3.c3').text() === playerX) {
        console.log(`${currentPlayer} has won the vertical row!!!`);
        return true;
    }
    else if ($('.square.r1.c3').text() === playerO && $('.square.r2.c3').text() === playerO && $('.square.r3.c3').text() === playerO) {
        console.log(`${currentPlayer} has won the vertical left row!!!`);
        return true;
    }
    else if ($('.square.r1.c3').text() === playerX && $('.square.r2.c3').text() === playerX && $('.square.r3.c3').text() === playerX) {
        console.log(`${currentPlayer} has won the vertical left row!!!`);
        return true;
    }
    else if ($('.square.r1.c1').text() === playerO && $('.square.r2.c2').text() === playerO && $('.square.r3.c3').text() === playerO) {
        console.log(`${currentPlayer} has won the left diagonal row!!!`);
        return true;
    }
    else if ($('.square.r1.c1').text() === playerX && $('.square.r2.c2').text() === playerX && $('.square.r3.c3').text() === playerX) {
        console.log(`${currentPlayer} has won the left diagonal row!!!`);
        return true;
    }
    else if ($('.square.r1.c3').text() === playerO && $('.square.r2.c3').text() === playerO && $('.square.r3.c3').text() === playerO) {
        console.log(`${currentPlayer} has won the right row!!!`);
        return true;
    } 
    else if ($('.square.r1.c3').text() === playerX && $('.square.r2.c3').text() === playerX && $('.square.r3.c3').text() === playerX) {
        console.log(`${currentPlayer} has won the right row!!!`);
        return true;
    } 
    else if ($('.square.r1.c3').text() === playerX && $('.square.r2.c2').text() === playerX && $('.square.r3.c1').text() === playerX) {
        console.log(`${currentPlayer} has won`);
        return true;
    } 
    else if ($('.square.r1.c3').text() === playerO && $('.square.r2.c2').text() === playerO && $('.square.r3.c1').text() === playerO) {
        console.log(`${currentPlayer} has won`);
        return true;
    }
};
//button reset
restart.addEventListener("click", () => {
    squares.forEach((square) => {
      square.innerText = "";
    });
    currentPlayer = playerO;
});
startGame ();