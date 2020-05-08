function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  let element = document.getElementById("nested")
  return element.getElementsByClassName("target")[0]
}

function increaseRankBy(n) {
  let parents = document.getElementsByClassName("ranked-list")
  let items = parents.getElementsByTagName("li")
  for(let i = 0; i < items.length; i++) {
    console.log(items)
  }
}

function deepestChild() {
  
}