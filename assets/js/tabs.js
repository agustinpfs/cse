document.getElementById("defaultActive").click();

// var element = document.getElementById('defaultActive');
// var event = new Event('hover');
// element.dispatchEvent(event);

function showContent(evento, contenidoDeUnTab) {
console.log(evento);
console.log(evento.target);

let i, todosLosContenidos, tab_button;

todosLosContenidos = document.getElementsByClassName("Tabs__tab-content");
for (i = 0; i < todosLosContenidos.length; i++) {
todosLosContenidos[i].style.display = "none";
}    

tab_button = document.getElementsByClassName("Tabs__tab");
for (i = 0; i < tab_button.length; i++) {
tab_button[i].className = tab_button[i].className.replace(" active", "");
}    

// style.cssText = "display: block; position: absolute";

document.getElementById(contenidoDeUnTab).style.display = "block";
evento.target.className += " active";
}

function chbg(color) {
    document.getElementById('defaultActive').style.backgroundColor = color;
}