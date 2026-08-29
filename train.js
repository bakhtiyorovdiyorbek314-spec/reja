//MITTASK-1

//Masala:
// Harf sifatida kiritilgan birinchi parametr,
// kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
// Funktsiya tuzing

// Masalan: countLetter("e", "engineer")
// 'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
// 3 sonini qaytaradi

//YECHIM:

function nechta(letter, text) {
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === letter) {
      count++;
    }
  }

  return count;
}
console.log(nechta("a", "banana"));

//22-DARS Asynchronus functionlarni organamiz
// console.log("Jack Ma maslahatlari ");

// const list = [
//   "yaxshi talaba boling", //0-20
//   "tog'ri boshliq tanlang va ko'proq xato qiling", //20-30
//   "o'zingizni ishlaringizni boshlang", //30-40
//   "siz kuchli bolgan narsalarni qiling", //40-50
//   "yoshlarga investitsiya qiling", //50-60
//   "endi dam oling,foydasi yoq endi", //60~
// ];

// async function adviceMe(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     // return list[5];
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 3000);
//     });
//   }
// }

// //then/catch orqali call qilamiz

// console.log("passed 0");

// adviceMe(25)
//   .then((data) => {
//     console.log("javob:", data);
//   }) //then data bn ishlaydi
//   .catch((err) => {
//     console.log("ERROR:", err);
//   }); //catch err bn ishlaydi

// console.log("passed 1");

// adviceMe(35)
//   .then((data) => {
//     console.log("javob:", data);
//   }) //then data bn ishlaydi
//   .catch((err) => {
//     console.log("ERROR:", err);
//   }); //catch err bn ishlaydi

// then.catch -XULOSA : Node.js birinchi synchorus larni keyin asynchronus larni ishga tushurib berdadi
//sinxron function lar immediately ishga tushuvchi bolgani uchun ular 1-chiqadi
//asinxron function lar esa bizning thread ni band qilmaydi,yol beradi sinxronlarga

//run/await (Async) orqali call qilamiz:

// async function run() {
//   let javob = await adviceMe(65);
//   console.log(javob);
//   javob = await adviceMe(31);
//   console.log(javob);
//   javob = await adviceMe(41);
//   console.log(javob);
// }
// run();

//run/await (Async) XULOSA Agar biz then/catch orqali bir vaqtni ozida bir nechta request sorasak PromisHell royberadi
//Buning oldini olish un run/await (Async) dan foydalansak ham tushunarli ham sodda ham PromisHell ni oldini oladi.
//await sababli bunda 1-javobni olmaguncha 2- ga otmay turadi.

//CALLBACK orqali call qilamiz

// function adviceMe(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 2000);
//   }
// }

// adviceMe(73, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else console.log("javob:", data);
// });

//====================================================================================================================================//

// //21-DARS NodeJS event loop va CALLBACK FUNCTIONS

// console.log("Jack Ma maslahatlari ");

// const list = [
//   "yaxshi talaba boling", //0-20
//   "tog'ri boshliq tanlang va ko'proq xato qiling", //20-30
//   "o'zingizni ishlaringizni boshlang", //30-40
//   "siz kuchli bolgan narsalarni qiling", //40-50
//   "yoshlarga investitsiya qiling", //50-60
//   "endi dam oling,foydasi yoq endi", //60~
// ];

// function adviceMe(a, callback) {
//   if (typeof a !== "number")
//     callback("insert a number", null); //callback ikkita parametrni oz ichiga oladi:null va data
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 3000);
//   }
// }

// //call qismida ham 2 argument boladi,argument va callback function.
// //callback da argument sifatida function ishga tushadi

// // adviceMe(12, (err, data) => {
// //   if (err) console.log("ERROR:", err);
// //   else console.log("javob:", data);
// // });

// // adviceMe("nonumber", (err, data) => {
// //   if (err) console.log("ERROR:", err);
// //   else console.log("javob:", data);
// // });

// console.log("passed 0");

// adviceMe(70, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else console.log("javob:", data);
// });

// console.log("passed 1");

// //XULOSA : callback function lar single threadga  kopkina requestlar  kelganda ,threadni band qilib qoymaslik uchun tayyor response larni avval jonatib beradi,taribidan qatiy nazar.Bu callback nning foydali jihati bolib application tez ishlashga va resurs tejamkorligiga sabab boladi.Kop vaqt  talab qiladigan requestlar keyin jonatib beriladi.yani qaysi taom tayyor bolsa shuni birinchi chiqaradi.
