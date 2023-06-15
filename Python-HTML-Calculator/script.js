function appendToResult(value) {
    document.getElementById("result").value += value;
  }
  
  function calculateResult() {
    var expression = document.getElementById("result").value;
    
    // Create an HTTP request
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "calculate.py", true);
    
    // Set the content type header to send form data
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    // Define the callback function when the request completes
    xhr.onload = function() {
      if (xhr.status === 200) {
        document.getElementById("result").value = xhr.responseText;
      }
    };
    
    // Send the expression to the Python file
    xhr.send("expression=" + encodeURIComponent(expression));
  }
  
  function clearResult() {
    document.getElementById("result").value = "";
  }
  