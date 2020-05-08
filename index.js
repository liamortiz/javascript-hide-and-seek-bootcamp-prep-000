function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  let element = document.getElementById("nested")
  return element.getElementsByClassName("target")[0]
}

function increaseRankBy(n) {
  let parents = document.getElementsByClassName("ranked-list")
  console.log(parents[0].getElementsByTagName("li"))
}

function deepestChild() {
  
}