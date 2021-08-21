//Get the button
let mybutton = document.getElementById("btn-back-to-top");
let myModal = new bootstrap.Modal(document.getElementById("modalKu"));

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

function showModal(jumlah, typeBtn = "", wemail = "", goods = "") {
	let h = document.querySelector("#jenis");
	let we = document.querySelector("#wemail");
	let g = document.querySelector("#goods");
	h.value = typeBtn;
	we.value = wemail;
	g.value = goods;

	let j = document.querySelector(".activeJumlah");
	if (!jumlah) {
		j.setAttribute("hidden", "true");
		return myModal.show();
	}

	j.removeAttribute("hidden");
	myModal.show();
}

function evalForm(f) {
	let nama = f.pengirim.value ? f.pengirim.value : "Anonim";
	let alamat = f.alamat.value ? f.alamat.value : "Indonesia";
	let jenis = f.jenis.value;
	let we = f.wemail.value;
	let g = f.goods.value ? f.goods.value : "barang elektronik";
	let n = f.jumlah.value ? f.jumlah.value : false;

	return hubungi(nama, alamat, jenis, g, n, we);
}

function s(url) {
	return console.log(url);
}

// Modal

// index.html
// Halaman Utama
// Navbar btn WA, Hero btn, Maps Section WA btn, Menu Bottom (Hubungi Kami)

// Service Page
// Navbar btn WA, Maps Section WA btn, Menu Bottom (Hubungi Kami)
function hubungi(na, a, j, g, n, we) {
	let def;
	if (we == "w") {
		def = "https://api.whatsapp.com/send?phone=6281283051589&text=";
	} else {
		def = "mailto:agungdp2799@gmail.com?subject=";
	}

	let ine = `Halo, Benadem Service! Saya ${na} beralamat di ${a}. Saya ingin `;
	let sell = `menjual ${n ? n + " " : ""}${g} ke Benadem Service.`;
	let buy = `membeli ${
		n ? n + " " : ""
	}${g}. Apakah tersedia? Dan berapa harganya?`;
	let serv = `melakukan service atau perbaikan ${g}`;

	if (j === "service") return s(def + ine + serv);
	if (j === "sell") return s(def + ine + sell);
	if (j === "buy") return s(def + ine + buy);
	return s(def + ine + "bertanya-tanya mengenai Benadem Service.");
}

// Halaman Utama
// Crousel slide 1

// Service Page
// Hero
function gunakanJasa() {
	// Pesan:
	// Halo, saya <nama> beralamat di <alamat>.
	// Saya ingin menggunakan jasa service Benadem Service.
	alert("GUNAKAN JASA");
}

// Section Page
// Card Service
function jasaService() {
	// Pesan:
	// Halo, saya <nama> beralamat di <alamat>.
	// Saya ingin menggunakan jasa service Benadem Service untuk <nama service - get name>
	alert("SERVICE");
}

// FILTER KATEGORI SERVICE
// PENCARIAN SERVICE
