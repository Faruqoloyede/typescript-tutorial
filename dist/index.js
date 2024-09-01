"use strict";
let first = 'faruq';
let company = "devfaruq company";
let x = true;
// tuple
let person = [1, "faruq", true];
// tupple array
let employee;
employee = [
    [1, "faruq"],
    [2, "lekan"]
];
var direction;
(function (direction) {
    direction[direction["up"] = 0] = "up";
    direction[direction["down"] = 1] = "down";
    direction[direction["left"] = 2] = "left";
    direction[direction["right"] = 3] = "right";
})(direction || (direction = {}));
const users = [
    {
        id: 1,
        name: "faruq",
        occupation: "frontend dev"
    },
    {
        id: 2,
        name: "lekan",
        occupation: "programmer"
    }
];
console.log(users[0].id);
