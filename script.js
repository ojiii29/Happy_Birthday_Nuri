onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};


const textElement = document.getElementById("text");
const button = document.getElementById("whatsapp-button");

// SEMBUNYIKAN TOMBOL SAAT AWAL
button.classList.remove("show");

let textLines = [
  "Ciee yang hari ini ultah...",
  "Selamat ulang tahun kamuu",
  "Semoga di tahun dan bulan ini",
  "Tuhan mewujudkan doa doa mu yang blum terwujud",
  "Dan semoga di tahun ini",
  "Kamu menjadi lebih baik dari sebelumnya",
  "Untuk kamuu",
  "Happy birthday 🎉"
];

let index = 0;

function typeLine() {
  if (index < textLines.length) {
    textElement.innerHTML += textLines[index] + "<br>";
    index++;

    setTimeout(typeLine, 900); // waktu jeda per-bariss
  } else {
    // TAMPILKAN TOMBOL SETELAH SELESAI
    button.classList.add("show");
  }
}

typeLine();
