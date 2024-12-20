const myQuestions = [
  {
      title: "Definisi Algoritma",
      question: "Apa definisi dari algoritma?",
      background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
      answers: {
          a: "Serangkaian langkah-langkah untuk menyelesaikan masalah secara sistematis",
          b: "Bahasa pemrograman untuk komputer",
          c: "Sistem untuk menjalankan perangkat keras"
      },
      correctAnswer: "a",
      correctAnswerText: "Benar!<p>Algoritma adalah serangkaian langkah-langkah untuk menyelesaikan masalah secara sistematis.</p>",
      falseAnswerText: "Salah!<p>Algoritma adalah langkah-langkah yang terstruktur untuk menyelesaikan masalah.</p>"
  },
  {
      title: "Bahasa Pemrograman",
      question: "Bahasa pemrograman apa yang digunakan dalam modul ini?",
      background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
      answers: {
          a: "Python",
          b: "MATLAB",
          c: "C++"
      },
      correctAnswer: "b",
      correctAnswerText: "Benar!<p>Modul ini menggunakan MATLAB sebagai bahasa pemrograman.</p>",
      falseAnswerText: "Salah!<p>Modul ini menggunakan MATLAB, bukan Python atau C++.</p>"
  },
  {
      title: "Ciri Algoritma",
      question: "Manakah yang merupakan salah satu ciri algoritma?",
      background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
      answers: {
          a: "Tidak memiliki output",
          b: "Memiliki langkah yang tidak terbatas",
          c: "Langkah-langkahnya terdefinisi dengan jelas"
      },
      correctAnswer: "c",
      correctAnswerText: "Benar!<p>Algoritma memiliki langkah-langkah yang terdefinisi dengan jelas.</p>",
      falseAnswerText: "Salah!<p>Algoritma harus memiliki langkah-langkah yang jelas dan terdefinisi.</p>"
  },
  {
      title: "Fungsi MATLAB",
      question: "Apa fungsi utama MATLAB dalam pemrograman?",
      background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
      answers: {
          a: "Sebagai alat untuk simulasi dan komputasi teknis",
          b: "Mengelola perangkat keras komputer",
          c: "Meningkatkan kecepatan internet"
      },
      correctAnswer: "a",
      correctAnswerText: "Benar!<p>MATLAB berfungsi sebagai alat untuk simulasi dan komputasi teknis.</p>",
      falseAnswerText: "Salah!<p>MATLAB digunakan untuk simulasi dan komputasi teknis.</p>"
  },
  {
      title: "Flowchart",
      question: "Apa itu flowchart?",
      background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
      answers: {
          a: "Diagram yang menunjukkan alur proses data",
          b: "Bahasa pemrograman berbasis teks",
          c: "Sistem operasi untuk komputer"
      },
      correctAnswer: "a",
      correctAnswerText: "Benar!<p>Flowchart adalah diagram yang menunjukkan alur proses data.</p>",
      falseAnswerText: "Salah!<p>Flowchart adalah diagram yang menggambarkan alur proses data.</p>"
  },
  {
      title: "MATLAB Workspace",
      question: "Apa fungsi utama dari Workspace di MATLAB?",
      background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
      answers: {
          a: "Menjalankan perintah pengguna",
          b: "Menyimpan variabel aktif selama sesi",
          c: "Mengatur koneksi jaringan"
      },
      correctAnswer: "b",
      correctAnswerText: "Benar!<p>Workspace menyimpan variabel aktif selama sesi MATLAB berlangsung.</p>",
      falseAnswerText: "Salah!<p>Workspace menyimpan variabel aktif selama sesi.</p>"
  },
  {
      title: "Konsep Array",
      question: "Apa definisi dari array dalam MATLAB?",
      background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
      answers: {
          a: "Kumpulan data dengan ukuran tetap",
          b: "Kumpulan data scalar yang dinyatakan dalam baris atau kolom",
          c: "Sistem operasi komputer"
      },
      correctAnswer: "b",
      correctAnswerText: "Benar!<p>Array adalah kumpulan data scalar yang dinyatakan dalam baris atau kolom.</p>",
      falseAnswerText: "Salah!<p>Array adalah kumpulan data scalar dalam bentuk baris atau kolom.</p>"
  },
  {
      title: "Looping",
      question: "Manakah perintah looping yang digunakan di MATLAB?",
      background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
      answers: {
          a: "for dan while",
          b: "switch dan if",
          c: "do dan end"
      },
      correctAnswer: "a",
      correctAnswerText: "Benar!<p>MATLAB menggunakan for dan while untuk perulangan (looping).</p>",
      falseAnswerText: "Salah!<p>Perulangan di MATLAB menggunakan for dan while.</p>"
  },
  {
      title: "MATLAB Plot",
      question: "Apa fungsi utama dari perintah plot di MATLAB?",
      background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
      answers: {
          a: "Menggambarkan data dalam bentuk grafik",
          b: "Mengelola direktori file",
          c: "Mengatur koneksi jaringan"
      },
      correctAnswer: "a",
      correctAnswerText: "Benar!<p>Perintah plot digunakan untuk menggambarkan data dalam bentuk grafik.</p>",
      falseAnswerText: "Salah!<p>Plot berfungsi untuk menggambarkan data dalam grafik.</p>"
  },
  {
      title: "MATLAB Editor",
      question: "Apa fungsi utama dari MATLAB Editor?",
      background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
      answers: {
          a: "Menjalankan program langsung",
          b: "Menulis dan menyimpan kode program",
          c: "Menyimpan variabel"
      },
      correctAnswer: "b",
      correctAnswerText: "Benar!<p>MATLAB Editor digunakan untuk menulis dan menyimpan kode program.</p>",
      falseAnswerText: "Salah!<p>MATLAB Editor digunakan untuk menulis dan menyimpan kode.</p>"
  },
  {
    title: "Operasi Matriks",
    question: "Apa fungsi perintah `inv(A)` di MATLAB?",
    background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
    answers: {
        a: "Menghitung invers matriks A",
        b: "Mengubah matriks A menjadi diagonal",
        c: "Menampilkan elemen terbesar dari matriks A"
    },
    correctAnswer: "a",
    correctAnswerText: "Benar!<p>Perintah `inv(A)` digunakan untuk menghitung invers dari matriks A.</p>",
    falseAnswerText: "Salah!<p>Perintah `inv(A)` menghitung invers dari matriks A.</p>"
},
{
    title: "Fungsi Logika",
    question: "Manakah perintah yang digunakan untuk operasi logika 'AND' di MATLAB?",
    background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
    answers: {
        a: "&",
        b: "|",
        c: "~"
    },
    correctAnswer: "a",
    correctAnswerText: "Benar!<p>Simbol `&` digunakan untuk operasi logika 'AND' di MATLAB.</p>",
    falseAnswerText: "Salah!<p>Operasi logika 'AND' di MATLAB menggunakan simbol `&`.</p>"
},
{
    title: "Fungsi If-Else",
    question: "Apa yang terjadi jika kondisi dalam perintah `if` bernilai false?",
    background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
    answers: {
        a: "Perintah dalam blok `if` tetap dijalankan",
        b: "Blok `else` dijalankan jika ada",
        c: "Program berhenti"
    },
    correctAnswer: "b",
    correctAnswerText: "Benar!<p>Jika kondisi `if` bernilai false, maka blok `else` dijalankan jika ada.</p>",
    falseAnswerText: "Salah!<p>Blok `else` akan dijalankan jika kondisi dalam `if` bernilai false dan blok `else` tersedia.</p>"
},
{
    title: "Switch-Case",
    question: "Apa fungsi dari perintah `switch` di MATLAB?",
    background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
    answers: {
        a: "Mengevaluasi kondisi dengan banyak kasus",
        b: "Melakukan perulangan untuk kondisi tertentu",
        c: "Menampilkan matriks diagonal"
    },
    correctAnswer: "a",
    correctAnswerText: "Benar!<p>Perintah `switch` digunakan untuk mengevaluasi kondisi dengan banyak kasus.</p>",
    falseAnswerText: "Salah!<p>`Switch` digunakan untuk mengevaluasi kondisi dengan banyak kasus.</p>"
},
{
    title: "Perintah While",
    question: "Apa fungsi utama dari perintah `while` dalam MATLAB?",
    background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
    answers: {
        a: "Menjalankan perulangan selama kondisi terpenuhi",
        b: "Menampilkan grafik data",
        c: "Menghapus variabel dari Workspace"
    },
    correctAnswer: "a",
    correctAnswerText: "Benar!<p>`While` menjalankan perulangan selama kondisi terpenuhi.</p>",
    falseAnswerText: "Salah!<p>Fungsi utama `while` adalah menjalankan perulangan dengan kondisi tertentu.</p>"
},
{
    title: "Fungsi",
    question: "Apa yang dimaksud dengan fungsi dalam MATLAB?",
    background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
    answers: {
        a: "Program kecil untuk tugas tertentu yang dapat dipanggil ulang",
        b: "Perintah untuk memodifikasi array",
        c: "Metode untuk menampilkan plot grafik"
    },
    correctAnswer: "a",
    correctAnswerText: "Benar!<p>Fungsi adalah program kecil untuk tugas tertentu yang dapat dipanggil ulang.</p>",
    falseAnswerText: "Salah!<p>Fungsi adalah program kecil untuk tugas tertentu dan dapat dipanggil kembali.</p>"
},
{
    title: "Pengelolaan File",
    question: "Perintah apa yang digunakan untuk menyimpan Workspace di MATLAB?",
    background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
    answers: {
        a: "save",
        b: "load",
        c: "export"
    },
    correctAnswer: "a",
    correctAnswerText: "Benar!<p>Perintah `save` digunakan untuk menyimpan Workspace di MATLAB.</p>",
    falseAnswerText: "Salah!<p>`Save` adalah perintah untuk menyimpan Workspace di MATLAB.</p>"
},
{
    title: "Error Handling",
    question: "Apa fungsi utama dari perintah `try-catch` di MATLAB?",
    background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
    answers: {
        a: "Menangkap dan menangani kesalahan dalam program",
        b: "Menghentikan semua perulangan",
        c: "Meningkatkan efisiensi perhitungan"
    },
    correctAnswer: "a",
    correctAnswerText: "Benar!<p>Perintah `try-catch` digunakan untuk menangkap dan menangani kesalahan dalam program MATLAB.</p>",
    falseAnswerText: "Salah!<p>Perintah `try-catch` menangani kesalahan dalam program MATLAB.</p>"
},
{
    title: "Grafik 3D",
    question: "Perintah apa yang digunakan untuk membuat grafik 3D di MATLAB?",
    background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
    answers: {
        a: "plot3",
        b: "surf",
        c: "keduanya benar"
    },
    correctAnswer: "c",
    correctAnswerText: "Benar!<p>Perintah `plot3` dan `surf` dapat digunakan untuk membuat grafik 3D.</p>",
    falseAnswerText: "Salah!<p>Untuk grafik 3D, dapat digunakan `plot3` atau `surf` tergantung jenis grafiknya.</p>"
},
{
    title: "Manipulasi String",
    question: "Perintah apa yang digunakan untuk menggabungkan dua string di MATLAB?",
    background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    answers: {
        a: "strcat",
        b: "merge",
        c: "append"
    },
    correctAnswer: "a",
    correctAnswerText: "Benar!<p>Perintah `strcat` digunakan untuk menggabungkan dua string di MATLAB.</p>",
    falseAnswerText: "Salah!<p>`Strcat` adalah perintah untuk menggabungkan string di MATLAB.</p>"
},
{
    title: "Numerical Integration",
    question: "Apa fungsi dari perintah `integral` di MATLAB?",
    background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
    answers: {
        a: "Melakukan integrasi numerik",
        b: "Menghitung turunan numerik",
        c: "Menyelesaikan sistem persamaan"
    },
    correctAnswer: "a",
    correctAnswerText: "Benar!<p>Perintah `integral` digunakan untuk melakukan integrasi numerik.</p>",
    falseAnswerText: "Salah!<p>Perintah `integral` melakukan integrasi numerik.</p>"
},
{
    title: "Simulasi Monte Carlo",
    question: "Apa tujuan utama simulasi Monte Carlo di MATLAB?",
    background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
    answers: {
        a: "Menampilkan grafik probabilitas",
        b: "Menyimulasikan solusi menggunakan metode acak",
        c: "Mengurangi jumlah iterasi"
    },
    correctAnswer: "b",
    correctAnswerText: "Benar!<p>Simulasi Monte Carlo digunakan untuk menyimulasikan solusi menggunakan metode acak.</p>",
    falseAnswerText: "Salah!<p>Simulasi Monte Carlo menggunakan metode acak untuk solusi.</p>"
},
{
  title: "Evaluasi Risiko",
  question: "Apa langkah pertama dalam proses evaluasi risiko perusahaan?",
  background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
  answers: {
      a: "Mengidentifikasi potensi risiko",
      b: "Mengurangi jumlah karyawan",
      c: "Menghentikan semua operasional"
  },
  correctAnswer: "a",
  correctAnswerText: "Benar!<p>Langkah pertama dalam evaluasi risiko adalah mengidentifikasi potensi risiko.</p>",
  falseAnswerText: "Salah!<p>Langkah awal evaluasi risiko adalah mengidentifikasi potensi risiko.</p>"
},
{
  title: "Rapat Umum Pemegang Saham",
  question: "Apa fungsi utama dari Rapat Umum Pemegang Saham (RUPS)?",
  background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
  answers: {
      a: "Mengawasi kinerja Direksi secara langsung",
      b: "Membahas dan memutuskan kebijakan strategis perusahaan",
      c: "Menyusun laporan keuangan"
  },
  correctAnswer: "b",
  correctAnswerText: "Benar!<p>RUPS berfungsi untuk membahas dan memutuskan kebijakan strategis perusahaan.</p>",
  falseAnswerText: "Salah!<p>Fungsi utama RUPS adalah membahas dan memutuskan kebijakan strategis perusahaan.</p>"
},
{
  title: "Keseimbangan dalam Pengambilan Keputusan",
  question: "Mengapa keseimbangan dalam pengambilan keputusan penting untuk Tata Kelola Perusahaan?",
  background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
  answers: {
      a: "Untuk menghindari konflik kepentingan",
      b: "Untuk memusatkan kekuasaan pada satu individu",
      c: "Untuk mempercepat penyelesaian laporan keuangan"
  },
  correctAnswer: "a",
  correctAnswerText: "Benar!<p>Keseimbangan dalam pengambilan keputusan penting untuk menghindari konflik kepentingan.</p>",
  falseAnswerText: "Salah!<p>Keseimbangan dalam pengambilan keputusan bertujuan menghindari konflik kepentingan.</p>"
}
];
