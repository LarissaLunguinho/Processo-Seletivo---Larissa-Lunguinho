var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
        {
            insertNewRecord(formData);
        } else {
            updateRecord(formData);
        }
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["FuncionarioNome"] = document.getElementById("FuncionarioNome").value;
    formData["FuncionarioSetorNome"] = document.getElementById("FuncionarioSetorNome").value;
    formData["FuncionarioSalario"] = document.getElementById("FuncionarioSalario").value;
    formData["FuncionarioEmail"] = document.getElementById("FuncionarioEmail").value;
    formData["FuncionarioIdade"] = document.getElementById("FuncionarioIdade").value;
    return formData;
}
function insertNewRecord(data) {
    var table = document.getElementById("funcionario-in-lista").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.FuncionarioNome;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.FuncionarioSetorNome;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.FuncionarioSalario;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.FuncionarioEmail;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.FuncionarioIdade;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a id="edit" onClick="onEdit(this)">Editar</a><a id="delet" onClick="onDelete(this)">Deletar</a>`;
}
function resetForm() {
    document.getElementById("FuncionarioNome").value = "";
    document.getElementById("FuncionarioSetorNome").value = "";
    document.getElementById("FuncionarioSalario").value = "";
    document.getElementById("FuncionarioEmail").value = "";
    document.getElementById("FuncionarioIdade").value = "";
    selectedRow = null;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("FuncionarioNome").value = selectedRow.cells[0].innerHTML;
    document.getElementById("FuncionarioSetorNome").value = selectedRow.cells[1].innerHTML;
    document.getElementById("FuncionarioSalario").value = selectedRow.cells[2].innerHTML;
    document.getElementById("FuncionarioEmail").value = selectedRow.cells[3].innerHTML;
    document.getElementById("FuncionarioIdade").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.FuncionarioNome;
    selectedRow.cells[1].innerHTML = formData.FuncionarioSetorNome;
    selectedRow.cells[2].innerHTML = formData.FuncionarioSalario;
    selectedRow.cells[3].innerHTML = formData.FuncionarioEmail;
    selectedRow.cells[4].innerHTML = formData.FuncionarioIdade;
}
function onDelete(td) {
    if (confirm('Você tem certeza que deseja excluir?')) {
        row = td.parentElement.parentElement;
        document.getElementById("funcionario-in-lista").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("FuncionarioNome").value == "") {
        isValid = false;
        document.getElementById("NomeValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("NomeValidationError").classList.contains("hide"))
        {
            document.getElementById("NomeValidationError").classList.add("hide");
        }
    }
    if (document.getElementById("FuncionarioSetorNome").value == "") {
        isValid = false;
        document.getElementById("SetorValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("SetorValidationError").classList.contains("hide"))
        {
            document.getElementById("SetorValidationError").classList.add("hide");
        }
    }
    if (document.getElementById("FuncionarioSalario").value == "") {
        isValid = false;
        document.getElementById("SalarioValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("SalarioValidationError").classList.contains("hide"))
        {
            document.getElementById("SalarioValidationError").classList.add("hide");
        }
    }
    if (document.getElementById("FuncionarioEmail").value == "") {
        isValid = false;
        document.getElementById("EmailValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("EmailValidationError").classList.contains("hide"))
        {
            document.getElementById("EmailValidationError").classList.add("hide");
        }
    }
    if (document.getElementById("FuncionarioIdade").value == "") {
        isValid = false;
        document.getElementById("IdadeValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("IdadeValidationError").classList.contains("hide"))
        {
            document.getElementById("IdadeValidationError").classList.add("hide");
        }
    }
    return isValid;
}
const botao = document.querySelector(".btn-fixed");

window.addEventListener("scroll", function (event) {
    if(this.window.scrollY == 0) {
        botao.classList.remove("visible");
    } else {
        botao.classList.add("visible");
    }
});