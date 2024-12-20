const myQuestions = [
    {
        title: "Definisi Tata Kelola Perusahaan",
        question: "Apa yang dimaksud dengan Tata Kelola Perusahaan (Corporate Governance)?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Sistem untuk meningkatkan keuntungan perusahaan",
            b: "Mekanisme untuk mengarahkan dan mengendalikan perusahaan sesuai harapan stakeholders",
            c: "Proses mengelola dividen perusahaan"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Tata Kelola Perusahaan adalah mekanisme untuk mengarahkan dan mengendalikan perusahaan agar sesuai dengan harapan stakeholders.</p>",
        falseAnswerText: "Salah!<p>Tata Kelola Perusahaan adalah mekanisme untuk mengarahkan dan mengendalikan perusahaan sesuai dengan harapan stakeholders.</p>"
    },
    {
        title: "Prinsip Tata Kelola",
        question: "Apa saja prinsip utama Tata Kelola Perusahaan yang baik?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Transparansi, akuntabilitas, tanggung jawab, kemandirian, dan keadilan",
            b: "Efisiensi, efektivitas, inovasi, dan profitabilitas",
            c: "Keadilan, keseimbangan, dan keberlanjutan"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Prinsip utama Tata Kelola Perusahaan yang baik adalah transparansi, akuntabilitas, tanggung jawab, kemandirian, dan keadilan.</p>",
        falseAnswerText: "Salah!<p>Prinsip utama Tata Kelola Perusahaan yang baik adalah transparansi, akuntabilitas, tanggung jawab, kemandirian, dan keadilan.</p>"
    },
    {
        title: "Transparansi",
        question: "Mengapa transparansi penting dalam Tata Kelola Perusahaan?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Untuk memastikan efisiensi operasional perusahaan",
            b: "Untuk memberikan informasi material dan relevan kepada stakeholders",
            c: "Untuk mengurangi biaya produksi"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Transparansi penting untuk memberikan informasi material dan relevan kepada stakeholders.</p>",
        falseAnswerText: "Salah!<p>Transparansi penting untuk memberikan informasi material dan relevan kepada stakeholders.</p>"
    },
    {
        title: "Akuntabilitas",
        question: "Apa yang dimaksud dengan akuntabilitas dalam Tata Kelola Perusahaan?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Kemampuan untuk menghasilkan keuntungan maksimal",
            b: "Kejelasan fungsi, pelaksanaan, dan pertanggungjawaban organ perusahaan",
            c: "Kemampuan untuk mematuhi semua peraturan pemerintah"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Akuntabilitas adalah kejelasan fungsi, pelaksanaan, dan pertanggungjawaban organ perusahaan.</p>",
        falseAnswerText: "Salah!<p>Akuntabilitas adalah kejelasan fungsi, pelaksanaan, dan pertanggungjawaban organ perusahaan.</p>"
    },
    {
        title: "Struktur Tata Kelola",
        question: "Siapa yang memegang kekuasaan tertinggi dalam perusahaan?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Direksi",
            b: "Komisaris",
            c: "Pemegang Saham"
        },
        correctAnswer: "c",
        correctAnswerText: "Benar!<p>Pemegang Saham memegang kekuasaan tertinggi dalam perusahaan.</p>",
        falseAnswerText: "Salah!<p>Pemegang Saham memegang kekuasaan tertinggi dalam perusahaan.</p>"
    },
    {
        title: "Peran Komisaris",
        question: "Apa tugas utama Komisaris dalam struktur Tata Kelola Perusahaan?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Mengelola kegiatan operasional perusahaan",
            b: "Mengawasi dan memberikan nasihat kepada Direksi",
            c: "Menyusun anggaran tahunan"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Tugas utama Komisaris adalah mengawasi dan memberikan nasihat kepada Direksi.</p>",
        falseAnswerText: "Salah!<p>Tugas utama Komisaris adalah mengawasi dan memberikan nasihat kepada Direksi.</p>"
    },
    {
        title: "Prinsip Kemandirian",
        question: "Apa yang dimaksud dengan prinsip kemandirian dalam Tata Kelola Perusahaan?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Kemampuan perusahaan untuk beroperasi tanpa bantuan pemerintah",
            b: "Pengelolaan perusahaan secara profesional tanpa tekanan dari pihak luar",
            c: "Menghindari semua bentuk kolaborasi dengan perusahaan lain"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Kemandirian adalah pengelolaan perusahaan secara profesional tanpa tekanan dari pihak luar.</p>",
        falseAnswerText: "Salah!<p>Kemandirian adalah pengelolaan perusahaan secara profesional tanpa tekanan dari pihak luar.</p>"
    },
    {
        title: "Visi Perusahaan",
        question: "Apa tujuan dari merumuskan visi perusahaan?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Menetapkan tujuan jangka panjang perusahaan",
            b: "Mengatur struktur organisasi perusahaan",
            c: "Meningkatkan efisiensi operasional"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Visi perusahaan bertujuan untuk menetapkan tujuan jangka panjang perusahaan.</p>",
        falseAnswerText: "Salah!<p>Visi perusahaan bertujuan untuk menetapkan tujuan jangka panjang perusahaan.</p>"
    },
    {
        title: "Manajemen Risiko",
        question: "Apa tujuan utama dari manajemen risiko dalam Tata Kelola Perusahaan?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Menghilangkan semua risiko usaha",
            b: "Mengidentifikasi dan mengelola risiko yang dapat memengaruhi pencapaian tujuan perusahaan",
            c: "Mengurangi biaya operasional perusahaan"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Manajemen risiko bertujuan untuk mengidentifikasi dan mengelola risiko yang dapat memengaruhi pencapaian tujuan perusahaan.</p>",
        falseAnswerText: "Salah!<p>Manajemen risiko bertujuan untuk mengidentifikasi dan mengelola risiko yang dapat memengaruhi pencapaian tujuan perusahaan.</p>"
    },
    {
        title: "Komunikasi dengan Stakeholder",
        question: "Mengapa komunikasi dengan stakeholder penting dalam Tata Kelola Perusahaan?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Untuk memastikan keterlibatan mereka dalam pengambilan keputusan",
            b: "Untuk mengurangi tanggung jawab perusahaan",
            c: "Untuk menunda implementasi strategi perusahaan"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Komunikasi dengan stakeholder penting untuk memastikan keterlibatan mereka dalam pengambilan keputusan.</p>",
        falseAnswerText: "Salah!<p>Komunikasi dengan stakeholder penting untuk memastikan keterlibatan mereka dalam pengambilan keputusan.</p>"
    },
    {
        title: "Tanggung Jawab Sosial Perusahaan",
        question: "Apa yang dimaksud dengan Tanggung Jawab Sosial Perusahaan (CSR)?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Program perusahaan untuk mendukung keberlanjutan lingkungan dan sosial",
            b: "Kewajiban perusahaan untuk membayar pajak",
            c: "Strategi untuk meningkatkan keuntungan jangka pendek"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>CSR adalah program untuk mendukung keberlanjutan lingkungan dan sosial.</p>",
        falseAnswerText: "Salah!<p>CSR adalah program untuk mendukung keberlanjutan lingkungan dan sosial.</p>"
    },
    {
        title: "Etika Bisnis",
        question: "Apa tujuan utama penerapan etika bisnis dalam Tata Kelola Perusahaan?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Meningkatkan keuntungan perusahaan secara signifikan",
            b: "Memastikan bahwa keputusan bisnis dilakukan dengan integritas dan tanggung jawab",
            c: "Menghilangkan persaingan dalam industri"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Etika bisnis bertujuan memastikan keputusan dilakukan dengan integritas dan tanggung jawab.</p>",
        falseAnswerText: "Salah!<p>Etika bisnis bertujuan memastikan keputusan dilakukan dengan integritas dan tanggung jawab.</p>"
    },
    {
        title: "Keseimbangan Kewenangan",
        question: "Mengapa keseimbangan kewenangan penting dalam Tata Kelola Perusahaan?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Untuk memastikan semua kewenangan dimiliki oleh Direksi",
            b: "Untuk mencegah penyalahgunaan kekuasaan",
            c: "Untuk meningkatkan produktivitas karyawan"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Keseimbangan kewenangan mencegah penyalahgunaan kekuasaan dalam perusahaan.</p>",
        falseAnswerText: "Salah!<p>Keseimbangan kewenangan penting untuk mencegah penyalahgunaan kekuasaan.</p>"
    },
    {
        title: "Laporan Keberlanjutan",
        question: "Apa yang dimaksud dengan laporan keberlanjutan?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Dokumen yang hanya berisi laporan keuangan",
            b: "Dokumen yang mencakup kinerja ekonomi, sosial, dan lingkungan perusahaan",
            c: "Dokumen rahasia perusahaan"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Laporan keberlanjutan mencakup kinerja ekonomi, sosial, dan lingkungan perusahaan.</p>",
        falseAnswerText: "Salah!<p>Laporan keberlanjutan mencakup kinerja ekonomi, sosial, dan lingkungan perusahaan.</p>"
    },
    {
        title: "Pengawasan Internal",
        question: "Apa fungsi utama pengawasan internal dalam perusahaan?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Menilai efektivitas pengelolaan risiko",
            b: "Menghapus semua bentuk risiko",
            c: "Meningkatkan efisiensi operasional"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Pengawasan internal menilai efektivitas pengelolaan risiko dalam perusahaan.</p>",
        falseAnswerText: "Salah!<p>Fungsi utama pengawasan internal adalah menilai efektivitas pengelolaan risiko.</p>"
    },
    {
        title: "Kepemimpinan yang Baik",
        question: "Apa ciri utama dari kepemimpinan yang baik dalam Tata Kelola Perusahaan?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Mampu mengambil semua keputusan sendiri",
            b: "Memiliki visi jelas dan memberdayakan tim",
            c: "Mengutamakan keuntungan jangka pendek"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Kepemimpinan yang baik memiliki visi jelas dan memberdayakan tim.</p>",
        falseAnswerText: "Salah!<p>Kepemimpinan yang baik memiliki visi jelas dan memberdayakan tim.</p>"
    },
    {
        title: "Audit Eksternal",
        question: "Apa tujuan utama dari audit eksternal dalam Tata Kelola Perusahaan?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Meningkatkan efisiensi operasional",
            b: "Memberikan opini independen mengenai laporan keuangan",
            c: "Mengelola keuangan perusahaan"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Audit eksternal bertujuan memberikan opini independen tentang laporan keuangan.</p>",
        falseAnswerText: "Salah!<p>Audit eksternal bertujuan memberikan opini independen tentang laporan keuangan.</p>"
    },
    {
        title: "Konflik Kepentingan",
        question: "Bagaimana cara menghindari konflik kepentingan dalam Tata Kelola Perusahaan?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Dengan memberikan kewenangan penuh kepada satu individu",
            b: "Dengan menetapkan kebijakan dan prosedur yang jelas",
            c: "Dengan menghindari pelaporan yang transparan"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Menetapkan kebijakan dan prosedur yang jelas dapat menghindari konflik kepentingan.</p>",
        falseAnswerText: "Salah!<p>Cara terbaik untuk menghindari konflik kepentingan adalah dengan kebijakan dan prosedur yang jelas.</p>"
    },
    {
        title: "Evaluasi Kinerja",
        question: "Apa tujuan evaluasi kinerja dalam Tata Kelola Perusahaan?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Menentukan penghentian seluruh operasional",
            b: "Menilai keberhasilan strategi dan pencapaian tujuan",
            c: "Meningkatkan pajak perusahaan"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Evaluasi kinerja bertujuan menilai keberhasilan strategi dan pencapaian tujuan perusahaan.</p>",
        falseAnswerText: "Salah!<p>Evaluasi kinerja bertujuan untuk menilai keberhasilan strategi dan pencapaian tujuan.</p>"
    },
    {
        title: "Kepemimpinan Berintegritas",
        question: "Apa manfaat utama dari kepemimpinan yang berintegritas dalam Tata Kelola Perusahaan?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Meningkatkan kepercayaan dari stakeholder",
            b: "Mengurangi transparansi dalam perusahaan",
            c: "Mempermudah penghindaran kewajiban hukum"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Kepemimpinan yang berintegritas meningkatkan kepercayaan dari stakeholder.</p>",
        falseAnswerText: "Salah!<p>Manfaat utama kepemimpinan berintegritas adalah meningkatkan kepercayaan stakeholder.</p>"
    },
    {
        title: "Keberlanjutan Usaha",
        question: "Apa faktor utama untuk memastikan keberlanjutan usaha perusahaan?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Profitabilitas jangka pendek",
            b: "Komitmen terhadap lingkungan, sosial, dan ekonomi",
            c: "Pengurangan jumlah karyawan"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Keberlanjutan usaha ditentukan oleh komitmen terhadap lingkungan, sosial, dan ekonomi.</p>",
        falseAnswerText: "Salah!<p>Keberlanjutan usaha melibatkan komitmen terhadap aspek lingkungan, sosial, dan ekonomi.</p>"
    },
    {
        title: "Pencegahan Fraud",
        question: "Apa langkah awal dalam mencegah fraud dalam Tata Kelola Perusahaan?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Meningkatkan beban kerja karyawan",
            b: "Membangun sistem kontrol internal yang efektif",
            c: "Mengurangi transparansi laporan keuangan"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Langkah awal dalam mencegah fraud adalah membangun sistem kontrol internal yang efektif.</p>",
        falseAnswerText: "Salah!<p>Pencegahan fraud dimulai dengan sistem kontrol internal yang efektif.</p>"
    },
    {
        title: "Kebijakan Dividen",
        question: "Apa yang dimaksud dengan kebijakan dividen dalam Tata Kelola Perusahaan?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Keputusan tentang jumlah dividen yang akan dibagikan kepada pemegang saham",
            b: "Strategi untuk mengurangi investasi di perusahaan",
            c: "Proses untuk mengatur kepemilikan saham"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Kebijakan dividen menentukan jumlah dividen yang akan dibagikan kepada pemegang saham.</p>",
        falseAnswerText: "Salah!<p>Kebijakan dividen berkaitan dengan jumlah dividen untuk pemegang saham.</p>"
    },
    {
        title: "Peningkatan Kompetensi",
        question: "Mengapa pelatihan bagi manajemen penting dalam Tata Kelola Perusahaan?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Untuk mengurangi beban kerja karyawan",
            b: "Untuk meningkatkan kemampuan mereka dalam menghadapi tantangan bisnis",
            c: "Untuk menggantikan tugas auditor internal"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Pelatihan membantu meningkatkan kemampuan manajemen dalam menghadapi tantangan bisnis.</p>",
        falseAnswerText: "Salah!<p>Pelatihan bertujuan meningkatkan kemampuan manajemen menghadapi tantangan.</p>"
    },
    {
        title: "Pemantauan Kinerja",
        question: "Apa tujuan utama pemantauan kinerja dalam Tata Kelola Perusahaan?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Meningkatkan kecepatan operasional",
            b: "Mengidentifikasi dan memperbaiki penyimpangan dari rencana bisnis",
            c: "Mengurangi jumlah laporan yang diajukan"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Pemantauan kinerja bertujuan untuk mengidentifikasi dan memperbaiki penyimpangan dari rencana bisnis.</p>",
        falseAnswerText: "Salah!<p>Tujuan utama pemantauan kinerja adalah mengidentifikasi dan memperbaiki penyimpangan.</p>"
    }
];
