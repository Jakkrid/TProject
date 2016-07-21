function convert() {
    var input_usd = document.getElementById("input1");
    var rate = 31.20;
    var thb = input_usd.value * rate;

    var outElement = document.getElementById("myOutput");
    outElement.innerHTML = "เงินบาท " + thb;
}

function openAbout(){
    window.open("../about/about.html", "_self");
}

function openContact(){
    window.open("../contact/contact.html", "_self");
}