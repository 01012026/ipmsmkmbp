// =========================================================================
// 1. DATABASE ANGGOTA (PAS PENUH 33 KADER)
// =========================================================================
const databaseAnggota = [
    { no: 1, id: "IPM-001", nama: "Abid Wal Husnuzhan", status: "Kader Aktif" },
    { no: 2, id: "IPM-002", nama: "Al Fahri Saputra", status: "Kader Aktif" },
    { no: 3, id: "IPM-003", nama: "Deni Rifiansah", status: "Kader Aktif" },
    { no: 4, id: "IPM-004", nama: "Farhan Fauzan", status: "Kader Aktif" },
    { no: 5, id: "IPM-005", nama: "Elsa Fitri Ariyani", status: "Kader Aktif" },
    { no: 6, id: "IPM-006", nama: "Febi OKtavianti", status: "Kader Aktif" },
    { no: 7, id: "IPM-007", nama: "Rita Rifatun Hasanah", status: "Kader Aktif" },
    { no: 8, id: "IPM-008", nama: "Rizqi Nafila Azahro", status: "Kader Aktif" },
    { no: 9, id: "IPM-009", nama: "Yeni Widayanti", status: "Kader Aktif" },
    { no: 10, id: "IPM-010", nama: "Zalfa Khaulia", status: "Kader Aktif" },
    { no: 11, id: "IPM-011", nama: "Abdul Adha", status: "Kader Aktif" },
    { no: 12, id: "IPM-012", nama: "Kaffah Ibnu Shoubagh", status: "Kader Aktif" },
    { no: 13, id: "IPM-013", nama: "Hilal Septia Putra", status: "Kader Aktif" },
    { no: 14, id: "IPM-014", nama: "Bayu Setiawan", status: "Kader Aktif" },
    { no: 15, id: "IPM-015", nama: "Fakhri Aqil Zakawali", status: "Kader Aktif" },
    { no: 16, id: "IPM-016", nama: "Muhammad Akhsya Hidayat", status: "Kader Aktif" },
    { no: 17, id: "IPM-017", nama: "Muhammad Zidan", status: "Kader Aktif" },
    { no: 18, id: "IPM-018", nama: "Muhammad Ahya Anshori", status: "Kader Aktif" },
    { no: 19, id: "IPM-019", nama: "Amelia Saputri", status: "Kader Aktif" },
    { no: 20, id: "IPM-020", nama: "Anindita Hanum", status: "Kader Aktif" },
    { no: 21, id: "IPM-021", nama: "Idna Izati", status: "Kader Aktif" },
    { no: 22, id: "IPM-022", nama: "Khoeru Riska Anggenia", status: "Kader Aktif" },
    { no: 23, id: "IPM-023", nama: "Marsya Aninda Anasya", status: "Kader Aktif" },
    { no: 24, id: "IPM-024", nama: "Anesha Nur Alqiara", status: "Kader Aktif" },
    { no: 25, id: "IPM-025", nama: "Alfiani Inayatun Nazila E.N", status: "Kader Aktif" },
    { no: 26, id: "IPM-026", nama: "Siti Alifia Nursila", status: "Kader Aktif" },
    { no: 27, id: "IPM-027", nama: "Nadin Tizka Mafina", status: "Kader Aktif" },
    { no: 28, id: "IPM-028", nama: "Farsya Fauziatun Nisa", status: "Kader Aktif" },
    { no: 29, id: "IPM-029", nama: "Vira Dwi Saputri", status: "Kader Aktif" },
    { no: 30, id: "IPM-030", nama: "Viki Meilani Izatul Muna", status: "Kader Aktif" },
    { no: 31, id: "IPM-031", nama: "Suci Barokah Srimulyani", status: "Kader Aktif" },
    { no: 32, id: "IPM-032", nama: "Qolbun Salim", status: "Kader Aktif" }
];

// =========================================================================
// 2. CORE ENGINE LOGIC
// =========================================================================
const tableBody = document.getElementById('member-table-body');
const menuListContainer = document.getElementById('jurnal-menu-list');
const ruangBelajarScreen = document.getElementById('ruang-belajar-screen');
const placeholderReader = document.getElementById('jurnal-placeholder');
const contentReader = document.getElementById('jurnal-reader-content');

function bangunMenuJurnal() {
    if (!menuListContainer || typeof databaseJurnal === 'undefined') return;
    menuListContainer.innerHTML = '';
    databaseJurnal.forEach(j => {
        menuListContainer.innerHTML += `
            <button class="jurnal-menu-item" onclick="bacaMateriSecaraLengkap(${j.id})">
                <span class="item-tag">${j.bidang}</span>
                <h5>${j.judul}</h5>
                <small><i class="fa-regular fa-clock"></i> ${j.tanggal}</small>
            </button>
        `;
    });
}

function bacaMateriSecaraLengkap(id) {
    if (typeof databaseJurnal === 'undefined') return;
    const materi = databaseJurnal.find(j => j.id === id);
    if (!materi) return;

    placeholderReader.classList.add('hidden');
    contentReader.classList.remove('hidden');

    document.getElementById('read-tanggal').innerHTML = `<i class="fa-regular fa-calendar"></i> ${materi.tanggal}`;
    document.getElementById('read-bidang').innerText = materi.bidang;
    document.getElementById('read-judul').innerText = materi.judul;

    const paragrafHtml = materi.konten.split('\n\n').map(p => `<p>${p}</p>`).join('');
    document.getElementById('read-text-body').innerHTML = paragrafHtml;

    const semuaTombol = document.querySelectorAll('.jurnal-menu-item');
    semuaTombol.forEach((btn, idx) => {
        if(idx === id) {
            btn.classList.add('active-menu');
        } else {
            btn.classList.remove('active-menu');
        }
    });
}

function bukaRuangBelajar() {
    ruangBelajarScreen.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function tutupRuangBelajar() {
    ruangBelajarScreen.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

document.getElementById('open-belajar-btn').addEventListener('click', bukaRuangBelajar);
document.getElementById('close-belajar-btn').addEventListener('click', tutupRuangBelajar);

function tampilkanAnggota(data) {
    if (!tableBody) return;
    tableBody.innerHTML = '';
    data.forEach(m => {
        tableBody.innerHTML += `<tr><td>${m.no}</td><td><strong>${m.id}</strong></td><td>${m.nama}</td><td><span class="status-badge">${m.status}</span></td></tr>`;
    });
}

const searchInput = document.getElementById('search-input');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const kw = e.target.value.toLowerCase();
        const hasil = databaseAnggota.filter(m => m.nama.toLowerCase().includes(kw) || m.id.toLowerCase().includes(kw));
        tampilkanAnggota(hasil);
    });
}

// =========================================================================
// 3. GENERATOR TABEL MATERI OTOMATIS & BRIDGING INTERAKSI
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
    tampilkanAnggota(databaseAnggota);
    
    // Generator Struktur HTML Tabel Jurnal Materi Otomatis
    const memberSection = document.getElementById('member-section');
    if (memberSection) {
        const tabelMateriHTML = `
            <section id="jurnal-table-section" class="section bg-light" style="padding: 80px 0; background-color: var(--bg-light);">
                <div class="container">
                    <div class="section-title" style="text-align: center; margin-bottom: 50px;">
                        <h2>Daftar Arsip Materi & Jurnal</h2>
                        <p>Kumpulan pustaka keilmuan digital yang dapat diakses oleh seluruh kader secara instan</p>
                        <div style="width: 60px; height: 4px; background-color: var(--accent-yellow); margin: 15px auto 0 auto; border-radius: 2px;"></div>
                    </div>
                    <div class="table-wrapper">
                        <table class="member-table">
                            <thead>
                                <tr>
                                    <th style="width: 80px;">No</th>
                                    <th>Judul Materi Kajian</th>
                                    <th>Fokus Bidang</th>
                                    <th>Tanggal Rilis</th>
                                    <th style="text-align: center; width: 150px;">Aksi</th>
                                </tr>
                            </thead>
                            <tbody id="jurnal-table-body"></tbody>
                        </table>
                    </div>
                </div>
            </section>
        `;
        memberSection.insertAdjacentHTML('afterend', tabelMateriHTML);
    }

    // Isi data tabel otomatis dari databaseJurnal di file materi.js
    const jurnalTableBody = document.getElementById('jurnal-table-body');
    if (jurnalTableBody && typeof databaseJurnal !== 'undefined') {
        jurnalTableBody.innerHTML = '';
        databaseJurnal.forEach((j, index) => {
            jurnalTableBody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td><strong>${j.judul}</strong></td>
                    <td><span class="vm-badge" style="margin-bottom:0; font-size:11px;">${j.bidang}</span></td>
                    <td><i class="fa-regular fa-calendar" style="font-size:12px; margin-right:5px;"></i>${j.tanggal}</td>
                    <td style="text-align: center;">
                        <button class="btn-baca-tabel" style="background-color: var(--primary-blue); color: #ffffff; border: 1px solid var(--border-color); padding: 6px 14px; border-radius: 6px; font-size: 12px; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;" onclick="bukaJurnalMateri(${j.id})">
                            <i class="fa-solid fa-book-open"></i> Baca
                        </button>
                    </td>
                </tr>
            `;
        });
    }
    
    bangunMenuJurnal();
});

// Fungsi shortcut jembatan klik dari tabel menuju tirai Ruang Belajar
function bukaJurnalMateri(id) {
    bukaRuangBelajar();
    bacaMateriSecaraLengkap(id);
}

const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const icon = themeToggle.querySelector('i');
        icon.className = document.body.classList.contains('dark-theme') ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    });
}