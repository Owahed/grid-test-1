const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const container = document.querySelector("#container");
const card1 = document.querySelector("#card1");
const card2 = document.querySelector("#card2");
const card3 = document.querySelector("#card3");
const card4 = document.querySelector("#card4");
const card5 = document.querySelector("#card5");

document.querySelectorAll("button").forEach((n) =>
  n.addEventListener("click", () => {
    button1.classList.remove("selectButton");
    button2.classList.remove("selectButton");
    button3.classList.remove("selectButton");
    n.classList.add("selectButton");
    console.log(n.classList);

    container.classList.remove("container1");
    container.classList.remove("container2");
    container.classList.remove("container3");

    card1.classList.remove("big-one");
    card2.classList.remove("card2-div");
    card3.classList.remove("middle-card");
    card4.classList.remove("card2-div");
    card5.classList.remove("big-one");

    if (n.classList[0] === "button1") {
      container.classList.add("container1");
    }
    if (n.classList[0] == "button2") {
      container.classList.add("container2");
    }
    if (n.classList[0] == "button3") {
      container.classList.add("container3");

      card1.classList.add("big-one");
      card2.classList.add("card2-div");
      card3.classList.add("middle-card");
      card4.classList.add("card2-div");
      card5.classList.add("big-one");
    }
  })
);
