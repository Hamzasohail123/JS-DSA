

// i've an array that have 3 object name,age now i wanna add education in each object

let arr = [
    {
        name: "shahid",
        age: 25
    },
    {
        name: "shahid",
        age: 25
    },
    {
        name: "shahid",
        age: 25
    }
]

arr.forEach(element => {
    element.education = "BSCS"
});

console.log(arr);
