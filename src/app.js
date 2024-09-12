/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

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

    let numwho = Math.floor(Math.random() * who.length);
    let randomWho = who[numwho];
    let numaction = Math.floor(Math.random() * action.length);
    let randomAction = action[numaction];
    let numwhat = Math.floor(Math.random() * what.length);
    let randomWhat = what[numwhat];
    let numwhen = Math.floor(Math.random() * when.length);
    let randomWhen = when[numwhen];

    return numwho;
    numaction;
    numwhat;
  }
  console.log("hola");

  console.log(generateExcuse());

  let paragraph = document.getElementById("excuse");
  paragraph.innerText = "excusas";

  console.log("Hello Rigo from the console!");
};
