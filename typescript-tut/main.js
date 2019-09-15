"use strict";
// // ---Hello World
exports.__esModule = true;
// function log(message) {
//   console.log(message);
// }
// const message = 'Hello World';
// log(message);
// // --- Ts compiles let to var
// function doSomething() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(`Finally: ${i}`);
// }
// doSomething();
// // --- Ts types
// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1, 2, 3];
// let f: any[] = [1, '2', false]; // bad practice
// // - enum
// enum Color {
//   Red = 0,
//   Green = 1,
//   Blue = 2
// }
// const background = Color.Blue;
// // --- Type assertion
// let message = 'abc';
// let endsWithC = message.endsWith('c');
// let message2;
// message2 = 'abcd';
// let endsWithD = (<string>message).endsWith('d'); // type assertion, tell the compiler the type of a variable
// let alternativeWay = (message as string).endsWith('d'); // type assertion, 2nd variant
// // --- Custom types and access modifiers
// // create custom type with class
// class Point {
//   // private - make variable inaccessible from outside
//   // '?' symbol - make parameters optional
//   constructor(private x?: number, private y?: number) {}
//   draw() {
//     console.log(`X: ${this.x}, Y: ${this.y}`);
//   }
// }
// let point1 = new Point(1, 2);
// let point2 = new Point();
// point1.draw();
// point2.draw();
// // --- Getters, setters
// class Point {
//   constructor(private _x?: number, private _y?: number) {}
//   draw() {
//     console.log(`X: ${this._x}, Y: ${this._y}`);
//   }
//   get x() {
//     return this._x;
//   }
//   set x(value) {
//     if (value < 0) {
//       throw new Error('Value cannot be less then 0');
//     }
//     this._x = value;
//   }
// }
// const point3 = new Point();
// let x = point3.x;
// point3.x = 3;
// --- Modules
var point_1 = require("./point");
var point = new point_1.Point(1, 2);
point.draw();
