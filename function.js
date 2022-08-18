function dis(newValue) {
    console.log('clicked');
    document.getElementById('screen').value += newValue;
}

function clearAll() {
    document.getElementById('screen').value = "";

}

function solve() {
    var a = document.getElementById('screen').value;
    var b = eval(a);
    document.getElementById('screen').value = b;
}