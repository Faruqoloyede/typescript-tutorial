let first: string = 'faruq'
let company: string = "devfaruq company"
let x: boolean = true

// tuple
let person: [number, string, boolean] = [1, "faruq", true]

// tupple array

let employee: [number, string] []

employee = [
    [1, "faruq"],
    [2, "lekan"]
]

enum direction {
    up,
    down,
    left,
    right
} 

type user = {
    id: number,
    name: string,
    occupation: any
}[]

const users: user = [
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
]
console.log(users[0].id);
