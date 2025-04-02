document.addEventListener("DOMContentLoaded", function () {
  const check = document.getElementById("check");
  const menuItems = document.querySelectorAll("nav ul li a");
  const button = document.querySelector("nav ul a .contact_btn");

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      check.checked = false; // Checkbox ko uncheck karega, jisse menu band ho jayega
    });
  });

  if (button) {
    button.addEventListener("click", function () {
      check.checked = false;
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const messageContainer = document.getElementById("message-container");
  const message = document.getElementById("message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const scriptURL =
      "https://script.google.com/macros/s/AKfycby5K_LagH2GdUHpAvgKturIWAJZOJx0y6vTaQOaeDQOc6UWOG_ONf2NK2ouYfWOYWCdPg/exec";

    fetch(scriptURL, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        message.innerText = "✅ Success! Your message has been sent.";
        message.style.color = "green";
        messageContainer.style.display = "flex";
        form.reset();
      })
      .catch((error) => {
        message.innerText = "❌ Error! Please try again.";
        message.style.color = "red";
        messageContainer.style.display = "flex";
        console.error("Error:", error);
      });
  });
});
