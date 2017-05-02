var data = document.getElementsByClassName("data");

for (var i = 1; i < data.length; i++) {
  data[i].classList.add("hidden");
}

function validations(element, regex) {
  var validation = regex;
  if (validation.test(element.value)) {
    console.log("ok " + element);
    element.classList.remove("input-error");
  }else {
    console.log("no pasa "+ element);
    element.classList.add("input-error");
  }
}
window.addEventListener("load", function () {
  data[0].addEventListener("focus", function (){
    for (var i = 1; i < data.length; i++) {
      data[i].classList.remove("hidden");
    }
  })
  data[0].addEventListener("blur", function (){
    validations(data[0], /[0-9]{7,9}/g);
  });
  data[1].addEventListener("blur", function (){
    validations(data[1], /[A-Z][a-z]+/g);
  });
  data[2].addEventListener("blur", function (){
    validations(data[2], /([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})/);
  });
});
