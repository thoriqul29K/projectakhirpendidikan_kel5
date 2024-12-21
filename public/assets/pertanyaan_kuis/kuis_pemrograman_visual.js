const myQuestions=[
    {
        "title": "Tipe Data Integer",
        "question": "Apa fungsi tipe data Integer dalam Delphi?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Menyimpan data berupa bilangan bulat",
          "b": "Menyimpan data berupa bilangan desimal",
          "c": "Menyimpan data berupa karakter"
        },
        "correctAnswer": "a",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>Tipe data Integer digunakan untuk menyimpan bilangan bulat dalam rentang tertentu.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>Integer hanya digunakan untuk bilangan bulat, bukan bilangan desimal atau karakter.</p>"
      },
      
      {
        "title": "Operator Assignment",
        "question": "Apa simbol yang digunakan untuk operator assignment dalam Delphi?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "=",
          "b": ":=",
          "c": "->"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>Simbol := digunakan untuk memberikan nilai ke variabel di Delphi.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>= digunakan untuk perbandingan, dan -> tidak ada dalam Delphi.</p>"
      },
      
      {
        "title": "Komentar dalam Kode",
        "question": "Apa yang dimaksud dengan komentar dalam kode program Delphi?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Baris kode yang selalu dijalankan",
          "b": "Baris kode untuk memberikan keterangan dan tidak dijalankan",
          "c": "Baris kode yang menyimpan nilai variabel"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>Komentar digunakan untuk memberikan keterangan tanpa dieksekusi oleh program.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>Komentar tidak dieksekusi dan hanya untuk memberikan informasi tambahan.</p>"
      },
      
      {
        "title": "Tipe Data Boolean",
        "question": "Tipe data apa yang digunakan untuk menyimpan nilai logika dalam Delphi?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Real",
          "b": "Boolean",
          "c": "Char"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>Tipe data Boolean digunakan untuk menyimpan nilai logika True atau False.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>Real digunakan untuk bilangan desimal, dan Char untuk karakter.</p>"
      },
      
      {
        "title": "Komponen TButton",
        "question": "Apa fungsi dari komponen TButton dalam Delphi?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Menampilkan data dalam tabel",
          "b": "Memproses tindakan ketika diklik",
          "c": "Menyimpan data variabel"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>Komponen TButton menjalankan aksi tertentu saat pengguna mengkliknya.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>TButton tidak digunakan untuk menampilkan tabel atau menyimpan data.</p>"
      },
      
      {
        "title": "Komponen TRadioGroup",
        "question": "Apa fungsi utama dari komponen TRadioGroup dalam Delphi?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Menyimpan data berupa array",
          "b": "Menampilkan pilihan dengan multiple selection",
          "c": "Menampilkan pilihan dengan single selection"
        },
        "correctAnswer": "c",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>TRadioGroup hanya memungkinkan pengguna memilih satu pilihan.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>TRadioGroup tidak digunakan untuk multiple selection atau array.</p>"
      },
      
      {
        "title": "Komponen TDBGrid",
        "question": "Dalam Delphi, apa yang dimaksud dengan komponen TDBGrid?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Komponen untuk membuat grafik",
          "b": "Komponen untuk menampilkan data dalam format tabel",
          "c": "Komponen untuk menampilkan teks panjang"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>TDBGrid digunakan untuk menampilkan data dari database dalam format tabel.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>TDBGrid tidak digunakan untuk grafik atau teks panjang.</p>"
      },
      
      {
        "title": "Fungsi IntToStr",
        "question": "Apa kegunaan dari fungsi IntToStr dalam Delphi?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Mengubah integer ke string",
          "b": "Mengubah string ke integer",
          "c": "Membandingkan dua nilai"
        },
        "correctAnswer": "a",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>IntToStr digunakan untuk mengubah bilangan bulat menjadi string.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>Fungsi ini tidak digunakan untuk mengubah string ke integer atau membandingkan nilai.</p>"
      },
      
      {
        "title": "Operator Logika",
        "question": "Apa hasil dari kode berikut di Delphi?<p>if (5 > 3) and (2 < 1) then<br>ShowMessage('Benar')<br>else<br>ShowMessage('Salah');</p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Menampilkan 'Benar'",
          "b": "Menampilkan 'Salah'",
          "c": "Error"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>Kondisi pertama True, tetapi kondisi kedua False, sehingga hasilnya adalah 'Salah'.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>Operator and membutuhkan kedua kondisi bernilai True untuk menghasilkan True.</p>"
      },
      
      {
        "title": "Fungsi MessageDlg",
        "question": "Apa fungsi utama dari MessageDlg dalam Delphi?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Menampilkan pesan dialog kepada pengguna",
          "b": "Menyimpan data dalam database",
          "c": "Membuka file eksternal"
        },
        "correctAnswer": "a",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>MessageDlg digunakan untuk menampilkan pesan dialog seperti peringatan atau konfirmasi.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>MessageDlg tidak digunakan untuk menyimpan data atau membuka file.</p>"
      },
      
      {
        "title": "Tipe Data Real",
        "question": "Apa kegunaan utama tipe data Real dalam Delphi?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Menyimpan data bilangan bulat",
          "b": "Menyimpan data bilangan pecahan atau desimal",
          "c": "Menyimpan data berupa karakter"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>Tipe data Real digunakan untuk menyimpan bilangan pecahan atau desimal.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>Bilangan bulat disimpan menggunakan Integer, dan karakter disimpan dengan Char.</p>"
      },
      
      {
        "title": "Operator Mod",
        "question": "Apa yang dimaksud dengan operator mod di Delphi?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Operator pembagian",
          "b": "Operator sisa hasil bagi",
          "c": "Operator perpangkatan"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>Operator mod digunakan untuk menghitung sisa hasil bagi dalam operasi matematika.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>Operator mod tidak digunakan untuk pembagian atau perpangkatan.</p>"
      },
      
      {
        "title": "Komponen TCheckBox",
        "question": "Apa fungsi dari komponen TCheckBox dalam Delphi?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Memungkinkan pengguna memilih lebih dari satu opsi",
          "b": "Membatasi pengguna untuk hanya memilih satu opsi",
          "c": "Menyimpan data angka"
        },
        "correctAnswer": "a",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>TCheckBox memungkinkan pengguna memilih lebih dari satu opsi secara bersamaan.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>Untuk single selection digunakan TRadioGroup, dan TCheckBox tidak menyimpan data angka.</p>"
      },
      
      {
        "title": "Perbedaan Div dan /",
        "question": "Apa perbedaan utama antara div dan / dalam Delphi?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "div menghasilkan bilangan bulat, sedangkan / menghasilkan bilangan pecahan",
          "b": "div digunakan untuk bilangan desimal, sedangkan / untuk bilangan bulat",
          "c": "div dan / memiliki fungsi yang sama"
        },
        "correctAnswer": "a",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>Operator div menghasilkan bilangan bulat, sedangkan / menghasilkan bilangan pecahan dari pembagian.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>div tidak digunakan untuk bilangan desimal, dan keduanya memiliki fungsi yang berbeda.</p>"
      },
      
      {
        "title": "Komponen TMainMenu",
        "question": "Apa fungsi dari TMainMenu dalam Delphi?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Menampilkan menu pilihan pada aplikasi",
          "b": "Menampilkan data dalam tabel",
          "c": "Membuka file teks"
        },
        "correctAnswer": "a",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>TMainMenu digunakan untuk membuat menu pilihan di aplikasi.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>Data tabel ditampilkan dengan TDBGrid, dan file teks dibuka menggunakan fungsi file handling.</p>"
      },
      
      {
        "title": "Hasil dari Div",
        "question": "Apa hasil dari kode berikut di Delphi?<p>ShowMessage(IntToStr(10 div 3));</p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "3",
          "b": "3.33",
          "c": "Error"
        },
        "correctAnswer": "a",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>Operator div menghasilkan bilangan bulat dari pembagian, yaitu 3.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>Hasil pecahan hanya diberikan oleh operator /. Kode ini valid dan tidak menghasilkan error.</p>"
      },
      
      {
        "title": "Properti Caption",
        "question": "Apa fungsi dari properti Caption dalam Delphi?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Mengatur ukuran objek",
          "b": "Mengatur teks atau label pada objek",
          "c": "Mengatur posisi objek di form"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>Properti Caption digunakan untuk menentukan teks yang muncul pada objek seperti form atau tombol.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>Ukuran objek diatur dengan properti Width dan Height, dan posisi objek diatur dengan Left dan Top.</p>"
      },
      
      {
        "title": "Deklarasi Pointer",
        "question": "Dalam Delphi, bagaimana cara menentukan tipe data pointer?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Dengan menggunakan simbol * sebelum nama variabel",
          "b": "Dengan menggunakan ^ sebelum nama tipe data",
          "c": "Dengan mendeklarasikan variabel sebagai Integer"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>Tipe data pointer dideklarasikan menggunakan ^ sebelum nama tipe data (contoh: ^Integer).</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>Simbol * tidak digunakan di Delphi untuk pointer, dan Integer bukan tipe pointer.</p>"
      },
      
      {
        "title": "Penggabungan String",
        "question": "Apa hasil dari kode berikut?<p>str := 'Hello ' + 'World';<br>ShowMessage(str);</p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Hello World",
          "b": "HelloWorld",
          "c": "Error"
        },
        "correctAnswer": "a",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>Operator + pada string menggabungkan dua string menjadi satu, menghasilkan 'Hello World'.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>Spasi tidak dihilangkan saat menggabungkan string, dan kode ini valid tanpa error.</p>"
      },
      
      {
        "title": "Mengubah Warna Form",
        "question": "Apa fungsi dari Form1.Color := clRed dalam Delphi?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Mengubah warna teks pada form",
          "b": "Mengubah warna latar belakang form menjadi merah",
          "c": "Menghapus komponen pada form"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>Properti Color pada form digunakan untuk mengatur warna latar belakang form.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>Warna teks diatur dengan Font.Color, dan properti Color tidak menghapus komponen.</p>"
      }
];