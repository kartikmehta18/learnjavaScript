// const student = {
//     fullName :`kartik`,
//     marks: 96.2,
//     printMarks: function() {
//         console.log(this.marks);
//     },
// };


// //proto type function (it is a reference to an object)

// const employee ={
//     calcTax(){
//       console.log("tax rate is 10%");
//     },
// };

// const karanArjun1 ={
//     salary: 50000,
//     calcTax(){
//         console.log("tax rate is 18%");
//     },
// };
// const karanArjun2 ={
//     salary: 50000,
// };
// const karanArjun3 ={
//     salary: 50000,
// };

// karanArjun1.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;

// // class
// class ToyotaCar{
//     constructor(brand ,mileage){
//         console.log("new");
//         this.brandName = brand;
//         this.mileage = mileage
//     }
//     start() {
//         console.log("START");
//     }
//     stop( ) {
//         console.log("STOP");
//     }
// //    setBrand (brand){
// //         this.brandName = brand;
// //     }
// }; 
// let fortuner = new ToyotaCar("fortuner",10); //creating instance of the class =  object
// console.log("fortuner");
// let lexus = new ToyotaCar("lexus",12);
// console.log("lexus");




// inheritance

class parent {
    hello(){
        console.log("hello ");

    }
}
class Child extends parent{}

let obj = new Child();
//ex 2   [if child & parent have same method, child method will be used (Methos overridind)]

class person {
    constructor(){
        this.species="homo sapiens";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }

}

class Engineer extends person {
    work(){
        console.log("solve the problems");
    }
}
class Doctor extends person {
    work(){
        console.log("treat patients");
    }
}

let kartikObj = new Engineer();
let kartikObj1 = new Doctor();

// super keyword

class person1 {
    constructor(name){
        console.log("parent  constructor called");
        this.name=name;
        this.species="homo";
    }
    eat(){
        console.log("eat");
    }

}

class Engineer1 extends person1 {
    constructor(name){
        console.log("child  constructor called");
        // calling parent class constructor using super keyword
        super(name); // to invoke parent class constructor ( jab apan ko child class const ko imp information parent ko bhaj ni ho we use super();)
       
    }
    work(){// accesing  property of parent class using super keyword
       super.eat();
        console.log("solve the problems");
    }
}
let engObj = new Engineer1("karitk");