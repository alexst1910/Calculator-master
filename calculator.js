"use strict";
const input = document.querySelector(".input");
const button = document.querySelector(".btn");
const number = (num) => {
  input.textContent += num;
};
const del = function () {
  input.textContent = input.textContent.substring(
    0,
    input.textContent.length - 1
  );
};
const delAll = () => {
  input.textContent = null;
};
const equ = () => {
  input.textContent = eval(input.textContent);
};
