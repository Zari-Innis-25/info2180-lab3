window.onload=function(){
    // what happens as the html doc is loadedd 

const grid=document.querySelectorAll('#board div');
// selecting the board

grid.forEach((square)=>{
    square.classList.add('square');// adding the css
    
});


let player_turn= 0;

grid.forEach((square, index)=>{
    square.addEventListener('click',function(){
        if(!square.classList.contains('O')&& !square.classList.contains('X')){
            if (player_turn%2==0){
                square.classList.add('X');
                square.textContent="X";
                player_turn++;
            }
            else{
                square.classList.add('O');
                square.textContent="O"
                player_turn++;

            }
        const win=[];
        }
    });
});



};
 