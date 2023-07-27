// -------------- 데이터 변수 설정 시작 --------------
let twitNum = localStorage.getItem("twitNum")
  ? localStorage.getItem("twitNum")
  : 0;
let currentUser = localStorage.getItem("currentUser")
  ? localStorage.getItem("currentUser")
  : "강수빈";
let currentUserId = localStorage.getItem("currentUserId")
  ? localStorage.getItem("currentUserId")
  : "@rkdtnqls";
let currentUserIntroduce = localStorage.getItem("currentUserIntroduce")
  ? localStorage.getItem("currentUserIntroduce")
  : "";
// -------------- 데이터 변수 설정 끝 --------------

// -------------- 프로필 설정 시작 --------------
const shortInfoName = document.querySelector("#short-info-name");
const profileName = document.querySelector("#profile-name");
const profileId = document.querySelector("#profile-id");
const profileIntroduce = document.querySelector("#profile-introduce");
const editButton = document.querySelector(".edit-button");
const editModal = document.querySelector(".edit-modal");

const modalBackground = document.querySelector(".modal-background");
const modalWrapper = document.querySelector(".modal-wrapper");
const modalClose = document.querySelector(".close");
const modalSaveButton = document.querySelector(".save-button");
const modalName = document.querySelector("#modal-name");
const modalId = document.querySelector("#modal-id");
const modalIntroduce = document.querySelector("#modal-introduce");
let modalClicked = false;

editButton.onclick = () => {
  editModal.style.display = "block";
  modalName.value = currentUser;
  modalId.value = currentUserId;
  modalIntroduce.value = currentUserIntroduce;
};
modalWrapper.onclick = () => {
  modalClicked = true;
};
modalBackground.onclick = () => {
  if (modalClicked) {
    modalClicked = false;
  } else {
    editModal.style.display = "none";
  }
};
modalClose.onclick = () => {
  editModal.style.display = "none";
};
modalSaveButton.onclick = () => {
  localStorage.setItem("currentUser", modalName.value);
  localStorage.setItem("currentUserId", modalId.value);
  localStorage.setItem("currentUserIntroduce", modalIntroduce.value);
  currentUser = localStorage.getItem("currentUser")
    ? localStorage.getItem("currentUser")
    : "강수빈";
  currentUserId = localStorage.getItem("currentUserId")
    ? localStorage.getItem("currentUserId")
    : "@rkdtnqls";
  currentUserIntroduce = localStorage.getItem("currentUserIntroduce")
    ? localStorage.getItem("currentUserIntroduce")
    : "";

  shortInfoName.innerText = currentUser;
  profileName.innerText = currentUser;
  profileId.innerText = currentUserId;
  profileIntroduce.innerText = currentUserIntroduce;

  editModal.style.display = "none";

  const twitList = document.querySelector(".middle-twitlist");
  twitList.innerText = "";
  printTwit();
};

shortInfoName.innerText = currentUser;
profileName.innerText = currentUser;
profileId.innerText = currentUserId;
profileIntroduce.innerText = currentUserIntroduce;
// -------------- 프로필 설정 끝 --------------

// -------------- 트윗 출력 시작 --------------
function printTwit() {
  const shortInfoTwits = document.querySelector("#short-info-twits");
  let twitCount = 0;
  const twitList = document.querySelector(".middle-twitlist");
  for (let i = twitNum; i > 0; i--) {
    const getTwit = JSON.parse(localStorage.getItem(`twit${i - 1}`));
    if (currentUserId !== getTwit["userId"]) {
      continue;
    }
    twitCount++;
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
    options.innerText = "...";

    const userName = document.createElement("div");
    userName.classList.add("user-name");
    profile.appendChild(userName);
    userName.innerText = getTwit["userName"];
    const userId = document.createElement("div");
    userId.classList.add("user-id");
    profile.appendChild(userId);
    userId.innerText = getTwit["userId"] + " ·";
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
    comment.innerText = "⎚";
    const retwit = document.createElement("div");
    retwit.classList.add("button");
    retwit.classList.add("retwit");
    buttons.appendChild(retwit);
    retwit.innerText = "♺";
    const heart = document.createElement("div");
    heart.classList.add("button");
    heart.classList.add("heart");
    buttons.appendChild(heart);
    heart.innerText = "♡";
    const views = document.createElement("div");
    views.classList.add("button");
    views.classList.add("views");
    buttons.appendChild(views);
    views.innerText = "⫻";
    const share = document.createElement("div");
    share.classList.add("button");
    share.classList.add("share");
    buttons.appendChild(share);
    share.innerText = "⎙";
  }
  shortInfoTwits.innerText = twitCount + " 트윗";
}
printTwit();
// -------------- 트윗 출력 끝 --------------
