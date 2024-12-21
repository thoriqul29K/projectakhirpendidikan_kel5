const myQuestions = [
    {
        "title": "Pertanyaan 1",
        "question": "Apa bahasa pemrograman utama yang digunakan untuk mengembangkan aplikasi Android di Android Studio?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Python",
          "b": "Java",
          "c": "C++",
          "d": "Swift"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Benar!<p>Java adalah salah satu bahasa utama yang digunakan di Android Studio. Mengetahui bahasa yang didukung adalah dasar bagi pengembang.</p>",
        "falseAnswerText": "Salah!<p>Java adalah salah satu bahasa utama yang digunakan di Android Studio. Mengetahui bahasa yang didukung adalah dasar bagi pengembang.</p>"
      },
      {
        "title": "Pertanyaan 2",
        "question": "File XML dalam proyek Android digunakan untuk apa?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Menulis logika aplikasi",
          "b": "Mendefinisikan antarmuka pengguna (UI)",
          "c": "Menyimpan data sementara",
          "d": "Mengimpor library eksternal"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Benar!<p>XML adalah format utama untuk merancang UI di aplikasi Android. Pemahaman tentang file ini penting bagi pengembang untuk membuat layout.</p>",
        "falseAnswerText": "Salah!<p>XML adalah format utama untuk merancang UI di aplikasi Android. Pemahaman tentang file ini penting bagi pengembang untuk membuat layout.</p>"
      },
      {
        "title": "Pertanyaan 3",
        "question": "Apa fungsi dari file AndroidManifest.xml?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Mengatur tata letak aplikasi",
          "b": "Mendefinisikan konfigurasi aplikasi",
          "c": "Menyimpan data sementara",
          "d": "Menjalankan testing aplikasi"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Benar!<p>File ini mengatur semua aspek utama aplikasi, seperti izin, komponen, dan konfigurasi lainnya.</p>",
        "falseAnswerText": "Salah!<p>File ini mengatur semua aspek utama aplikasi, seperti izin, komponen, dan konfigurasi lainnya.</p>"
      },
      {
        "title": "Pertanyaan 4",
        "question": "Apa itu Gradle di Android Studio?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Bahasa pemrograman baru",
          "b": "Tool build otomatis",
          "c": "Emulator untuk pengujian",
          "d": "Editor untuk file layout"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Benar!<p>Gradle adalah sistem build yang digunakan untuk mengelola dependensi dan proses build aplikasi di Android Studio.</p>",
        "falseAnswerText": "Salah!<p>Gradle adalah sistem build yang digunakan untuk mengelola dependensi dan proses build aplikasi di Android Studio.</p>"
      },
      {
        "title": "Pertanyaan 5",
        "question": "Apa fungsi dari Logcat di Android Studio?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Memantau aktivitas jaringan",
          "b": "Debugging dan logging aplikasi",
          "c": "Menyimpan konfigurasi aplikasi",
          "d": "Merancang layout aplikasi"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Benar!<p>Logcat adalah alat penting untuk melihat log aplikasi secara real-time saat debugging.</p>",
        "falseAnswerText": "Salah!<p>Logcat adalah alat penting untuk melihat log aplikasi secara real-time saat debugging.</p>"
      },
      {
        "title": "Pertanyaan 6",
        "question": "Metode mana yang digunakan untuk menginisialisasi komponen UI di Activity?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "onDestroy()",
          "b": "onCreate()",
          "c": "onResume()",
          "d": "onPause()"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Benar!<p>onCreate() adalah metode utama di lifecycle Activity tempat UI diinisialisasi.</p>",
        "falseAnswerText": "Salah!<p>onCreate() adalah metode utama di lifecycle Activity tempat UI diinisialisasi.</p>"
      },
      {
        "title": "Pertanyaan 7",
        "question": "Apa fungsi RecyclerView dalam aplikasi Android?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Menampilkan data secara vertikal atau horizontal dengan efisiensi",
          "b": "Membuat tombol interaktif",
          "c": "Mengelola fragment aplikasi",
          "d": "Menangani navigasi aplikasi"
        },
        "correctAnswer": "a",
        "correctAnswerText": "Benar!<p>RecyclerView adalah komponen yang efisien untuk menampilkan daftar data yang panjang.</p>",
        "falseAnswerText": "Salah!<p>RecyclerView adalah komponen yang efisien untuk menampilkan daftar data yang panjang.</p>"
      },
      {
        "title": "Pertanyaan 8",
        "question": "Komponen apa yang digunakan untuk menampilkan dialog sederhana?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Toast",
          "b": "AlertDialog",
          "c": "RecyclerView",
          "d": "ViewPager"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Benar!<p>AlertDialog adalah komponen utama untuk menampilkan dialog yang interaktif.</p>",
        "falseAnswerText": "Salah!<p>AlertDialog adalah komponen utama untuk menampilkan dialog yang interaktif.</p>"
      },
      {
        "title": "Pertanyaan 9",
        "question": "Apa perbedaan antara LinearLayout dan RelativeLayout?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "LinearLayout untuk tata letak grid, RelativeLayout untuk hierarki",
          "b": "LinearLayout untuk orientasi horizontal/vertikal, RelativeLayout untuk posisi relatif",
          "c": "Keduanya sama",
          "d": "LinearLayout lebih kompleks"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Benar!<p>Memahami perbedaan ini penting untuk memilih layout yang sesuai.</p>",
        "falseAnswerText": "Salah!<p>Memahami perbedaan ini penting untuk memilih layout yang sesuai.</p>"
      },
      {
        "title": "Pertanyaan 10",
        "question": "Bagaimana cara menambahkan library eksternal ke proyek Android Studio?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Melalui file Gradle",
          "b": "Mengedit file XML",
          "c": "Mengubah AndroidManifest.xml",
          "d": "Menggunakan Logcat"
        },
        "correctAnswer": "a",
        "correctAnswerText": "Benar!<p>Gradle digunakan untuk mengelola dependensi termasuk library eksternal.</p>",
        "falseAnswerText": "Salah!<p>Gradle digunakan untuk mengelola dependensi termasuk library eksternal.</p>"
      },
      {
        "title": "Pertanyaan 11",
        "question": "Apa peran ContentProvider dalam aplikasi Android?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Menyediakan data antar aplikasi",
          "b": "Menyimpan data sementara",
          "c": "Menjalankan log aplikasi",
          "d": "Mengatur navigasi aplikasi"
        },
        "correctAnswer": "a",
        "correctAnswerText": "Benar!<p>ContentProvider penting untuk berbagi data dengan aplikasi lain.</p>",
        "falseAnswerText": "Salah!<p>ContentProvider penting untuk berbagi data dengan aplikasi lain.</p>"
      },
      {
        "title": "Pertanyaan 12",
        "question": "Apa itu ViewModel dalam arsitektur MVVM?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Komponen untuk UI",
          "b": "Komponen untuk menyimpan dan mengelola data terkait UI",
          "c": "Komponen untuk navigasi",
          "d": "Komponen untuk database"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Benar!<p>ViewModel digunakan untuk memisahkan logika bisnis dari UI.</p>",
        "falseAnswerText": "Salah!<p>ViewModel digunakan untuk memisahkan logika bisnis dari UI.</p>"
      },
      {
        "title": "Pertanyaan 13",
        "question": "Metode apa yang digunakan untuk menangani klik pada tombol?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "onResume()",
          "b": "onClick()",
          "c": "onStart()",
          "d": "onPause()"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Benar!<p>onClick() adalah metode standar untuk menangani klik pada tombol.</p>",
        "falseAnswerText": "Salah!<p>onClick() adalah metode standar untuk menangani klik pada tombol.</p>"
      },
      {
        "title": "Pertanyaan 14",
        "question": "Apa itu Data Binding di Android?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Menghubungkan database dengan UI",
          "b": "Menghubungkan data ke layout secara langsung",
          "c": "Menyimpan data di cache",
          "d": "Membuat API lokal"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Benar!<p>Data Binding memungkinkan pengembang untuk menghubungkan data langsung ke elemen UI.</p>",
        "falseAnswerText": "Salah!<p>Data Binding memungkinkan pengembang untuk menghubungkan data langsung ke elemen UI.</p>"
      },
      {
        "title": "Pertanyaan 15",
        "question": "Apa tujuan dari class Intent di Android?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Mengatur database",
          "b": "Menyimpan data sementara",
          "c": "Berkomunikasi antar komponen aplikasi",
          "d": "Mengelola jaringan"
        },
        "correctAnswer": "c",
        "correctAnswerText": "Benar!<p>Intent digunakan untuk mengirimkan data atau perintah antar komponen aplikasi.</p>",
        "falseAnswerText": "Salah!<p>Intent digunakan untuk mengirimkan data atau perintah antar komponen aplikasi.</p>"
      },
      {
        "title": "Pertanyaan 16",
        "question": "Bagaimana cara mendeteksi perubahan data secara real-time di database Firebase?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Menggunakan Listener",
          "b": "Memuat ulang aplikasi",
          "c": "Menggunakan polling manual",
          "d": "Mengedit XML"
        },
        "correctAnswer": "a",
        "correctAnswerText": "Benar!<p>Listener di Firebase memungkinkan aplikasi mendeteksi perubahan data secara real-time.</p>",
        "falseAnswerText": "Salah!<p>Listener di Firebase memungkinkan aplikasi mendeteksi perubahan data secara real-time.</p>"
      },
      {
        "title": "Pertanyaan 17",
        "question": "Apa itu LiveData di Android?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Komponen UI",
          "b": "Mekanisme penyimpanan sementara",
          "c": "Data yang dapat diamati",
          "d": "Library eksternal"
        },
        "correctAnswer": "c",
        "correctAnswerText": "Benar!<p>LiveData memungkinkan pengembang untuk mengamati perubahan data secara real-time di UI.</p>",
        "falseAnswerText": "Salah!<p>LiveData memungkinkan pengembang untuk mengamati perubahan data secara real-time di UI.</p>"
      },
       {
        "title": "Pertanyaan 18",
        "question": "Apa itu Fragments dalam aplikasi Android?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Komponen untuk menampilkan layout tetap",
          "b": "Komponen modular untuk antarmuka pengguna",
          "c": "Tool debugging aplikasi",
          "d": "Sistem build otomatis"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Benar!<p>Fragments memungkinkan antarmuka pengguna yang fleksibel dan modular untuk aplikasi Android.</p>",
        "falseAnswerText": "Salah!<p>Fragments memungkinkan antarmuka pengguna yang fleksibel dan modular untuk aplikasi Android.</p>"
      },
      {
        "title": "Pertanyaan 19",
        "question": "Apa itu Intent dalam Android Studio?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Mekanisme untuk mengatur thread",
          "b": "Objek untuk melakukan komunikasi antar komponen aplikasi",
          "c": "Alat untuk debugging aplikasi",
          "d": "Fitur untuk menyimpan data lokal"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Benar!<p>Intent digunakan untuk berpindah antar Activity atau mengirim data antar komponen aplikasi.</p>",
        "falseAnswerText": "Salah!<p>Intent digunakan untuk berpindah antar Activity atau mengirim data antar komponen aplikasi.</p>"
      },
      {
        "title": "Pertanyaan 20",
        "question": "Apa fungsi dari Room di Android?",
        "background": `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        "answers": {
          "a": "Membuat layout grid",
          "b": "Framework untuk manajemen database lokal",
          "c": "Library untuk testing aplikasi",
          "d": "Tool untuk mempercepat build"
        },
        "correctAnswer": "b",
        "correctAnswerText": "Benar!<p>Room adalah library untuk mempermudah akses dan manajemen database SQLite di aplikasi Android.</p>",
        "falseAnswerText": "Salah!<p>Room adalah library untuk mempermudah akses dan manajemen database SQLite di aplikasi Android.</p>"
      }
];
