const myQuestions = [
{
    "title": "Pertanyaan 1",
    "question": "Apa prinsip dasar dari Pemrograman Berorientasi Objek (PBO)?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "Fungsi dan prosedur",
      "b": "Kelas dan objek",
      "c": "Variabel dan konstanta",
      "d": "Array dan string"
    },
    "correctAnswer": "b",
    "correctAnswerText": "Benar!<p>Prinsip dasar PBO adalah kelas (class) sebagai template atau blueprint, dan objek (object) sebagai instance dari kelas tersebut.</p>",
    "falseAnswerText": "Salah!<p>Prinsip dasar PBO adalah kelas (class) sebagai template atau blueprint, dan objek (object) sebagai instance dari kelas tersebut.</p>"
  },
  {
    "title": "Pertanyaan 2",
    "question": "Apa yang dimaksud dengan enkapsulasi dalam PBO?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "Penggunaan array untuk menyimpan data",
      "b": "Menyembunyikan detail implementasi dan hanya menampilkan fungsionalitas penting",
      "c": "Pemrograman berbasis fungsi",
      "d": "Menyusun kode dalam bentuk urutan yang jelas"
    },
    "correctAnswer": "b",
    "correctAnswerText": "Benar!<p>Enkapsulasi adalah konsep untuk membungkus data dan metode yang beroperasi pada data tersebut dalam satu kesatuan (kelas), dan menyembunyikan implementasi yang tidak perlu diketahui pengguna.</p>",
    "falseAnswerText": "Salah!<p>Enkapsulasi adalah konsep untuk membungkus data dan metode yang beroperasi pada data tersebut dalam satu kesatuan (kelas), dan menyembunyikan implementasi yang tidak perlu diketahui pengguna.</p>"
  },
  {
    "title": "Pertanyaan 3",
    "question": "Apa itu objek dalam PBO?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "Suatu fungsi dalam program",
      "b": "Sebuah variabel dalam program",
      "c": "Instance dari kelas",
      "d": "Struktur data yang menyimpan informasi"
    },
    "correctAnswer": "c",
    "correctAnswerText": "Benar!<p>Objek adalah instansiasi dari kelas yang berisi data (atribut) dan metode (fungsi) yang berkaitan dengan data tersebut.</p>",
    "falseAnswerText": "Salah!<p>Objek adalah instansiasi dari kelas yang berisi data (atribut) dan metode (fungsi) yang berkaitan dengan data tersebut.</p>"
  },
  {
    "title": "Pertanyaan 4",
    "question": "Apa yang dimaksud dengan pewarisan (inheritance) dalam PBO?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "Menyimpan data dalam file",
      "b": "Membuat objek baru berdasarkan objek yang sudah ada",
      "c": "Menyusun data dalam array",
      "d": "Menyembunyikan implementasi data"
    },
    "correctAnswer": "b",
    "correctAnswerText": "Benar!<p>Pewarisan memungkinkan kelas baru untuk mewarisi sifat dan perilaku dari kelas yang ada, mengurangi duplikasi kode.</p>",
    "falseAnswerText": "Salah!<p>Pewarisan memungkinkan kelas baru untuk mewarisi sifat dan perilaku dari kelas yang ada, mengurangi duplikasi kode.</p>"
  },
  {
    "title": "Pertanyaan 5",
    "question": "Apa itu polimorfisme dalam PBO?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "Menambahkan metode baru dalam kelas",
      "b": "Objek dapat mengambil banyak bentuk",
      "c": "Menggabungkan dua kelas menjadi satu",
      "d": "Menyembunyikan data yang tidak penting"
    },
    "correctAnswer": "b",
    "correctAnswerText": "Benar!<p>Polimorfisme memungkinkan objek dari kelas yang berbeda untuk diperlakukan seolah-olah berasal dari kelas yang sama, memberikan fleksibilitas dalam pemrograman.</p>",
    "falseAnswerText": "Salah!<p>Polimorfisme memungkinkan objek dari kelas yang berbeda untuk diperlakukan seolah-olah berasal dari kelas yang sama, memberikan fleksibilitas dalam pemrograman.</p>"
  },
  {
    "title": "Pertanyaan 6",
    "question": "Dalam PBO, apa yang dimaksud dengan 'overloading'?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "Menambahkan metode dengan nama yang sama tetapi parameter yang berbeda",
      "b": "Menggabungkan dua objek menjadi satu",
      "c": "Menghapus metode yang tidak digunakan",
      "d": "Menyembunyikan metode di dalam kelas"
    },
    "correctAnswer": "a",
    "correctAnswerText": "Benar!<p>Overloading adalah konsep dalam PBO di mana kita dapat mendefinisikan beberapa metode dengan nama yang sama, tetapi memiliki jumlah atau jenis parameter yang berbeda.</p>",
    "falseAnswerText": "Salah!<p>Overloading adalah konsep dalam PBO di mana kita dapat mendefinisikan beberapa metode dengan nama yang sama, tetapi memiliki jumlah atau jenis parameter yang berbeda.</p>"
  },
  {
    "title": "Pertanyaan 7",
    "question": "Apa yang dimaksud dengan konstruktor dalam PBO?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "Sebuah fungsi untuk menghapus objek",
      "b": "Sebuah fungsi untuk menginisialisasi objek saat dibuat",
      "c": "Sebuah fungsi untuk menambah objek dalam kelas",
      "d": "Sebuah fungsi untuk mendeklarasikan variabel"
    },
    "correctAnswer": "b",
    "correctAnswerText": "Benar!<p>Konstruktor adalah metode khusus dalam kelas yang digunakan untuk menginisialisasi objek baru ketika objek tersebut dibuat.</p>",
    "falseAnswerText": "Salah!<p>Konstruktor adalah metode khusus dalam kelas yang digunakan untuk menginisialisasi objek baru ketika objek tersebut dibuat.</p>"
  },
  {
    "title": "Pertanyaan 8",
    "question": "Mana yang termasuk akses modifier dalam PBO?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "public, private, protected",
      "b": "create, delete, update",
      "c": "integer, float, string",
      "d": "array, list, map"
    },
    "correctAnswer": "a",
    "correctAnswerText": "Benar!<p>Akses modifier digunakan untuk mengontrol aksesibilitas anggota kelas, yaitu atribut dan metode.</p>",
    "falseAnswerText": "Salah!<p>Akses modifier digunakan untuk mengontrol aksesibilitas anggota kelas, yaitu atribut dan metode.</p>"
  },
  {
    "title": "Pertanyaan 9",
    "question": "Apa itu abstraksi dalam PBO?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "Menyembunyikan detail implementasi dan hanya menampilkan antarmuka yang diperlukan",
      "b": "Menggunakan array untuk menyimpan data",
      "c": "Membuat objek berdasarkan kelas",
      "d": "Membatasi akses ke data dalam program"
    },
    "correctAnswer": "a",
    "correctAnswerText": "Benar!<p>Abstraksi adalah konsep untuk menyembunyikan detail implementasi internal dan hanya menyediakan antarmuka yang diperlukan kepada pengguna.</p>",
    "falseAnswerText": "Salah!<p>Abstraksi adalah konsep untuk menyembunyikan detail implementasi internal dan hanya menyediakan antarmuka yang diperlukan kepada pengguna.</p>"
  },
{
    "title": "Pertanyaan 10",
    "question": "Apa yang dimaksud dengan kelas dalam PBO?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "Sebuah objek yang menyimpan data",
      "b": "Sebuah template untuk membuat objek",
      "c": "Sebuah metode dalam program",
      "d": "Sebuah fungsi untuk mengubah objek"
    },
    "correctAnswer": "b",
    "correctAnswerText": "Benar!<p>Kelas adalah template atau blueprint yang mendefinisikan data (atribut) dan perilaku (metode) untuk objek.</p>",
    "falseAnswerText": "Salah!<p>Kelas adalah template atau blueprint yang mendefinisikan data (atribut) dan perilaku (metode) untuk objek.</p>"
  },
  {
    "title": "Pertanyaan 11",
    "question": "Apa itu metode dalam konteks PBO?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "Sebuah variabel dalam kelas",
      "b": "Sebuah fungsi yang didefinisikan dalam kelas",
      "c": "Sebuah cara untuk mendeklarasikan kelas",
      "d": "Sebuah objek dari kelas"
    },
    "correctAnswer": "b",
    "correctAnswerText": "Benar!<p>Metode adalah fungsi atau prosedur yang didefinisikan dalam kelas dan beroperasi pada data yang dimiliki oleh objek dari kelas tersebut.</p>",
    "falseAnswerText": "Salah!<p>Metode adalah fungsi atau prosedur yang didefinisikan dalam kelas dan beroperasi pada data yang dimiliki oleh objek dari kelas tersebut.</p>"
  },
  {
    "title": "Pertanyaan 12",
    "question": "Apa perbedaan antara kelas abstrak dan interface dalam PBO?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "Kelas abstrak dapat memiliki implementasi metode, interface tidak",
      "b": "Interface dapat memiliki implementasi metode, kelas abstrak tidak",
      "c": "Kelas abstrak tidak dapat memiliki konstruktor, interface dapat",
      "d": "Kelas abstrak lebih cepat daripada interface"
    },
    "correctAnswer": "a",
    "correctAnswerText": "Benar!<p>Kelas abstrak dapat memiliki implementasi untuk beberapa metode, sementara interface hanya mendeklarasikan metode tanpa implementasi.</p>",
    "falseAnswerText": "Salah!<p>Kelas abstrak dapat memiliki implementasi untuk beberapa metode, sementara interface hanya mendeklarasikan metode tanpa implementasi.</p>"
  },
  {
    "title": "Pertanyaan 13",
    "question": "Dalam PBO, apa yang dimaksud dengan 'destructor'?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "Sebuah metode yang digunakan untuk membuat objek",
      "b": "Sebuah metode yang digunakan untuk menghapus objek saat objek tidak lagi dibutuhkan",
      "c": "Sebuah metode yang mendeklarasikan kelas",
      "d": "Sebuah metode untuk menambah data ke dalam objek"
    },
    "correctAnswer": "b",
    "correctAnswerText": "Benar!<p>Destructor digunakan untuk membersihkan sumber daya atau melakukan pembersihan saat objek dihapus atau tidak lagi digunakan.</p>",
    "falseAnswerText": "Salah!<p>Destructor digunakan untuk membersihkan sumber daya atau melakukan pembersihan saat objek dihapus atau tidak lagi digunakan.</p>"
  },
  {
    "title": "Pertanyaan 14",
    "question": "Apa tujuan utama dari menggunakan PBO dalam pengembangan perangkat lunak?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "Untuk menyimpan data dalam bentuk list",
      "b": "Untuk menyederhanakan pengkodean dengan membagi program ke dalam objek yang lebih kecil",
      "c": "Untuk mengurangi jumlah baris kode",
      "d": "Untuk mengoptimalkan kecepatan eksekusi program"
    },
    "correctAnswer": "b",
    "correctAnswerText": "Benar!<p>PBO memungkinkan pengembang untuk merancang perangkat lunak dalam bentuk objek yang lebih mudah dikelola dan dikembangkan.</p>",
    "falseAnswerText": "Salah!<p>PBO memungkinkan pengembang untuk merancang perangkat lunak dalam bentuk objek yang lebih mudah dikelola dan dikembangkan.</p>"
  },
  {
    "title": "Pertanyaan 15",
    "question": "Apa yang dimaksud dengan 'super' dalam PBO?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "Sebuah cara untuk membuat objek baru",
      "b": "Sebuah cara untuk memanggil metode atau konstruktor kelas induk",
      "c": "Sebuah cara untuk mendeklarasikan kelas abstrak",
      "d": "Sebuah cara untuk menyembunyikan data"
    },
    "correctAnswer": "b",
    "correctAnswerText": "Benar!<p>'Super' digunakan dalam kelas turunan untuk mengakses metode atau konstruktor dari kelas induk.</p>",
    "falseAnswerText": "Salah!<p>'Super' digunakan dalam kelas turunan untuk mengakses metode atau konstruktor dari kelas induk.</p>"
  },
  {
    "title": "Pertanyaan 16",
    "question": "Bagaimana cara sebuah objek berinteraksi dengan objek lain dalam PBO?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "Dengan menggunakan atribut atau metode yang dimiliki objek lain",
      "b": "Dengan mengakses data dari file eksternal",
      "c": "Dengan memodifikasi kode sumber program",
      "d": "Dengan menghapus objek lain"
    },
    "correctAnswer": "a",
    "correctAnswerText": "Benar!<p>Objek berinteraksi dengan objek lain melalui pemanggilan metode atau pengaksesan atribut yang dimiliki oleh objek lain.</p>",
    "falseAnswerText": "Salah!<p>Objek berinteraksi dengan objek lain melalui pemanggilan metode atau pengaksesan atribut yang dimiliki oleh objek lain.</p>"
  },
  {
    "title": "Pertanyaan 17",
    "question": "Apa yang dimaksud dengan 'dynamic binding' dalam PBO?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "Menentukan tipe data pada kompilasi",
      "b": "Menentukan tipe data saat runtime",
      "c": "Menghubungkan objek dengan kelas induk",
      "d": "Menghapus data yang tidak lagi digunakan"
    },
    "correctAnswer": "b",
    "correctAnswerText": "Benar!<p>Dynamic binding terjadi ketika pemanggilan metode diputuskan pada saat eksekusi, bukan saat kompilasi, memungkinkan polimorfisme.</p>",
    "falseAnswerText": "Salah!<p>Dynamic binding terjadi ketika pemanggilan metode diputuskan pada saat eksekusi, bukan saat kompilasi, memungkinkan polimorfisme.</p>"
  },
  {
    "title": "Pertanyaan 18",
    "question": "Apa itu komposisi dalam PBO?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "Menambahkan metode ke dalam kelas",
      "b": "Membuat objek dengan komponen objek lain",
      "c": "Menghapus objek dari program",
      "d": "Menyembunyikan data dalam kelas"
    },
    "correctAnswer": "b",
    "correctAnswerText": "Benar!<p>Komposisi adalah konsep di mana sebuah objek terdiri dari objek lain yang menjadi bagian darinya.</p>",
    "falseAnswerText": "Salah!<p>Komposisi adalah konsep di mana sebuah objek terdiri dari objek lain yang menjadi bagian darinya.</p>"
  },
  {
    "title": "Pertanyaan 19",
    "question": "Apa yang dimaksud dengan 'encapsulation' dalam PBO?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "Menggunakan variabel global untuk menyimpan data",
      "b": "Menutup akses langsung ke atribut kelas dan menyediakan metode untuk akses",
      "c": "Menggunakan array untuk menyimpan data",
      "d": "Membagi kelas menjadi bagian-bagian yang lebih kecil"
    },
    "correctAnswer": "b",
    "correctAnswerText": "Benar!<p>Encapsulation adalah proses menyembunyikan data dan memberikan akses melalui metode, sehingga kontrol lebih baik atas data yang ada dalam objek.</p>",
    "falseAnswerText": "Salah!<p>Encapsulation adalah proses menyembunyikan data dan memberikan akses melalui metode, sehingga kontrol lebih baik atas data yang ada dalam objek.</p>"
  },
  {
    "title": "Pertanyaan 20",
    "question": "Dalam PBO, apakah yang dimaksud dengan 'coupling'?",
    "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
    "answers": {
      "a": "Tingkat keterkaitan antar objek dalam sistem",
      "b": "Jumlah metode dalam sebuah kelas",
      "c": "Proses menginisialisasi data objek",
      "d": "Penggunaan banyak kelas dalam satu objek"
    },
    "correctAnswer": "a",
    "correctAnswerText": "Benar!<p>Coupling merujuk pada sejauh mana kelas atau objek bergantung satu sama lain. Semakin rendah coupling, semakin baik desain sistem karena mengurangi ketergantungan antar komponen.</p>",
    "falseAnswerText": "Salah!<p>Coupling merujuk pada sejauh mana kelas atau objek bergantung satu sama lain. Semakin rendah coupling, semakin baik desain sistem karena mengurangi ketergantungan antar komponen.</p>"
  }
];