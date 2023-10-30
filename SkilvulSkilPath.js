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

function handleGetFormData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;
  
 return {
   name, 
   email, 
   city, 
   zipCode, 
   status
   };
}

function isNumber(zipCode){ //  yang menerima 1 argumen string.
  if (isNaN(zipCode)){
    return false;
  }else {
    return true;
  }
}

function checkboxIsChecked(){
   const formData = handleGetFormData();
   return formData.status === true;
}

function validateFormData(properti){ 
  if(properti.name !== "" && properti.email !== "" && properti.city !== "" && isNumber(properti.zipCode) && checkboxIsChecked(properti.status) === true){
    return true;
  } else {
    return false;
  }
}

function submit(){ // panggil function ini ketika <form> disubmit.

const data = handleGetFormData();

    if(validateFormData(data) === false){
        document.getElementById("warning").innerHTML = `
        <h5 style='background-color: #f87171; color: #fff; padding: 10px; border-radius: 10px;'>Periksa form anda sekali lagi</h5>
    `;
    } else{
        document.getElementById("warning").innerHTML = ``;
    }
  }
    document.getElementById("submit-form").addEventListener("click", function(event){
    submit();
    event.preventDefault();
  });

  //faqs
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