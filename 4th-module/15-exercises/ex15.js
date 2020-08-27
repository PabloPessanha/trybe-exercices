function netSalaryInss(salary){
   if (salary <= 1556.94){
      return (salary - (salary * 0.08));

   } else if (salary >= 1556.95 && salary <= 2594.92){
      return (salary - (salary * 0.09));

   } else if (salary >= 2594.93 && salary <= 5189.82){
      return (salary - (salary * 0.11));

   } else if (salary > 5189.82){
      return (salary - 570.88);
   }
}

function netSalaryIR(salary){
   if(salary <= 1903.98){
      return salary;
   }else if(salary >= 1903.99 &&  salary <= 2826.65){
      return salary - ((salary * 0.075) - 142.80);

   }else if(salary >= 2826.66 && salary <= 3751.05){
      return salary - ((salary * 0.15) - 354.80);

   }else if(salary >= 3751.06 && salary <= 4664.68){
      return salary - ((salary * 0.225) - 636.13);

   }else if(salary > 4664.68){
      return salary - ((salary * 0.275) - 869.36);
   }
}

function netSalaryFinal(salary){
   var minimumWage = 1045.00;
   if(salary >= minimumWage){
      return netSalaryIR(netSalaryInss(salary));
   } else {
      return `${salary} not a minimum wage or a number!`;
   }
}

console.log(netSalaryFinal(3500));