const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector(".output");

function sumOfAngles(angle1, angle2, angle3) {
  const sum = angle1 + angle2 + angle3;
  return sum;
}

function isTriangle() {
  const sum = sumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (sum === 180) {
    console.log("Yay, the angles form a triangle!");
    outputEl.innerText = "Yay, the angles form a triangle!";
  } else {
    console.log("Oh Oh! The angle doesn't form a triangle");
    outputEl.innerText = "Oh Oh! The angle doesn't form a triangle";
  }
}

isTriangleBtn.addEventListener("click", isTriangle);
