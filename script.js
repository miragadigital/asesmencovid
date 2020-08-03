

function nilai(){
    function loader() {
        const lihat = document.getElementById("lds-facebook");
        const lihat2 = document.getElementById("lds-dual-ring");
        lihat.style.display ="block";
        lihat2.style.display ="block";
    }
    loader();
    function loader2() {
        const lih = document.getElementById("lds-facebook");
        const lih2 = document.getElementById("lds-dual-ring");
        lih.style.display ="none";
        lih2.style.display ="none";
    }
    setTimeout(loader2,2000);
    function hitung(){
    // fungsi parseFloat = untuk mengubah nilai value jadi angka yg bisa di jumlah
    const a = parseFloat(document.getElementById("ask1").value);
    const b = parseFloat(document.getElementById("ask2").value);
    const c = parseFloat(document.getElementById("ask3").value);
    const d = parseFloat(document.getElementById("ask4").value);
    const e = parseFloat(document.getElementById("ask5").value);
    const f = parseFloat(document.getElementById("ask6").value);
    const x = a+b+c+d+e+f;
    if (isNaN(x)) {
        alert("Ada beberapa pertanyaan yang belum anda jawab!!");
    }  else {
            document.getElementById('hasilkalkulasi').innerHTML = x;
            // mengambil tanggal dan jam saat klik
            const dt = new Date();
            document.getElementById("tanggalwaktu").innerHTML = dt.toLocaleString();
            // mengambil nama pegawai
            const nama = document.getElementById("namapegawai").value;
            document.getElementById("namashow").innerHTML = nama;
            if (x<4) {
                document.getElementById("rekomendasi").innerHTML = "ANDA DIPERBOLEHKAN MASUK KERJA";
                document.getElementById("logo").src = "hijau.png";
            } else if(x==4) {
                document.getElementById("rekomendasi").innerHTML = "ANDA DIPERBOLEHKAN MASUK KERJA TETAP JAGA JARAK";
                document.getElementById("logo").src = "kuning.png";
            } else {
                document.getElementById("rekomendasi").innerHTML = "ANDA TIDAK DIIZINKAN MASUK KERJA";
                document.getElementById("logo").src = "merah.png";
            }
            const tampil = document.getElementById("popupmodal");
            tampil.classList.toggle("active");
            const blur = document.getElementById("atas");
            const blur2 = document.getElementById("bawah");
            blur.style.filter = "blur(5px)";
            blur2.style.filter = "blur(5px)";
        }
    }
    setTimeout(hitung, 2500);
}

function sembunyi(){
    const tampil = document.getElementById("popupmodal");
    tampil.classList.toggle("active");
    const blur = document.getElementById("atas");
    const blur2 = document.getElementById("bawah");
    blur.style.filter = "blur(0)";
    blur2.style.filter = "blur(0)";
}


