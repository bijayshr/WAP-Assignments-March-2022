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

//FIXED FUNCTION
function makeArmyFix () {
    let shooters = [];
    for(let i=0; i<2; i++) {
        let shooter = function () {
            alert(i);
        };
        shooters.push(shooter);
        i++;
    }
    return shooters;
}
let army = makeArmy() ;
console.dir(army[0]);

//#Fixing the Code
let armyFix = makeArmyFix();
armyFix.forEach(f=>f());
