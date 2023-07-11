document.addEventListener("DOMContentLoaded", function() {
    var input = document.getElementById("textInput");
    var submitButton = document.getElementById("submitButton");
    var listContainer = document.getElementById("listContainer");
  
    submitButton.addEventListener("click", function() {
      var userInput = input.value;
      var newItem = document.createElement("li");
      newItem.textContent = userInput;
      listContainer.appendChild(newItem);
      input.value = "";
    });
  });
  