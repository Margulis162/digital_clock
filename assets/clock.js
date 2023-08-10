// to zero out all the classes but 8
function freshStart(element, cls){
    
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
            // top.classList.add("eight-top-sec");
            // bottom.classList.add("eight-bottom-sec");
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


            // counter for american time

    // function count(tm, top, bottom){
    
       
    //     if(tm.length<2){
            
    //             top.classList.add("zero-top");
    //             bottom.classList.add("zero-bottom");
                
                
        
    //         }
    //     else{
    //         switch(true){
    //             case(tm[0] === 0):
    //             top.classList.add("zero-top");
    //             bottom.classList.add("zero-bottom");
    //             break;
    //             case(tm[0] === 1):
    //             top.classList.add("one-top");
    //             bottom.classList.add("one-bottom");
    //             break;
    //             case(tm[0] === 2):
    //             top.classList.add("two-top");
    //             bottom.classList.add("two-bottom");
    //             break;
    //             case(tm[0] === 3):
    //             top.classList.add("three-top");
    //             bottom.classList.add("three-bottom");
    //             break;
    //             case(tm[0] === 4):
    //             top.classList.add("four-top");
    //             bottom.classList.add("four-bottom");
    //             break;
    //             case(tm[0] === 5):
    //             top.classList.add("five-top");
    //             bottom.classList.add("five-bottom");
    //             break;
    //             case(tm[1] === 6):
    //             top.classList.add("six-top");
    //             bottom.classList.add("six-bottom");
    //             break;
    //             case(tm[1] === 7):
    //             top.classList.add("seven-top");
    //             bottom.classList.add("seven-bottom");
    //             break;
    //             case(tm[1] === 8):
    //             break;
    //             case(tm[1] === 9):
    //             top.classList.add("nine-top");
    //             bottom.classList.add("nine-bottom");
        
    //         }
    //         }}

function setTimeSec (){

    // variables
    const time = new Date();
    // that sneaky way to make arrays out of number I shall remember
    const sec = Array.from(String(time.getSeconds()), Number);
    
    const sec10top = document.getElementById('sec-10-top');
    const sec10bottom = document.getElementById('sec-10-bottom');
    const sec01top = document.getElementById('sec-01-top');
    const sec01bottom = document.getElementById('sec-01-bottom');
    
    
    
    // to zero out all the classes but 8
    freshStart(sec01top, 'eight-top-sec');
    freshStart(sec01bottom, "eight-bottom-sec");

    freshStart(sec10top, 'eight-top-sec');
    freshStart(sec10bottom, "eight-bottom-sec");

    count1(sec, sec01top, sec01bottom);
    count0( sec, sec10top,sec10bottom );
    }
   

function setTimeMin(){
    const time = new Date();
    const min = Array.from(String(time.getMinutes()), Number);
    const min10top = document.getElementById('min-10-top');
    const min10bottom = document.getElementById('min-10-bottom');
    const min01top = document.getElementById('min-01-top');
    const min01bottom = document.getElementById('min-01-bottom');
    // to zero out all the classes but 8
    freshStart(min01top, 'eight-top');
    freshStart(min01bottom, "eight-bottom");
    freshStart(min10top, 'eight-top');
    freshStart(min10bottom, "eight-bottom")
    count1(min, min01top, min01bottom);
    count0( min, min10top,min10bottom );
}


function setTimeHr(){
    const time = new Date();

    const hr = Array.from(String(time.getHours()), Number);
    const hr10top = document.getElementById('hr-10-top');
    const hr10bottom = document.getElementById('hr-10-bottom');
    const hr01top = document.getElementById('hr-01-top');
    const hr01bottom = document.getElementById('hr-01-bottom');

    // to zero out all the classes but 8
    freshStart(hr01top, 'eight-top');
    freshStart(hr01bottom, "eight-bottom");

    freshStart(hr10top, 'eight-top');
    freshStart(hr10bottom, "eight-bottom");

    count1(hr, hr01top, hr01bottom);

    count0( hr, hr10top,hr10bottom );
    setAmPm();
}

function setAmPm(){
        // am pm changer
        const time = new Date();
        const ampm = document.getElementById("ampm");
        const hr = time.getHours();
        if(hr<=11){
            ampm.textContent = "am";
        }else{ampm.textContent = "pm";}
       

}

setInterval(setTimeSec, 1);
setInterval(setTimeMin, 1000);
setInterval(setTimeHr, 1000);