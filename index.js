async function getAdvice() {
  let url = "https://api.adviceslip.com/advice";
  let response = await fetch(url);
  let data = await response.json();
  document.getElementById("advice-number").innerHTML = data.slip.id;
  document.getElementById("advice-text").innerHTML = data.slip.advice;
}

document.getElementById("advice-button").addEventListener("click", function () {
  getAdvice();
});
