const myQuestions = [
    {
        title: "Definisi Sistem Operasi",
        question: "Apa fungsi utama dari sistem operasi?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Sebagai perangkat keras untuk komputer",
            b: "Mengelola sumber daya perangkat keras dan perangkat lunak",
            c: "Menginstal aplikasi pada komputer"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Sistem operasi berfungsi mengelola sumber daya perangkat keras dan perangkat lunak.</p>",
        falseAnswerText: "Salah!<p>Fungsi utama sistem operasi adalah mengelola sumber daya perangkat keras dan perangkat lunak.</p>"
    },
    {
        title: "Komponen Sistem Operasi",
        question: "Manakah yang termasuk komponen utama sistem operasi?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Kernel, shell, dan aplikasi",
            b: "Kernel, user interface, dan perangkat keras",
            c: "CPU, RAM, dan hard disk"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Komponen utama sistem operasi meliputi kernel, shell, dan aplikasi.</p>",
        falseAnswerText: "Salah!<p>Komponen utama sistem operasi adalah kernel, shell, dan aplikasi.</p>"
    },
    {
        title: "Kernel",
        question: "Apa tugas utama dari kernel dalam sistem operasi?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Menyediakan antarmuka bagi pengguna",
            b: "Mengelola komunikasi antara perangkat keras dan perangkat lunak",
            c: "Menjalankan aplikasi secara langsung"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Kernel bertugas mengelola komunikasi antara perangkat keras dan perangkat lunak.</p>",
        falseAnswerText: "Salah!<p>Kernel mengelola komunikasi perangkat keras dan perangkat lunak, bukan menjalankan aplikasi langsung.</p>"
    },
    {
        title: "Proses",
        question: "Apa yang dimaksud dengan proses dalam sistem operasi?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Sumber daya perangkat keras",
            b: "Program yang sedang dieksekusi",
            c: "File yang disimpan di hard disk"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Proses adalah program yang sedang dieksekusi oleh CPU.</p>",
        falseAnswerText: "Salah!<p>Proses adalah program yang sedang dieksekusi, bukan file yang disimpan.</p>"
    },
    {
        title: "Manajemen Memori",
        question: "Apa tugas utama sistem operasi dalam manajemen memori?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Mengalokasikan dan membebaskan memori",
            b: "Memeriksa kesalahan perangkat keras",
            c: "Menjalankan aplikasi secara langsung"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Sistem operasi mengalokasikan dan membebaskan memori untuk program.</p>",
        falseAnswerText: "Salah!<p>Tugas utama dalam manajemen memori adalah mengalokasikan dan membebaskan memori.</p>"
    },
    {
        title: "File System",
        question: "Apa fungsi utama dari file system dalam sistem operasi?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Mengelola akses ke data yang disimpan di perangkat penyimpanan",
            b: "Meningkatkan kecepatan prosesor",
            c: "Mengatur pembagian jaringan"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>File system mengelola akses ke data di perangkat penyimpanan.</p>",
        falseAnswerText: "Salah!<p>File system bertugas mengelola data di perangkat penyimpanan.</p>"
    },
    {
        title: "Scheduling",
        question: "Apa tujuan dari algoritma scheduling pada sistem operasi?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Mengelola antrian pengguna",
            b: "Menentukan proses mana yang dieksekusi CPU",
            c: "Menyimpan data ke hard disk"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Scheduling menentukan proses mana yang dieksekusi oleh CPU.</p>",
        falseAnswerText: "Salah!<p>Tujuan scheduling adalah menentukan proses yang dieksekusi CPU.</p>"
    },
    {
        title: "Interrupt",
        question: "Apa yang terjadi ketika interrupt terjadi dalam sistem operasi?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Proses yang sedang berjalan dihentikan sementara",
            b: "Sistem operasi mematikan komputer",
            c: "Semua proses dihentikan secara permanen"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Interrupt menyebabkan proses yang sedang berjalan dihentikan sementara untuk menangani event tertentu.</p>",
        falseAnswerText: "Salah!<p>Interrupt hanya menghentikan proses sementara, bukan mematikan komputer.</p>"
    },
    {
        title: "Virtual Memory",
        question: "Apa keuntungan utama dari virtual memory?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Meningkatkan kapasitas RAM secara fisik",
            b: "Memungkinkan program yang lebih besar dijalankan",
            c: "Menghapus data lama secara otomatis"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Virtual memory memungkinkan program yang lebih besar dijalankan pada sistem dengan RAM terbatas.</p>",
        falseAnswerText: "Salah!<p>Keuntungan utama virtual memory adalah memungkinkan program besar dijalankan.</p>"
    },
    {
        title: "Sistem Operasi Multiuser",
        question: "Apa yang dimaksud dengan sistem operasi multiuser?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Sistem operasi yang mendukung lebih dari satu pengguna secara bersamaan",
            b: "Sistem operasi dengan antarmuka grafis",
            c: "Sistem operasi yang hanya berjalan di satu perangkat"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Sistem operasi multiuser mendukung banyak pengguna secara bersamaan.</p>",
        falseAnswerText: "Salah!<p>Multiuser berarti mendukung lebih dari satu pengguna secara bersamaan.</p>"
    },
    {
        title: "Sistem Operasi Open Source",
        question: "Manakah contoh sistem operasi open source?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Windows",
            b: "Linux",
            c: "MacOS"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Linux adalah contoh sistem operasi open source.</p>",
        falseAnswerText: "Salah!<p>Linux adalah contoh sistem operasi open source, bukan Windows atau MacOS.</p>"
    },
    {
        title: "Deadlock",
        question: "Apa yang dimaksud dengan deadlock dalam sistem operasi?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Kondisi di mana proses saling menunggu sumber daya yang tidak pernah tersedia",
            b: "Proses gagal memulai karena kesalahan perangkat keras",
            c: "Proses dihapus secara otomatis oleh sistem operasi"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Deadlock terjadi ketika proses saling menunggu sumber daya yang tidak pernah tersedia.</p>",
        falseAnswerText: "Salah!<p>Deadlock adalah kondisi di mana proses saling menunggu sumber daya.</p>"
    },
    {
        title: "Manajemen Perangkat I/O",
        question: "Apa fungsi utama dari manajemen perangkat I/O dalam sistem operasi?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Mengatur penggunaan perangkat keras input dan output",
            b: "Meningkatkan kecepatan prosesor",
            c: "Menghapus data yang tidak digunakan"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Manajemen perangkat I/O mengatur penggunaan perangkat keras input dan output.</p>",
        falseAnswerText: "Salah!<p>Tugas utama manajemen I/O adalah mengatur perangkat keras input dan output.</p>"
    },
    {
        title: "Jenis Sistem Operasi",
        question: "Manakah yang termasuk sistem operasi berbasis GUI?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Linux Command Line",
            b: "Windows",
            c: "DOS"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Windows adalah contoh sistem operasi berbasis GUI.</p>",
        falseAnswerText: "Salah!<p>Sistem operasi berbasis GUI mencakup Windows, bukan command line atau DOS.</p>"
    },
    {
        title: "Sistem Berkas",
        question: "Apa tujuan dari sistem berkas (file system) dalam sistem operasi?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Mengatur lokasi file di memori utama",
            b: "Menyimpan dan mengelola file pada perangkat penyimpanan",
            c: "Meningkatkan kecepatan akses file"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Sistem berkas bertugas menyimpan dan mengelola file pada perangkat penyimpanan.</p>",
        falseAnswerText: "Salah!<p>Sistem berkas bertujuan untuk menyimpan dan mengelola file.</p>"
    },
    {
        title: "Paging",
        question: "Apa tujuan utama dari paging dalam manajemen memori?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Meningkatkan kecepatan prosesor",
            b: "Meminimalkan fragmentasi memori",
            c: "Menghapus proses yang tidak digunakan"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Paging bertujuan untuk meminimalkan fragmentasi memori.</p>",
        falseAnswerText: "Salah!<p>Paging digunakan untuk meminimalkan fragmentasi memori, bukan meningkatkan kecepatan prosesor.</p>"
    },
    {
        title: "Swapping",
        question: "Apa yang dimaksud dengan swapping dalam sistem operasi?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Proses menukar data antar prosesor",
            b: "Memindahkan proses antara memori utama dan disk",
            c: "Menghapus data yang tidak diperlukan"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Swapping adalah proses memindahkan proses antara memori utama dan disk.</p>",
        falseAnswerText: "Salah!<p>Swapping bertujuan untuk memindahkan proses antara memori utama dan disk.</p>"
    },
    {
        title: "Keamanan Sistem",
        question: "Apa langkah pertama dalam melindungi sistem operasi dari ancaman keamanan?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Memperbarui perangkat lunak secara teratur",
            b: "Menghapus semua file lama",
            c: "Menginstal lebih banyak aplikasi"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Langkah pertama adalah memperbarui perangkat lunak secara teratur untuk melindungi sistem operasi.</p>",
        falseAnswerText: "Salah!<p>Langkah utama adalah memperbarui perangkat lunak secara teratur.</p>"
    },
    {
        title: "Virtualisasi",
        question: "Apa fungsi utama sistem operasi virtual?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Menjalankan banyak sistem operasi secara bersamaan",
            b: "Meningkatkan kecepatan perangkat keras",
            c: "Menyimpan data pada RAM"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Virtualisasi memungkinkan menjalankan banyak sistem operasi secara bersamaan.</p>",
        falseAnswerText: "Salah!<p>Fungsi utama virtualisasi adalah menjalankan banyak sistem operasi secara bersamaan.</p>"
    },
    {
        title: "Multi-threading",
        question: "Apa keuntungan utama dari multi-threading dalam proses?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Meningkatkan efisiensi CPU",
            b: "Mengurangi jumlah proses",
            c: "Menghilangkan kebutuhan memori"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Multi-threading meningkatkan efisiensi CPU dengan membagi tugas menjadi beberapa thread.</p>",
        falseAnswerText: "Salah!<p>Keuntungan utama multi-threading adalah meningkatkan efisiensi CPU.</p>"
    },
    {
        title: "Sistem Operasi Mobile",
        question: "Manakah contoh sistem operasi yang umum digunakan pada perangkat mobile?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Linux",
            b: "Android",
            c: "Windows Server"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Android adalah salah satu sistem operasi yang umum digunakan pada perangkat mobile.</p>",
        falseAnswerText: "Salah!<p>Android adalah contoh sistem operasi mobile, bukan Linux atau Windows Server.</p>"
    },
    {
        title: "Command Line Interface (CLI)",
        question: "Apa fungsi utama dari antarmuka baris perintah (CLI)?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Menyediakan antarmuka grafis bagi pengguna",
            b: "Memungkinkan pengguna memberikan perintah langsung ke sistem",
            c: "Menyimpan file di direktori"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>CLI memungkinkan pengguna memberikan perintah langsung ke sistem operasi.</p>",
        falseAnswerText: "Salah!<p>Fungsi utama CLI adalah memberikan perintah langsung ke sistem operasi.</p>"
    },
    {
        title: "Backup dan Recovery",
        question: "Apa tujuan utama dari sistem backup dan recovery?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Meningkatkan kapasitas memori",
            b: "Melindungi data dari kehilangan atau kerusakan",
            c: "Mengurangi kebutuhan perangkat keras"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Backup dan recovery bertujuan melindungi data dari kehilangan atau kerusakan.</p>",
        falseAnswerText: "Salah!<p>Backup dan recovery bertujuan untuk melindungi data dari kehilangan atau kerusakan.</p>"
    },
    {
        title: "Real-time Operating System",
        question: "Apa yang dimaksud dengan sistem operasi real-time?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Sistem operasi yang dirancang untuk operasi langsung tanpa penundaan",
            b: "Sistem operasi untuk perangkat mobile",
            c: "Sistem operasi yang bekerja hanya di malam hari"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Real-time operating system dirancang untuk operasi langsung tanpa penundaan.</p>",
        falseAnswerText: "Salah!<p>Real-time operating system dirancang untuk operasi langsung tanpa penundaan.</p>"
    },
    {
        title: "Distributed System",
        question: "Apa yang dimaksud dengan sistem operasi terdistribusi?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Sistem yang mengelola sumber daya secara terpusat",
            b: "Sistem yang mengelola beberapa komputer sebagai satu kesatuan",
            c: "Sistem yang hanya mendukung satu pengguna"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Sistem operasi terdistribusi mengelola beberapa komputer sebagai satu kesatuan.</p>",
        falseAnswerText: "Salah!<p>Sistem operasi terdistribusi bekerja dengan mengelola beberapa komputer sebagai satu kesatuan.</p>"
    }
];
