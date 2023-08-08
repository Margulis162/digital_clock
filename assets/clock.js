// to zero out all the classes but 8
function freshStart(element, cls){
    console.log(element,cls);
    element.className = "";
    element.classList.add(cls);    

}

// swich for changing digits 
//tm is hr,min,or sec; 
 function count1(tm, top, bottom){
    // to fix the issue when the seconds only have one digit we need if else, the swithc is what changing the numbers
    if(tm.length<2){
        switch(true){
            case(tm[0] === 0):
            top.classList.add("zero-top");
            bottom.classList.add("zero-bottom");
            break;
            case(tm[0] === 1):
            top.classList.add("one-top");
            bottom.classList.add("one-bottom");
            break;
            case(tm[0] === 2):
            top.classList.add("two-top");
            bottom.classList.add("two-bottom");
            break;
            case(tm[0] === 3):
            top.classList.add("three-top");
            bottom.classList.add("three-bottom");
            break;
            case(tm[0] === 4):
            top.classList.add("four-top");
            bottom.classList.add("four-bottom");
            break;
            case(tm[0] === 5):
            top.classList.add("five-top");
            bottom.classList.add("five-bottom");
            break;
            case(tm[0] === 6):
            top.classList.add("six-top");
            bottom.classList.add("six-bottom");
            break;
            case(tm[0] === 7):
            top.classList.add("seven-top");
            bottom.classList.add("seven-bottom");
            break;
            case(tm[0] === 8):
            top.classList.add("eight-top-sec");
            bottom.classList.add("eight-bottom-sec");
            break;
            case(tm[0] === 9):
            top.classList.add("nine-top");
            bottom.classList.add("nine-bottom");
    
        }
    }else{
        switch(true){
            case(tm[1] === 0):
            top.classList.add("zero-top");
            bottom.classList.add("zero-bottom");
            break;
            case(tm[1] === 1):
            top.classList.add("one-top");
            bottom.classList.add("one-bottom");
            break;
            case(tm[1] === 2):
            top.classList.add("two-top");
            bottom.classList.add("two-bottom");
            break;
            case(tm[1] === 3):
            top.classList.add("three-top");
            bottom.classList.add("three-bottom");
            break;
            case(tm[1] === 4):
            top.classList.add("four-top");
            bottom.classList.add("four-bottom");
            break;
            case(tm[1] === 5):
            top.classList.add("five-top");
            bottom.classList.add("five-bottom");
            break;
            case(tm[1] === 6):
            top.classList.add("six-top");
            bottom.classList.add("six-bottom");
            break;
            case(tm[1] === 7):
            top.classList.add("seven-top");
            bottom.classList.add("seven-bottom");
            break;
            case(tm[1] === 8):
            top.classList.add("eight-top-sec");
            bottom.classList.add("eight-bottom-sec");
            break;
            case(tm[1] === 9):
            top.classList.add("nine-top");
            bottom.classList.add("nine-bottom");
    
        }
    }}

    function count0(tm, top, bottom){
        // to fix the issue when the seconds only have one digit we need if else, the swithc is what changing the numbers
        if(tm.length<2){
            
                top.classList.add("zero-top");
                bottom.classList.add("zero-bottom");
                
                
        
            }
        else{
            switch(true){
                case(tm[0] === 0):
                top.classList.add("zero-top");
                bottom.classList.add("zero-bottom");
                break;
                case(tm[0] === 1):
                top.classList.add("one-top");
                bottom.classList.add("one-bottom");
                break;
                case(tm[0] === 2):
                top.classList.add("two-top");
                bottom.classList.add("two-bottom");
                break;
                case(tm[0] === 3):
                top.classList.add("three-top");
                bottom.classList.add("three-bottom");
                break;
                case(tm[0] === 4):
                top.classList.add("four-top");
                bottom.classList.add("four-bottom");
                break;
                case(tm[0] === 5):
                top.classList.add("five-top");
                bottom.classList.add("five-bottom");
                break;
                
        
            }
            }}


function setTimeSec (){

    // variables
    const time = new Date();
    // that sneaky way to make arrays out of number I shall remember
    const sec = Array.from(String(time.getSeconds()), Number);
    
    const sec10top = document.getElementById('sec-10-top');
    const sec10bottom = document.getElementById('sec-10-bottom');
    const sec01top = document.getElementById('sec-01-top');
    const sec01bottom = document.getElementById('sec-01-bottom');
    
    console.log(sec);
    
    // to zero out all the classes but 8
    freshStart(sec01top, 'eight-top-sec');
    freshStart(sec01bottom, "eight-bottom-sec");

    freshStart(sec10top, 'eight-top-sec');
    freshStart(sec10bottom, "eight-bottom-sec");

    count1(sec, sec01top, sec01bottom);
    count0( sec, sec10top,sec10bottom );
    }
   



// const min = Array.from(String(time.getSeconds()), Number);
// const hour = Array.from(String(time.getSeconds()), Number);
// setTimeSec();

setInterval(setTimeSec, 1000);