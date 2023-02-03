
let imagenesDisplay = ["fotos/imagen1.jpg", "fotos/imagen2.jpg", "fotos/utn.jpg","fotos/shutterstock_518160529-1250x625.jpg"];
let element = document.getElementById("IMG");
let incremental = 0;




function dusplayImagenes() {

    document.imagen.src = imagenesDisplay[incremental];
    if (incremental < 3) {
        incremental += 1;

    } else {
        incremental = 0;
    }
}

setInterval(dusplayImagenes, 4000);

function botonCuentaTodo(pepe) {
    document.getElementById("cuenta1").style.display = "none";
    document.getElementById("cuenta2").style.display = "none";
    document.getElementById("cuenta3").style.display = "none";
    document.getElementById("cuenta4").style.display = "none";
    document.getElementById("cuenta5").style.display = "none";
    document.getElementById("cuenta6").style.display = "none";
    document.getElementById("cuenta7").style.display = "none";

    document.getElementById(pepe).style.display = "block";
}

function pp() {
    alert("tocaste un boton para editar la info");
}

function ppSumar() {
    alert("se va a sumar algo mas");
}

function inicio() {
    document.getElementById("inicio").style.display = "none";
}

setInterval(inicio, 6000);

















