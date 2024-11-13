document.addEventListener("DOMContentLoaded", function () {
  loadProfileData();

  document
    .getElementById("editProfileForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      saveProfileData();
      hideEditForm();
    });
});

function showEditForm() {
  document.getElementById("editFormContainer").classList.remove("d-none");
}

function hideEditForm() {
  document.getElementById("editFormContainer").classList.add("d-none");
}

function saveProfileData() {
  const name = document.getElementById("inputName").value;
  const role = document.getElementById("inputRole").value;
  const availability = document.getElementById("inputAvailability").value;
  const age = document.getElementById("inputAge").value;
  const location = document.getElementById("inputLocation").value;
  const yoe = document.getElementById("inputYOE").value;
  const email = document.getElementById("inputEmail").value;

  localStorage.setItem("name", name);
  localStorage.setItem("role", role);
  localStorage.setItem("availability", availability);
  localStorage.setItem("age", age);
  localStorage.setItem("location", location);
  localStorage.setItem("yoe", yoe);
  localStorage.setItem("email", email);

  document.getElementById("name").textContent = name;
  document.getElementById("role").textContent = role;
  document.getElementById("availability").textContent = availability;
  document.getElementById("age").textContent = age;
  document.getElementById("location").textContent = location;
  document.getElementById("yoe").textContent = yoe;
  document.getElementById("email").textContent = email;
}

function loadProfileData() {
  const name = localStorage.getItem("name") || "Nama Anda";
  const role = localStorage.getItem("role") || "Front End Designer";
  const availability = localStorage.getItem("availability") || "Full Time";
  const age = localStorage.getItem("age") || "19";
  const location = localStorage.getItem("location") || "Jakarta";
  const yoe = localStorage.getItem("yoe") || "2";
  const email = localStorage.getItem("email") || "email@gmail.com";

  document.getElementById("name").textContent = name;
  document.getElementById("role").textContent = role;
  document.getElementById("availability").textContent = availability;
  document.getElementById("age").textContent = age;
  document.getElementById("location").textContent = location;
  document.getElementById("yoe").textContent = yoe;
  document.getElementById("email").textContent = email;
}
