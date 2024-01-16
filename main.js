const alertButton = document.getElementById("close-bilingual");
const alertBanner = document.getElementById("bilingual-alert");

window.onload = function () {
  let alertBannerClosed = localStorage.getItem("alertBannerClosed");
  if (alertBannerClosed === "true") {
    alertBanner.style.display = "none";
  }
};

alertButton.addEventListener("click", () => {
  alertBanner.style.display = "none";
  localStorage.setItem("alertBannerClosed", "true");
});
