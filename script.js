let counter = document.querySelector("p");
let increment = document.querySelector(".plus");
let decrement = document.querySelector(".minus");

increment.addEventListener("click", () => {
   value = parseInt(counter.innerText);
   value++;
   counter.innerText = value;
});

decrement.addEventListener("click", () => {
   value = parseInt(counter.innerText);
   value--;
   counter.innerText = value;
});