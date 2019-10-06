// check file sourcing
// console.log('js');
// console.log('jquery', $);

$(readyNow);

const monthlyCostLimit = 20000;

function readyNow(){
    userInputs();
    dataTable();

    $('tbody').on('click', '.deleteButton', deleteButtonHandler);
}

function userInputs(){
    let body = $('body');

    //create header
    body.append(`<header><h1>Salary Calculator</h1></header>`);

    //create inputs and button with event listener
    body.append(`<h3>Add Employee</h3>`);
    body.append(`<dive class="inputClass" id="inputDiv">`);
    body.append(inputCreator('firstName', 'First Name', 'text'));
    body.append(inputCreator('lastName', 'Last Name', 'text'));
    body.append(inputCreator('employeeId', 'ID', 'number'));
    body.append(inputCreator('employeeTitle', 'Title', 'text'));
    body.append(inputCreator('employeeSalary', 'Annual Salary', 'number'));
    
    body.append(`<button class="inputClass" id="submitButton">Submit</button>`);
    $('#submitButton').click(function(){
        //submit button actions
        addEmployee();
        console.log('submit click');
        
    });
    body.append(`</div>`);

}

function inputCreator(inputId, inputName, type){
    return `<input class="inputClass" id="${inputId}Input" type="${type}" placeholder="${inputName}"/>`
}

function dataTable(){
    let body = $('body');

    // create table with header labels
    body.append(`<h3>Employees</h3>`);
    body.append(`<table><tr><th>First Name</th><th>Last Name</th><th>ID</th><th>Title</th><th>Annual Salary</th><th></th></tr>`);

    // end table
    body.append(`</table>`);

    // display total monthly cost
    body.append(`<h3 id="totalMonthly">Total Monthly Placeholder</h3>`);
}

function addEmployee(){
    //$('table').add($('tr')).data({firstName: $('#firstNameInput').val(), lastName: $('#lastNameInput').val(), employeeId: $('#employeeIdInput').val(), employeeTitle: $('#employeeTitleInput').val(), employeeSalary: $('#employeeSalaryInput').val()});

    $('table').append(`<tr class="employee"></tr>`);
    $('tr').last().data({firstName: $('#firstNameInput').val(), lastName: $('#lastNameInput').val(), employeeId: $('#employeeIdInput').val(), employeeTitle: $('#employeeTitleInput').val(), employeeSalary: $('#employeeSalaryInput').val()});
    console.log('in addEmployee', $('tr').last().data());
    $('tr').last().append(`<td>${$('#firstNameInput').val()}</td><td>${$('#lastNameInput').val()}</td><td>${$('#employeeIdInput').val()}</td><td>${$('#employeeTitleInput').val()}</td><td>${$('#employeeSalaryInput').val()}</td><td><button class="deleteButton">Delete</button></td>`);
    monthlyCalculator();
}

function deleteButtonHandler(){
    console.log('in deleteButtonHandler');
    $(this).parent().parent().remove();
    monthlyCalculator();
}

function monthlyCalculator(){
    let monthlyCost = 0;
    // console.log('first log', monthlyCost);
    
    $('.employee').each(function(){
        // console.log('second log', $(this).data().employeeSalary);
        monthlyCost += Number($(this).data().employeeSalary)/12;
        // console.log('third log', monthlyCost);
        
    });
    $('#totalMonthly').text(monthlyCost);

    if(monthlyCost > monthlyCostLimit){
        $('#totalMonthly').parent().css("background-color", "red");
    }else{
        $('#totalMonthly').parent().css("background-color", "white");
    }
}