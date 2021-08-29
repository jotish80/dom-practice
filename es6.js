//  const doubleIt = () => 5;
//  const multiply = (num1, num2) => num2 * num1;
//  const doMath = (num1, num2) => {
//      const first = num1 / num2;
//      const second = num1 - num2;
//      const remain = first * second;
//      return remain;
//  };
 
//  const result3 = doMath(10,2);
//  console.log(result3);

//  const result1 = multiply(10,2);
//  console.log(result1);
//  const result = doubleIt();
//  console.log(result);
 
/// spread operator

// let firstFriend = [10,20,30,40];
// let secondFriend = [11,22,33,44];
// let thirdFriend = [12,23,34,45];
// let totalFriend = firstFriend.concat(secondFriend).concat(thirdFriend);
// console.log(totalFriend);
 
// let minister = 400;
// let montri = 500;
// let shochib = 600;
// let takaPoisha  = [500,600,400]
// let total = Math.max(...takaPoisha);
// console.log(total);


//introducing class

//  class Student{
//      constructor(id,name){
//         this.id = id;
//         this.name= name;
//         this.school = "stJoseph";
//      }
//  }

//  const student1  = new Student(1,"sumon");
//  const student2  = new Student(2, "karim");
//  console.log(student1,student2);

// javascript class inheritance

// class Parent{
//     constructor(){
//         this.fatherName =  "sarker";
//     }
// }

// class Baby extends Parent{
//     constructor(name){
//         super();
//         this.name= name;  
//     }
//     getFullName(){
//             return this.name + " " + this.fatherName;
//         }
// }
// const baby = new Baby("Tom");
// const baby2 = new Baby("Bom");
// console.log(baby.getFullName(),baby2.getFullName());

// object and array destructuring

const person = {name: "Tom", age: 41, address: 'italy', phone:0101010203, friends:['karim','jalil']};

 const {phone, name} = person;
 console.log(phone, name);

 const friends = ['karim', 'rahim', 'jalal'];
 const [firstFriend, ...restFriend] = friends;
 console.log(rest   Friend);