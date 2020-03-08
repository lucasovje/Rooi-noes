function AddResult(){
    var table = document.getElementById("participantsTable");

    var row = table.insertRow(-1);

    var nameCell = row.insertCell(0)
    var numberCell = row.insertCell(1);
    var resultCell = row.insertCell(2);

    nameCell.innerHTML = document.getElementById("nameInput").value;
    numberCell.innerHTML = document.getElementById("numberInput").value;
    resultCell.outerHTML = DoLottery();
}

function DoLottery(){

    var result = Math.floor(Math.random() * 10);

    if(result > 5){
        return '<td class="win">prijs</td>';
    }
    else{
        return '<td class="lost">geen prijs</td>';
    }
    
}