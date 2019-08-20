var chocolateBars =['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(arry, element){
  
  return [element,...arry]
}
function destructivelyAddElementToBeginningOfArray(arry,element) {
  return arry.unshift(element)
}
function addElementToEndOfArray(arry, element){
  return [...chocolateBars, candyString];
}
 
function destructivelyAddElementToEndOfArray(chocolateBars, candyString){
  chocolateBars.push(candyString);
  return chocolateBars;
}