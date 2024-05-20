// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Jack LeVasseur
// Created on: April 24, 2024
// This file contains the JS functions for index.html

"Use strict"

/**
 * This function displays the slider value.
 */
function myButtonClicked() {
  alwaysOnButtonChecked = document.getElementById('on-check').checked

  if (alwaysOnButtonChecked == true) {
    let min = 1;
    let max = 10;
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("radio-button-value").innerHTML =
      "<p>The random number is:" + randomNum + "</p>"
  } else {
    let min = -10;
    let max = -1;
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("radio-button-value").innerHTML =
      "<p>The random number is:" + randomNum + "</p>"
  }
}
