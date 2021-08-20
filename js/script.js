//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Modal

// index.html
// Halaman Utama
// Navbar btn WA, Hero btn, Maps Section WA btn, Menu Bottom (Hubungi Kami)

// Service Page
// Navbar btn WA, Maps Section WA btn, Menu Bottom (Hubungi Kami)
function hubungiWa() {
  // Halo, saya <nama> beralamat di <alamat>.
  // Saya ingin <layanan> <nama barang>.
  // Layanan:
  // - Service atau Perbaikan = melakukan service atau perbaikan <nama barang>.
  // - Membeli Barang = membeli <nama barang>. Apakah tersedia? Dan berapa harganya?
  // - Menjual Barang = menjual <nama barang> ke Benadem Service.
  alert('WA')
}

// Halaman Utama
// Maps Section Email btn
function hubungiEmail() { 
  // Halo, saya <nama> beralamat di <alamat>.
  // Saya ingin <layanan> <nama barang>.
  // Layanan:
  // - Service atau Perbaikan = melakukan service atau perbaikan <nama barang>.
  // - Membeli Barang = membeli <nama barang>. Apakah tersedia? Dan berapa harganya?
  // - Menjual Barang = menjual <nama barang> ke Benadem Service.
  alert('EMAIL')
}

// Halaman Utama
// Section Produk
function beliProduk(){
  // Pesan:
  // Halo, saya <nama> beralamat di <alamat>.
  // Saya ingin membeli <nama barang - get name>. Apakah tersedia?  // Produk terakhir = lainnya. Tanpa nama barang.
  // Saya ingin tahu lebih detail barang yang dijual.
  alert('BELI BARANG')
}

// Halaman Utama
// Carousel slide 2, Menu Bottom (Jual Barang)
function jualBarang(){
  // Pesan:
  // Halo, saya <nama> beralamat di <alamat>.
  // Saya ingin menjual <nama barang> ke Benadem Service.
  alert('JUAL BARANG')
}

// Halaman Utama
// Crousel slide 1

// Service Page
// Hero
function gunakanJasa(){
  // Pesan:
  // Halo, saya <nama> beralamat di <alamat>. 
  // Saya ingin menggunakan jasa service Benadem Service.
  alert('GUNAKAN JASA')
}

// Section Page
// Card Service
function jasaService(){
  // Pesan:
  // Halo, saya <nama> beralamat di <alamat>. 
  // Saya ingin menggunakan jasa service Benadem Service untuk <nama service - get name>
  alert('SERVICE')
}


// FILTER KATEGORI SERVICE
// PENCARIAN SERVICE

