// // change title when user changes tab
// let docTitle = document.title;
// window.addEventListener("blur", () => {
//   document.title = "Come Back ;(";
// });
// window.addEventListener("focus", () => {
//   document.title = docTitle;
// });

// // email with js
// function sendMail() {
//   var params = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     number: document.getElementById("number").value,
//     emailSubject: document.getElementById("emailSubject").value,
//     message: document.getElementById("message").value,
//   };

//   const serviceId = "service_pbwid9l";
//   const templateId = "template_0oqjg03";

//   emailjs
//     .send(serviceId, templateId, params)
//     .then((res) => {
//       document.getElementById("name").value = "";
//       document.getElementById("email").value = "";
//       document.getElementById("number").value = "";
//       document.getElementById("emailSubject").value = "";
//       document.getElementById("message").value = "";
//       console.log(res);
//       alert("your message sent successfully");
//     })
//     .catch((err) => console.log(err));
// }
// // toggle icon navbar
// let menuIcon = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");

// menuIcon.onclick = () => {
//   menuIcon.classList.toggle("bx-x");
//   navbar.classList.toggle("active");
// };

// // scroll sections
// let sections = document.querySelectorAll("section");
// let navLinks = document.querySelectorAll("header nav a");

// window.onscroll = () => {
//   sections.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 100;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       // active navbar links

//       navLinks.forEach((links) => {
//         links.classList.remove("active");
//         document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
//       });
//     }
//   });

//   //sticky headers
//   let header = document.querySelector("header");

//   header.classList.toggle("sticky", window.scrollY > 100);

//   // remove toggle icon and navbar when click navbar links (scroll)
//   menuIcon.classList.remove("bx-x");
//   navbar.classList.remove("active");
// };

const _0x34da79 = _0x5497;
function _0x43ec() {
  const _0x3a2422 = [
    "toggle",
    "119316AKJJgX",
    "7583597RSFBBw",
    "#menu-icon",
    "sticky",
    "section",
    "email",
    "741834dbOJen",
    "template_0oqjg03",
    "catch",
    "11RqIspS",
    "offsetTop",
    "45BanGqX",
    "bx-x",
    "send",
    "querySelectorAll",
    "message",
    ".navbar",
    "1153044cAECrU",
    "addEventListener",
    "offsetHeight",
    "focus",
    "header\x20nav\x20a[href*=",
    "onclick",
    "value",
    "25889470rUFfVj",
    "getElementById",
    "log",
    "emailSubject",
    "header",
    "4456848SZGAaR",
    "72rlBVfO",
    "scrollY",
    "title",
    "querySelector",
    "3332424AspfuH",
    "header\x20nav\x20a",
    "service_pbwid9l",
    "active",
    "classList",
    "3dgxHKw",
    "Come\x20Back\x20;(",
    "number",
    "remove",
  ];
  _0x43ec = function () {
    return _0x3a2422;
  };
  return _0x43ec();
}
function _0x5497(_0x3ad4af, _0x13347f) {
  const _0x43ec6e = _0x43ec();
  return (
    (_0x5497 = function (_0x5497ec, _0x5756c2) {
      _0x5497ec = _0x5497ec - 0x169;
      let _0x4f4fd7 = _0x43ec6e[_0x5497ec];
      return _0x4f4fd7;
    }),
    _0x5497(_0x3ad4af, _0x13347f)
  );
}
(function (_0x4ca864, _0x26d60a) {
  const _0x13b0c9 = _0x5497,
    _0x47a4c8 = _0x4ca864();
  while (!![]) {
    try {
      const _0x2f1942 =
        (parseInt(_0x13b0c9(0x176)) / 0x1) * (-parseInt(_0x13b0c9(0x181)) / 0x2) +
        parseInt(_0x13b0c9(0x171)) / 0x3 +
        (-parseInt(_0x13b0c9(0x17b)) / 0x4) * (-parseInt(_0x13b0c9(0x186)) / 0x5) +
        parseInt(_0x13b0c9(0x16c)) / 0x6 +
        parseInt(_0x13b0c9(0x17c)) / 0x7 +
        (-parseInt(_0x13b0c9(0x16d)) / 0x8) * (-parseInt(_0x13b0c9(0x18c)) / 0x9) +
        (-parseInt(_0x13b0c9(0x193)) / 0xa) * (parseInt(_0x13b0c9(0x184)) / 0xb);
      if (_0x2f1942 === _0x26d60a) break;
      else _0x47a4c8["push"](_0x47a4c8["shift"]());
    } catch (_0x159a93) {
      _0x47a4c8["push"](_0x47a4c8["shift"]());
    }
  }
})(_0x43ec, 0xa059a);
let docTitle = document[_0x34da79(0x16f)];
window[_0x34da79(0x18d)]("blur", () => {
  const _0x1719b3 = _0x34da79;
  document["title"] = _0x1719b3(0x177);
}),
  window[_0x34da79(0x18d)](_0x34da79(0x18f), () => {
    document["title"] = docTitle;
  });
function sendMail() {
  const _0x5b3380 = _0x34da79;
  var _0x148fac = {
    name: document["getElementById"]("name")[_0x5b3380(0x192)],
    email: document[_0x5b3380(0x194)](_0x5b3380(0x180))["value"],
    number: document[_0x5b3380(0x194)](_0x5b3380(0x178))[_0x5b3380(0x192)],
    emailSubject: document[_0x5b3380(0x194)](_0x5b3380(0x16a))[_0x5b3380(0x192)],
    message: document[_0x5b3380(0x194)]("message")["value"],
  };
  const _0x1c8d5f = _0x5b3380(0x173),
    _0x4a9532 = _0x5b3380(0x182);
  emailjs[_0x5b3380(0x188)](_0x1c8d5f, _0x4a9532, _0x148fac)
    ["then"]((_0xe87f2e) => {
      const _0x4b11bc = _0x5b3380;
      (document["getElementById"]("name")[_0x4b11bc(0x192)] = ""),
        (document[_0x4b11bc(0x194)](_0x4b11bc(0x180))[_0x4b11bc(0x192)] = ""),
        (document["getElementById"](_0x4b11bc(0x178))[_0x4b11bc(0x192)] = ""),
        (document[_0x4b11bc(0x194)]("emailSubject")[_0x4b11bc(0x192)] = ""),
        (document[_0x4b11bc(0x194)](_0x4b11bc(0x18a))["value"] = ""),
        console[_0x4b11bc(0x169)](_0xe87f2e),
        alert("your\x20message\x20sent\x20successfully");
    })
    [_0x5b3380(0x183)]((_0x2da7a3) => console[_0x5b3380(0x169)](_0x2da7a3));
}
let menuIcon = document[_0x34da79(0x170)](_0x34da79(0x17d)),
  navbar = document[_0x34da79(0x170)](_0x34da79(0x18b));
menuIcon[_0x34da79(0x191)] = () => {
  const _0x2b5d6e = _0x34da79;
  menuIcon[_0x2b5d6e(0x175)][_0x2b5d6e(0x17a)](_0x2b5d6e(0x187)), navbar[_0x2b5d6e(0x175)][_0x2b5d6e(0x17a)](_0x2b5d6e(0x174));
};
let sections = document[_0x34da79(0x189)](_0x34da79(0x17f)),
  navLinks = document[_0x34da79(0x189)](_0x34da79(0x172));
window["onscroll"] = () => {
  const _0x1f6831 = _0x34da79;
  sections["forEach"]((_0x14771e) => {
    const _0x217af8 = _0x5497;
    let _0x27dd90 = window[_0x217af8(0x16e)],
      _0x299cc6 = _0x14771e[_0x217af8(0x185)] - 0x64,
      _0x44e7c2 = _0x14771e[_0x217af8(0x18e)],
      _0x32cc31 = _0x14771e["getAttribute"]("id");
    _0x27dd90 >= _0x299cc6 &&
      _0x27dd90 < _0x299cc6 + _0x44e7c2 &&
      navLinks["forEach"]((_0x14c188) => {
        const _0x4a5187 = _0x217af8;
        _0x14c188[_0x4a5187(0x175)]["remove"](_0x4a5187(0x174)), document[_0x4a5187(0x170)](_0x4a5187(0x190) + _0x32cc31 + "]")[_0x4a5187(0x175)]["add"]("active");
      });
  });
  let _0x388361 = document[_0x1f6831(0x170)](_0x1f6831(0x16b));
  _0x388361["classList"]["toggle"](_0x1f6831(0x17e), window[_0x1f6831(0x16e)] > 0x64), menuIcon[_0x1f6831(0x175)][_0x1f6831(0x179)]("bx-x"), navbar[_0x1f6831(0x175)][_0x1f6831(0x179)]("active");
};
