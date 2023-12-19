//Train AI
const trainingData = [
  { input: "I am super happy!", output: "positive" },
  { input: "Awsome this is great!", output: "positive" },
  { input: "What a pill!", output: "negative" },
  { input: "I am super unhappy!", output: "negative" },
  { input: "Are we there yet?", output: "positive" },
  { input: "Glad to know that.", output: "positive" },
  { input: "Glad to hear that.", output: "positive" },
  { input: "I am Glad. you made it.", output: "positive" },
  { input: "Lets move with this.", output: "positive" },
  { input: "This is not accepted", output: "negative" },
  { input: "I am not happy with this", output: "negative" },
  { input: "I am sorry to hear that", output: "negative" },
  { input: "Sorry for your loss", output: "negative" },
  { input: "Sad for you", output: "negative" },
  { input: "We made! it", output: "positive" },
  { input: "Cant wait to see this live", output: "positive" },
  { input: "I am happy for you", output: "positive" },
  { input: "Great job", output: "positive" },
  { input: "I am not happy with your performance", output: "negative" },
  { input: "I am not happy with your results", output: "negative" },
  {
    input: "Not happy with the progress you have made on this project",
    output: "negative",
  },
];

var trainBtn = document.getElementById("trainBtn");

trainBtn.addEventListener("click", function () {
    const net = new brain.recurrent.LSTM();
    net.train(trainingData, {
        iterations: 1000,
        erroThresh: 0.01,
        log: (stats) => console.log(stats),
    });

    // Save network state to JSON file.
    localStorage.setItem('netState', JSON.stringify(net));
});
