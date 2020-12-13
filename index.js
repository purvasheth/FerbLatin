translateButton = document.querySelector("#btn-translate");
textarea = document.querySelector("textarea");
outputDiv = document.querySelector("#output");

translateButton.addEventListener("click", function () {
  var url =
    "https://api.funtranslations.com/translate/ferb-latin.json" +
    "?text=" +
    textarea.value;
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      outputDiv.innerText = json.contents.translated;
    })
    .catch((error) =>
      alert("Error! Server is down. Please try again after sometime")
    );
});
