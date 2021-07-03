var mathrandom1 = Math.floor(Math.random()*6 + 1);
if (mathrandom1 === 1){
    document.querySelector('.img1').setAttribute('src','images/dice1.png');
}
else if (mathrandom1 === 2){
    document.querySelector('.img1').setAttribute('src','images/dice2.png');
}
else if (mathrandom1 === 3){
    document.querySelector('.img1').setAttribute('src','images/dice3.png');
}
else if (mathrandom1 === 4){
    document.querySelector('.img1').setAttribute('src','images/dice4.png');
}
else if (mathrandom1 === 5){
    document.querySelector('.img1').setAttribute('src','images/dice5.png');
}
else if (mathrandom1 === 6){
    document.querySelector('.img1').setAttribute('src','images/dice6.png');
}
else{}
var mathrandom2 = Math.floor(Math.random()*6 + 1);
if (mathrandom2 === 1){
    document.querySelector('.img2').setAttribute('src','images/dice1.png');
}
else if (mathrandom2 === 2){
    document.querySelector('.img2').setAttribute('src','images/dice2.png');
}
else if (mathrandom2 === 3){
    document.querySelector('.img2').setAttribute('src','images/dice3.png');
}
else if (mathrandom1 === 4){
    document.querySelector('.img2').setAttribute('src','images/dice4.png');
}
else if (mathrandom2 === 5){
    document.querySelector('.img2').setAttribute('src','images/dice5.png');
}
else if (mathrandom2 === 6){
    document.querySelector('.img2').setAttribute('src','images/dice6.png');
}
else{}
if (mathrandom1 > mathrandom2) {
    document.querySelector('.container h1').innerHTML='Player1 WINS!';
}
 else if(mathrandom1 < mathrandom2) {
    document.querySelector('.container h1').innerHTML='Player2 WINS!';
}
 else if(mathrandom1 == mathrandom2) {
    document.querySelector('.container h1').innerHTML='Double K.O';
}
 else {
    
}