const myQuestions = [
  {
    title: "Siklus Akuntansi",
    question: "Apa yang menjadi elemen utama dalam siklus akuntansi?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Penjualan dan pembelian",
      b: "Pencatatan, penggolongan, pengikhtisaran, pelaporan",
      c: "Penyusunan anggaran"
    },
    correctAnswer: "b",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Siklus akuntansi mencakup langkah-langkah utama seperti pencatatan hingga pelaporan.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih bukan bagian utama dari siklus akuntansi.</p>"
  },
  
  {
    title: "Tujuan SIA",
    question: "Apa tujuan utama dari Sistem Informasi Akuntansi (SIA)?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Meningkatkan kecepatan pelaporan",
      b: "Memberikan informasi keuangan untuk pengambilan keputusan",
      c: "Mengurangi biaya produksi"
    },
    correctAnswer: "b",
    correctAnswerText: "Selamat jawaban kamu benar!<p>SIA bertujuan memberikan informasi akurat yang mendukung pengambilan keputusan manajerial.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih tidak sesuai dengan tujuan utama SIA.</p>"
  },
  
  {
    title: "Pengendalian Intern",
    question: "Apa yang dimaksud dengan pengendalian intern dalam SIA?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Memastikan tidak ada kesalahan dalam data",
      b: "Prosedur untuk melindungi aset dan keandalan data",
      c: "Membatasi akses informasi hanya untuk manajemen"
    },
    correctAnswer: "b",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Pengendalian intern bertujuan melindungi aset dan menjaga keandalan laporan keuangan.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih kurang relevan dengan konsep pengendalian intern.</p>"
  },
  
  {
    title: "Laporan Laba Rugi",
    question: "Apa itu laporan laba rugi?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Dokumen yang mencatat perubahan ekuitas",
      b: "Laporan tentang pendapatan dan biaya untuk mengetahui laba atau rugi",
      c: "Catatan arus kas masuk dan keluar"
    },
    correctAnswer: "b",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Laporan laba rugi mencerminkan profitabilitas suatu periode.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih tidak sesuai dengan definisi laporan laba rugi.</p>"
  },
  
  {
    title: "Akuntansi Keuangan vs Manajerial",
    question: "Apa perbedaan utama akuntansi keuangan dan akuntansi manajerial?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Akuntansi keuangan bersifat historis, sedangkan manajerial bersifat proyeksi",
      b: "Akuntansi manajerial mengikuti standar ketat",
      c: "Akuntansi keuangan fokus pada anggaran"
    },
    correctAnswer: "a",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Akuntansi keuangan mencatat masa lalu, sedangkan akuntansi manajerial memproyeksikan masa depan.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Pilihan yang kamu pilih tidak mencerminkan perbedaan utama antara keduanya.</p>"
  },
  
  {
    title: "Fungsi Jurnal Umum",
    question: "Apa fungsi utama dari jurnal umum dalam SIA?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Mengelompokkan transaksi berdasarkan kategori",
      b: "Mencatat semua transaksi keuangan",
      c: "Menghitung saldo akhir akun"
    },
    correctAnswer: "b",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Jurnal umum digunakan untuk mencatat semua transaksi keuangan sebelum dikelompokkan ke akun tertentu.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih bukan fungsi utama jurnal umum.</p>"
  },
  
  {
    title: "Kartu Piutang",
    question: "Apa peran kartu piutang dalam SIA?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Mencatat semua pembelian kredit",
      b: "Menentukan harga jual produk",
      c: "Memantau saldo piutang kepada pelanggan"
    },
    correctAnswer: "c",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Kartu piutang digunakan untuk memantau saldo piutang pelanggan.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih tidak sesuai dengan fungsi kartu piutang.</p>"
  },
  
  {
    title: "Aktivitas Pendanaan",
    question: "Apa yang dimaksud dengan aktivitas pendanaan dalam arus kas?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Membeli aset tetap",
      b: "Mendapatkan pinjaman dari bank",
      c: "Membayar gaji karyawan"
    },
    correctAnswer: "b",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Aktivitas pendanaan mencakup kegiatan seperti mendapatkan pinjaman dan membayar dividen.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih tidak relevan dengan aktivitas pendanaan.</p>"
  },
  
  {
    title: "Activity-Based Costing",
    question: "Apa kelebihan utama dari akuntansi berbasis aktivitas (ABC)?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Mengurangi biaya overhead",
      b: "Meningkatkan kecepatan laporan keuangan",
      c: "Memisahkan biaya langsung dan tidak langsung dengan lebih akurat"
    },
    correctAnswer: "c",
    correctAnswerText: "Selamat jawaban kamu benar!<p>ABC memisahkan biaya dengan akurat untuk pengambilan keputusan manajerial.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih tidak mencerminkan kelebihan utama ABC.</p>"
  },
  
  {
    title: "Pengembangan SIA",
    question: "Apa tujuan utama pengembangan Sistem Informasi Akuntansi (SIA)?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Menambah kompleksitas sistem",
      b: "Memastikan sistem dapat beradaptasi dengan perubahan lingkungan",
      c: "Mengurangi kebutuhan sumber daya manusia"
    },
    correctAnswer: "b",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Pengembangan SIA memastikan sistem tetap relevan dengan perubahan lingkungan bisnis.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih tidak mencerminkan tujuan utama pengembangan SIA.</p>"
  },
  
  {
    title: "Siklus Akuntansi II",
    question: "Apa tujuan utama dari siklus akuntansi?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Menghasilkan laporan keuangan yang akurat",
      b: "Mengurangi biaya operasional perusahaan",
      c: "Menyediakan data untuk pengembangan SIA"
    },
    correctAnswer: "a",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Siklus akuntasi dirancang untuk menghasilkan laporan keuangan yang akurat dan terstandar.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Siklus akuntasi tidak secara langsung mengurangi biaya dan data untuk pengembangan SIA bukan fokus utama siklus akuntansi.</p>"
  },
  
  {
    title: "Kartu Persediaan",
    question: "Apa fungsi utama kartu persediaan dalam SIA?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Mencatat jumlah barang masuk dan keluar",
      b: "Menentukan harga jual barang",
      c: "Menganalisis keuntungan produk"
    },
    correctAnswer: "a",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Kartu persediaan mencatat mutasi barang untuk memantau stok yang tersedia.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih tidak sesuai dengan fungsi kartu persediaan.</p>"
  },
  
  {
    title: "Aktivitas Investasi",
    question: "Apa yang dimaksud dengan aktivitas investasi dalam laporan arus kas?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Transaksi yang menghasilkan pendapatan",
      b: "Transaksi pembelian atau penjualan aset jangka panjang",
      c: "Pembayaran utang kepada pihak ketiga"
    },
    correctAnswer: "b",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Aktivitas investasi melibatkan pembelian atau penjualan aset produktif.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih tidak sesuai dengan aktivitas investasi.</p>"
  },
  
  {
    title: "Buku Besar",
    question: "Apa yang dicatat dalam buku besar?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Rincian seluruh transaksi perusahaan",
      b: "Pengelompokan transaksi berdasarkan jenis akun",
      c: "Proyeksi keuangan untuk periode mendatang"
    },
    correctAnswer: "b",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Buku besar mengelompokkan transaksi sesuai jenis akun untuk mempermudah penyusunan laporan keuangan.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih tidak mencerminkan fungsi utama buku besar.</p>"
  },
  
  {
    title: "Saldo Normal",
    question: "Apa yang dimaksud dengan saldo normal dalam akuntansi?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Posisi saldo akhir yang sesuai dengan aturan akuntansi",
      b: "Perhitungan laba atau rugi dalam suatu periode",
      c: "Kondisi saat saldo akun tidak berubah"
    },
    correctAnswer: "a",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Saldo normal adalah ketentuan tentang posisi saldo akhir akun sesuai prinsip akuntansi.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih tidak sesuai dengan definisi saldo normal.</p>"
  },
  
  {
    title: "Laporan Arus Kas",
    question: "Apa manfaat utama dari laporan arus kas?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Menunjukkan perubahan ekuitas perusahaan",
      b: "Menggambarkan aliran kas masuk dan keluar",
      c: "Menentukan tingkat keuntungan produk"
    },
    correctAnswer: "b",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Laporan arus kas menunjukkan sumber dan penggunaan kas perusahaan selama periode tertentu.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih tidak sesuai dengan manfaat utama laporan arus kas.</p>"
  },
  
  {
    title: "Fokus Akuntansi Manajerial",
    question: "Apa yang menjadi fokus utama dalam akuntansi manajerial?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Memberikan informasi historis kepada pihak eksternal",
      b: "Memberikan informasi untuk perencanaan dan pengambilan keputusan",
      c: "Mengelola dana perusahaan untuk tujuan investasi"
    },
    correctAnswer: "b",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Akuntansi manajerial mendukung manajemen dalam perencanaan, pengendalian, dan pengambilan keputusan.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih tidak mencerminkan fokus utama akuntansi manajerial.</p>"
  },
  
  {
    title: "Laporan Perubahan Ekuitas",
    question: "Apa tujuan dari laporan perubahan ekuitas?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Menyajikan arus kas perusahaan",
      b: "Menunjukkan perubahan modal selama suatu periode",
      c: "Menggambarkan posisi keuangan perusahaan"
    },
    correctAnswer: "b",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Laporan perubahan ekuitas menunjukkan perubahan modal dari awal hingga akhir periode.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih tidak sesuai dengan tujuan laporan perubahan ekuitas.</p>"
  },
  
  {
    title: "Jurnal Memorial",
    question: "Apa yang dimaksud dengan jurnal memorial?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Jurnal untuk mencatat transaksi yang tidak rutin",
      b: "Jurnal khusus untuk mencatat piutang",
      c: "Jurnal untuk mencatat transaksi kas masuk"
    },
    correctAnswer: "a",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Jurnal memorial mencatat transaksi yang tidak rutin atau tidak tercakup dalam jurnal khusus lainnya.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih tidak sesuai dengan fungsi jurnal memorial.</p>"
  },
  
  {
    title: "Model Spiral",
    question: "Apa kelebihan utama dari model spiral dalam pengembangan SIA?<p>",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
      a: "Mengurangi biaya pengembangan sistem",
      b: "Memberikan pendekatan iteratif yang fleksibel",
      c: "Memastikan standar internasional diterapkan"
    },
    correctAnswer: "b",
    correctAnswerText: "Selamat jawaban kamu benar!<p>Model spiral memungkinkan pengembangan sistem secara bertahap dengan evaluasi terus-menerus.</p>",
    falseAnswerText: "Sayang sekali jawaban kamu salah.<p>Jawaban yang kamu pilih tidak mencerminkan kelebihan utama model spiral.</p>"
  }
  ];