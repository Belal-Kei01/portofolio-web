"use strict";
//////////////////////////////////////////////////////////////// light dark Mood
let changeMoodElem = document.querySelector(".changeMood");

changeMoodElem.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("dayLightMood");
});

/////////////////////////////////////////////////////////////////  Cyberspace
//////////////////////////////////////////////////////////////////

let displayMessage = document.querySelector(".temporaryMessage");
let messageText = document.querySelector(".message");

function displayMessageFunction() {
  setTimeout(() => {
    displayMessage.style.display = "flex";
  }, 400);

  setTimeout(() => {
    displayMessage.classList.add("messageShow");
  }, 500);

  setTimeout(() => {
    displayMessage.classList.remove("messageShow");
  }, 4000);

  setTimeout(() => {
    displayMessage.style.display = "none";
  }, 4100);
}

let loadingLogo = document.querySelector(".loadingLogo");
let imgLogo = document.querySelector(".imgLogo");

window.addEventListener("load", () => {
  loadingLogo.classList.add("loadingLogo");
  setTimeout(() => {
    loadingLogo.classList.remove("loadingLogo");
    imgLogo.classList.remove("imgLogo");
  }, 5000);

  displayMessageFunction();
});

let headerHeart = document.querySelector(".likeHeart");

headerHeart.addEventListener("click", () => {
  switch (headerHeart.style.backgroundImage) {
    case 'url("pics/heartLike2.png")':
      headerHeart.style.backgroundImage = 'url("pics/redHeart.png")';
      break;

    case 'url("pics/redHeart.png")':
      headerHeart.style.backgroundImage = 'url("pics/heartLike2.png")';
      break;

    default:
      headerHeart.style.backgroundImage = 'url("pics/redHeart.png")';
      break;
  }
  messageText.innerHTML = "appreciate your feedback";

  setLocalStorage(headerHeart);

  displayMessageFunction();
});

// *******************************************local storage********************************
function setLocalStorage(saveLike) {
  localStorage.setItem("save_like", "saveLike");
  console.log(saveLike);
}
// ****************************************************************************************

let headerMenu = document.querySelector(".headerMenu");
let headerSlideResponsive = document.querySelector(".headerSlideRight");

headerMenu.addEventListener("click", (e) => {
  e.preventDefault();
  headerSlideResponsive.classList.toggle("headerSlideLeft");
  headerMenu.classList.toggle("headermenuX");
});

// ****************************************************************************************************
let belalPic = document.querySelector(".belalPic");

localStorage.setItem("lastname", "Smith");
localStorage.getItem("lastname");

// *******************************************************************************************************
let logoLoading = document.querySelector(".loadingLogo");

document.onreadystatechange = function () {
  document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
      document.body.style.visibility = "hidden";
      logoLoading.style.visibility = "visible";
    } else {
      document.body.style.visibility = "visible";
      logoLoading.style.visibility = "hidden";
    }
  };
};

const targets = document.querySelectorAll(".card");

// گزینه‌ها: root=null -> viewport، threshold مقدار دیده شدن است
const observerOptions = {
  root: null,
  rootMargin: "0px 0px -10% 0px", // زودتر یا دیرتر تریگر کن
  threshold: 0.15, // وقتی 15% از عنصر دیده شد تریگر شود
};

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      // اگر فقط یک بار لازم است، می‌توانیم آن را unobserve کنیم:
      obs.unobserve(entry.target);
      document.body.classList.add("animatedElements");
      myFullBodyImg.classList.toggle("myFullBodyImg");
      document.body.classList.toggle("changeHomePage");
    }
  });
}, observerOptions);

targets.forEach((t) => observer.observe(t));

// ****************************************************************************

const targets2 = document.querySelectorAll(".projectsVidTemp");

// گزینه‌ها: root=null -> viewport، threshold مقدار دیده شدن است
const observerOptions2 = {
  root: null,
  rootMargin: "0px 0px -10% 0px", // زودتر یا دیرتر تریگر کن
  threshold: 0.15, // وقتی 15% از عنصر دیده شد تریگر شود
};

const observer2 = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      // اگر فقط یک بار لازم است، می‌توانیم آن را unobserve کنیم:
      obs.observe(entry.target);
    }
  });
}, observerOptions2);

targets2.forEach((t) => observer2.observe(t));

// *********************************scroll mode*****************************************
const ScrollActivatorElem = document.querySelector(".ScrollActivator");
const ActivatorBTNElem = document.querySelector(".ActivatorBTN");
ScrollActivatorElem.addEventListener("click", (event) => {
  event.preventDefault();
  document.body.classList.toggle("scrollBodyActivated");
  ActivatorBTNElem.classList.toggle("ActivatorBTNActiveMode");
});
