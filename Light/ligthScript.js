function changeimage() {
  let a = document.getElementById("img");
  if (a.src.match("./pic/bulbon.png")) {
    a.src = "./pic/bulboff.png";
    document.getElementsByTagName("body")[0].style.backgroundColor = "black";
  } else {
    a.src = "./pic/bulbon.png";
    document.getElementsByTagName("body")[0].style.backgroundColor = "gold";
  }
}
