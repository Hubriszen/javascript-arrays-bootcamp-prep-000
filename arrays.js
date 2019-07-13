     var chocolateBars=["snickers","hundredgrand","kitkat","skittles"]

function addElementToBeginningOfArray(array,element){
  return[element,...array];
  
}

function destructivelyAddElementToBeginningOfArray(array2,element2){
  array2.unshift(element2)
  return array2 
  
}

function addElementToEndOfArray(array2,element2){
return [...array2, element2]}

function destructivelyAddElementToEndOfArray(array3,element3){
array3.push(element3);

return array3
}
function accessElementInArray(array5,index){return array5[index]}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return(array)
}
console.log (array)

function removeElementFromBeginningOfArray(array7){return array7.slice(1)}


function  destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return(array)}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}


















































