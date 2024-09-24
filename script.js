let addToDoButton = document.getElementById("liveToastBtn"); // Ekle butonu
let toDoContainer = document.getElementById("list"); // Görev listesi (ul)
let inputText = document.getElementById("task"); // Görev girmek için input alanı
let successToast = document.querySelector(".toast.success"); // Başarı toast bildirimi
let errorToast = document.querySelector(".toast.error"); // Hata toast bildirimi

addToDoButton.addEventListener("click", function () {
  let task = inputText.value.trim(); // Input alanındaki değeri al ve boşlukları temizle

  if (task === "") {
    // Boş input varsa hata toast bildirimi göster
    $(errorToast).toast("show");
  } else {
    // Yeni görev ekleme işlemi
    let li = document.createElement("li"); // Yeni bir <li> elementi oluşturuyoruz (yeni görev buraya eklenecek)
    li.innerHTML = `${task} <span class="close">&times;</span>`; // Görev içeriği ve silme işareti

    toDoContainer.appendChild(li); // Görevi listeye ekliyoruz

    // Görev başarıyla eklendi bildirimi gösteriyoruz
    $(successToast).toast("show");

    // Input alanını temizliyoruz ki yeni görev eklenebilsin
    inputText.value = "";
  }
});

// Görevler üzerine tıklandığında üstünü çizme ve silme işlemi
toDoContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("completed"); // 'completed' sınıfını ekle/kaldır
  }

  if (e.target.classList.contains("close")) {
    e.target.parentElement.remove(); // Çarpıya tıklanan görevi listeden kaldır
  }
});
