const myQuestions=[
    {
        "title": "Pengenalan Python",
        "question": "Apa yang dimaksud dengan bahasa pemrograman Python?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Bahasa pemrograman berbasis kompilasi",
          "b": "Bahasa pemrograman tingkat tinggi dan interpreter",
          "c": "Bahasa pemrograman hanya untuk aplikasi web"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>Python adalah bahasa pemrograman tingkat tinggi yang menggunakan interpreter untuk menjalankan kode.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>Pilihan yang kamu pilih tidak sesuai dengan sifat Python sebagai bahasa tingkat tinggi dan interpreter.</p>"
      },
      
      {
        "title": "Keunggulan Python",
        "question": "Apa keuntungan utama belajar Python?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Sintaks sederhana dan mudah digunakan",
          "b": "Sulit dipahami namun sangat kuat",
          "c": "Memerlukan banyak kode untuk tugas sederhana"
        },
        "correctAnswer": "a",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>Python dikenal memiliki sintaks sederhana, mirip bahasa Inggris, sehingga mudah dipahami.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>Python dirancang untuk mudah dipelajari dan efisien.</p>"
      },
      
      {
        "title": "Deklarasi Variabel",
        "question": "Di Python, bagaimana cara mendeklarasikan variabel?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Harus menyebutkan tipe datanya",
          "b": "Tidak perlu menyebutkan tipe data",
          "c": "Menggunakan sintaks khusus seperti 'declare'"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>Python adalah bahasa yang diketik secara dinamis, sehingga tidak memerlukan deklarasi tipe data.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>Python secara otomatis menentukan tipe data dari nilai yang diberikan.</p>"
      },
      
      {
        "title": "Operator Python",
        "question": "Apa fungsi dari operator // di Python?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Modulus",
          "b": "Pangkat",
          "c": "Pembagian dengan hasil bilangan bulat"
        },
        "correctAnswer": "c",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>Operator // digunakan untuk pembagian yang menghasilkan bilangan bulat.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>Operator // bukan untuk modulus atau pangkat.</p>"
      },
      
      {
        "title": "Pernyataan If",
        "question": "Apa fungsi dari pernyataan if di Python?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Mengeksekusi blok kode berdasarkan kondisi tertentu",
          "b": "Membuat perulangan",
          "c": "Menyimpan data"
        },
        "correctAnswer": "a",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>Pernyataan if digunakan untuk pengambilan keputusan berdasarkan kondisi tertentu.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>if tidak digunakan untuk perulangan atau penyimpanan data.</p>"
      },
      
      {
        "title": "Perulangan For",
        "question": "Apa karakteristik unik dari perulangan for di Python?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Menggunakan indeks secara otomatis",
          "b": "Membutuhkan kondisi eksplisit untuk berhenti",
          "c": "Tidak mendukung iterasi dengan urutan indeks"
        },
        "correctAnswer": "a",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>Perulangan for secara otomatis mengelola iterasi tanpa variabel indeks tambahan.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>Pernyataan ini mengabaikan kemudahan otomatisasi indeks pada perulangan for.</p>"
      },
      
      {
        "title": "While dengan Else",
        "question": "Apa yang terjadi jika else digunakan setelah while di Python?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Menjalankan blok kode jika kondisi while salah",
          "b": "Mengakhiri perulangan lebih cepat",
          "c": "Tidak memiliki efek apa pun"
        },
        "correctAnswer": "a",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>Pernyataan else akan dieksekusi jika kondisi while bernilai False.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>Fitur else pada while memiliki fungsi spesifik yang jelas.</p>"
      },
      
      {
        "title": "List vs Tuple",
        "question": "Apa perbedaan utama antara list dan tuple di Python?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "list bersifat mutable, sedangkan tuple immutable",
          "b": "list lebih cepat dibandingkan tuple",
          "c": "list menggunakan kurung kurawal, sedangkan tuple menggunakan kurung siku"
        },
        "correctAnswer": "a",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>list dapat diubah setelah dideklarasikan, sedangkan tuple tidak.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>Perbedaan utama ada pada sifat mutable dan immutable.</p>"
      },
      
      {
        "title": "Fungsi Type",
        "question": "Apa kegunaan fungsi bawaan type() di Python?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Mengubah tipe data variabel",
          "b": "Menghapus variabel",
          "c": "Memeriksa tipe data variabel"
        },
        "correctAnswer": "c",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>type() digunakan untuk mengetahui tipe data suatu variabel.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>type() tidak digunakan untuk menghapus atau mengubah tipe data.</p>"
      },
      
      {
        "title": "Fungsi Print",
        "question": "Apa hasil dari pernyataan print(\"Hello World\") di Python?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Syntax error",
          "b": "Menampilkan teks 'Hello World'",
          "c": "Tidak melakukan apa pun"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>Pernyataan print() mencetak teks ke layar.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>print() adalah perintah standar untuk menampilkan keluaran di Python.</p>"
      },
      
      {
        "title": "Pernyataan Elif",
        "question": "Apa kegunaan utama dari pernyataan elif dalam Python?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Memungkinkan pengambilan keputusan tambahan setelah if",
          "b": "Menghentikan program jika kondisi salah",
          "c": "Menjalankan perulangan tanpa syarat"
        },
        "correctAnswer": "a",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>elif memungkinkan kita memeriksa kondisi tambahan setelah if.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>Pernyataan elif hanya digunakan untuk pengambilan keputusan, bukan perulangan atau penghentian program.</p>"
      },
      
      {
        "title": "Operator Logika",
        "question": "Apa hasil dari pernyataan 5 == 5 and 3 > 4?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "True",
          "b": "Error",
          "c": "False"
        },
        "correctAnswer": "c",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>Kondisi pertama benar, tetapi kondisi kedua salah, sehingga hasilnya adalah False.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>Operator and membutuhkan kedua kondisi bernilai True untuk menghasilkan True.</p>"
      },
      
      {
        "title": "Operator Identitas",
        "question": "Apa fungsi dari operator is di Python?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Membandingkan dua nilai apakah sama",
          "b": "Memeriksa apakah dua objek memiliki identitas yang sama",
          "c": "Membandingkan dua nilai apakah berbeda"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>Operator is digunakan untuk memeriksa apakah dua objek merujuk ke lokasi memori yang sama.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>is tidak digunakan untuk membandingkan nilai, melainkan identitas objek.</p>"
      },
      
      {
        "title": "Range pada For Loop",
        "question": "Apa yang akan dihasilkan oleh pernyataan berikut?<p>for i in range(3):<br>    print(i)</p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "0 1 2",
          "b": "1 2 3",
          "c": "0 1 2 3"
        },
        "correctAnswer": "a",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>range(3) menghasilkan angka 0 hingga 2, dan perulangan mencetak setiap nilai.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>range(3) dimulai dari 0 dan berhenti sebelum mencapai 3.</p>"
      },
      
      {
        "title": "Fungsi Len",
        "question": "Apa fungsi dari len() pada Python?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Mengembalikan panjang string atau koleksi",
          "b": "Menambahkan elemen ke dalam koleksi",
          "c": "Menghapus elemen dari koleksi"
        },
        "correctAnswer": "a",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>len() digunakan untuk mengembalikan panjang elemen dalam koleksi seperti string atau list.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>len() tidak digunakan untuk menambah atau menghapus elemen dari koleksi.</p>"
      },
      
      {
        "title": "Metode Append",
        "question": "Bagaimana cara menambahkan elemen ke dalam list di Python?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Menggunakan list.add()",
          "b": "Menggunakan list.append()",
          "c": "Menggunakan list.insert()"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>Metode append() digunakan untuk menambahkan elemen baru ke akhir list.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>Metode add() tidak ada untuk list, dan insert() digunakan untuk menambah elemen di indeks tertentu.</p>"
      },
      
      {
        "title": "List Kosong",
        "question": "Apa hasil dari pernyataan bool([])?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "True",
          "b": "False",
          "c": "Error"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>List kosong ([]) bernilai False saat dikonversi ke boolean.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>List kosong di Python tidak pernah bernilai True atau menghasilkan error.</p>"
      },
      
      {
        "title": "Metode Pop",
        "question": "Apa yang dimaksud dengan metode bawaan pop() pada list?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Menghapus elemen pertama dari list",
          "b": "Menghapus elemen terakhir dari list",
          "c": "Menambahkan elemen ke list"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>Metode pop() menghapus dan mengembalikan elemen terakhir dari list.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>Metode pop() hanya digunakan untuk menghapus elemen terakhir, bukan menambah elemen.</p>"
      },
      
      {
        "title": "Try-Except",
        "question": "Apa fungsi dari try-except dalam Python?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Menangani eksepsi selama runtime",
          "b": "Menghentikan program jika error",
          "c": "Melanjutkan eksekusi kode tanpa error"
        },
        "correctAnswer": "a",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>try-except digunakan untuk menangani error yang terjadi saat runtime tanpa menghentikan program.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>try-except tidak digunakan untuk menghentikan program atau mengabaikan error tanpa menangani.</p>"
      },
      
      {
        "title": "Fungsi Open",
        "question": "Apa kegunaan dari fungsi open() di Python?<p>",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Membuat file baru",
          "b": "Membuka file untuk membaca, menulis, atau operasi lainnya",
          "c": "Menutup file setelah digunakan"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Selamat jawaban kamu benar!<p>Fungsi open() digunakan untuk membuka file dalam berbagai mode seperti membaca atau menulis.</p>",
        "falseAnswerText": "Sayang sekali jawaban kamu salah.<p>open() tidak menutup file; penutupan dilakukan dengan metode close().</p>"
      }
];