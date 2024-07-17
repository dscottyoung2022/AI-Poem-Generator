function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "06a75966f48t8e1bb0f5829fc38o234b";
  let prompt = `User instructions: Generate a wholesome poem about ${instructionsInput.value}`;
  let context =
    "You are a poem expert with several years of experience writing short poems. You mission is to generate a 4 line poem. Please separate each line of the poem with a <br />. Make sure to follow the use instructions. Sign the poem with 'SheCodes AI' inside a <strong> element. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink">⏳ Generating a wholesome poem about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
