// let str = "AAABBYCC";
// let newsmth = "";
// count = 1;
// for (let i = 0; i <= str.length; i++) {
//   if (str[i + 1] == str[i]) {
//     count++;
//     // console.log(str[i]);
//   } else {
//     newsmth += str[i] + count;
//     count = 1;
//   }
// }
// console.log(newsmth);
// let str = "AB2C2D1";
// let newsmth = "";
// for (let i = 0; i <= str.length; i++) {
//   if (str[i + 1] !== str[i] && str[i + 1]) {
//     newsmth += str[i].repeat(str[i + 1]);
//   }
// }
// console.log(newsmth);
// 1-masala====================

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  Aboutinfo() {
    console.log(`${this.name} age is ${this.age}`);
  }
}
const Person1 = new Person("john", 34);
Person1.Aboutinfo();
// 2-masala=====================
class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, master);
    this.species = "Labrador";
    this.legs = 4;
    this.size = "Large";
    this.loyal = true;
  }
}
// 3-markAsUntransferable=====
