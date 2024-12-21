const myQuestions= [
{
    title: "Keamanan Komputer",
    question: "Apa tujuan utama keamanan komputer?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Mempermudah akses informasi",
      b: "Melindungi sistem dari akses yang tidak sah",
      c: "Meningkatkan kecepatan akses data"
    },
    correctAnswer: "b",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Keamanan komputer bertujuan untuk melindungi sistem dari akses yang tidak sah.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih tidak berkaitan langsung dengan keamanan komputer.</p>"
  },
  
  {
    title: "Confidentiality",
    question: "Apa yang dimaksud dengan confidentiality dalam keamanan komputer?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Menjamin data tidak diubah",
      b: "Menjaga informasi hanya dapat diakses pihak tertentu",
      c: "Mencegah penyangkalan informasi"
    },
    correctAnswer: "b",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Confidentiality memastikan informasi hanya dapat diakses oleh pihak berwenang.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih kurang relevan dengan confidentiality.</p>"
  },
  
  {
    title: "Karakteristik Hacker",
    question: "Apa karakteristik utama dari hacker tipe 'The Curious'?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Merusak sistem",
      b: "Ingin mengetahui jenis sistem yang digunakan",
      c: "Mencuri data untuk keuntungan finansial"
    },
    correctAnswer: "b",
    correctAnswerText: "Selamat jawaban kamu benar!<p>'The Curious' hanya ingin tahu tentang sistem dan data yang digunakan.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih menggambarkan tipe hacker lain.</p>"
  },
  
  {
    title: "Interception Attack",
    question: "Serangan apa yang termasuk dalam kategori 'Interception'?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Sniffing dan wiretapping",
      b: "DDOS dan virus",
      c: "Phishing dan spam"
    },
    correctAnswer: "a",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Interception mencakup sniffing dan wiretapping untuk menyadap komunikasi.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih bukan termasuk Interception.</p>"
  },
  
  {
    title: "Chosen-Plaintext Attack",
    question: "Apa yang dimaksud dengan 'Adaptive-chosen-plaintext attack'?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Cryptanalyst memilih plaintext untuk dienkripsi secara iteratif",
      b: "Penyerangan melalui manipulasi ciphertext",
      c: "Penyerangan dengan brute force"
    },
    correctAnswer: "a",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Pada serangan ini, plaintext dipilih iteratif berdasarkan hasil sebelumnya.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih bukan definisi dari adaptive-chosen-plaintext attack.</p>"
  },
  
  {
    title: "Keamanan Fisik",
    question: "Manakah lapisan keamanan fisik berikut yang benar?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Enkripsi data",
      b: "Penguncian komputer secara hardware",
      c: "Menggunakan IDS/IPS"
    },
    correctAnswer: "b",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Keamanan fisik melibatkan langkah seperti penguncian perangkat keras.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih bukan bagian dari keamanan fisik.</p>"
  },
  
  {
    title: "IDS",
    question: "Apa fungsi IDS dalam keamanan jaringan?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Mendeteksi dan mencegah ancaman",
      b: "Mengawasi lalu lintas jaringan untuk aktivitas mencurigakan",
      c: "Menyediakan backup data"
    },
    correctAnswer: "b",
    correctAnswerText: "Selamat jawaban kamu benar!<p>IDS berfungsi mengawasi lalu lintas jaringan untuk mendeteksi aktivitas mencurigakan.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih bukan fungsi utama IDS.</p>"
  },
  
  {
    title: "Kriptografi",
    question: "Apa yang dimaksud dengan kriptografi?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Ilmu mengatur akses informasi",
      b: "Ilmu menyembunyikan informasi menggunakan enkripsi",
      c: "Ilmu menganalisa data untuk mendapatkan pola"
    },
    correctAnswer: "b",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Kriptografi menyembunyikan informasi menggunakan teknik enkripsi.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih tidak sesuai dengan definisi kriptografi.</p>"
  },
  
  {
    title: "Signature-based Detection",
    question: "Apa kelemahan dari metode Signature-based Detection pada IDPS?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Tidak efektif untuk ancaman baru",
      b: "Sulit mengidentifikasi anomali",
      c: "Terlalu banyak mendeteksi ancaman palsu"
    },
    correctAnswer: "a",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Metode ini hanya efektif untuk ancaman yang sudah dikenal sebelumnya.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih bukan kelemahan utama metode ini.</p>"
  },
  
  {
    title: "Access Control",
    question: "Apa itu Access Control?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Proses membatasi akses pada sistem",
      b: "Teknik mengubah informasi menjadi terenkripsi",
      c: "Metode untuk backup data"
    },
    correctAnswer: "a",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Access control adalah pengaturan siapa yang dapat mengakses data atau sistem.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih tidak sesuai dengan definisi Access Control.</p>"
  },
  
  {
    title: "Confidentiality Threats",
    question: "Apa ancaman utama pada confidentiality?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Sniffing",
      b: "Man-in-the-middle attack",
      c: "DDOS"
    },
    correctAnswer: "a",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Sniffing adalah ancaman langsung terhadap confidentiality karena menyadap data.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih tidak relevan dengan confidentiality.</p>"
  },
  
  {
    title: "Caesar Cipher",
    question: "Metode apa yang digunakan Julius Caesar dalam kriptografi?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Scytale",
      b: "Polyalphabet cipher",
      c: "Caesar cipher"
    },
    correctAnswer: "c",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Julius Caesar menggunakan Caesar cipher dengan substitusi alfabet.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih menggambarkan metode lain.</p>"
  },
  
  {
    title: "Password Security",
    question: "Apa solusi utama melindungi password?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Menggunakan enkripsi",
      b: "Memastikan sistem berjalan lancar",
      c: "Menghapus user yang tidak aktif"
    },
    correctAnswer: "a",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Enkripsi melindungi password dari serangan brute force.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih tidak langsung melindungi password.</p>"
  },
  
  {
    title: "Integrity",
    question: "Apa itu integrity dalam keamanan komputer?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Menjamin data tetap utuh",
      b: "Mencegah penyangkalan",
      c: "Melindungi dari penyadapan"
    },
    correctAnswer: "a",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Integrity memastikan data tidak diubah tanpa izin.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih menggambarkan aspek keamanan lain.</p>"
  },
  
  {
    title: "Firewall",
    question: "Apa itu firewall?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Sistem yang mencegah akses tidak sah ke jaringan",
      b: "Teknik enkripsi untuk melindungi data",
      c: "Sistem pendeteksi malware"
    },
    correctAnswer: "a",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Firewall melindungi jaringan dari akses tidak sah.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih tidak menggambarkan fungsi firewall.</p>"
  },
  
  {
    title: "Firewall Weakness",
    question: "Apa kelemahan utama dari firewall?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Tidak melindungi dari ancaman internal",
      b: "Tidak dapat mengenkripsi data",
      c: "Memperlambat jaringan"
    },
    correctAnswer: "a",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Firewall hanya fokus pada ancaman eksternal, bukan internal.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih tidak mencerminkan kelemahan utama firewall.</p>"
  },
  
  {
    title: "Data Backup",
    question: "Apa tujuan utama dari backup data?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Mempercepat proses transfer data",
      b: "Mencegah hilangnya data penting",
      c: "Mempermudah enkripsi data"
    },
    correctAnswer: "b",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Backup dilakukan untuk mencegah hilangnya data penting akibat kerusakan atau serangan.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih tidak relevan dengan tujuan backup data.</p>"
  },
  
  {
    title: "Root Security",
    question: "Apa langkah penting dalam keamanan root?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Selalu menjadi root untuk semua tugas",
      b: "Membatasi jalur perintah root pada direktori tertentu",
      c: "Menggunakan rlogin untuk akses root"
    },
    correctAnswer: "b",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Membatasi jalur perintah root mencegah penyerang memanfaatkan direktori terbuka.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih bukan langkah keamanan root yang benar.</p>"
  },
  
  {
    title: "Sistem Aman",
    question: "Apa prinsip utama dalam perancangan sistem yang aman?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Menambah kompleksitas sistem",
      b: "Mencegah kehilangan data dan akses oleh penyusup",
      c: "Menggunakan perangkat keras lebih canggih"
    },
    correctAnswer: "b",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Sistem yang aman harus mencegah kehilangan data dan akses ilegal.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih tidak mencerminkan prinsip sistem yang aman.</p>"
  },
  
  {
    title: "DoS Attack",
    question: "Apa itu Denial of Service (DoS) attack?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Serangan yang menghapus data secara permanen",
      b: "Serangan yang membuat layanan tidak tersedia dengan membanjiri sumber daya",
      c: "Serangan yang mencuri data sensitif"
    },
    correctAnswer: "b",
    correctAnswerText: "Selamat jawaban kamu benar!<p>DoS bertujuan membanjiri server hingga tidak dapat melayani permintaan lainnya.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih tidak sesuai dengan definisi DoS.</p>"
  }
];