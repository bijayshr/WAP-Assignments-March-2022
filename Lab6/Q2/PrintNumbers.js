function printNumbers(from, to){
    let current = from;
    let timerID = setInterval(function (){
        alert(current);
        if(current === to){
            clearInterval(timerID);
        }
        current ++;
    }, 1000)
}

function printNumberAlternatively(from, to){
    let current = from;
    setTimeout(function go(){
        alert(current);
        if(current<to){
            setTimeout(go, 1000);
        }
        current++;
    }, 1000)
}

// printNumbers(5, 10);
printNumberAlternatively(5, 10);