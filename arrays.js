var chocolateBars =['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(arry, element){
  var arr=[]
  arr.push(arry)
  return arr.unshift(element)
}
function destructivelyAddElementToBeginningOfArray(arry, element){
  var arr=[]
  arr.push(arry)
  return arr.unshift(element)
}
