// JavaScript source code
window.onload = function letöltés() { };

var viccek;

function letöltés() {
    fetch('/jokes.json')
        .then(response => response.json())
        .then(data => letöltésBefejezõdött(data)
        );
}

function letöltésBefejezõdött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    viccek = d;
}
