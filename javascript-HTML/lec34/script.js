const changeBgColor = () => {
    document.body.firstElementChild.style.background = "yellow";
}

const changeFontColor = () => {
    document.body.firstElementChild.style.color = "red";
}

let a = document.body;
console.log("First child of a is: ", a.firstChild);
console.log("First element child of a is: ", a.firstElementChild);