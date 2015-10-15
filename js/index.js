/**
 * Created by yeokyuli on 10/10/15.
 */

function addTable(){
    var toDay = new Date();
    var i;
    document.getElementById('table_month').innerHTML = (toDay.getMonth()+1)+"월"; //현재 월을 입력한다.

    var table_id = document.getElementById('index_table'); //추가할 테이블
    // Insert a row in the table at row index 0
    var newRow = table_id.insertRow(1);

    for(i =0 ; i < 19; i++) {
        // Insert a cell in the row at index 0
        var newCell = newRow.insertCell(i); //ROW 위치
        var date = toDay.getDay(); //요일을 구해서 바꿈.
        switch (date) {
            case 0 :
                date = "일";
                break;
            case 1 :
                date = "월";
                break;
            case 2 :
                date = "화";
                break;
            case 3 :
                date = "수";
                break;
            case 4 :
                date = "목";
                break;
            case 5 :
                date = "금";
                break;
            case 6 :
                date = "토";
                break;
            default :
                date = "error";
                break;
        }

        // Append a text node to the cell
        var newText = document.createTextNode(toDay.getDate() + "일(" + date + ")"); //추가
        newCell.appendChild(newText);
    }
}
/*
function addTable() {
    // get the reference for the body
    var mybody = document.getElementsByTagName("body")[0];

    // creates <table> and <tbody> elements
    mytable     = document.createElement("table");
    mycaption = document.createElement("caption");
    // mytable = document.getElementsByClassName("indexTable");
    mytablebody = document.createElement("tbody");

    mycaptiontext = document.createTextNode("금형 제조공정 일정");
    mycaption.appendChild(mycaptiontext);

    mycurrent_row = document.createElement("tr");
    mycurrent_cell = document.createElement("th");
    mycurrent_cell.setAttribute("rowSpan","2");
    currenttext = document.createTextNode("일정");
    mycurrent_cell.appendChild(currenttext);
    mycurrent_row.appendChild(mycurrent_cell);
    mytablebody.appendChild(mycurrent_row);

    // creating all cells
    for(var j = 0; j < 2; j++) {
        // creates a <tr> element
        mycurrent_row = document.createElement("tr");

        for(var i = 0; i < 10; i++) {
            // creates a <td> element
            mycurrent_cell = document.createElement("td");
            // creates a Text Node
            currenttext = document.createTextNode("cell is row " + j + ", column " + i);
            // appends the Text Node we created into the cell <td>
            mycurrent_cell.appendChild(currenttext);
            // appends the cell <td> into the row <tr>
            mycurrent_row.appendChild(mycurrent_cell);
        }
        // appends the row <tr> into <tbody>
        mytablebody.appendChild(mycurrent_row);
    }

    // appends <tbody> into <table>
    mytable.appendChild(mytablebody);
    //mycaption.appendChild("금형 제조공정 일정");
    // appends <table> into <body>
    mybody.appendChild(mytable);
    // sets the border attribute of mytable to 2;
    mytable.setAttribute("border","1");
}
*/