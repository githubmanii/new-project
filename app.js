const Elm = document.getElementById("btn");
Elm.addEventListener("click", function () {
  console.log(55);
});

function mamad() {
  console.log(55);
}

mamad();

function hi() {
  alert("hi");
}

hi();

const Btn2 = document.getElementById("btn2");
Btn2.addEventListener("click", () => {
  const question = prompt("سلام کار داشتی؟؟");
  if (question == "آره") {
    alert("برو خونتون");
  } else {
    alert("چرا زنگ زدی؟؟؟");
  }
});
