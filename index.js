/* var testVariable = "testName";
function func(topic) {
    var testVariable = "changed";
    console.log(topic);
}

func("testFunc");
console.log(testVariable); */



/* const a = {
    name: "test",
    age: 20,
    func: function() {
        console.log(this.name);
    }
}

console.log(a.name);
a.name = "changed Name";
console.log(a.name);
a.func();
a.new = true;
console.log(a.new); */


// const hello = function hello() {
//     console.log("Hello World!");
// }

// hello();

const hello = (a, b) => a+b;
console.log(hello(5,6));