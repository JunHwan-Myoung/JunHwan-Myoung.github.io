"use strict";
let today = new Date();//date 클래스형의 객체 today생성
console.log(today.toGMTString()); //객체 today에 메소드 .toCM~()호출

let str = new String("myoung");
console.log(str.toUpperCase()); //메소드 호출
console.log(str.length); //프로퍼티 접근

let arr = new Array([1000, 'myoung']);
console.log(arr[0]);

//앞의 객체와 Math객체는 사용방법이 다름. 객체생성없이 클라스 변수, 클라스메소드 사용
//1. 앞의 경우 객체를 먼저 생성한 후 프로퍼티 또는 메소드를 사용
//2. Math는 객체 생성 없이 사용할 수 있다. 크라스이름.메소드() 또는 클라스이름.프로퍼티
let a = Math.sqrt(2); //클라스이름.메소드()
console.log(a);
console.log(Math.PI); //클라스이름.프로퍼티

class Student {
    constructor(str) {
        this.name = str; //생성자에서 프로퍼티(name) 정의
    }
    print() { //메소드 정의
        console.log(this.name);
    }
}
let s = new Student("준환");
s.print();

//JS에서는 함수도 객체다.
function test1() {
    console.log('test1');
}
test1();

let test2 = function(){ 
    //우변 함수객체 생성, 좌변 함수객체의 레퍼런스를 저장
    console.log('test2');
}
test2();

let test3 = () => console.log('test3');
test3();

let kv = {name: 'myoung', age:27};
console.log(kv.name);
console.log(kv["name"]); //위와 같은 의미

console.log(kv.age);