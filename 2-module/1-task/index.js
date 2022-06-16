
function sumSalary (salaries) {

  let sum = 0;
     
  for (let key in salaries) {
    
    let isNumber = typeof(salaries[key]) == "number",
        isNoNaN = !Number.isNaN(salaries[key]),
        isNoInfinity = salaries[key] !== Infinity;
        isNoMinusInfinity = salaries[key] !== -Infinity;
    
    if (isNumber && isNoNaN && isNoInfinity && isNoMinusInfinity) {
      sum += salaries[key];
    } 
  }
    return sum;
  }