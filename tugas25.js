function panggilSortdanReverse() {
  var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
  console.log("Sebelumnya : "+ angka);
  bil_ascending = angka.sort();
  console.log("Ascending : "+bil_ascending );
  bil_descending = bil_ascending.reverse();
  console.log("Descending : "+bil_descending);
  bil_filter = angka.filter(angka_filter=>{
    return angka_filter > 10;
  });
  console.log("Filter > 10 : "+ bil_filter);
};

panggilSortdanReverse();
