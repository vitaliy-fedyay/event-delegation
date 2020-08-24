const table = document.getElementById("table");
table.addEventListener("click", color);

function color(event) {
  let target = event.target;
  if (target.tagName != "TD") return;
  highligt(target);
}

function highligt(td) {
  td.style.boxShadow = "10px 10px 10px rgba(0,0,0,0.5)";
}
