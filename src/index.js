import "./styles.css";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

console.log("Webpack is Working!");
loadHome();

const buttons = document.querySelectorAll("nav button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const id = event.target.id;

    switch (id) {
      case "home":
        loadHome();
        break;
      case "menu":
        loadMenu();
        break;
      case "contact":
        loadContact();
        break;
    }
  });
});
