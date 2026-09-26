const input = document.getElementById("textInput");
const addBtn = document.getElementById("addBtn");
const output = document.getElementById("output");
addBtn.addEventListener("click", () => {
  if (input.value !== "") {
    const p = document.createElement("p");
    p.textContent = input.value;

    p.addEventListener("click", () => {
      output.removeChild(p);
    });
    output.appendChild(p);
  }
});
