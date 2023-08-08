function freshStart(element, cls){
    element.className = "";
    element.classList.add(cls);    

}


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
    
    freshStart(sec01top, 'eight-top-sec');
    freshStart(sec01bottom, "eight-bottom-sec");
    switch(true){
        case(sec[1] === 0):
        sec01top.classList.add("zero-top");
        sec01bottom.classList.add("zero-bottom");
        break;
        case(sec[1] === 1):
        sec01top.classList.add("one-top");
        sec01bottom.classList.add("one-bottom");
        break;
        case(sec[1] === 2):
        sec01top.classList.add("two-top");
        sec01bottom.classList.add("two-bottom");
        break;
        case(sec[1] === 3):
        sec01top.classList.add("three-top");
        sec01bottom.classList.add("three-bottom");
        break;
        case(sec[1] === 4):
        sec01top.classList.add("four-top");
        sec01bottom.classList.add("four-bottom");
        break;
        case(sec[1] === 5):
        sec01top.classList.add("five-top");
        sec01bottom.classList.add("five-bottom");
        break;
        case(sec[1] === 6):
        sec01top.classList.add("six-top");
        sec01bottom.classList.add("six-bottom");
        break;
        case(sec[1] === 7):
        sec01top.classList.add("seven-top");
        sec01bottom.classList.add("seven-bottom");
        break;
        case(sec[1] === 8):
        sec01top.classList.add("eight-top-sec");
        sec01bottom.classList.add("eight-bottom-sec");
        break;
        case(sec[1] === 9):
        sec01top.classList.add("nine-top");
        sec01bottom.classList.add("nine-bottom");

    }
}


// const min = Array.from(String(time.getSeconds()), Number);
// const hour = Array.from(String(time.getSeconds()), Number);

// setTimeSec();
setInterval(setTimeSec, 1000);