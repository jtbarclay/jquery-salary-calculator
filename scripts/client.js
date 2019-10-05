// check file sourcing
// console.log('js');
// console.log('jquery', $);

$(readyNow);

function readyNow(){
    writeToDom();
}

function writeToDom(){
    let body = $('body');

    //create header
    body.append(`<header><h1>Salary Calculator</h1></header>`);

    //create inputs and button with event listener
    body.append(`<h3>Add Employee</h3>`);

    body.append(inputCreator('firstName', 'First Name', 'text'));
    body.append(inputCreator('lastName', 'Last Name', 'text'));
    body.append(inputCreator('employeeId', 'ID', 'number'));
    body.append(inputCreator('employeeTitle', 'Title', 'text'));
    body.append(inputCreator('employeeSalary', 'Annual Salary', 'text'));
    
    body.append(`<button class="inputClass" id="submitButton">Submit</button>`);

}

function inputCreator(inputId, inputName, type){
    return `<input class="inputClass" id="${inputId}Input" type="${type}" placeholder="${inputName}"/>`
}