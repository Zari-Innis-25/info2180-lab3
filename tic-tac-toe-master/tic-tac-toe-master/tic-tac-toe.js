window.onload=function(){
    // what happens as the html doc is loadedd 

const grid=document.querySelectorAll('#board div');
// selecting the board
grid.forEach(square=>{
    square.classList.add('square');// adding the css
});

};