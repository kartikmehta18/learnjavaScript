// class user {
//     constructor(name,email) {
//         this.name=name;
//         this.email=email;
//     }
//     viewData(){
//         console.log(stu1);
//     }
// }
// let stu1 = new user("kartik","karikmehta659@gmial.com");
// let stu2 = new user("shubh", "shub@mail.com");


// 2
let data= "seceret data"
class User {
    constructor(name,email) {
        this.name=name;
        this.email=email;
    }
    viewData(){
      console.log(data);
    }
}

class Admin  extends User{
    constructor(name , email){
        super(name , email);
    }
    editData(){
        data= "new value";
    }
}
let admin1 = new Admin("admin","admin@gmial.com");


// error handeling

let a=5;
let b = 10;
console.log(a+b);
console.log(a+b);
try{
    console.log(a+v); //error
} catch (err){
    console.log(err)
}
console.log(a+b);
console.log(a+b);
console.log(a+b);