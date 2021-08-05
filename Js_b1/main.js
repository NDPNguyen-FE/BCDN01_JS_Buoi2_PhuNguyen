//Bài 1: chức năng tính lương

/*
Khối 1: inputs
    Lương 1 ngày
    Số ngày làm

Khối 2: 
    B1: tạo biến và gán giá trị cho các biến
        salaryDate = 100000;
        workDay = 2
        salaryMonth = 0;
        var salaryText = document.getElementById("salaryText");
    B2:tính tiền lương theo ngày
        salary = salaryDate * workDay;

Khối 3: output
    In ra Tiền lương theo ngày
    salaryText.innerHTML = salaryMonth + " " + "VND";
*/

//tạo giá trị và gán

var salaryDate = 100000;
var workDay = 2;
var salaryMonth = 0;
var salaryText = document.getElementById("salaryText");

salaryMonth = salaryDate * workDay;

salaryText.innerHTML = salaryMonth + " " + "VND";
