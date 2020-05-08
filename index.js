function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  let element = document.getElementById("nested")
  return element.getElementsByClassName("target")[0]
}

function increaseRankBy(n) {
  let items = document.querySelectorAll("ul.ranked-list li")
  for (let i = 0; i < items.length; i++) {
    items[i].innerHTML = (parseInt(items[i].innerHTML) + n).toString()
  }
}

function deepestChild() {
  let parent = document.getElementById("grand-node").querySelectorAll("div")
  return parent[parent.length-1]
  
}