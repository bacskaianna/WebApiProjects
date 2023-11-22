window.onload = function () {
    initPascal(10);
};

var initPascal = function (n) {
    for (var sor = 0; sor < 10; sor++) {
        var ujSorDiv = document.createElement('div');
        //új div létrehozása az új sornak
        ujSorDiv.classList.add('sor');
        //új div osztálylistájához add hozzá a "sor"-t
        document.getElementById('pascal').appendChild(ujSorDiv);
        //új div-et add hozzá a "pascal" gyermekeihez
        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            var ujElemDiv = document.createElement("div")
            //új div létrehozása az új elemnek
            ujElemDiv.classList.add('elem');
            //új elem div osztálylistájához add hozzá az "elem"-et
            ujElemDiv.innerHTML = faktoriális(sor) / (faktoriális(oszlop) * faktoriális(sor - oszlop));
            //teszteléshet .innerHTML = `${sor}:${oszlop}`

            //legyen az innerHTML a megfelelő szám
            ujSorDiv.appendChild(ujElemDiv);
            //új elem div-et vedd fel a sor elemei közé
        }
    }
}

var faktoriális = function (n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
}