/**
 * Created by yeokyuli on 10/10/15.
 */

/*
*   첫 줄의 월과 일, 요일을 그려주는 부분
*
 */
function addTable(){
    var toDay = new Date();
    var i;
    var month = toDay.getMonth()+1;
    var monLast =  [31,28,31,30,31,30,31,31,30,31,30,31];
    document.getElementById('table_month').innerHTML = (month)+"월"; //현재 월을 입력한다.

    //윤년 계산
    if ((toDay.getYear() % 4 == 0 && toDay.getYear() % 100 != 0) || toDay.getYear() % 400 == 0)
        monLast[1] = 29;
    else
        monLast[1] = 28;

    var table_id = document.getElementById('index_table'); //추가할 테이블
    // Insert a row in the table at row index 0
    var newRow = table_id.insertRow(1);
    var date = toDay.getDate();   //일 구하기
    for(i =0 ; i < 15; i++) {
        // Insert a cell in the row at index 0
        var newCell = newRow.insertCell(i); //ROW 위치
        var day = toDay.getDay()+i; //요일 구하기
        day = day % 7;
        switch (day) {
            case 0 :
                day = "일";break;
            case 1 :
                day = "월";break;
            case 2 :
                day = "화";break;
            case 3 :
                day = "수";break;
            case 4 :
                day = "목";break;
            case 5 :
                day = "금";break;
            case 6 :
                day = "토";break;
            default :
                day = "error";break;
        }

        var nowDate = date + i;//일 구하기
        //var lastDay = ( new Date( toDay.getFullYear(), month, 0) ).getDate(); //마지막날 구하는 부분
        var count = 1;
        /*
        var change = false;
        switch (month) {
            case 1 :
                if(nowDate == lastDate[0])
                break;
            case 2 :
                day = "월";
                break;
            case 3 :
                day = "화";
                break;
            case 4 :
                day = "수";
                break;
            case 5 :
                day = "목";
                break;
            case 6 :
                day = "금";
                break;
            case 7 :
                day = "토";
                break;
            case 8 :
                day = "토";
                break;
            case 9 :
                day = "토";
                break;
            case 10 :
                if(nowDate > lastDate[9]) {
                    change = true;
                }
                if(change){
                    nowDate = parseInt(0);
                    nowDate = parseInt(nowDate) + parseInt(count);
                    count++;
                    document.write('add?');
                }
                break;
            case 11 :
                day = "토";
                break;
            case 12 :
                day = "토";
                break;
            default :
                day = "error";
                break;
        }
*/

        // Append a text node to the cell
        var newText = document.createTextNode(nowDate + "일(" + day + ")"); //추가
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