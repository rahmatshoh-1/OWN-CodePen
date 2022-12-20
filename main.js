// get Elements from html
let menu = document.querySelectorAll(".menu li");
let codeBox = document.querySelectorAll(".codeBox");
let resultCodeFeild = document.getElementById("resultCodeFeild");
let htmlCodeFeild = document.getElementById("htmlCodeFeild");
let cssCodeFeild = document.getElementById("cssCodeFeild");
let jsCodeFeild = document.getElementById("jsCodeFeild");
let btnRun = document.getElementById("btnRun");

menu.forEach(function (listItem) {
  listItem.addEventListener("click", function () {
    let dataName = listItem.getAttribute("data-name");
    let addClassActive = listItem.classList.toggle("active");
    let b = document.querySelector("#" + dataName + "CodeBox");
    b.classList.toggle("d-none");
  });
});

function run() {
  btnRun.addEventListener("click", function () {
    let textareaHTML = (resultCodeFeild.innerHTML = htmlCodeFeild.value += "<style>" + cssCodeFeild.value + "</style>");
    resultCodeFeild.contentWindow.eval(jsCodeFeild.value);
  });
}

run();
