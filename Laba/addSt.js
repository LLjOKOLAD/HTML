document.addEventListener("DOMContentLoaded", function(){
    const addStudentForm = document.getElementById("addStudentForm");
    
    const addStudentButton = document.getElementById("addStudent");
    
    const table = document.querySelector("table tbody");

    addStudentForm.addEventListener("submit", function(event){
        event.preventDefault();
 
        const newRow = table.insertRow(table.rows.lenght);

        const idCell = newRow.insertCell(0);
        const FisrtNameCell = newRow.insertCell(1);
        const LastNameCell = newRow.insertCell(2);
        const UsernameCell = newRow.insertCell(3);

        idCell.textContent = document.getElementById("id").value;
        FisrtNameCell.textContent = document.getElementById("FirstName").value;
        LastNameCell.textContent = document.getElementById("LastName").value;
        UsernameCell.textContent = document.getElementById("Username").value;

        addStudentForm.reset();
    })
})