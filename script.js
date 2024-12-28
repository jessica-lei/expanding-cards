const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", toggleSize);
});
window.addEventListener("resize", resize);
document.addEventListener("keydown", arrowControl);

function arrowControl(e) {
  let ind = Array.from(cards).findIndex((card) =>
    card.classList.contains("expanded")
  );

  if (e.key === "ArrowLeft" && ind > 0) {
    ind -= 1;
  } else if (e.key === "ArrowRight" && ind < 4) {
    ind += 1;
  }
  collapseAll();
  cards[ind].classList.add("expanded");
}

function resize() {
  let currExpanded = document.querySelector(".expanded").id;
  if (
    window.innerWidth <= 900 &&
    (currExpanded === "card4" || currExpanded === "card5")
  ) {
    collapseAll();
    document.querySelector("#card1").classList.add("expanded");
  }
}
function toggleSize() {
  collapseAll();
  this.classList.toggle("expanded");
}

function collapseAll() {
  cards.forEach((card) => {
    card.classList.remove("expanded");
  });
}
