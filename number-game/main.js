var computerGuess;
var  userGuessLog =[];  
var attempts = 0;
var maxGuesses = 10;

function gameEnded(){
    document.getElementById('newGameButton').style.display = 'inline' ;   
    document.getElementById('easyBtn').style.display  = 'none' ;
    document.getElementById('hardBtn').style.display  = 'none' ;  
    document.getElementById('inputBox').setAttribute('readonly', 'readonly');
}

function easyMode(){
    maxGuesses = 10;
    document.getElementById('easyBtn').className = 'activeButton' ;
    document.getElementById('hardBtn').className = '' ;   
}

function hardMode(){
    maxGuesses = 5;
    document.getElementById('hardBtn').className = 'activeButton' ;
    document.getElementById('easyBtn').className = '' ;   
}

function init(){
    computerGuess = Math.floor(Math.random()* 100 + 1);
        console.log(computerGuess);
        document.getElementById('newGameButton').style.display = 'none' ;     
}

function newGame() {
    window.location.reload();
}

function compareGuess() {
    var userGuess = " "+document.getElementById('inputBox').value;
    //console.log(userGuess);
    userGuessLog.push(userGuess);
     //console.log(userGuessLog);
     document.getElementById('guessLog').innerHTML = userGuessLog ;
     attempts++;
     document.getElementById('attempts').innerHTML =  attempts;
     if(userGuessLog.length< maxGuesses){
        if(userGuess > computerGuess) {
            document.getElementById('textOutput').innerHTML = 'لقد أدخلت رقم عالي ';
            document.getElementById('textOutput').value = "";
        } else if(userGuess < computerGuess) {
            document.getElementById('textOutput').innerHTML = 'لقد أدخلت رقم منخفض ';
            document.getElementById('textOutput').value = "";
        } else {
            document.getElementById('textOutput').innerHTML = attempts  +' :تهانينا لقد أدخلت رقم صحيح من المحاولة رقم';
            document.getElementById('container').style.backgroundColor = 'rgba(60, 157, 196, 0.89) ';
            gameEnded();
        } 
     } else {
        if(userGuess > computerGuess) {
            document.getElementById('textOutput').innerHTML = computerGuess + computerGuess +' : لقد خسرت' +' ! الرقم كان ';
            document.getElementById('container').style.backgroundColor = 'rgba(130, 130, 131, 0.89)';
            gameEnded();
        }else if (userGuess < computerGuess){
            document.getElementById('textOutput').innerHTML = computerGuess +' : لقد خسرت' +' ! الرقم كان ';
            document.getElementById('container').style.backgroundColor ='rgba(130, 130, 131, 0.89)' ;
            gameEnded();
        } else {
            document.getElementById('textOutput').innerHTML = 'تهانينا لقد أدخلت رقم صحيح';
            document.getElementById('container').style.backgroundColor = 'rgba(60, 157, 196, 0.89) ';
            gameEnded();
        }
    }
}