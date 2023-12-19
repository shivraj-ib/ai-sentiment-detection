// Get a reference to the button element
var myButton = document.getElementById("submitBtn");

// Add a click event listener
myButton.addEventListener("click", function () {
    let network = new brain.recurrent.LSTM();
    var retrievedObject = localStorage.getItem('netState');
    let networkState = JSON.parse(retrievedObject);
    network.fromJSON(networkState);
    let text = document.getElementById("textAreaField").value;
    document.getElementById("sentimante").innerHTML = network.run(text);
});