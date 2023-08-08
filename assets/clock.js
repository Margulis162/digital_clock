
function setTimeSec (){

    // variables
    const time = new Date();
    // that sneaky way to make arrays out of number I shall remember
    const sec = Array.from(String(time.getSeconds()), Number);
   
    
    

    switch(true){
        case(sec[1] === 0):
         
    }
}


// const min = Array.from(String(time.getSeconds()), Number);
// const hour = Array.from(String(time.getSeconds()), Number);


setInterval(setTimeSec, 1000);