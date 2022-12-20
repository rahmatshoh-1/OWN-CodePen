// get Elements from html
let menu = document.querySelectorAll(".menu li");
let resultCodeFeild = document.getElementById("resultCodeFeild");
let htmlCodeFeild = document.getElementById("htmlCodeFeild");
let cssCodeFeild = document.getElementById("cssCodeFeild");
let jsCodeFeild = document.getElementById("jsCodeFeild");
let btnRun = document.getElementById("btnRun");

// add classes

menu.forEach(function (listItem) {
  listItem.addEventListener("click", function () {
    let dataName = listItem.getAttribute("data-name");
    let addClassActive = listItem.classList.toggle("active");
    document.querySelector("#" + dataName + "CodeBox").classList.toggle("d-none");
  });
});

// generate to publish result

function run() {
  btnRun.addEventListener("click", function () {
    let textareaHTML = (resultCodeFeild.innerHTML =
      htmlCodeFeild.value.replace(/^\s+|\s+$/gm, "") +
      "<style>" +
      cssCodeFeild.value.replace(/^\s+|\s+$/gm, "") +
      "</style>") + eval(jsCodeFeild.value);
  });
}

run();
