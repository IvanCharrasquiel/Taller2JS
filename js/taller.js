function crearNodo(tipoNodo){
    var nodo = document.createElement(tipoNodo);
    return nodo;
}

function crearNodoImagen(url, alt){
    var nodo = crearNodo("img");
    nodo.src = url;
    nodo.alt = alt;
    return nodo;
}

function colocarTituloDeTablaRedesSociales(tabla, titulo) {
    var fila = document.createElement("tr");
    var celda = document.createElement("td");
    celda.colSpan = 3;
    celda.style.textAlign = "center"; 
    celda.innerHTML = `<h2>${titulo}</h2>`;
    fila.appendChild(celda);
    tabla.appendChild(fila);
}
function añadirFilaTablaRedesSociales(tablaP, infoColumna1, infoColumna2, infoColumna3){
    var fila = crearNodo("tr");
    //COLUMNAS
    var columna1 = crearNodo("td");
    var columna2 = crearNodo("td");
    var columna3 = crearNodo("td");

    //TABLAS DE CADA COLUMNA
    var tabla1 = crearNodo("table")
    var tabla2 = crearNodo("table")
    var tabla3 = crearNodo("table")

    //FILAS Y COLUMNA TABLA 1
    var fila1Tabla1 = crearNodo ("tr")
    var columnaImgTabla1 = crearNodo ("td")
    var img = crearNodo("img")
    columnaImgTabla1.colSpan = 3
    columnaImgTabla1.innerHTML = infoColumna1;
    fila1Tabla1.appendChild(columnaImgTabla1)
    tabla1.appendChild(fila1Tabla1)

    var fila2Tabla1 = crearNodo ("tr")
    var columna1Tabla1 = crearNodo("td")
    var columna2Tabla1 = crearNodo("td")
    var columna3Tabla1 = crearNodo("td")
    fila2Tabla1.appendChild(columna1Tabla1)
    fila2Tabla1.appendChild(columna2Tabla1)
    fila2Tabla1.appendChild(columna3Tabla1)
    tabla1.appendChild(fila2Tabla1)
    
    //FILAS Y COLUMNA TABLA 2
    var fila1Tabla2 = crearNodo ("tr")
    var columnaImgTabla2 = crearNodo ("td")
    columnaImgTabla2.colSpan = 3
    columnaImgTabla2.innerHTML = infoColumna2;
    fila1Tabla2.appendChild(columnaImgTabla2)
    tabla2.appendChild(fila1Tabla2)

    var fila2Tabla2 = crearNodo ("tr")
    var columna1Tabla2 = crearNodo("td")
    var columna2Tabla2 = crearNodo("td")
    var columna3Tabla2 = crearNodo("td")
    fila2Tabla2.appendChild(columna1Tabla2)
    fila2Tabla2.appendChild(columna2Tabla2)
    fila2Tabla2.appendChild(columna3Tabla2)
    tabla2.appendChild(fila2Tabla2)

    //FILAS Y COLUMNA TABLA 3
    var fila1Tabla3 = crearNodo ("tr")
    var columnaImgTabla3 = crearNodo ("td")
    columnaImgTabla3.colSpan = 3
    columnaImgTabla3.innerHTML = infoColumna3;
    fila1Tabla3.appendChild(columnaImgTabla3)
    tabla3.appendChild(fila1Tabla3)

    var fila2Tabla3 = crearNodo ("tr")
    var columna1Tabla3 = crearNodo("td")
    var columna2Tabla3 = crearNodo("td")
    var columna3Tabla3 = crearNodo("td")


    fila2Tabla3.appendChild(columna1Tabla3)
    fila2Tabla3.appendChild(columna2Tabla3)
    fila2Tabla3.appendChild(columna3Tabla3)
    tabla3.appendChild(fila2Tabla3)

    columna1.appendChild(tabla1)
    columna2.appendChild(tabla2)
    columna3.appendChild(tabla3)

    fila.appendChild(columna1);
    fila.appendChild(columna2);
    fila.appendChild(columna3);

    tablaP.appendChild(fila);
    
}

var tablaCosasFavoritas = document.getElementById("RedesSociales")
    colocarTituloDeTablaRedesSociales(tablaCosasFavoritas, "REDES SOCIALES")
añadirFilaTablaRedesSociales(tablaCosasFavoritas,
    '<table><tr><img height="350px" width="600px" src="../recursos/facebook.jpg" alt=""></tr><tr><td style="font-size: larger; width: 50%; height: 100%;"><p>&nbsp;&nbsp;&nbsp;FACEBOOK</p></td><td><a target="_blank" href="https://es-la.facebook.com/"><button style="width:140px; height:60px">LOGIN</button></a></td><td><a href="../index.html"><button style="width:140px; height:60px">EXIT</button></a></td></tr></table>',

    '<table><tr><img height="350px" width="600px" src="../recursos/instagram.webp" alt=""></tr><tr><td style="font-size: larger; width: 50%; height: 100%;"><p>&nbsp;&nbsp;&nbsp;INSTAGRAM</p></td><td><a target="_blank" href="https://www.instagram.com/?hl=en"><button style="width:140px; height:60px">LOGIN</button></a></td><td><a href="../index.html"><button style="width:140px; height:60px">EXIT</button></a></td></tr></table>',

    '<table><tr><img height="350px" width="600px" src="../recursos/snapchat.jpg" alt=""></tr> <tr><td style="font-size: larger; width: 50%; height: 100%;"> <p>&nbsp;&nbsp;&nbsp;SNAPCHAT</p></td><td><a target="_blank" href="https://www.snapchat.com/"><button style="width:140px; height:60px">LOGIN</button></a></td><td><a href="../index.html"><button style="width:140px; height:60px">EXIT</button></a><td></tr></table>')
añadirFilaTablaRedesSociales(tablaCosasFavoritas,
    '<table><tr><img height="350px" width="600px" src="../recursos/twiter.jpg" alt=""></tr><tr><td style="font-size: larger; width: 50%; height: 100%;"><p>&nbsp;&nbsp;&nbsp;TWITER</p></td><td><a target="_blank" href="https://twitter.com/i/flow/login"><button style="width:140px; height:60px">LOGIN</button></a></td><td><a href="../index.html"><button style="width:140px; height:60px">EXIT</button></a></td></tr></table>',

    '<table><tr><img height="350px" width="600px" src="../recursos/whatsapp.webp" alt=""></tr><tr><td style="font-size: larger; width: 50%; height: 100%;"><p>&nbsp;&nbsp;&nbsp;WHATSAPP</p></td><td><a target="_blank" href="https://web.whatsapp.com/"><button style="width:140px; height:60px">LOGIN</button></a></td><td><a href="../index.html"><button style="width:140px; height:60px">EXIT</button></a></td></tr></table>',

    '<table> <tr><img height="350px" width="600px" src="../recursos/youtube.jpg" alt=""></tr> <tr> <td style="font-size: larger; width: 50%; height: 100%;"> <p>&nbsp;&nbsp;&nbsp;YOUTUBE</p> </td> <td><a target="_blank" href="https://www.youtube.com/"><button style="width:140px; height:60px">LOGIN</button></a></td> <td><a href="../index.html"><button style="width:140px; height:60px">EXIT</button></a></td> </tr> </table>')