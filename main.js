// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwXRGzJtwYFoWm8S7Hw-Hp2qshRf_GeFA",
  authDomain: "bienestar-ef3c8.firebaseapp.com",
  projectId: "bienestar-ef3c8",
  storageBucket: "bienestar-ef3c8.appspot.com",
  messagingSenderId: "779228231966",
  appId: "1:779228231966:web:0a89d098b30160d7f8f10f",
  measurementId: "G-HGVDCYE20Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
