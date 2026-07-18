console.log("dzialam")
let kontener = document.getElementById("kontener")
console.log(kontener)
function tworzenieokienka(tytul, opis, zdjecie) {
    let noweokienko = document.createElement("div")
    noweokienko.className = "okienka"
    noweokienko.innerHTML = `
        <h2>${tytul}</h2>
        <p>${opis}</p>
        <img src="${zdjecie}" alt="">
    `
    kontener.appendChild(noweokienko)
}

tworzenieokienka("jajko", "bardzo duze", "https://live-production.wcms.abc-cdn.net.au/fc8f206d8aa03400462c29a8cbf425d2?impolicy=wcms_crop_resize&cropH=528&cropW=397&xPos=86&yPos=0&width=862&height=1149")