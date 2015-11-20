var venv = {
};
//parser for javascript;
//var aVar = /\var [a-z]*;

function setVariable(name, value){
  if(value == null){
    venv[name] = "";
  } else {
    venv[name] = value;
  }
}

function getVariable(name){
  return venv[name];
}

function forSimpleLoop(left, right, oper, code){
  var val = 0;
  while(ifCompare(left, right, oper)){
    setVariable(left,(getVariable(left)+1));
    val += 0;
  }
  return val;
}

function evalCode(code){
  //this is where you figure out what kind of expression the code is.
  setVariable("a", 3);
  return forSimpleLoop("a", 6, "<","");
}

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
      return true
    } else {return false;}
  }else if(oper == ">="){
    if(left >= right){
      return true
    } else {return false;}
  }else if(oper == "<="){
    if(left <= right){
      return true
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
function binOp(left, right, oper){
  if(typeof left != 'number' || typeof right != 'number'){
    return "Illigal operation: Adding non number type";
  }
  if(oper == "+"){
    return left + right;
  } else if (oper == "-"){
    return left - right;
  } else if (oper == "*"){
    return left * right;
  } else if (oper == "/"){
    if(right != 0){
      return left / right;
    } else {
      return "Deviding by zero";
    }
  } else if (oper == "^"){
    return Math.pow(left,right);
  } else {
    return "Illigal operation: Not a valid math operator";
  }
}
function stringOp(left, right, oper){
  if(typeof left != 'string', )
}
//missing implementation is when there is more that one thing in the if
