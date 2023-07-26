// -------------- 트윗 작성 영역 확장 --------------
document.addEventListener("keyup", () => {
  const makeTwit = document.querySelector(".middle-make-twit");
  const textArea = document.querySelector("textarea");

  textArea.style.height = "0px";
  makeTwit.style.height = Number(82 + textArea.scrollHeight) + "px";
  textArea.style.height = Number(-6 + textArea.scrollHeight) + "px";
});
// ---------------------------------------------

// -------------- 트윗 출력(임시) --------------
const twitText = document.querySelector(".text");
const twit = document.querySelector(".middle-twit");
twitText.style.height = Number(-36 + twitText.scrollHeight) + "px";
twit.style.height = Number(54 + twitText.scrollHeight) + "px";
// ------------------------------------------

const makeTwitButton = document.querySelector(".twit-button");
makeTwitButton.onclick = () => {
  const twitValue = document.querySelector("textarea").value;
};
