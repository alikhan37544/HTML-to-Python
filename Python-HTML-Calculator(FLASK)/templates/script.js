document.getElementById("calculator-form").addEventListener("submit", calculateResult);

function calculateResult(event) {
    event.preventDefault();

    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;

    const data = {
        num1: num1,
        num2: num2,
        operation: operation
    };

    fetch("/calculate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(result => {
        document.getElementById("result").innerText = "Result: " + result;
    })
    .catch(error => {
        console.error("Error:", error);
    });
}
