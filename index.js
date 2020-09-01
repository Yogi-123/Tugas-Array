// tugas multi dimensional array
let hero = [
    ["captain america", "super human"],
    ["iron man", "robot suit"],
    ["Hulk", "Brute Strength"],
    ["Thor", "Thunder"]
];
let hasilfilter = hero.filter(function(item) {
    return item[0].includes("a")
})
console.table(hasilfilter)

// contoh soal multi dimensional array
let nama = ["yogi", "rudi", "budi", "andi", "santi"];
let hasilfilter = nama.filter(function(item) {
    return item.includes("a")
})