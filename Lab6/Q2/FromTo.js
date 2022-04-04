function printFromTo(from, to){
    let current = from;
        let timerId = setInterval(function (){
            if(current<=to) {
                document.writeln(current);
            }else{
                clearInterval(timerId)
            }
            current++;
        }, 1000);
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

printFromTo(100, 110);

printNumberAlternatively(1, 5);