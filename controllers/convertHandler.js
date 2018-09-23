/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    
    var i = input.match(/[a-zA-Z]/);
    
    if(i !== null){
      result = input.slice(0, i.index).trim();
    }else
      result = input;

    if(result === '')
      result = 1;
    else if(result.match(/\//g) !== null && result.match(/\//g).length > 1)
      result = false;
    
    try {
      eval(result);
    }
    catch(err) {
      result = false;
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    
    var i = input.match(/[a-zA-Z]/);
    
    if(i !== null)
      result = input.slice(i.index).trim();
    else{
      result = false;
    }
    
    const units = ['gal', 'l', 'lbs', 'kg', 'mi', 'km'];
    if(units.indexOf(result.toLowerCase()) === -1){
      result = false;
    }

    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    switch(initUnit.toLowerCase()){
      case 'gal': result = 'l'; break;
      case 'l': result = 'gal'; break;
      case 'lbs': result = 'kg'; break;
      case 'kg': result = 'lbs'; break;
      case 'mi': result = 'km'; break;
      default: result = 'mi';
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    switch(unit.toLowerCase()){
      case 'gal': result = 'gallons'; break;
      case 'l': result = 'liters'; break;
      case 'lbs': result = 'pounds'; break;
      case 'kg': result = 'kilograms'; break;
      case 'mi': result = 'miles'; break;
      default: result = 'kilometers';
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    var initNum = eval(initNum);
    
    switch(initUnit.toLowerCase()){
      case 'gal': result = initNum * galToL; break;
      case 'l': result = initNum / galToL; break;
      case 'lbs': result = initNum * lbsToKg; break;
      case 'kg': result = initNum / lbsToKg; break;
      case 'mi': result = initNum * miToKm; break;
      default: result = initNum / miToKm;
    }
    
    result = Number(result.toFixed(5));
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit);
    
    return result;
  };
  
}

module.exports = ConvertHandler;
