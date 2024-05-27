// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Jack LeVasseur
// Created on: April 24, 2024
// This file contains the JS functions for index.html

"Use strict"

function myButtonClicked() {
  positiveChecked = document.getElementById('positive-number').checked
  negativeChecked = document.getElementById('negative-number').checked

  const randomNumber = Math.floor(Math.random() * 10) + 1

  if (positiveChecked == true) {
    document.getElementById("number-answer").innerHTML = randomNumber
  } else {
    document.getElementById("number-answer").innerHTML = (randomNumber * -1)
  }
}
