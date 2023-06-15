document.getElementById('calcForm').addEventListener('submit', calculateResult);

function calculateResult(event) {
    event.preventDefault();
    
    var expression = document.getElementById('expressionInput').value;
    var resultContainer = document.getElementById('result');
    
    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'expression=' + encodeURIComponent(expression)
    })
    .then(function(response) {
        return response.text();
    })
    .then(function(result) {
        resultContainer.textContent = 'Result: ' + result;
    })
    .catch(function(error) {
        console.log('Error:', error);
    });
}
