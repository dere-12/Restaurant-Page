import "./menu.css";
import beefTacos from "./images/beef-tacos.jpg";
import cheeseburger from "./images/cheeseburger.jpg";
import pizza from "./images/pizza.jpg";
import spaghetti from "./images/spaghetti.jpg";
import lemonade from "./images/lemonade.jpg";

function loadMenu() {
  const content = document.querySelector("#content");
  const table = document.createElement("table");
  const footerDiv = document.createElement("div");
  const backgroundImgInfo = document.createElement("p");
  const tableImgsInfo = document.createElement("p");
  const backgroundImgLink = document.createElement("a");
  const tableImgsLink = document.createElement("a");

  document.querySelector("#home").style.opacity = 0.8;
  document.querySelector("#menu").style.opacity = 1;
  document.querySelector("#contact").style.opacity = 0.8;

  content.innerHTML = "";

  table.innerHTML = `
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Description</th>
      <th>Price</th>
      <th>Picture</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Beef Tacos</td>
      <td>Soft tortillas filled with seasoned beef, lettuce, cheese, and salsa</td>
      <td>$8.99</td>
      <td><img src="${beefTacos}" alt="Beef Tacos pic"></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Cheeseburger</td>
      <td>Classic beef patty with cheddar, lettuce, and tomato</td>
      <td>$9.75</td>
      <td><img src="${cheeseburger}" alt="Cheeseburger pic"></td>
    </tr>
    <tr>
      <td>3</td>
      <td>Margherita Pizza</td>
      <td>Classic pizza with fresh mozzarella, tomatoes, and basil</td>
      <td>$12.99</td>
      <td><img src="${pizza}" alt="Pizza pic"></td>
    </tr>
    <tr>
      <td>4</td>
      <td>Spaghetti Carbonara</td>
      <td>Creamy pasta with pancetta, eggs, and Parmesan cheese</td>
      <td>$14.50</td>
      <td><img src="${spaghetti}" alt="Pizza pic"></td>
    </tr>
    <tr>
      <td>5</td>
      <td>Lemonade</td>
      <td>Freshly squeezed lemonade with a hint of mint</td>
      <td>$3.00</td>
      <td><img src="${lemonade}" alt="Pizza pic"></td>
    </tr>
  `;

  content.appendChild(table);

  footerDiv.className = "footer";
  backgroundImgLink.href =
    "https://unsplash.com/photos/a-room-with-tables-and-chairs-e4B5AvA7Jqo";
  backgroundImgLink.textContent = "Unsplash.";
  backgroundImgLink.target = "_blank";

  tableImgsLink.href =
    "https://github.com/dere-12/Restaurant-Page?tab=readme-ov-file#image-credit";
  tableImgsLink.textContent = "Click Here.";
  tableImgsLink.target = "_blank";

  backgroundImgInfo.textContent = "Background photo by Glenov Brankovic on ";
  tableImgsInfo.textContent = "Table pictures source: ";
  backgroundImgInfo.appendChild(backgroundImgLink);
  tableImgsInfo.appendChild(tableImgsLink);
  footerDiv.appendChild(backgroundImgInfo);
  footerDiv.appendChild(tableImgsInfo);
  content.appendChild(footerDiv);
}

export default loadMenu;
