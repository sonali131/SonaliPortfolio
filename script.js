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
