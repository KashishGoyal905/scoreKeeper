let score = 0;
let winning = 2;
let score2 = 0;
const choose = document.querySelector('#choosePlayer');
let z1 = document.querySelector('#playerOne');
let z2 = document.querySelector('#playerTwo');
let bt1 = document.querySelector('.btn1');
let bt2 =  document.querySelector('.btn2');
let isGameOver = false;


function playerOneClick() {
    if(!isGameOver){
    if(score!=winning){
    score +=1;
    z1.textContent = score;
    if(score===winning){
        isGameOver=true;
        console.log('true')
    }  
    } 
    
} 
}


function playerTwoClick() {
    if(!isGameOver){
    if(score2!=winning){
    score2 +=1;
    z2.textContent = score2;
    if(score2===winning){
    isGameOver=true;
    console.log('true');
    }
    }   
}
}


function playerThreeClick() {
    score =0;
    score2 =0;
    z1.textContent = score;
    z2.textContent = score2;
    isGameOver=false;
}

choose.addEventListener('change', function(){
    winning =choose.value;
    console.log('winning')
});

