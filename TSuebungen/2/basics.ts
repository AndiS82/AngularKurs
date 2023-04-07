//number, string, boolean
//arrays, objects
//function types, parameters

let age: number;

age = 18; 
//includes floats, like 18.5

let username: string;

username = "Andi";

let isInstructor: boolean;

isInstructor = false;

//deklariere array mit strings
let hobbies: string[];

hobbies = ["cooking", "coding"];

//object with just strings and numbers
let person: {
    name: string;
    age: number;
};

person = {
    name: "John",
    age: 69
}

//combine array with object
let personObjectAndArray: {
    name: string;
    age: number;
}[];

/* TYPES */

//type inference

let course = "TS course";

// course = 12345; geht nicht, da TS hier (aufgrund der Eingabe "TS course") einen string erwartet

//union

let TScourse: string | number | boolean| string[] = "TS course";

TScourse = 1234567;

// Type Alias

type Person = {
    name: string;
    age: number;
    isEmployee: boolean
}

let people: Person[];

//functions & types

function add(a: number, b: number)
//hover den corsor über add - hier sieht man den infered type in der return value. man kann ihn auch nach den im anschluss spezifizieren, z.B. add():number|string{}
{
    return a + b;
}

function printOutput(value: any) {
    console.log(value);
    //bei hover: return type = void, fast wie null oder undefined, ist aber nur in verbindung mit functions. Diese Funktion gibt nie was zurück, der return value bleibt also undefined
}

//Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]

const stringArray = insertAtBeginning(["a", "b", "c"], "d")

stringArray[0].split("");

//classes & interfaces

class Student {
    firstName: string;
    LastName: string;
    age: number;
    private courses: string[];

    constructor(first: string, last: string, age: number, courses: string[]) {
        this.firstName = first;
        this.LastName = last;
        this.age = age;
        this.courses = courses;
    }
    enroll(courseName: string) {
        this.courses.push(courseName)
    }

    listCourses() {
        return this.courses.slice();
    }
}

const student = new Student("Andi", "S", 32, ["Angular"]);
student.enroll("React");

interface Human{
    firstName: string;
    age: number;
    greet: () => void;
}

//Why interface instead of type? Interfaces can be implemented by classes and they force classes to have the structure defined by the interface -> you can ensure that everybody has the same class

let andi: Human;

andi = {
    firstName: "Andi",
    age: 40,
    greet() {
        console.log("Hello!")
    },
};

class Instructor implements Human {
    firstName: string;
    age: number;
    greet() {
        console.log("Hi!");
    }
}

export{}