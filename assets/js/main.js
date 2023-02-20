intro();
function intro() {
    let a = 1 + 3;
    console.log("Hello Coder");
    console.log("1+3= " + a);
};


intro2("Bob");
function intro2(paramName) {
    let varName = "SuperCoder";
    // console.log("Hi, " + varName + ". Mein Name ist ” + paramName + " .");
    console.log("Hi " + varName + ". Meine Name ist " + paramName + ".");
};

intro3("Bob", "Kingston", "78");
function intro3(name, stadt, alter) {
    console.log("Hallo, mein Name ist " + name + ". Ich bin " + alter + " Jahre alt. Ich komme aus " + stadt + ".");
}

math(10, 2);
function math(num1, num2) {
    console.log("Multiplikation = " + (num1 * num2));
    console.log("Division = " + (num1 / num2));
}

function userMultipilcation() {
    let userNum = document.getElementById("number").value;
    let userResult = userNum * 2;
    console.log(userResult);
    document.getElementById("result").innerHTML = userResult;
}

function yourAge() {
    let birthYear = document.getElementById("birthYear").value;
    const date = new Date();
    const year = date.getFullYear();
    let age = year - birthYear;
    document.getElementById("age").innerHTML = age;
}

function compareAge() {
    let birthYear1 = document.getElementById("birthYear1").value;
    let birthYear2 = document.getElementById("birthYear2").value;
    let compare = Math.abs(birthYear2 - birthYear1);
    document.getElementById("compare").innerHTML = compare;
}

let h1 = document.getElementById('hl');
function darkmode() {
    h1.classList.add('darkmode');
}

function reset() {
    h1.classList.remove('darkmode')
}