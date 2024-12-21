const myQuestions=[
    {
        "title": "Pertanyaan 1",
        "question": "Apa fungsi utama XHTML dibandingkan HTML?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Tidak ada perbedaan",
          "b": "XHTML lebih fleksibel dibandingkan HTML",
          "c": "XHTML lebih terstruktur dan konsisten dibandingkan HTML"
        },
        "correctAnswer": "c",
        "correctAnswerText": "Benar!<p>XHTML dirancang untuk lebih terstruktur dan konsisten dibandingkan HTML.</p>",
        "falseAnswerText": "Salah!<p>XHTML dirancang untuk lebih terstruktur dan konsisten dibandingkan HTML.</p>"
      },
      {
        "title": "Pertanyaan 2",
        "question": "Tag apa yang digunakan untuk menulis deklarasi DOCTYPE pada XHTML?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "<!DOCTYPE>",
          "b": "<DOCTYPE>",
          "c": "<DOCT>"
        },
        "correctAnswer": "a",
        "correctAnswerText": "Benar!<p>DOCTYPE adalah deklarasi standar yang digunakan di awal dokumen XHTML untuk mengidentifikasi tipe dokumen.</p>",
        "falseAnswerText": "Salah!<p>DOCTYPE adalah deklarasi standar yang digunakan di awal dokumen XHTML untuk mengidentifikasi tipe dokumen.</p>"
      },
      {
        "title": "Pertanyaan 3",
        "question": "Apa fungsi dari tag <head> dalam struktur XHTML?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Menyimpan informasi meta, judul, dan link script",
          "b": "Menampilkan konten pada browser",
          "c": "Menampilkan gambar"
        },
        "correctAnswer": "a",
        "correctAnswerText": "Benar!<p>Tag <head> digunakan untuk menyimpan metadata, judul halaman, dan link ke file eksternal seperti CSS atau JavaScript.</p>",
        "falseAnswerText": "Salah!<p>Tag <head> digunakan untuk menyimpan metadata, judul halaman, dan link ke file eksternal seperti CSS atau JavaScript.</p>"
      },
      {
        "title": "Pertanyaan 4",
        "question": "Apa perbedaan utama antara <p> dan <br />?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "<p> membuat baris baru, <br /> tidak.",
          "b": "<p> untuk paragraf, <br /> untuk baris baru.",
          "c": "<p> adalah atribut, <br /> adalah tag."
        },
        "correctAnswer": "b",
        "correctAnswerText": "Benar!<p>Tag <p> digunakan untuk membuat paragraf, sedangkan <br /> digunakan untuk membuat baris kosong.</p>",
        "falseAnswerText": "Salah!<p>Tag <p> digunakan untuk membuat paragraf, sedangkan <br /> digunakan untuk membuat baris kosong.</p>"
      },
      {
        "title": "Pertanyaan 5",
        "question": "Tag apa yang digunakan untuk membuat komentar pada XHTML?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "<!-- komentar -->",
          "b": "/* komentar */",
          "c": "<comment>"
        },
        "correctAnswer": "a",
        "correctAnswerText": "Benar!<p>Komentar pada XHTML ditulis menggunakan sintaks <!-- ... --> dan tidak muncul di tampilan browser.</p>",
        "falseAnswerText": "Salah!<p>Komentar pada XHTML ditulis menggunakan sintaks <!-- ... --> dan tidak muncul di tampilan browser.</p>"
      },
      {
        "title": "Pertanyaan 6",
        "question": "Apa tujuan dari atribut title pada tag HTML?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Memberikan nama file",
          "b": "Menyisipkan deskripsi untuk elemen tertentu",
          "c": "Mengganti atribut alt"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Benar!<p>Atribut title memberikan deskripsi tambahan yang muncul sebagai tooltip saat kursor mendekati elemen tersebut.</p>",
        "falseAnswerText": "Salah!<p>Atribut title memberikan deskripsi tambahan yang muncul sebagai tooltip saat kursor mendekati elemen tersebut.</p>"
      },
      {
        "title": "Pertanyaan 7",
        "question": "Bagaimana cara membuat teks tebal dalam XHTML?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "<strong>",
          "b": "<bold>",
          "c": "<b>"
        },
        "correctAnswer": "c",
        "correctAnswerText": "Benar!<p>Tag <b> digunakan untuk membuat teks menjadi tebal (bold).</p>",
        "falseAnswerText": "Salah!<p>Tag <b> digunakan untuk membuat teks menjadi tebal (bold).</p>"
      },
      {
        "title": "Pertanyaan 8",
        "question": "Apa fungsi dari tag <small> dalam XHTML?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Memperbesar teks",
          "b": "Mengurangi ukuran teks",
          "c": "Membuat teks menjadi miring"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Benar!<p>Tag <small> digunakan untuk memperkecil ukuran teks dalam XHTML.</p>",
        "falseAnswerText": "Salah!<p>Tag <small> digunakan untuk memperkecil ukuran teks dalam XHTML.</p>"
      },
      {
        "title": "Pertanyaan 9",
        "question": "Bagaimana cara menampilkan teks dalam format monospaced?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "<mono>",
          "b": "<code>",
          "c": "<fixed>"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Benar!<p>Tag <code> digunakan untuk menampilkan teks dalam format monospaced seperti tampilan kode program.</p>",
        "falseAnswerText": "Salah!<p>Tag <code> digunakan untuk menampilkan teks dalam format monospaced seperti tampilan kode program.</p>"
      },
      {
        "title": "Pertanyaan 10",
        "question": "Apa nama atribut yang digunakan untuk memberikan kutipan pada elemen blockquote?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "source",
          "b": "cite",
          "c": "quote"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Benar!<p>Atribut cite digunakan untuk memberikan sumber kutipan dalam elemen blockquote.</p>",
        "falseAnswerText": "Salah!<p>Atribut cite digunakan untuk memberikan sumber kutipan dalam elemen blockquote.</p>"
      },
    {
        "title": "Pertanyaan 11",
        "question": "Apa fungsi dari tag <q> dalam XHTML?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Menyisipkan kutipan dalam paragraf",
          "b": "Menyisipkan kutipan dalam blok baru",
          "c": "Membuat daftar"
        },
        "correctAnswer": "a",
        "correctAnswerText": "Benar!<p>Tag <q> digunakan untuk menyisipkan kutipan secara inline dalam sebuah paragraf.</p>",
        "falseAnswerText": "Salah!<p>Tag <q> digunakan untuk menyisipkan kutipan secara inline dalam sebuah paragraf.</p>"
      },
      {
        "title": "Pertanyaan 12",
        "question": "Bagaimana cara menulis superscript di XHTML?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "<sup>",
          "b": "<super>",
          "c": "<superscript>"
        },
        "correctAnswer": "a",
        "correctAnswerText": "Benar!<p>Tag <sup> digunakan untuk menulis teks dengan indeks atas, seperti pangkat dalam matematika.</p>",
        "falseAnswerText": "Salah!<p>Tag <sup> digunakan untuk menulis teks dengan indeks atas, seperti pangkat dalam matematika.</p>"
      },
      {
        "title": "Pertanyaan 13",
        "question": "Apa nama tag yang digunakan untuk menambahkan gambar pada XHTML?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "<picture>",
          "b": "<image>",
          "c": "<img>"
        },
        "correctAnswer": "c",
        "correctAnswerText": "Benar!<p>Tag <img> digunakan untuk menampilkan gambar dalam dokumen XHTML.</p>",
        "falseAnswerText": "Salah!<p>Tag <img> digunakan untuk menampilkan gambar dalam dokumen XHTML.</p>"
      },
      {
        "title": "Pertanyaan 14",
        "question": "Apa fungsi dari atribut alt pada tag <img>?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Mengganti teks pada gambar",
          "b": "Menambahkan tooltip",
          "c": "Menjelaskan gambar jika tidak ditampilkan"
        },
        "correctAnswer": "c",
        "correctAnswerText": "Benar!<p>Atribut alt digunakan untuk memberikan deskripsi jika gambar tidak ditampilkan di browser.</p>",
        "falseAnswerText": "Salah!<p>Atribut alt digunakan untuk memberikan deskripsi jika gambar tidak ditampilkan di browser.</p>"
      },
      {
        "title": "Pertanyaan 15",
        "question": "Bagaimana cara membuat garis horizontal di XHTML?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "<line>",
          "b": "<horizontal>",
          "c": "<hr />"
        },
        "correctAnswer": "c",
        "correctAnswerText": "Benar!<p>Tag <hr /> digunakan untuk menampilkan garis horizontal sebagai pemisah antar bagian dalam halaman web.</p>",
        "falseAnswerText": "Salah!<p>Tag <hr /> digunakan untuk menampilkan garis horizontal sebagai pemisah antar bagian dalam halaman web.</p>"
      },
      {
        "title": "Pertanyaan 16",
        "question": "Apa yang dimaksud dengan favicon?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Ikon yang muncul di tab browser",
          "b": "Gambar pada halaman utama",
          "c": "Ikon untuk menu navigasi"
        },
        "correctAnswer": "a",
        "correctAnswerText": "Benar!<p>Favicon adalah ikon kecil yang muncul di tab browser atau bookmark untuk sebuah situs web.</p>",
        "falseAnswerText": "Salah!<p>Favicon adalah ikon kecil yang muncul di tab browser atau bookmark untuk sebuah situs web.</p>"
      },
      {
        "title": "Pertanyaan 17",
        "question": "Apa fungsi atribut target=\"_blank\" dalam sebuah tautan?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Membuka tautan di jendela yang sama",
          "b": "Membuka tautan di tab baru",
          "c": "Menambahkan deskripsi pada tautan"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Benar!<p>Atribut target=\"_blank\" digunakan untuk membuka tautan di tab atau jendela baru.</p>",
        "falseAnswerText": "Salah!<p>Atribut target=\"_blank\" digunakan untuk membuka tautan di tab atau jendela baru.</p>"
      },
      {
        "title": "Pertanyaan 18",
        "question": "Bagaimana cara membuat daftar tak berurut dalam XHTML?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "<ul>",
          "b": "<li>",
          "c": "<ol>"
        },
        "correctAnswer": "a",
        "correctAnswerText": "Benar!<p>Tag <ul> digunakan untuk membuat daftar tak berurut (unordered list) dalam XHTML.</p>",
        "falseAnswerText": "Salah!<p>Tag <ul> digunakan untuk membuat daftar tak berurut (unordered list) dalam XHTML.</p>"
      },
      {
        "title": "Pertanyaan 19",
        "question": "Apa fungsi dari atribut accesskey pada tag <a>?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Memberikan aksesibilitas melalui tombol keyboard",
          "b": "Menambahkan deskripsi pada tautan",
          "c": "Membuat tautan lebih cepat"
        },
        "correctAnswer": "a",
        "correctAnswerText": "Benar!<p>Atribut accesskey digunakan untuk memberikan shortcut keyboard pada sebuah tautan.</p>",
        "falseAnswerText": "Salah!<p>Atribut accesskey digunakan untuk memberikan shortcut keyboard pada sebuah tautan.</p>"
      },
      {
        "title": "Pertanyaan 20",
        "question": "Apa yang dimaksud dengan anchor dalam XHTML?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Tautan menuju bagian tertentu dalam halaman yang sama",
          "b": "Tautan menuju halaman lain",
          "c": "Tautan menuju file gambar"
        },
        "correctAnswer": "a",
        "correctAnswerText": "Benar!<p>Anchor digunakan untuk menghubungkan ke bagian tertentu dalam halaman yang sama dengan atribut name dan href.</p>",
        "falseAnswerText": "Salah!<p>Anchor digunakan untuk menghubungkan ke bagian tertentu dalam halaman yang sama dengan atribut name dan href.</p>"
      }
];