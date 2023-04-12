document.addEventListener("DOMContentLoaded", () => {
  const cardsAdj = [
    {
      name: "mcqueen",
      img: "imagenes/mcqueen.png"
    },
    {
      name: "sterling",
      img: "imagenes/sterling.jpg"
    },
    {
      name: "Jacksonstorm",
      img: "imagenes/jacsonstorm.jpg"
    },
    {
      name: "mate",
      img: "imaganes/mate.jpg"
    },
    {
      name: "strip",
      img: "imaganes/stip.png"
    },
    {
      name: "chuqui",
      img: "imaganes/chuqi.jpg"
    },
    {
      name: "mcqueen",
      img: "imagenes/mcqueen.png"
    },
    {
      name: "sterling",
      img: "imagenes/sterling.jpg"
    },
    {
      name: "Jacksonstorm",
      img: "imagenes/jacsonstorm.jpg"
    },
    {
      name: "mate",
      img: "imaganes/mate.jpg"
    },
    {
      name: "strip",
      img: "imaganes/stip.png"
    },
    {
      name: "chuqui",
      img: "imaganes/chuqi.jpg"
    }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  //----------------- lecture_03 ----------------------------------//
  function crearTablero() {
    for (let i = 0; i < cardsAdj.length; i++) {
   
      var carta = document.createElement("img");
      carta.setAttribute("src", "imagenes/reverso.png"); 
      carta.setAttribute("data-id", i); 
      carta.addEventListener("click",voltearCarta);
      cuadricula.appendChild(carta);
    }
  function verificarPareja() {
    var cards = document.querySelectorAll("img");
    const opcionUnoId = cartasEscogidasId[0];
    const opcionDosId = cartasEscogidasId[1];

    if (opcionUnoId === opcionDosId) {
      cards[opcionUnoId].setAtrribute("src", "imagenes/reverso .png");
      cards[opcionDosId].setAtrribute("src", "imagenes/reverso.png");
      alert("¡Diste click en la misma imagen!");
    } else if (cartasEscogidas[0] === cartasEscogidas[1]) {
      alert("¡correcto!");
      cards[opcionUnoId].setAttribute("src", "imagenes/blank.png");
      cards[opcionDosId].setAttribute("src", "imagenes/blank.png");
      cards[opcionUnoId].removeEventListener("click", voltearCarta);
      cards[opcionDosId].removeEventListener("clicl", voltearCarta);
      cartasGanadas.push(cartasEscogidas);
    } else {
      cards[opcionUnoId].setAttribute("src", "imagenes/reverso.png");
      cards[opcionDosId].setAttribute("src", "imagenes/reverso.png");
      alert("¡intenta de nuevo!");
    }
    cartasEscogidas = [];
    cartasEscogidasId = [];
    resultado.textContent = cartasGanadas.length;

    if (cartasGanadas.length === cardAdj.length / 2) {
      resultado.textContent = "¡felicidades, encontraste todos los pares!";
    }
  }
  function voltearCarta() {
    var cardId = this.getAtribute("data-id");
    cartasEscogidas.push(cardsAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardsAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1000);
    }
  }
  crearTablero();
});
