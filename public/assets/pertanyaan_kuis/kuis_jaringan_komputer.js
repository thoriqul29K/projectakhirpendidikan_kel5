const myQuestions = [
    {
        title: "Sejarah Jaringan Komputer",
        question: "Apa tujuan awal pengembangan komputer MODEL I di laboratorium Bell?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Untuk mengembangkan teknologi batch processing",
            b: "Untuk memanfaatkan perangkat komputer secara bersama",
            c: "Untuk mempercepat proses distribusi data"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Tujuan awal pengembangan MODEL I adalah untuk memanfaatkan perangkat komputer secara bersama.</p>",
        falseAnswerText: "Salah!<p>Tujuan utamanya adalah memanfaatkan perangkat komputer bersama, bukan hanya batch processing atau distribusi data.</p>"
    },
    {
        title: "TSS (Time Sharing System)",
        question: "Apa fungsi utama dari sistem TSS (Time Sharing System)?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Menghubungkan terminal secara seri ke host komputer",
            b: "Mengembangkan super komputer untuk militer",
            c: "Mengurangi waktu proses distribusi data"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Sistem TSS digunakan untuk menghubungkan terminal secara seri ke host komputer.</p>",
        falseAnswerText: "Salah!<p>Fungsi utama TSS adalah menghubungkan terminal secara seri ke host komputer.</p>"
    },
    {
        title: "Konsep Jaringan Komputer",
        question: "Apa protokol standar yang digunakan dalam jaringan komputer untuk komunikasi?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "HTTP",
            b: "TCP/IP",
            c: "SMTP"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Protokol standar yang digunakan adalah TCP/IP.</p>",
        falseAnswerText: "Salah!<p>Protokol standar yang digunakan adalah TCP/IP, bukan HTTP atau SMTP.</p>"
    },
    {
        title: "Model OSI Layer",
        question: "Berapa jumlah lapisan dalam Model OSI?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "5",
            b: "6",
            c: "7"
        },
        correctAnswer: "c",
        correctAnswerText: "Benar!<p>Model OSI memiliki 7 lapisan.</p>",
        falseAnswerText: "Salah!<p>Model OSI terdiri dari 7 lapisan.</p>"
    },
    {
        title: "Alamat IP Versi 4",
        question: "Berapa panjang total alamat IP versi 4?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "16-bit",
            b: "32-bit",
            c: "128-bit"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Alamat IP versi 4 memiliki panjang total 32-bit.</p>",
        falseAnswerText: "Salah!<p>Panjang total alamat IP versi 4 adalah 32-bit.</p>"
    },
    {
        title: "Topologi Bus",
        question: "Apa fungsi utama dari terminator pada topologi bus?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Mencegah tabrakan data",
            b: "Menyerap sinyal data pada ujung kabel",
            c: "Meningkatkan kecepatan transmisi"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Terminator menyerap sinyal data pada ujung kabel untuk mencegah pantulan.</p>",
        falseAnswerText: "Salah!<p>Fungsi utama terminator adalah menyerap sinyal data pada ujung kabel.</p>"
    },
    {
        title: "MAC Address",
        question: "Apa kepanjangan dari MAC dalam istilah MAC Address?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Media Access Control",
            b: "Multiple Address Connection",
            c: "Machine Address Code"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>MAC adalah kepanjangan dari Media Access Control.</p>",
        falseAnswerText: "Salah!<p>MAC Address berarti Media Access Control Address.</p>"
    },
    {
        title: "Subnet Mask",
        question: "Apa fungsi utama dari subnet mask?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Membedakan network ID dan host ID",
            b: "Meningkatkan kecepatan internet",
            c: "Mengatur jalur transmisi data"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Subnet mask digunakan untuk membedakan network ID dan host ID.</p>",
        falseAnswerText: "Salah!<p>Subnet mask berfungsi membedakan network ID dan host ID, bukan untuk meningkatkan kecepatan internet.</p>"
    },
    {
        title: "Jenis-Jenis Kabel LAN",
        question: "Apa keunggulan utama kabel serat optik dibandingkan kabel lainnya?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Lebih fleksibel",
            b: "Kecepatan transmisi data lebih tinggi",
            c: "Mudah digunakan di rumah"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Kabel serat optik memiliki kecepatan transmisi data yang lebih tinggi.</p>",
        falseAnswerText: "Salah!<p>Keunggulan utama kabel serat optik adalah kecepatan transmisinya.</p>"
    },
    {
        title: "Switch vs Hub",
        question: "Apa perbedaan utama antara switch dan hub?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Switch lebih mahal dibanding hub",
            b: "Switch bekerja pada layer data link sedangkan hub pada layer fisik",
            c: "Switch digunakan untuk jaringan besar, hub untuk jaringan kecil"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Switch bekerja pada layer data link, sementara hub pada layer fisik.</p>",
        falseAnswerText: "Salah!<p>Switch dan hub memiliki perbedaan utama pada layer kerjanya.</p>"
    },
    {
        title: "Protokol TCP/IP",
        question: "Lapisan transport pada protokol TCP/IP menggunakan protokol apa?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "HTTP dan FTP",
            b: "TCP dan UDP",
            c: "IP dan ARP"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Lapisan transport pada protokol TCP/IP menggunakan protokol TCP dan UDP.</p>",
        falseAnswerText: "Salah!<p>Lapisan transport pada protokol TCP/IP menggunakan protokol TCP dan UDP.</p>"
    },
    {
        title: "IP Address Versi 6",
        question: "Apa keunggulan utama IP Address versi 6 dibandingkan versi 4?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Menggunakan 128-bit sehingga memiliki lebih banyak alamat",
            b: "Lebih mudah digunakan pada perangkat lama",
            c: "Mengurangi kebutuhan jaringan lokal"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>IP Address versi 6 menggunakan 128-bit sehingga mendukung lebih banyak alamat.</p>",
        falseAnswerText: "Salah!<p>Keunggulan utama IP Address versi 6 adalah dukungannya terhadap lebih banyak alamat karena menggunakan 128-bit.</p>"
    },
    {
        title: "Topologi Star",
        question: "Apa keuntungan utama dari topologi star?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Tidak membutuhkan perangkat tambahan",
            b: "Kerusakan satu perangkat tidak memengaruhi perangkat lain",
            c: "Kecepatan jaringan lebih tinggi dibanding topologi lainnya"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Pada topologi star, kerusakan satu perangkat tidak memengaruhi perangkat lain.</p>",
        falseAnswerText: "Salah!<p>Keuntungan utama topologi star adalah isolasi perangkat dari kerusakan perangkat lain.</p>"
    },
    {
        title: "DHCP Server",
        question: "Apa fungsi utama dari DHCP Server?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Mengatur akses data ke server",
            b: "Memberikan alamat IP secara otomatis",
            c: "Meningkatkan kecepatan koneksi jaringan"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>DHCP Server berfungsi memberikan alamat IP secara otomatis kepada perangkat di jaringan.</p>",
        falseAnswerText: "Salah!<p>Fungsi utama DHCP Server adalah memberikan alamat IP secara otomatis.</p>"
    },
    {
        title: "Wireless LAN",
        question: "Apa perbedaan utama antara mode Ad-Hoc dan Infrastruktur pada WLAN?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Mode Ad-Hoc menggunakan access point, Infrastruktur tidak",
            b: "Mode Infrastruktur menggunakan access point, Ad-Hoc tidak",
            c: "Mode Ad-Hoc dan Infrastruktur membutuhkan kabel"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Mode Infrastruktur membutuhkan access point, sementara Ad-Hoc tidak.</p>",
        falseAnswerText: "Salah!<p>Mode Infrastruktur membutuhkan access point, sementara Ad-Hoc tidak.</p>"
    },
    {
        title: "Router",
        question: "Apa peran utama router dalam jaringan?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Menghubungkan dua jaringan yang berbeda",
            b: "Meningkatkan kecepatan jaringan lokal",
            c: "Menyimpan data untuk sementara waktu"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Router digunakan untuk menghubungkan dua jaringan yang berbeda.</p>",
        falseAnswerText: "Salah!<p>Fungsi utama router adalah menghubungkan dua jaringan yang berbeda.</p>"
    },
    {
        title: "Monitoring Jaringan",
        question: "Apa tujuan dari menggunakan SNMP dalam monitoring jaringan?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Mengontrol konfigurasi perangkat jaringan",
            b: "Memonitor dan mengelola perangkat jaringan",
            c: "Menghubungkan perangkat jaringan secara langsung"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>SNMP digunakan untuk memonitor dan mengelola perangkat jaringan.</p>",
        falseAnswerText: "Salah!<p>SNMP digunakan untuk memonitor dan mengelola perangkat jaringan.</p>"
    },
    {
        title: "Pengenalan VLAN",
        question: "Apa keuntungan utama VLAN dalam jaringan komputer?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Mengurangi jumlah perangkat keras yang digunakan",
            b: "Memisahkan jaringan logis tanpa memerlukan perangkat fisik tambahan",
            c: "Meningkatkan kecepatan internet secara langsung"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>VLAN memungkinkan pemisahan jaringan logis tanpa perangkat tambahan.</p>",
        falseAnswerText: "Salah!<p>Keuntungan utama VLAN adalah memisahkan jaringan logis tanpa perangkat tambahan.</p>"
    },
    {
        title: "Firewall",
        question: "Apa fungsi utama firewall dalam jaringan komputer?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Menyaring lalu lintas jaringan berdasarkan aturan tertentu",
            b: "Meningkatkan kecepatan transfer data",
            c: "Mengelola alamat IP di jaringan"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Firewall menyaring lalu lintas jaringan berdasarkan aturan tertentu.</p>",
        falseAnswerText: "Salah!<p>Fungsi utama firewall adalah menyaring lalu lintas jaringan berdasarkan aturan tertentu.</p>"
    },
    {
        title: "Windows Server 2016",
        question: "Apa fungsi utama Active Directory pada Windows Server 2016?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Mengatur pengalokasian IP Address",
            b: "Mengelola pengguna dan sumber daya jaringan",
            c: "Menyediakan layanan email untuk jaringan"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Active Directory digunakan untuk mengelola pengguna dan sumber daya jaringan.</p>",
        falseAnswerText: "Salah!<p>Fungsi utama Active Directory adalah mengelola pengguna dan sumber daya jaringan.</p>"
    },
    {
        title: "Subnetting CIDR",
        question: "Apa tujuan utama dari Classless Inter-Domain Routing (CIDR)?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Mengurangi penggunaan alamat IP secara boros",
            b: "Meningkatkan kecepatan koneksi internet",
            c: "Memisahkan jaringan menjadi VLAN"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>CIDR bertujuan untuk mengurangi penggunaan alamat IP secara boros.</p>",
        falseAnswerText: "Salah!<p>Tujuan CIDR adalah mengurangi penggunaan alamat IP secara boros.</p>"
    },
    {
        title: "Wireless LAN",
        question: "Standar WLAN 802.11ac menggunakan frekuensi berapa GHz?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "2.4 GHz",
            b: "5 GHz",
            c: "6 GHz"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Standar WLAN 802.11ac menggunakan frekuensi 5 GHz.</p>",
        falseAnswerText: "Salah!<p>Standar WLAN 802.11ac bekerja pada frekuensi 5 GHz.</p>"
    },
    {
        title: "Crimping",
        question: "Apa alat utama yang digunakan dalam proses crimping kabel jaringan?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Switch",
            b: "Crimping tool",
            c: "Router"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Crimping tool digunakan untuk memasang konektor pada kabel jaringan.</p>",
        falseAnswerText: "Salah!<p>Proses crimping membutuhkan alat bernama crimping tool.</p>"
    },
    {
        title: "Virtualisasi",
        question: "Apa kegunaan utama software virtualisasi seperti VirtualBox?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Menjalankan beberapa sistem operasi pada satu perangkat",
            b: "Meningkatkan kecepatan akses jaringan",
            c: "Menyediakan layanan firewall untuk jaringan"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Software virtualisasi memungkinkan menjalankan beberapa sistem operasi pada satu perangkat.</p>",
        falseAnswerText: "Salah!<p>Kegunaan utama virtualisasi adalah menjalankan beberapa sistem operasi pada satu perangkat.</p>"
    },
    {
        title: "Keamanan Jaringan",
        question: "Apa langkah dasar untuk meningkatkan keamanan jaringan komputer?",
        background: `<img src="${baseUrl}/assets/images/bg_slide25.jpg">`,
        answers: {
            a: "Menggunakan firewall dan sistem autentikasi",
            b: "Meningkatkan kecepatan koneksi",
            c: "Mengganti semua perangkat keras jaringan secara berkala"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Langkah dasar keamanan jaringan adalah menggunakan firewall dan sistem autentikasi.</p>",
        falseAnswerText: "Salah!<p>Keamanan jaringan ditingkatkan dengan firewall dan autentikasi.</p>"
    }
];
