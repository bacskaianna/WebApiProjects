// JavaScript source code
window.onload = function let�lt�s() { };

var viccek;

function let�lt�s() {
    fetch('/jokes.json')
        .then(response => response.json())
        .then(data => let�lt�sBefejez�d�tt(data)
        );
}

function let�lt�sBefejez�d�tt(d) {
    console.log("Sikeres let�lt�s")
    console.log(d)
    viccek = d;
}
