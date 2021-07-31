var x = Math.floor(Math.random() * 10 + 1);
var count = 1;
document.getElementById("submitguess").onclick = function () {
    var y = document.getElementById("guessfield").value;
    if (x == y) {
        alert(`congrates!You got right in ${count} attempt of Guess`);

    }
    else if (x > y) {
        count++;
        alert(`OOPS!Try a greater Number`);


    }
    else {
        count++;
        alert(`OOPS!Try a smaller Number`);

    }
}

