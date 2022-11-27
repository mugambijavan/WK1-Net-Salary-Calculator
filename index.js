function netSalary() {
	let salary = document.getElementById("salary").value;
	
	// calculating the net salary below 0. 
    
	if (salary < 0){
	
	    document.getElementById("net").innerHTML = `Net salary is 0`
	}
       
	 // calculating the net salary 24,000 using  NHIF rate of 2.5% and NSSF rate of 6%.
    
	else if (salary < 24000){
	    let tax = salary * 0.1;
	    let nssf = salary * 0.06;
	    let nhif = salary * 0.025;
	    let finSalary = salary - (tax + nssf + nhif);
    
	    document.getElementById("net").innerHTML = `Your net salary is ${finSalary}`
	}
    
	 // calculating the net salary above 24,000 and below 32333 using  NHIF rate of 2.5% and NSSF rate of 6%. 
    
	else if (salary >= 24000 && salary < 32333 ){
	    let tax = salary * 0.25;
	    let nssf = salary * 0.06;
	    let nhif = salary * 0.025;
	    let finSalary = salary - (tax + nssf + nhif);
    
	    document.getElementById("net").innerHTML = `Your net salary is ${finSalary}`
	}
    
	 // calculating the net salary above 32333 using  NHIF rate of 2.5% and NSSF rate of 6%.
    
	else if (salary > 32333){
	    let tax = salary * 0.3;
	    let nssf = salary * 0.06;
	    let nhif = salary * 0.025;
	    let finSalary = salary - (tax + nssf + nhif);
    
	    document.getElementById("net").innerHTML = `Your net salary is ${finSalary}`
	}
    
	else {
	    document.getElementById("net").innerHTML = `Enter salary`
	}
	
    }