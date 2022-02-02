function calcCalories() {
  // Calculator Calories

  const totalCal = document.querySelector(".calculating__result span");
  console.log(total);
  let age, weight, height, sex, ratio;

  if (localStorage.getItem("sex")) {
    sex = localStorage.getItem("sex");
  } else {
    sex = "famale";
    localStorage.setItem("sex", "female");
  }

  if (localStorage.getItem("ratio")) {
    ratio = localStorage.getItem("ratio");
  } else {
    ratio = 1.375;
    localStorage.setItem("ratio", 1.375);
  }

  function setLocalSettings(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach((elem) => {
      elem.classList.remove(activeClass);
      if (elem.getAttribute("id") === localStorage.getItem("sex")) {
        elem.classList.add(activeClass);
      }
      if (elem.getAttribute("data-ratio") === localStorage.getItem("ratio")) {
        elem.classList.add(activeClass);
      }
    });
  }

  setLocalSettings("#gender div", "calculating__choose-item_active");
  setLocalSettings(
    ".calculating__choose_big div",
    "calculating__choose-item_active"
  );

  function totalCalories() {
    if (!age || !weight || !height || !sex || !ratio) {
      totalCal.textContent = "----";
      return;
    }

    if (sex === "female") {
      totalCal.textContent = Math.round(
        +(655.1 + 9.563 * weight + 1.85 * height - 4.676 * age) * ratio
      );
    } else {
      totalCal.textContent = Math.round(
        +(66.5 + 13.75 * weight + 5.003 * height - 6.775 * age) * ratio
      );
    }
  }

  totalCalories();

  function getStaticInfo(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        if (e.target.getAttribute("data-ratio")) {
          ratio = +e.target.getAttribute("data-ratio");
          localStorage.setItem("ratio", +e.target.getAttribute("data-ratio"));
        } else {
          sex = e.target.getAttribute("id");
          localStorage.setItem("sex", e.target.getAttribute("id"));
        }

        elements.forEach((el) => {
          el.classList.remove(activeClass);
        });

        e.target.classList.add(activeClass);

        totalCalories();
      });
    });
  }

  getStaticInfo("#gender div", "calculating__choose-item_active");
  getStaticInfo(
    ".calculating__choose_big div",
    "calculating__choose-item_active"
  );

  function getDinamicInfo(selector) {
    const input = document.querySelector(selector);

    input.addEventListener("input", () => {
      if (input.value.match(/\D/g)) {
        input.style.border = "1px solid red";
      } else {
        input.style.border = "none";
      }
      switch (input.getAttribute("id")) {
        case "age":
          age = +input.value;
          break;
        case "height":
          height = +input.value;
          break;
        case "weight":
          weight = +input.value;
          break;
      }
      totalCalories();
    });
  }

  getDinamicInfo("#height");
  getDinamicInfo("#weight");
  getDinamicInfo("#age");
}

export default calcCalories;
