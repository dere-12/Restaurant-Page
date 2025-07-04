import "./contact.css";

function loadContact() {
  const content = document.querySelector("#content");
  const section = document.createElement("section");
  const footer = document.createElement("footer");
  const p = document.createElement("p");
  const a = document.createElement("a");

  document.querySelector("#home").style.opacity = 0.8;
  document.querySelector("#menu").style.opacity = 0.8;
  document.querySelector("#contact").style.opacity = 1;

  content.innerHTML = "";

  section.innerHTML = `
    <h2>Contact Us</h2>
    <p>We'd love to hear from you! Here's how you can reach us:</p>

    <div class="contact-info">
      <h3>Address:</h3>
      <p>123 Flavor Street, <br>
        Foodie Town, FL 67890
      </p>

      <h3>Phone:</h3>
      <p>123-4567-89</p>

      <h3>Email:</h3>
      <p>ourLovelyRestaurant@FakeMail.com</p>

      <h3>Hours of Operation:</h3>
      <p>Monday - Friday: 11:00 AM - 10:00 PM <br>
        Saturday - Sunday: 12:00 PM - 11:00 PM
      </p>
    </div>
  `;

  content.appendChild(section);

  a.href =
    "https://unsplash.com/photos/a-room-with-tables-and-chairs-e4B5AvA7Jqo";
  a.textContent = "Unsplash";
  a.target = "_blank";
  p.textContent = "Background photo by Glenov Brankovic on ";
  p.appendChild(a);
  footer.appendChild(p);
  content.appendChild(footer);
}

export default loadContact;
