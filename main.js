// get Elements from html
let menu = document.querySelectorAll(".menu li");
let codeBox = document.querySelectorAll(".codeBox");
let resultCodeFeild = document.getElementById("resultCodeFeild");
let htmlCodeFeild = document.getElementById("htmlCodeFeild");
let cssCodeFeild = document.getElementById("cssCodeFeild");
let jsCodeFeild = document.getElementById("jsCodeFeild");
let btnRun = document.getElementById("btnRun");

// htmlCodeFeild.innerHTML=`<div id="test">Test HTML</div>`
// cssCodeFeild.innerHTML=`#test { background-color: red; }`

menu.forEach(function (listItem) {
  listItem.addEventListener("click", function () {
    let dataName = listItem.getAttribute("data-name");
    let addClassActive = listItem.classList.toggle("active");
    let b = document.querySelector("#" + dataName + "CodeBox");
    b.classList.toggle("d-none");
    // console.log (dataName)
    // console.log (b)
  });
});

function run() {
  btnRun.addEventListener("click", function () {
    let textareaHTML = (resultCodeFeild.innerHTML = htmlCodeFeild.value += "<style>" + cssCodeFeild.value + "</style>");

    //     $('#resultFrame').contents().find('html').html("<style>"+$
// ('#css').val()+"</style>"+$("#html").val());  
    


    console.log(htmlCodeFeild.value);
    // console.log(res);

    resultCodeFeild.contentWindow.eval(jsCodeFeild.value);
  });
}

run();
