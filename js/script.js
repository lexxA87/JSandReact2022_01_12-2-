window.addEventListener("DOMContentLoaded", () => {
  const tabs = require("./modules/tabs"),
        timer = require("./modules/timer"),
        slider = require("./modules/slider"),
        modalWindow = require("./modules/modalWindow"),
        forms = require("./modules/forms"),
        cards = require("./modules/cards"),
        calcCalories = require("./modules/calcCalories");

  tabs();
  timer();
  slider();
  modalWindow();
  forms();
  cards();
  calcCalories();
});
