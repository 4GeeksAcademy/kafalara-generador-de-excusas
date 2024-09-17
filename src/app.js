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
    let randomElement = function(arreglo) {
      let numarreglo = Math.floor(Math.random() * arreglo.length);
      return arreglo[numarreglo];
    };

    let randomWho = randomElement(who);
    let randomAction = randomElement(action);
    let randomWhat = randomElement(what);
    let randomWhen = randomElement(when);

    //Let excuse: Concatenar las variables en una sola cadena.
    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
  }
  let paragraph = document.getElementById("excuse");
  paragraph.innerText = generateExcuse();

  // console.log("hola");
  console.log(generateExcuse());
  // console.log("Hello Rigo from the console!");
};
