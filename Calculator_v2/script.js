function sendNumber() {
    var number = document.getElementById("numberInput").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/process", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            document.getElementById("result").innerHTML = xhr.responseText;
        }
    };
    xhr.send("number=" + encodeURIComponent(number));
}
