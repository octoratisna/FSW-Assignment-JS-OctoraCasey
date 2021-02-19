let numbers = [20, 30, 40, 50, 60, 70]

// nomor 1
Math.max.apply(numbers);
Math.min.apply(numbers);

console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

// nomor 2
console.log(numbers.sort(function (a, b) {
    return b - a
}));

// nomor 3
let date = new Date;
arrBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

console.log('Hari kemarin: ' + (date.getDate() - 1) + "-" + (arrBulan[date.getMonth()]) + "-" + (date.getFullYear()));
console.log('Hari ini: ' + (date.getDate()) + "-" + (arrBulan[date.getMonth()]) + "-" + (date.getFullYear()));
console.log('Hari esok: ' + (date.getDate() + 1) + "-" + (arrBulan[date.getMonth()]) + "-" + (date.getFullYear()));

// nomor 4
let number = [20, 30, 40, 50, 60, 70]
for (i = 1; i <= 6; i++) {
    console.log((number[i - 1] + i * 10 + 9).toString());
}

// var number = [20, 30, 40, 50, 60, 70]
// var xx = []
// for (i = 1; i <= 6; i++) {
//     xx[i] = number[i - 1] + i * 10 + 9;
// }
// console.log(xx.toString());