import "./home.css";

function loadHome() {
  const content = document.querySelector("#content");
  const titleDiv = document.createElement("div");
  const h1 = document.createElement("h1");
  const footer = document.createElement("footer");
  const p = document.createElement("p");
  const a = document.createElement("a");

  titleDiv.className = "title-container";
  h1.textContent = " TO OUR RESTAURANT!";
  titleDiv.appendChild(h1);
  content.appendChild(titleDiv);

  a.href =
    "https://unsplash.com/photos/a-room-with-tables-and-chairs-e4B5AvA7Jqo";
  a.textContent = "Unsplash";
  p.textContent = "Background photo by Glenov Brankovic on ";
  p.appendChild(a);
  footer.appendChild(p);
  content.appendChild(footer);
}

export default loadHome;
