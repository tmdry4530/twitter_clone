let twitButtonEnabled = false;

// -------------- 트윗 작성 영역 컨트롤 시작 --------------
document.addEventListener("keyup", () => {
  const makeTwit = document.querySelector(".middle-make-twit");
  const textArea = document.querySelector("textarea");
  const twitText = document.querySelector("textarea");
  const makeTwitButton = document.querySelector(".twit-button");

  textArea.style.height = "0px";
  makeTwit.style.height = Number(91 + textArea.scrollHeight) + "px";
  textArea.style.height = Number(19 + textArea.scrollHeight) + "px";
  if (twitText.value) {
    makeTwitButton.style.opacity = "1";
    makeTwitButton.style.cursor = "pointer";
    twitButtonEnabled = true;
  } else {
    makeTwitButton.style.opacity = "0.5";
    makeTwitButton.style.cursor = "default";
    twitButtonEnabled = false;
  }
});
// -------------- 트윗 작성 영역 컨트롤 끝 --------------

// localStorage.clear();
// -------------- 트윗 작성 시작 --------------
let twitNum = localStorage.getItem("twitNum")
  ? localStorage.getItem("twitNum")
  : 0;
const twitText = document.querySelector("textarea");
const makeTwitButton = document.querySelector(".twit-button");
makeTwitButton.onclick = () => {
  if (twitButtonEnabled) {
    let makeTwit = {
      userName: "강수빈 ",
      userId: `@rkdtnqls ·`,
      createdAt: Date.now(),
      twitValue: twitText.value,
      heart: 0,
    };

    localStorage.setItem(`twit${twitNum}`, JSON.stringify(makeTwit));
    localStorage.setItem("twitNum", ++twitNum);

    location.reload();
  }
};
// -------------- 트윗 작성 끝 --------------

// -------------- 트윗 출력 시작 --------------
const twitList = document.querySelector(".middle-twitlist");
for (let i = twitNum; i > 0; i--) {
  const getTwit = JSON.parse(localStorage.getItem(`twit${i - 1}`));
  const printTwit = document.createElement("div");
  printTwit.classList.add("middle");
  printTwit.classList.add("middle-twit");
  twitList.appendChild(printTwit);

  const profileImage = document.createElement("div");
  profileImage.classList.add("profile-image");
  printTwit.appendChild(profileImage);
  const contentArea = document.createElement("div");
  contentArea.classList.add("content-area");
  printTwit.appendChild(contentArea);

  const info = document.createElement("div");
  info.classList.add("name");
  contentArea.appendChild(info);
  const text = document.createElement("textarea");
  text.rows = "1";
  text.classList.add("text");
  contentArea.appendChild(text);
  text.innerHTML = getTwit["twitValue"];
  const buttons = document.createElement("div");
  buttons.classList.add("buttons");
  contentArea.appendChild(buttons);

  text.style.height = Number(-15 + text.scrollHeight) + "px";
  printTwit.style.height = Number(80 + text.scrollHeight) + "px";

  const profile = document.createElement("div");
  profile.classList.add("profile");
  info.appendChild(profile);
  const options = document.createElement("div");
  options.classList.add("options");
  info.appendChild(options);
  options.innerText = "X";

  const userName = document.createElement("div");
  userName.classList.add("user-name");
  profile.appendChild(userName);
  userName.innerText = getTwit["userName"];
  const userId = document.createElement("div");
  userId.classList.add("user-id");
  profile.appendChild(userId);
  userId.innerText = getTwit["userId"];
  const createdAt = document.createElement("div");
  createdAt.classList.add("created-at");
  profile.appendChild(createdAt);
  const calcTime = (Date.now() - getTwit["createdAt"]) / 1000;
  if (calcTime < 10) {
    createdAt.innerText = "방금 전";
  } else if (calcTime < 60) {
    createdAt.innerText = parseInt(calcTime) + "초 전";
  } else if (calcTime < 3600) {
    createdAt.innerText = parseInt(calcTime / 60) + "분 전";
  } else if (calcTime < 86400) {
    createdAt.innerText = parseInt(calcTime / 60 / 60) + "시간 전";
  } else {
    createdAt.innerText = parseInt(calcTime / 60 / 60 / 24) + "일 전";
  }

  const comment = document.createElement("div");
  comment.classList.add("button");
  comment.classList.add("comment");
  buttons.appendChild(comment);
  comment.innerText = "X";
  const retwit = document.createElement("div");
  retwit.classList.add("button");
  retwit.classList.add("retwit");
  buttons.appendChild(retwit);
  retwit.innerText = "X";
  const heart = document.createElement("div");
  heart.classList.add("button");
  heart.classList.add("heart");
  buttons.appendChild(heart);
  heart.innerText = "♡";
  const views = document.createElement("div");
  views.classList.add("button");
  views.classList.add("views");
  buttons.appendChild(views);
  views.innerText = "X";
  const share = document.createElement("div");
  share.classList.add("button");
  share.classList.add("share");
  buttons.appendChild(share);
  share.innerText = "X";
}
// -------------- 트윗 출력 끝 --------------
