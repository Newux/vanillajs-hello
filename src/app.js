/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//function below will run will run when the whole page has loaded (window.onload)
window.onload = function() {
  //the arrays below stores the values to be used in the sentence

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  //the variables below create a random number for each array index and rounds the number down to a whole
  //.length selects
  let whoindex = Math.floor(Math.random() * who.length);
  let actionindex = Math.floor(Math.random() * action.length);
  let whatindex = Math.floor(Math.random() * what.length);
  let whenindex = Math.floor(Math.random() * when.length);

  //code below defines what the excuse will look like and concantenates with the sentence
  let excuse = `${who[whoindex]} ${action[actionindex]} ${what[whatindex]} ${when[whenindex]}`;
  console.log(excuse);
  document.getElementById("excuse").innerHTML = excuse;
};
