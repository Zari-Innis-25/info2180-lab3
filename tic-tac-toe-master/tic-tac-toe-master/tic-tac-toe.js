window.onload=function(){
    // what happens as the html doc is loadedd 

    const grid=document.querySelectorAll('#board div');
// selecting the board

    grid.forEach((square)=>{
    square.classList.add('square');// adding the css
    
    });


    let player_turn= 0;
    const xPlays=[];
    const oPlays=[];
    let win =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

    grid.forEach((square, index)=>{

        square.addEventListener('click',function(){

            if(!square.classList.contains('O')&& !square.classList.contains('X')){
                if (player_turn%2==0){
                    square.classList.add('X');
                    square.textContent="X";
                    player_turn++;

                    xPlays.push(index);
                    

                    for( let i=0;i<win.length;i++)
                    {
                        let p=win[i];
                        let count=0;
                

                        for(let j=0; j<xPlays.length;j++)
                        {
                            if (p.includes(xPlays[j]))
                            {
                                count++;
                            }
                        }
                    
                        if (count===3)
                        {
                            const stats=document.querySelector('#status');
                            stats.classList.add('you-won');
                            stats.textContent="Congratulations! X is the Winner!";
                        }
                    }
                }


            
                else{
                    square.classList.add('O');
                    square.textContent="O"
                    player_turn++;
                    oPlays.push(index);

                    for( let i=0;i<win.length;i++)
                    {
                        let p=win[i];
                        let count=0;

                        for(let j=0; j<oPlays.length;j++)
                        {
                            if (p.includes(oPlays[j]))
                            {
                                count++;
                            }
                        }
                     
                        if (count===3)
                        {
                            const stats=document.querySelector('#status');
                            stats.classList.add('you-won');
                            stats.textContent="Congratulations! O is the Winner!";
                        }
                    }
                }
            }
        });
        
     

        square.addEventListener('mouseover',function(e){
            e.target.classList.add('hover');
        });

        square.addEventListener('mouseout',function(e){
            e.target.classList.remove('hover');
        });

    });

    const ngbutton=document.querySelector('.btn');
    ngbutton.addEventListener('click', function(e){
        grid.forEach(square=>{
            square.classList.remove('X');
            square.textContent="";

        });
        const stats=document.querySelector('#status');
        stats.classList.remove('you-won')
        stats.textContent="Move your mouse over a square and click to play an X or an O";


    });

};

 