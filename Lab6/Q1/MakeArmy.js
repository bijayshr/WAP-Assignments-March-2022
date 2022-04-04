function makeArmy () {
    let shooters = [];
    let i = 0;
    while (i < 2) {
        let shooter = function () {
            alert(i);
        };
        shooters.push(shooter);
        i++;
    }
    return shooters;
}
let army    = makeArmy () ;
console.dir(army[0]);

//#Fixing the Code
army.forEach(f=>f());
