// change title when user changes tab
let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come Back ;(";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});

// email with js and validasi
function validation() {
  const form = document.getElementById("form");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const number = document.getElementById("number");
  const emailSubject = document.getElementById("emailSubject");
  const message = document.getElementById("message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();
  });

  const validateInputs = () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const numberValue = number.value.trim();
    const emailSubjectValue = emailSubject.value.trim();
    const messageValue = message.value.trim();

    if (nameValue == "" && emailValue == "" && numberValue == "" && emailSubjectValue == "" && messageValue == "") {
      alert("mohon diisi semua filed");
    } else {
      var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        emailSubject: document.getElementById("emailSubject").value,
        message: document.getElementById("message").value,
      };
      const serviceId = "service_pbwid9l";
      const templateId = "template_0oqjg03";
      emailjs
        .send(serviceId, templateId, params)
        .then((res) => {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("number").value = "";
          document.getElementById("emailSubject").value = "";
          document.getElementById("message").value = "";

          console.log(res);
          alert("your message sent successfully");
        })
        .catch((err) => console.log(err));
    }
  };
}

// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // active navbar links

      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
      });
    }
  });

  //sticky headers
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar when click navbar links (scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
