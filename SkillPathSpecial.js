//Fungsi Untuk Slide Show
let slideIndex = 0; // Mulailah dari slide pertama
let slides = document.getElementsByClassName("slide");

function showSlides() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1; // Kembali ke slide pertama jika sudah mencapai yang terakhir
  }
  slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
  slideIndex += n;
  if (slideIndex < 1) {
    slideIndex = slides.length;
  } else if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  showSlides();
}

showSlides(); // Panggil fungsi pertama kali untuk memulai slide show

// Set interval untuk otomatis ganti slide setiap 3 detik
setInterval(function () {
  showSlides();
}, 4000);



// Fungsi untuk Slide Card
let swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 3, // Menampilkan 3 slide sekaligus

  loop: true, // Mengaktifkan loop
});
// Menghilangkan tanda panah pada tombol navigasi
swiper.navigation.nextEl.innerHTML = ' '; // Tombol selanjutnya
swiper.navigation.prevEl.innerHTML = ' '; // Tombol sebelumnya

//   slideIndexCard += n;
//     if (n === -1) {
//        Logika untuk tombol "Prev"
//       slideIndexCard -= cardsPerPage;
//       if (slideIndexCard < 0) {
//           slideIndexCard = 0;  Tidak bisa ke bawah 0
//       }
//   } else if (n === 1) {
//        Logika untuk tombol "Next"
//       slideIndexCard += cardsPerPage;
//       if (slideIndexCard >= cards.length) {
//           slideIndexCard = cards.length - cardsPerPage; Tidak bisa ke atas melebihi jumlah kartu
//       }
//   }
//     showCards();
// }






// Tambahkan kode JavaScript kalian di file ini
function handleGetFormData(){ // membaca isi dari 5 <input> di atas.
  const name = document.getElementById("name").value;
  const city = document.getElementById("city").value;
  const zipCode = document.getElementById("zip-code").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const statusCheckBox = document.getElementById("status").checked;
  return{
    name,
    city,
    zipCode,
    email,
    password,
    statusCheckBox
  };
}

/*
 Gunakan DOM method getElementById untuk mengambil value inputan dan kembalikan sebuah objek yang memiliki properti name,email, city, zipCode dan status.
*/

/*
Pada form kita memiliki inputan zip-code dengan tipe number. Artinya data yang diterima hanya boleh diisi dengan angka saja. Disini kita perlu membuat validasi untuk memastikan tidak terjadi kesalahan input dari user yang tidak sengaja memasukkan alphabet.
*/

function isNumber(zipCode){ //  yang menerima 1 argumen string.
  if (zipCode && !isNaN(zipCode)){
    return true;
  }else {
    return false;
  }
}
//Fungsi tersebut akan mengembalikan boolean true jika semua karakter dalam string tersebut adalah angka, dan mengembalikan false jika tidak.
//hint : gunakan isNaN()untuk melakukan pengecekan angka.

/*
Kita perlu memastikan bahwa jika checkbox tidak dicentang maka proses submit tidak dijalankan.
*/

function checkboxIsChecked(statusCheckBox){
  if(statusCheckBox.checked === true){
  return true;
  }else {
    return false;
  }
}

/*
yang mengembalikan true apabila <input> dengan id status dicentang. Selain itu, kembalikan nilai false.
*/

/*
kita akan melakukan proses validasi untuk memastikan bahwa semua inputan sudah diisi oleh user.
*/

function validateFormData(properti){ 
  if(properti.name !== "" && properti.city !== "" && isNumber(properti.zipCode) && properti.email !== "" && properti.password !== "" && properti.statusCheckBox === true){
    return true;
  } else {
    return false;
  }
}
/*
menerima 1 argumen objek dengan properti: :
name
city
email
zipCode
status

Kembalikan true jika:

objek tidak bernilai null
nilai dari properti zipCode harus dalam bentuk angka
attribute checked dari <input> dengan id yaitu status harus true

Jika tidak, kembalikan false

Gunakan operator && dalam melakukan pengecekan ketiga perkondisian di atas
*/

/*
Pada tahap ini kita akan menjalankan proses submit inputan.
*/
function submit(){ // panggil function ini ketika <form> disubmit.

const data = handleGetFormData();
const dataString = JSON.stringify(data);
localStorage.setItem('FormData',dataString);
    if(validateFormData(data) === true){
        document.getElementById("warning").innerHTML = `
        <h5 style='background-color: #04AA6D; color: #fff; padding: 10px; border-radius: 10px;'>Data berhasil tersimpan</h5>
    `;
    } else{
        document.getElementById("warning").innerHTML = `
        <h5 style='background-color: #f87171; color: #fff; padding: 10px; border-radius: 10px;'>Harap periksa kembali input Anda.</h5>
        `;
    }
  }
    document.getElementById("submit-form").addEventListener("click", function(event){
    submit();
    event.preventDefault();
  });
// panggil validateFormData
// apabila validateFormData mengembalikan nilai false, maka fungsi submit akan menampilkan teks Periksa form anda sekali lagi di <div> dengan id warning.
//Jika validateFormData mengembalikan nilai true, maka teks di dalam <div> dengan idwarning akan dihapus.
/*
Gunakan addEventListener untuk menghubungkan function submit dengan form pada file HTML. Gunakan event.preventDefault() untuk mencegah refresh pada page saat user melakukan submit form.
*/
const acc = document.getElementsByClassName("accordion_faqs");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}