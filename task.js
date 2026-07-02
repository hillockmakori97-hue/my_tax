/*TASK 1: Using Python or PHP or Java or Ruby or JavaScript
Write a program that prompts the user to enter the base and height of a triangle and returns its area.*/
function add_numbers(x, y) {
    z = x + y
    console.log(z)
}


/*TASK 15: Using Python or PHP or Java or Ruby or JavaScript
Write a program that takes input of someone's basic salary and benefits, adds them to find the gross salary then uses  the gross salary to find the NHIF. 
To find the Kenya NHIF Rate using THIS LINK:  
Write a normal program but use functions if you feel comfortable.

TASK 16: Using Python or PHP or Java or Ruby or JavaScript
Continue with the program above, then use  the gross salary to find the NSSF. 
To find the Kenya NSSF Rate  using 6% of the Gross Salary. BUT ONLY A MINIMUM OF 18,000 Gross Salary CAN BE USED IN NSSF. 
Write a normal program but use functions if you feel comfortable.

Task 17: Using Python or PHP or Java or Ruby or JavaScript
Continue with the same program and calculate an individual’s NHDF using:
 i.e NHDF = gross_salary *  0.015
Write a normal program but use functions if you feel comfortable.

Task 18: Using Python or PHP or Java or Ruby or JavaScript
Calculate the taxable income.
i.e taxable_income = gross salary - (NSSF + NHDF + NHIF) 
Write a normal program but use functions if you feel comfortable.

TASK 19: Using Python or PHP or Java or Ruby or JavaScript
Continue with the same program and find the person's PAYEE using the taxable income above.
Find the Kenya PAYEE Tax Rate using THIS LINK
Write a normal program but use functions if you feel comfortable.

Task 20: Using Python or PHP or Java or Ruby or JavaScript
Continue with the same program and calculate an individual’s Net Salary using:
 net_salary = gross_salary - (nhif + nhdf +  nssf + payee)

Write a normal program but use functions if you feel comfortable.*/

document.getElementById('tax_form').addEventListener('submit', function (event) {
    event.preventDefault()

    let basic_salary = Number(document.getElementById('basic_salary').value)
    let benefits = Number(document.getElementById('benefits').value)
    function calculate_basic_salary(basic_salary, benefits) {
        return basic_salary + benefits
    }
    let gross_salary = calculate_basic_salary(basic_salary, benefits)
    document.getElementById('gross').innerHTML = gross_salary


    function nhif_calc(gross_salary) {
        let nhif
        if (gross_salary < 6000) {
            nhif = 150
        } else if (gross_salary > 6000 && gross_salary < 8000) {
            nhif = 300

        } else if (gross_salary >= 8000 && gross_salary < 12000) {
            nhif = 400
        } else if (gross_salary >= 120000 && gross_salary < 15000) {
            nhif = 500
        } else if (gross_salary >= 15000 && gross_salary < 20000) {
            nhif = 600
        } else if (gross_salary >= 20000 && gross_salary < 25000) {
            nhif = 700
        } else if (gross_salary >= 25000 && gross_salary < 30000) {
            nhif = 800
        } else if (gross_salary >= 30000 && gross_salary < 35000) {
            nhif = 900
        } else if (gross_salary >= 350000 && gross_salary < 40000) {
            nhif = 1000
        } else if (gross_salary >= 40000 && gross_salary < 45000) {
            nhif = 1100
        } else if (gross_salary >= 45000 && gross_salary < 50000) {
            nhif = 1200
        } else if (gross_salary >= 50000 && gross_salary < 60000) {
            nhif = 1300
        } else if (gross_salary >= 60000 && gross_salary < 70000) {
            nhif = 1400
        } else if (gross_salary >= 700000 && gross_salary < 80000) {
            nhif = 1500
        } else if (gross_salary >= 80000 && gross_salary < 90000) {
            nhif = 1600
        } else if (gross_salary >= 100000) {
            nhif = 1700
        }
        return nhif

    }

    function nssf_calc(gross_salary) {
        let nssf
        if (gross_salary > 18000) {
            nssf = 0.16 * gross_salary
        }

        else {
            nssf = 0
        }
        return nssf

    }


    function nhdf_calc(gross_salary) {
        let nhdf
        nhdf = gross_salary * 0.015
        return nhdf
    }
    let nhdf = nhdf_calc(gross_salary)
    document.getElementById('nhdf').innerHTML = nhdf.toFixed(2)

    let nhif = nhif_calc(gross_salary)
    document.getElementById('nhif').innerHTML = nhif.toFixed(2)

    let nssf = nssf_calc(gross_salary)
    document.getElementById('nssf').innerHTML = nssf.toFixed(2)


    function taxable_income_calc(gross_salary, nhif, nhdf, nssf) {
        let taxable_income
        taxable_income = (gross_salary) - (nhif, nhdf, nssf)
        return taxable_income
    }
    let taxable_income=taxable_income_calc(gross_salary,nhif,nhdf,nssf)
    document.getElementById('taxableincome').innerHTML=taxable_income.toFixed(2)
})