var data = document.getElementsByClassName("data");

for (var i = 1; i < data.length; i++) {
  data[i].classList.add("hidden");
}

window.addEventListener("load", function () {
  data[0].addEventListener("focus", function (){
    for (var i = 1; i < data.length; i++) {
      data[i].classList.remove("hidden");
    }
  })
});
