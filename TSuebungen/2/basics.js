"use strict";
//number, string, boolean
//arrays, objects
//function types, parameters
Object.defineProperty(exports, "__esModule", { value: true });
let age;
age = 18;
//includes floats, like 18.5
let username;
username = "Andi";
let isInstructor;
isInstructor = false;
//deklariere array mit strings
let hobbies;
hobbies = ["cooking", "coding"];
//object with just strings and numbers
let person;
person = {
    name: "John",
    age: 69
};
//combine array with object
let personObjectAndArray;
/* TYPES */
//type inference
let course = "TS course";
// course = 12345; geht nicht, da TS hier (aufgrund der Eingabe "TS course") einen string erwartet
//union
let TScourse = "TS course";
TScourse = 1234567;
let people;
//functions & types
function add(a, b) {
    return a + b;
}
function printOutput(value) {
    console.log(value);
    //bei hover: return type = void, fast wie null oder undefined, ist aber nur in verbindung mit functions. Diese Funktion gibt nie was zurück, der return value bleibt also undefined
}
//Generics
function insertAtBeginning(array, value) {
    const newArray = [value, ...array];
    return newArray;
}
const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");
stringArray[0].split("");
//classes & interfaces
class Student {
    constructor(first, last, age, courses) {
        this.firstName = first;
        this.LastName = last;
        this.age = age;
        this.courses = courses;
    }
    enroll(courseName) {
        this.courses.push(courseName);
    }
    listCourses() {
        return this.courses.slice();
    }
}
const student = new Student("Andi", "S", 32, ["Angular"]);
student.enroll("React");
//Why interface instead of type? Interfaces can be implemented by classes and they force classes to have the structure defined by the interface -> you can ensure that everybody has the same class
let andi;
andi = {
    firstName: "Andi",
    age: 40,
    greet() {
        console.log("Hello!");
    },
};
class Instructor {
    greet() {
        console.log("Hi!");
    }
}
