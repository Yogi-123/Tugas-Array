// buat array pekerjaan di bidang IT
let pekerjaanIt = [ "product manager", "frontend developer", "backend developer", "UI/UX", "DevOps"]
console.log(pekerjaanIt.length);
console.log(pekerjaanIt[0]);
console.log(pekerjaanIt[1]);
console.log(pekerjaanIt[2]);
console.log(pekerjaanIt[3]);
console.log(pekerjaanIt[4]);

//buat array team

let team1 = ["anton", "fajar", "reynold", "gabriel", "william", "abraham"]
let team2 = team1.slice(0,3);
let team3 = team1.slice(3,6);

console.log(`ketua kelompok ${team2[0]} dengan anggota ${team2[1]} dan ${team2[2]} `)
console.log(`ketua kelompok ${team3[0]} dengan anggota ${team3[1]} dan ${team3[2]} `)

// array baru hasil perkalian aray sebelumnya

let data1 = [3,5,7,9,11]
let data2 = data1.map(num => {
    return num * 5 ;
});
console.log(data2);

// cek nilai sama pada kedua array

let data1 = ["math", "english", "programming"]
let data2 = ["geography", "spanish", "programming"]

if (data2.includes("math"||"english"||"programming" )) {
    console.log(true)
} else {
    console.log(false)
}

// array menampung data tweet

let yourTweet = []
let tweet = prompt("tulis tweet")

yourTweet.unshift(tweet)

//array menyimpan data registrasi



