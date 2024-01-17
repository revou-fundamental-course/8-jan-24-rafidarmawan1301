// index.js
function hitungLuas() {
    // Ambil nilai dari input
    var sisi = document.getElementById("sisiInput").value;

    // Tampilkan rumus
    var rumus = "L = S x S";

    // Cek apakah nilai input adalah angka
    if (!isNaN(sisi)) {
        // Jika angka, hitung luas persegi dan tampilkan hasilnya
        var luas = sisi * sisi;
        var hasil = "L = " + sisi + " x " + sisi + " = " + luas;
        document.getElementById("hasilLuas").innerText = rumus + "\n" + hasil;
    } else {
        // Jika bukan angka, beri pesan kesalahan
        document.getElementById("hasilLuas").innerText = "Masukkan nilai sisi yang valid.";
    }
}

function resetHasil() {
    // menghapus text "hasilLuas"
    document.getElementById("hasilLuas").innerText = " "
}