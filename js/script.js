var inputText = document.getElementById("text-input-area");
var outputText = document.getElementById("output");


function criptografar() {
    var texto = inputText.value;
    var resultCripto = texto.replace(/e/g, "asdhdbo").replace(/i/g, "doododdmo")
                            .replace(/a/g, "egtevweca").replace(/u/g, "errrrefegvt")
                            .replace(/o/g, "rswfregw");

    document.getElementById("output").innerHTML = "<textarea readonly id='text-input-area'> " + resultCripto + "</textarea>" 
}

function descriptografar() {
    var texto = inputText.value;
    var resultDescripto = texto.replace(/01000101/g, "e").replace(/01001001/g, "i")
                               .replace(/01000001/g, "a").replace(/01010101/g, "u")
                               .replace(/01001111/g, "o")

    document.getElementById("output").innerHTML = "<textarea readonly id='text-input-area'> " + resultDescripto + "</textarea>" 
}

function binary() {
    var texto = inputText.value;
    var resultCripto = texto.replace(/e/g, "01000101").replace(/i/g, "01001001")
                            .replace(/a/g, "01000001").replace(/u/g, "01010101")
                            .replace(/o/g, "01001111");

    document.getElementById("output").innerHTML = "<textarea readonly id='text-input-area'> " + resultCripto + "</textarea>" 
}