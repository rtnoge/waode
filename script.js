function sendMessage() {
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (phone === "") {
    alert("Masukkan nomor tujuan!");
    return;
  }

  const url = `https://wa.me/62${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");

  document.getElementById("phone").value = "";
  document.getElementById("message").value = "";
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then(() => console.log("Service Worker registered"))
    .catch((err) => console.log("Service Worker failed:", err));
}
