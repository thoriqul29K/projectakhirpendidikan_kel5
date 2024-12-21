const myQuestions=[

{
    "title": "Pertanyaan 1",
    "question": "Apa definisi dari basis data?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "Koleksi data yang tidak terhubung.",
      "b": "Sistem yang hanya menyimpan data tanpa pengolahan.",
      "c": "Koleksi data yang saling berhubungan dan disimpan secara bersama."
    },
    "correctAnswer": "c",
    "correctAnswerText": "Benar!<p>Basis data adalah kumpulan data yang saling berhubungan dan disimpan secara bersama untuk penggunaan yang efisien.</p>",
    "falseAnswerText": "Salah!<p>Basis data adalah kumpulan data yang saling berhubungan dan disimpan secara bersama untuk penggunaan yang efisien.</p>"
  },
  {
    "title": "Pertanyaan 2",
    "question": "Apa fungsi utama dari DBMS?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "Menyimpan data tanpa pengolahan.",
      "b": "Mengatur, menyimpan, dan menggunakan data secara terorganisasi.",
      "c": "Menghapus data yang tidak terpakai."
    },
    "correctAnswer": "b",
    "correctAnswerText": "Benar!<p>DBMS bertugas mengorganisasi dan memanfaatkan data di dalam basis data secara efisien.</p>",
    "falseAnswerText": "Salah!<p>DBMS bertugas mengorganisasi dan memanfaatkan data di dalam basis data secara efisien.</p>"
  },
  {
    "title": "Pertanyaan 3",
    "question": "Apa nama standar yang digunakan untuk perintah pengelolaan basis data?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "ANSI SQL",
      "b": "MySQL",
      "c": "NoSQL"
    },
    "correctAnswer": "a",
    "correctAnswerText": "Benar!<p>Perintah pengelolaan basis data memiliki standar ANSI SQL yang sering diacu oleh perangkat lunak.</p>",
    "falseAnswerText": "Salah!<p>Perintah pengelolaan basis data memiliki standar ANSI SQL yang sering diacu oleh perangkat lunak.</p>"
  },
  {
    "title": "Pertanyaan 4",
    "question": "Apa istilah untuk kolom dalam sebuah tabel basis data?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "Row",
      "b": "Field",
      "c": "Record"
    },
    "correctAnswer": "b",
    "correctAnswerText": "Benar!<p>Kolom pada tabel basis data disebut sebagai field, yang menggambarkan atribut dari data.</p>",
    "falseAnswerText": "Salah!<p>Kolom pada tabel basis data disebut sebagai field, yang menggambarkan atribut dari data.</p>"
  },
  {
    "title": "Pertanyaan 5",
    "question": "Apa keunggulan utama MySQL dibandingkan DBMS lain?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "Tidak mendukung banyak pengguna.",
      "b": "Struktur tabel yang fleksibel.",
      "c": "Tidak dapat menangani data dalam jumlah besar."
    },
    "correctAnswer": "b",
    "correctAnswerText": "Benar!<p>MySQL memiliki struktur tabel yang fleksibel dibandingkan PostgreSQL dan Oracle.</p>",
    "falseAnswerText": "Salah!<p>MySQL memiliki struktur tabel yang fleksibel dibandingkan PostgreSQL dan Oracle.</p>"
  },
  {
    "title": "Pertanyaan 6",
    "question": "Perintah SQL apa yang digunakan untuk membuat basis data baru?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "INSERT DATABASE",
      "b": "CREATE DATABASE",
      "c": "NEW DATABASE"
    },
    "correctAnswer": "b",
    "correctAnswerText": "Benar!<p>Perintah SQL untuk membuat basis data baru adalah CREATE DATABASE.</p>",
    "falseAnswerText": "Salah!<p>Perintah SQL untuk membuat basis data baru adalah CREATE DATABASE.</p>"
  },
  {
    "title": "Pertanyaan 7",
    "question": "Apa tujuan dari primary key?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "Sebagai atribut opsional.",
      "b": "Untuk membedakan setiap record.",
      "c": "Untuk menyimpan data dalam bentuk file."
    },
    "correctAnswer": "b",
    "correctAnswerText": "Benar!<p>Primary key adalah atribut unik yang membedakan setiap record di tabel.</p>",
    "falseAnswerText": "Salah!<p>Primary key adalah atribut unik yang membedakan setiap record di tabel.</p>"
  },
  {
    "title": "Pertanyaan 8",
    "question": "Jenis relasi basis data apa yang menggambarkan hubungan antara satu tabel ke banyak tabel?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "One to One",
      "b": "One to Many",
      "c": "Many to One"
    },
    "correctAnswer": "b",
    "correctAnswerText": "Benar!<p>Relasi One to Many menghubungkan satu record di tabel A ke banyak record di tabel B.</p>",
    "falseAnswerText": "Salah!<p>Relasi One to Many menghubungkan satu record di tabel A ke banyak record di tabel B.</p>"
  },
  {
    "title": "Pertanyaan 9",
    "question": "Apa nama operator untuk melakukan pengurutan data dalam SQL?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "SELECT",
      "b": "ORDER BY",
      "c": "WHERE"
    },
    "correctAnswer": "b",
    "correctAnswerText": "Benar!<p>ORDER BY digunakan untuk mengurutkan data dalam tabel.</p>",
    "falseAnswerText": "Salah!<p>ORDER BY digunakan untuk mengurutkan data dalam tabel.</p>"
  },
  {
    "title": "Pertanyaan 10",
    "question": "Apa fungsi dari SELECT DISTINCT?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "Menampilkan semua data tabel tanpa filter.",
      "b": "Menampilkan data yang unik saja.",
      "c": "Menghapus data duplikat."
    },
    "correctAnswer": "b",
    "correctAnswerText": "Benar!<p>SELECT DISTINCT menampilkan data unik dari kolom tertentu.</p>",
    "falseAnswerText": "Salah!<p>SELECT DISTINCT menampilkan data unik dari kolom tertentu.</p>"
  },
  {
    "title": "Pertanyaan 11",
    "question": "Apa arti dari istilah SQL?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "Simple Query List",
      "b": "Structured Query Language",
      "c": "Sequential Query Log"
    },
    "correctAnswer": "b",
    "correctAnswerText": "Benar!<p>SQL adalah singkatan dari Structured Query Language.</p>",
    "falseAnswerText": "Salah!<p>SQL adalah singkatan dari Structured Query Language.</p>"
  },
  {
    "title": "Pertanyaan 12",
    "question": "Fungsi agregat apa yang digunakan untuk menghitung rata-rata?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "SUM",
      "b": "COUNT",
      "c": "AVG"
    },
    "correctAnswer": "c",
    "correctAnswerText": "Benar!<p>AVG digunakan untuk menghitung nilai rata-rata dalam kolom tertentu.</p>",
    "falseAnswerText": "Salah!<p>AVG digunakan untuk menghitung nilai rata-rata dalam kolom tertentu.</p>"
  },
  {
    "title": "Pertanyaan 13",
    "question": "Apa kegunaan dari fungsi HAVING dalam SQL?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "Menentukan kondisi untuk fungsi agregat.",
      "b": "Menghapus data berdasarkan kondisi.",
      "c": "Mengatur urutan data di tabel."
    },
    "correctAnswer": "a",
    "correctAnswerText": "Benar!<p>HAVING digunakan untuk menetapkan kondisi setelah pengelompokan data.</p>",
    "falseAnswerText": "Salah!<p>HAVING digunakan untuk menetapkan kondisi setelah pengelompokan data.</p>"
  },
  {
    "title": "Pertanyaan 14",
    "question": "Apa nama operator yang digunakan untuk relasi irisan data?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "CROSS JOIN",
      "b": "INNER JOIN",
      "c": "LEFT JOIN"
    },
    "correctAnswer": "b",
    "correctAnswerText": "Benar!<p>INNER JOIN menggabungkan data dari dua tabel dengan menampilkan irisan data.</p>",
    "falseAnswerText": "Salah!<p>INNER JOIN menggabungkan data dari dua tabel dengan menampilkan irisan data.</p>"
  },
  {
    "title": "Pertanyaan 15",
    "question": "Apa keunggulan dari VIEW?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "Menyimpan data sebagai file terpisah.",
      "b": "Membantu menyimpan query kompleks sebagai tabel virtual.",
      "c": "Menghapus tabel dari basis data."
    },
    "correctAnswer": "b",
    "correctAnswerText": "Benar!<p>VIEW adalah tabel virtual yang menyederhanakan query kompleks.</p>",
    "falseAnswerText": "Salah!<p>VIEW adalah tabel virtual yang menyederhanakan query kompleks.</p>"
  },
  {
    "title": "Pertanyaan 16",
    "question": "Apa peran trigger pada basis data?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "Menambah data secara manual.",
      "b": "Menjalankan kode otomatis saat ada perubahan data.",
      "c": "Menghapus data yang lama."
    },
    "correctAnswer": "b",
    "correctAnswerText": "Benar!<p>Trigger digunakan untuk menjalankan kode otomatis sebelum atau setelah perintah DML.</p>",
    "falseAnswerText": "Salah!<p>Trigger digunakan untuk menjalankan kode otomatis sebelum atau setelah perintah DML.</p>"
  },
  {
    "title": "Pertanyaan 17",
    "question": "Perintah SQL apa yang digunakan untuk mengubah tabel?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "CREATE",
      "b": "DROP",
      "c": "ALTER"
    },
    "correctAnswer": "c",
    "correctAnswerText": "Benar!<p>ALTER digunakan untuk menambahkan, mengubah, atau menghapus kolom pada tabel.</p>",
    "falseAnswerText": "Salah!<p>ALTER digunakan untuk menambahkan, mengubah, atau menghapus kolom pada tabel.</p>"
  },
  {
    "title": "Pertanyaan 18",
    "question": "Apa fungsi dari perintah DROP dalam SQL?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "Menghapus tabel atau indeks.",
      "b": "Menambah data baru.",
      "c": "Mengubah data yang ada."
    },
    "correctAnswer": "a",
    "correctAnswerText": "Benar!<p>DROP digunakan untuk menghapus tabel, indeks, atau objek lainnya dalam basis data.</p>",
    "falseAnswerText": "Salah!<p>DROP digunakan untuk menghapus tabel, indeks, atau objek lainnya dalam basis data.</p>"
  },
  {
    "title": "Pertanyaan 19",
    "question": "Apa nama tipe data untuk menyimpan angka desimal di MySQL?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "VARCHAR",
      "b": "INT",
      "c": "DECIMAL"
    },
    "correctAnswer": "c",
    "correctAnswerText": "Benar!<p>DECIMAL adalah tipe data untuk angka desimal di MySQL.</p>",
    "falseAnswerText": "Salah!<p>DECIMAL adalah tipe data untuk angka desimal di MySQL.</p>"
  },
  {
    "title": "Pertanyaan 20",
    "question": "Apa perintah SQL untuk menampilkan nama mahasiswa dari tabel mahasiswa?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "SELECT mahasiswa FROM nama;",
      "b": "SELECT nama FROM mahasiswa;",
      "c": "SELECT mahasiswa.nama FROM tabel;"
    },
    "correctAnswer": "b",
    "correctAnswerText": "Benar!<p>SELECT digunakan untuk menampilkan kolom spesifik dari tabel.</p>",
    "falseAnswerText": "Salah!<p>SELECT digunakan untuk menampilkan kolom spesifik dari tabel.</p>"
  }
];
