var x = "25";
var y = "3.14";
var z = 100

var toNum = parseInt(x); //fungsi dari parseint adalah mengubah string menjadi number
var toFloat = parseFloat(y); //fungsi dari perseFloat adalah mengubah string menjadi desimal
toString(z) //toString berfungsi untuk mengubah numerik menjadi string
// fungsi deklarasi
function jumlah(a,b) {
    return a + b;
}

// fungsi ekspresi
var kurang = function (a,b) {
    return a - b;
};

alert(jumlah(5, 20));
alert(kurang(25, 5));
