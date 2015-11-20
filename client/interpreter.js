/*
* this script is desighed to take "code of a special format IR trees. Or when "
*
*/
var venv = {
};

function setVariable(name, value){
  if(value === null){
    venv[name] = "";
  } else {
    venv[name] = value;
  }
}

function getVariable(name){
  return venv[name];
}
//inside a for loop
function forSimpleLoop(left, right, oper, code){
  var val = 0;
  while(ifCompare(left, right, oper)){
    if(val >= 10){
      setVariable(right)
      return "No more than 10 iterations in a for loop";
    }
    val += 0;
    evalCode(code); //this is not at all correct
  }
}

function whileLoop(left, right, oper, code){
  
}

//main entry to the script
function evalCode(code){
  //this is where you figure out what kind of expression the code is.
  setVariable("a", 3);
  return forSimpleLoop("a", 6, "<","");
}

//if statement
function ifCompare(leftIn, rightIn, oper){
  var left;
  var right;
  if(typeof leftIn == 'number'){
    left = leftIn;
  } else {
    left = getVariable(leftIn);
  }
  if(typeof rightIn == 'number'){
    right = rightIn;
  } else {
    right = getVariable(rightIn);
  }
  if(oper == "<"){
    if(left < right){
      return true;
    } else {return false;}
  } else if(oper == ">"){
    if(left > right){
      return true;
    } else {return false;}
  }else if(oper == ">="){
    if(left >= right){
      return true;
    } else {return false;}
  }else if(oper == "<="){
    if(left <= right){
      return true;
    } else {return false;}
  } else if(oper == "=="){
    if(left == right){
      return true;
    } else{return false;}
  } else if(oper == "!="){
    if(left != right){
      return true;
    } else {return false;}
  }
}
//math operations
function numOp(left, right, oper){
  if(typeof left != 'number' || typeof right != 'number'){
    return "Illegal operation: Expected a number";
  }
  if(oper == "+"){
    return left + right;
  } else if (oper == "-"){
    return left - right;
  } else if (oper == "*"){
    return left * right;
  } else if (oper == "/"){
    if(right !== 0){
      return left / right;
    } else {
      return "Dividing by zero";
    }
  } else if (oper == "^"){
    return Math.pow(left,right);
  } else {
    return "Illegal operation: Not a valid math operator";
  }
}
//string concat
function stringOp(left, right, oper){
  if(typeof left != 'string' || typeof right != 'string'){
    return "Illegal operation: Can not concatenate non string types";
  } else {
    return left + right;
  }
}
