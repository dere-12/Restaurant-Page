function loadMenu() {
  const content = document.querySelector("#content");
  const h2 = document.createElement("h2");

  document.querySelector("#home").style.opacity = 0.8;
  document.querySelector("#menu").style.opacity = 1;
  document.querySelector("#contact").style.opacity = 0.8;

  content.innerHTML = "";
  h2.textContent = "This Is Menu Tab.";
  content.appendChild(h2);
}

export default loadMenu;
