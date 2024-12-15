"use strict";

const slider = document.getElementById("timeline-slider");
const icons = document.querySelectorAll(".timeline__icon");

slider.addEventListener("input", (e) => {
  const value = parseInt(e.target.value);

  icons.forEach((icon, index) => {
    if (index === value) {
      icon.classList.add("active");
    } else {
      icon.classList.remove("active");
    }
  });
});
