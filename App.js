let vowels = new Map([
    ['A', 'a'],
    ['O', 'o'],
    ['I', 'i'],
    ['E', 'e'],
    ['U', 'u']
]);
let counter = 0;
let curserPos = 0;
let deletedElement = '';
window.onload = function () {
    let wholetext = document.getElementById("Data").value;
    contVowelsLoop(wholetext);
};
function countVolews(event) {
    var t = setInterval(istextEmpty(), 1000);
    if (vowels.has(event.key.toUpperCase())) {
        counter = counter + 1;
        console.log(counter);
    }
    document.getElementById("counterdiv").innerHTML = counter.toString();
}
function contVowelsLoop(text) {
    counter = 0;
    for (var i = 0; i < text.length; i++) {
        if (vowels.has(text.charAt(i).toUpperCase())) {
            counter++;
            document.getElementById("counterdiv").innerHTML = counter.toString();
        }

    }
}
document.addEventListener('paste', (event) => {
    let orginalString = document.getElementById("Data").value;
    setInterval(contVowelsLoop(event.clipboardData.getData('text/plain').concat(orginalString)), 1000);
    document.getElementById("counterdiv").innerHTML = counter.toString();
});


function istextEmpty() {
    let isempty = document.getElementById("Data").value.trim();
    if (isempty.length == 0) {
        counter = 0;
        document.getElementById("counterdiv").innerHTML = counter.toString();
    }
}
addEventListener('keydown', function (event) {
    const key = event.key;
    if (key === "Backspace" || key === "Delete") {
        istextEmpty();
        contVowelsLoop(document.getElementById("Data").value);
        if (vowels.has(deletedElement.toUpperCase())) {
            counter = counter - 1;
            document.getElementById("counterdiv").innerHTML = counter.toString();
        }
        var field = document.getElementById("Data");
        var startPos = field.selectionStart;
        var endPos = field.selectionEnd;
        var field_value = field.value;
        var selectedText = field_value.substring(startPos, endPos);
        counter = counter - numberOfVowelsInString(selectedText);
        document.getElementById("counterdiv").innerHTML = counter.toString();
    }
});
function numberOfVowelsInString(text) {
    let newcounter = 0;
    console.log("visit");
    for (var i = 0; i < text.length; i++) {
        if (vowels.has(text.charAt(i).toUpperCase())) {
            newcounter++;
        }
    }
    console.log("new conter:" + newcounter);
    return newcounter;
}
addEventListener('copy', function (event) {
    var field = document.getElementById("Data");
    var startPos = field.selectionStart;
    var endPos = field.selectionEnd;
    var field_value = field.value;
    var selectedText = field_value.substring(startPos, endPos);
    console.log(selectedText);

});
addEventListener('keyup', function (event) {
    var y = document.getElementById("Data").value;
    curserPos = event.target.selectionStart;
    deletedElement = y.substring(curserPos - 1, curserPos);

});
