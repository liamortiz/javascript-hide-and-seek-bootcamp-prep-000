function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  let element = document.getElementById("nested")
  return element.getElementsByClassName("target")[0]
}

function increaseRankBy(n) {
  let parents = document.getElementsByClassName("ranked-list")
  for(let i = 0; i < parents.length; i++) {
    let items = parents[i].getElementsByTagName("li")
    for(let j = 0; j < items.length; j++) {
      console.log(items[j])
    }
  }
}

function deepestChild() {
  
}