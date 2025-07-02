import "./styles.css";
import restaurantImg from "./restaurant.jpg";

console.log("Webpack is Working!");

const h1 = document.querySelector("h1");
h1.textContent = "My Restaurant";

const img = document.createElement("img");
img.src = restaurantImg;
document.querySelector("body").appendChild(img);
