/**
Khối 1: input
    nhập chiều dài và chiều rộng

Khối 2: 
    b1: khai báo và gán giá trị cho các biến
        var btn = document.getElementById("btn");
        var dienTich = 0;
        var chuVi = 0;
        var chieudaiValue = parseInt(document.getElementById("chieuDai").value);
        var chieurongValue = parseInt(document.getElementById("chieuRong").value);
        var dienTichInner = document.getElementById("dientich");
        var chuViInner = document.getElementById("chuvi");
    b2: Tính diện tích và chu vi
        dienTich = chieudaiValue * chieurongValue;

        chuVi = (chieurongValue + chieudaiValue) / 2;
Khối 3: output
    In ra chu vi và diện tích hình chữ nhật
    dienTichInner.innerHTML = "Diện tích của hình chữ nhật là: " + dienTich;
    chuViInner.innerHTML = "Chu vi của hình chữ nhật là: " + chuVi;
 */

var btn = document.getElementById("btn");
btn.addEventListener("click", calcRuler);

function calcRuler() {
  var dienTich = 0;
  var chuVi = 0;
  var chieudaiValue = parseInt(document.getElementById("chieuDai").value);
  var chieurongValue = parseInt(document.getElementById("chieuRong").value);
  var dienTichInner = document.getElementById("dientich");
  var chuViInner = document.getElementById("chuvi");

  dienTich = chieudaiValue * chieurongValue;

  chuVi = (chieurongValue + chieudaiValue) / 2;

  dienTichInner.innerHTML = "Diện tích của hình chữ nhật là: " + dienTich;
  chuViInner.innerHTML = "Chu vi của hình chữ nhật là: " + chuVi;
}
