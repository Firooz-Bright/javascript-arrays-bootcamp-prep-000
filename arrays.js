var chocolateBars =['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(arry, element){
  
  return [element,...arry]
}
function destructivelyAddElementToBeginningOfArray(arry,element) {
  return arry.unshift(element)
}
