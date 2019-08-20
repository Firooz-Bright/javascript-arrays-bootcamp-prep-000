var chocolateBars =['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(arry, element){
  
  return [element,...arry]
}
function destructivelyAddElementToBeginningOfArray(arry,element) {
  return arry.unshift(element)
}
function addElementToEndOfArray(arry, element){
  return [...arry, element];
}
 
function destructivelyAddElementToEndOfArray(arry, element){
   return chocolateBars.push(element);
 
}
function accessElementInArray(array, index){
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(arry){
   return arry.shift();
 
}
 