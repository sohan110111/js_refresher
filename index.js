var testVariable = "testName";
function func(topic) {
    var testVariable = "changed";
    console.log(topic);
}

func("testFunc");
console.log(testVariable);