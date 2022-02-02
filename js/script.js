import tabs from "./modules/tabs";
import timer from "./modules/timer";
import forms from "./modules/forms";
import modalWindow from "./modules/modalWindow";
import slider from "./modules/slider";
import cards from "./modules/cards";
import calcCalories from "./modules/calcCalories";
import { openModal } from "./modules/modalWindow";

window.addEventListener("DOMContentLoaded", () => {
  const modalTimer = setTimeout(() => openModal(".modal", modalTimer), 30000);
  const deadLine = "2022-02-16";

  tabs(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "tabheader__item_active"
  );
  timer(".timer", deadLine);
  slider({
    container: ".offer__slider",
    slide: ".offer__slide",
    prevArrow: ".offer__slider-prev",
    nextArrow: ".offer__slider-next",
    totalCounter: "#total",
    currentCounter: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner",
  });
  modalWindow("[data-modal]", ".modal", modalTimer);
  forms("form", modalTimer);
  cards();
  calcCalories();
});
