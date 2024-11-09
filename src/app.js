/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#ExcuseBtn").addEventListener("click", () => {
    document.querySelector("#excuseLine").innerHTML = generateExcuse();
  });
  console.log("Excuse");
};
let generateExcuse = () => {
  let pronoun = ["You"];
  let insult = ["dirty", "ugly", "fart sniffing", "smelly"];
  let secondInsult = ["no brained", "loser", "low life", "no shoe wearin'"];
  let finalInsult = ["son uv ahhhhh", "gobermouch", "chicken", "airhead"];
  // let where = ["in the closet", "under the bed", "in the pool"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let insultIndex = Math.floor(Math.random() * insult.length);
  let secondInsultIndex = Math.floor(Math.random() * secondInsult.length);
  let finalInsultIndex = Math.floor(Math.random() * finalInsult.length);
  // let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    " " +
    insult[insultIndex] +
    " " +
    secondInsult[secondInsultIndex] +
    " " +
    finalInsult[finalInsultIndex]
    //  +
    // " " +
    // where[whereIndex]
  );
};
