// var testVariable = "testName";
// function func(topic) {
//     var testVariable = "changed";
//     console.log(topic);
// }

// func("testFunc");
// console.log(testVariable);



const a = {
    name: "test",
    age: 20,
    func: function() {
        console.log(this.name);
    }
}

console.log(a.name);
a.name = "changed Name";
console.log(a.name);