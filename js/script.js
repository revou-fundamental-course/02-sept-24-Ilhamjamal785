// Fungsi untuk menampilkan form berdasarkan pilihan
function displayForm() {
    var shape = document.getElementById("shape").value;
    var calculation = document.getElementById("calculation").value;

    // Sembunyikan semua form
    document.getElementById("segitigaForm").style.display = "none";
    document.getElementById("jajargenjangForm").style.display = "none";

    // Form Segitiga
    if (shape === "segitiga") {
        document.getElementById("segitigaForm").style.display = "block";
        if (calculation === "keliling") {
            document.getElementById("kelilingSegitiga").style.display = "block";
            document.getElementById("luasSegitiga").style.display = "none";
        } else if (calculation === "luas") {
            document.getElementById("kelilingSegitiga").style.display = "none";
            document.getElementById("luasSegitiga").style.display = "block";
        }
    }

    // Form Jajargenjang
    if (shape === "jajargenjang") {
        document.getElementById("jajargenjangForm").style.display = "block";
        if (calculation === "keliling") {
            document.getElementById("kelilingJajargenjang").style.display = "block";
            document.getElementById("luasJajargenjang").style.display = "none";
        } else if (calculation === "luas") {
            document.getElementById("kelilingJajargenjang").style.display = "none";
            document.getElementById("luasJajargenjang").style.display = "block";
        }
    }
}

// Fungsi Perhitungan Segitiga
function calculatePerimeter() {
    var s1 = document.getElementById('s1').value;
    var s2 = document.getElementById('s2').value;
    var s3 = document.getElementById('s3').value;

    // Validasi input
    if (!s1 || !s2 || !s3) {
        document.getElementById('errorSegitigaKeliling').innerText = "Silakan isi semua sisi.";
        document.getElementById('resultSegitigaKeliling').innerText = "";
        document.getElementById('perimeterStepsSegitiga').innerText = "";
        return;
    }

    var perimeter = parseFloat(s1) + parseFloat(s2) + parseFloat(s3);
    document.getElementById('resultSegitigaKeliling').innerText = `Keliling: ${perimeter}`;
    document.getElementById('perimeterStepsSegitiga').innerText = `Cara: ${s1} + ${s2} + ${s3} = ${perimeter}`;
    document.getElementById('errorSegitigaKeliling').innerText = ""; 
}

function calculateArea() {
    var base = document.getElementById('baseSegitiga').value;   
    var height = document.getElementById('heightSegitiga').value;

    // Validasi input
    if (!base || !height) {
        document.getElementById('errorSegitigaLuas').innerText = "Silakan isi alas dan tinggi.";
        document.getElementById('resultSegitigaLuas').innerText = "";
        document.getElementById('areaStepsSegitiga').innerText = "";
        return;
    }

    var area = 0.5 * parseFloat(base) * parseFloat(height);
    document.getElementById('resultSegitigaLuas').innerText = `Luas: ${area}`;
    document.getElementById('areaStepsSegitiga').innerText = `Cara: 0.5 × ${base} × ${height} = ${area}`;
    document.getElementById('errorSegitigaLuas').innerText = ""; 
}

// Fungsi Perhitungan Jajargenjang
function calculateKelilingJajargenjang() {
    var panjang = document.getElementById('panjangJajargenjang').value;
    var lebar = document.getElementById('lebarJajargenjang').value;

    // Validasi input
    if (!panjang || !lebar) {
        document.getElementById('errorJajargenjangKeliling').innerText = "Silakan isi panjang dan lebar.";
        document.getElementById('resultJajargenjangKeliling').innerText = "";
        document.getElementById('kelilingJajargenjangSteps').innerText = "";
        return;
    }

    var keliling = 2 * (parseFloat(panjang) + parseFloat(lebar));
    document.getElementById('resultJajargenjangKeliling').innerText = `Keliling: ${keliling}`;
    document.getElementById('kelilingJajargenjangSteps').innerText = `Cara: 2 × (${panjang} + ${lebar}) = ${keliling}`;
    document.getElementById('errorJajargenjangKeliling').innerText = ""; 
}

function calculateLuasJajargenjang() {
    var alas = document.getElementById('alasJajargenjang').value;
    var tinggi = document.getElementById('tinggiJajargenjang').value;

    // Validasi input
    if (!alas || !tinggi) {
        document.getElementById('errorJajargenjangLuas').innerText = "Silakan isi alas dan tinggi.";
        document.getElementById('resultJajargenjangLuas').innerText = "";
        document.getElementById('luasJajargenjangSteps').innerText = "";
        return;
    }

    var luas = parseFloat(alas) * parseFloat(tinggi);
    document.getElementById('resultJajargenjangLuas').innerText = `Luas: ${luas}`;
    document.getElementById('luasJajargenjangSteps').innerText = `Cara: ${alas} × ${tinggi} = ${luas}`;
    document.getElementById('errorJajargenjangLuas').innerText = ""; 
}

// Fungsi untuk mereset form perhitungan keliling segitiga
function resetSegitigaKeliling() {
    document.getElementById('s1').value = '';
    document.getElementById('s2').value = '';
    document.getElementById('s3').value = '';
    document.getElementById('resultSegitigaKeliling').innerText = '';
    document.getElementById('perimeterStepsSegitiga').innerText = '';
    document.getElementById('errorSegitigaKeliling').innerText = '';
}

// Fungsi untuk mereset form perhitungan luas segitiga
function resetSegitigaLuas() {
    document.getElementById('baseSegitiga').value = '';
    document.getElementById('heightSegitiga').value = '';
    document.getElementById('resultSegitigaLuas').innerText = '';
    document.getElementById('areaStepsSegitiga').innerText = '';
    document.getElementById('errorSegitigaLuas').innerText = '';
}

// Fungsi untuk mereset form perhitungan keliling jajargenjang
function resetJajargenjangKeliling() {
    document.getElementById('panjangJajargenjang').value = '';
    document.getElementById('lebarJajargenjang').value = '';
    document.getElementById('resultJajargenjangKeliling').innerText = '';
    document.getElementById('kelilingJajargenjangSteps').innerText = '';
    document.getElementById('errorJajargenjangKeliling').innerText = '';
}

// Fungsi untuk mereset form perhitungan luas jajargenjang
function resetJajargenjangLuas() {
    document.getElementById('alasJajargenjang').value = '';
    document.getElementById('tinggiJajargenjang').value = '';
    document.getElementById('resultJajargenjangLuas').innerText = '';
    document.getElementById('luasJajargenjangSteps').innerText = '';
    document.getElementById('errorJajargenjangLuas').innerText = '';
}
