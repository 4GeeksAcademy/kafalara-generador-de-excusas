/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generateExcuse() {
    //devuelva una excusa aleatoria con la siguiente estructura:
    let who = ["The dog", "My grandma", "The mailman", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "my phone", "the car"];
    let when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];

    //Variables con Math.random y Math.floor: para generar números aleatorios y seleccionar elementos al azar de los array who,action,what,when.
    let numwho = Math.floor(Math.random() * who.length);
    //La variable randomWho se utiliza para almacenar un elemento aleatorio seleccionado del array who lo mismo con las demás variables y arrays.
    let randomWho = who[numwho];
    let numaction = Math.floor(Math.random() * action.length);
    let randomAction = action[numaction];
    let numwhat = Math.floor(Math.random() * what.length);
    let randomWhat = what[numwhat];
    let numwhen = Math.floor(Math.random() * when.length);
    let randomWhen = when[numwhen];

    //Let excuse: Concatenar las variables en una sola cadena.
    let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
    return excuse;
  }
  let paragraph = document.getElementById("excuse");
  paragraph.innerText = generateExcuse();

  // console.log("hola");
  console.log(generateExcuse());
  // console.log("Hello Rigo from the console!");
};
