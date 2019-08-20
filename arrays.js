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
   return arry.push(element);
 
}
function accessElementInArray(array, index){
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(arry){
   return arry.shift();
 
}
function removeElementFromBeginningOfArray(arry){
  return arry.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(arry){
 return arry.pop();
  
}
function removeElementFromEndOfArray(arry){
  return arry.slice(0, arry.length - 1);
}

 