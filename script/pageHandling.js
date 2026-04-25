const backHomePage = document.getElementById("steamicon");
const gamePage = document.getElementById("gamePage");
const contentPage = document.getElementById("content");

const gameDetailPage = document.getElementById("gamePage");

function showGamePage() {
  contentPage.style.display = "none";
  gameDetailPage.style.display = "block";
  ProfilePage.style.display = "none";
  searchResult.innerHTML = "";
}

backHomePage.addEventListener("click", function () {
  gamePage.style.display = "none";
  contentPage.style.display = "block";
  ProfilePage.style.display = "none";
});

const profilePageIcon = document.getElementById("profileIcon");
const ProfilePage = document.getElementById("profilePage");

profilePageIcon.addEventListener("click", function () {
  contentPage.style.display = "none";
  ProfilePage.style.display = "block";
  gamePage.style.display = "none";
});
