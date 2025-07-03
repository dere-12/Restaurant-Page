import "./home.css";

function loadHome() {
  const content = document.querySelector("#content");
  const titleDiv = document.createElement("div");
  const h1 = document.createElement("h1");
  const footer = document.createElement("footer");
  const p = document.createElement("p");
  const a = document.createElement("a");

  document.querySelector("#home").style.opacity = 1;
  document.querySelector("#menu").style.opacity = 0.8;
  document.querySelector("#contact").style.opacity = 0.8;

  content.innerHTML = "";

  titleDiv.className = "title-container";
  h1.textContent = " TO OUR RESTAURANT!";
  titleDiv.appendChild(h1);
  content.appendChild(titleDiv);

  a.href =
    "https://unsplash.com/photos/a-room-with-tables-and-chairs-e4B5AvA7Jqo";
  a.textContent = "Unsplash";
  a.target = "_blank";
  p.textContent = "Background photo by Glenov Brankovic on ";
  p.appendChild(a);
  footer.appendChild(p);
  content.appendChild(footer);
}

export default loadHome;
