// =========================================================================
// DATABASE JURNAL MATERI (Silakan tambah/kurang materi sepuasnya di sini)
// =========================================================================
const databaseJurnal = [
    {
        id: 0,
        tanggal: "05 Juni 2026",
        bidang: "Kajian Dakwah Islam",
        judul: "Manifestasi Keikhlasan Berorganisasi",
        konten: "<b>PENDAHULUAN:</b><br>Menjadi bagian dari Ikatan Pelajar Muhammadiyah (IPM) bukan sekadar mencari popularitas...<br><br><b>ISI MATERI:</b><br>Keikhlasan bertindak sebagai pondasi utama, sedangkan konsistensi adalah tiang pancangnya."
    },
    {
        id: 1,
        tanggal: "06 Juni 2026",
        bidang: "Pengkajian Ilmu Pengetahuan (PIP)",
        judul: "Membangun Budaya Literasi Kritis di Era Digital",
        konten: "<b>PENDAHULUAN:</b><br>Bidang PIP memiliki peran krusial dalam menghidupkan tradisi membaca di kalangan pelajar...<br><br><b>ISI MATERI:</b><br>Melalui portal jurnal ini, diharapkan kader tidak hanya menjadi konsumen informasi, melainkan juga produsen pemikiran."
    },
    // Kalau besok mau nambah materi baru tinggal taruh koma (,) di sini dan paste cetakannya ke bawah!
    {
        id: 2,
        tanggal: "02 Juni 2026",
        bidang: "Perkaderan",
        judul: "MATERI KEPEMIMPINAN",
        konten: '<strong>Pengertian Kepemimpinan</strong><br>Kepemimpinan adalah kemampuan untuk memengaruhi, mengarahkan, dan menggerakkan orang lain agar bekerja sama mencapai tujuan bersama. Kepemimpinan tidak hanya dimiliki oleh ketua, tetapi juga oleh setiap anggota yang mampu memberikan contoh dan membawa perubahan positif.<br><br><strong>Karakter Pemimpin yang baik</strong><br>Seorang pemimpin yang baik memiliki beberapa sifat penting, yaitu:<br>-Jujur dan amanah<br>-Bertanggung jawab<br>-Disiplin<br>-Adil<br>-Mampu berkomunikasi dengan baik<br>-Mampu bekerja sama<br>-Menjadi teladan bagi orang lain<br><br><strong>Fungsi Kepemimpinan</strong><br>Kepemimpinan berfungsi untuk:<br>-Mengarahkan organisasi menuju tujuan.<br>-Memotivasi anggota.<br>-Mengambil keputusan.<br>-Menjaga kekompakan tim.<br>-Menyelesaikan permasalahan yang muncul.<br><br><strong>Kepemimpinan Dalam Islam</strong><br>Dalam Islam, kepemimpinan adalah amanah yang harus dipertanggungjawabkan. Seorang pemimpin harus mengedepankan nilai-nilai kejujuran, keadilan, tanggung jawab, dan musyawarah sebagaimana dicontohkan oleh Rasulullah ﷺ.<br><br><strong>Kepemimpinan Bagi Kader IPM</strong><br>Kader IPM harus memiliki jiwa kepemimpinan, baik saat menjadi pengurus maupun anggota. Jiwa kepemimpinan dapat ditunjukkan melalui sikap aktif, bertanggung jawab, berinisiatif, serta mampu menjadi teladan dalam organisasi dan kehidupan sehari-hari.<br><br><strong>Penutup</strong><br>Organisasi adalah tempat belajar, berkarya, dan mengembangkan potensi diri. Melalui organisasi, seseorang dapat melatih tanggung jawab, kerja sama, dan kepemimpinan sehingga mampu menjadi pribadi yang bermanfaat bagi lingkungan, umat, dan bangsa.'
    },
    {
        id: 3,
        tanggal: "02 Juni 2026",
        bidang: "Perkaderan",
        judul: "MATERI KEORGANISASIAN",
        konten: '<strong>Pengertian Organisasi</strong><br>KOrganisasi adalah wadah bagi sekelompok orang yang bekerja sama untuk mencapai tujuan yang telah ditetapkan bersama. Organisasi dibentuk agar setiap kegiatan dapat berjalan secara terarah, terstruktur, dan lebih efektif sehingga tujuan yang diinginkan dapat tercapai dengan baik.<br><br><strong>Tujuan Organisasi</strong><br>Organisasi bertujuan untuk mewujudkan tujuan bersama yang tidak dapat dicapai secara maksimal jika dilakukan secara individu. Selain itu, organisasi juga menjadi sarana untuk mengembangkan potensi diri, melatih tanggung jawab, meningkatkan kemampuan bekerja sama, serta membangun jiwa kepemimpinan dan kepedulian sosial.<br><br><strong>Unsur-Unsur Organisasi</strong><br>Beberapa unsur penting dalam organisasi meliputi:<br>1.Tujuan yang jelas.<br>2.Anggota yang terlibat.<br>3.Struktur organisasi<br>4.Program kerja.<br>5.Kerja sama antaranggota.<br>Tanpa unsur-unsur tersebut, organisasi akan sulit berjalan secara efektif dan terarah.<br><br><strong>Prinsip-Prinsip Organisasi</strong><br>Agar organisasi dapat berjalan dengan baik, diperlukan prinsip-prinsip seperti adanya tujuan yang jelas, pembagian tugas yang sesuai, disiplin dalam menjalankan amanah, serta komunikasi yang baik antaranggota. Selain itu, setiap keputusan hendaknya diambil melalui musyawarah sehingga dapat diterima dan dijalankan bersama dengan penuh tanggung jawab.<br><br><strong>Manfaat Organisasi</strong><br>Melalui organisasi, seseorang dapat memperoleh banyak pengalaman yang tidak didapatkan di dalam kelas. Organisasi melatih kemampuan berbicara di depan umum, bekerja dalam tim, menyelesaikan masalah, serta membangun rasa percaya diri. Pengalaman tersebut akan sangat bermanfaat dalam kehidupan bermasyarakat maupun di masa depan.<br><br><strong>Organisasi dalam Prespektif Islam</strong><br>Islam mengajarkan pentingnya persatuan, kerja sama, dan saling membantu dalam kebaikan. Oleh karena itu, organisasi dapat menjadi sarana untuk memperkuat ukhuwah, melaksanakan kegiatan yang bermanfaat, serta mengembangkan dakwah dan amal saleh secara lebih terencana dan terorganisir.<br><br><strong>Keorganisasian bagi Kader IPM</strong><br>Bagi kader IPM, organisasi bukan hanya tempat berkumpul, tetapi juga tempat belajar dan berproses. Melalui organisasi, kader dilatih untuk menjadi pribadi yang aktif, bertanggung jawab, memiliki kepedulian terhadap lingkungan, serta mampu berkontribusi dalam mewujudkan tujuan organisasi dan persyarikatan.<br><br><strong>Penutup</strong><br>Organisasi merupakan sarana penting untuk belajar, berkembang, dan mengabdi. Dengan memahami keorganisasian, setiap anggota diharapkan mampu menjalankan perannya dengan baik serta berkontribusi dalam menciptakan organisasi yang aktif, solid, dan bermanfaat bagi banyak orang.'
    }
];