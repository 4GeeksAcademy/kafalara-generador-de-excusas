/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generateExcuse() {
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

    let randomElement = function(array) {
      let numArr = Math.floor(Math.random() * array.length);
      return array[numArr];
    };

    let randomWho = randomElement(who);
    let randomAction = randomElement(action);
    let randomWhat = randomElement(what);
    let randomWhen = randomElement(when);

    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
  }

  let paragraph = document.getElementById("excuse");
  paragraph.innerText = generateExcuse();

  // console.log("hola");
  console.log(generateExcuse());
  // console.log("Hello Rigo from the console!");
};
