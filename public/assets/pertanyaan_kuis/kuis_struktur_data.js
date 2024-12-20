const myQuestions = [
    {
        title: "Data dan Algoritma",
        question: "Apa kriteria logaritma agar dapat melaksanakan suatu pekerjaan?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Ada input, output, dan efektivitas",
            b: "Hanya membutuhkan satu langkah",
            c: "Memerlukan instruksi manual"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Kriteria logaritma meliputi input, output, definiteness, finiteness, dan efektivitas.</p>",
        falseAnswerText: "Salah!<p>Kriteria logaritma harus mencakup input, output, dan efektivitas.</p>"
    },
    {
        title: "Struktur Data",
        question: "Apa yang dimaksud dengan struktur data nonlinier?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Struktur yang hanya berbentuk array",
            b: "Struktur data yang memiliki hierarki atau hubungan kompleks",
            c: "Struktur data tunggal seperti integer atau boolean"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Struktur data nonlinier memiliki hierarki atau hubungan kompleks, seperti pohon atau graph.</p>",
        falseAnswerText: "Salah!<p>Struktur data nonlinier melibatkan hierarki, seperti pohon atau graph.</p>"
    },
    {
        title: "Tipe Data Integer",
        question: "Apa sifat utama tipe data integer?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Menyimpan bilangan pecahan",
            b: "Hanya dapat menyimpan nilai logika",
            c: "Menyimpan bilangan bulat"
        },
        correctAnswer: "c",
        correctAnswerText: "Benar!<p>Tipe data integer digunakan untuk menyimpan bilangan bulat.</p>",
        falseAnswerText: "Salah!<p>Tipe data integer hanya menyimpan bilangan bulat.</p>"
    },
    {
        title: "Array",
        question: "Apa yang dimaksud dengan array berdimensi dua?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Array dengan hanya satu baris data",
            b: "Array yang elemen-elemennya tersusun dalam baris dan kolom",
            c: "Array yang elemen-elemennya berbentuk string"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Array berdimensi dua tersusun dalam baris dan kolom.</p>",
        falseAnswerText: "Salah!<p>Array berdimensi dua memiliki elemen yang tersusun dalam baris dan kolom.</p>"
    },
    {
        title: "Linked List",
        question: "Apa keunggulan utama linked list dibandingkan array?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Memiliki elemen homogen",
            b: "Memungkinkan penambahan atau penghapusan elemen secara dinamis",
            c: "Tidak membutuhkan pointer"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Keunggulan linked list adalah fleksibilitas dalam menambah atau menghapus elemen secara dinamis.</p>",
        falseAnswerText: "Salah!<p>Linked list memungkinkan penambahan atau penghapusan elemen secara dinamis.</p>"
    },
    {
        title: "Stack",
        question: "Apa prinsip dasar struktur data stack?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "First In First Out (FIFO)",
            b: "Last In First Out (LIFO)",
            c: "Random Access"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Prinsip dasar stack adalah Last In First Out (LIFO).</p>",
        falseAnswerText: "Salah!<p>Prinsip stack adalah Last In First Out (LIFO).</p>"
    },
    {
        title: "Queue",
        question: "Apa perbedaan utama antara stack dan queue?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Stack menggunakan FIFO sedangkan queue menggunakan LIFO",
            b: "Stack menggunakan LIFO sedangkan queue menggunakan FIFO",
            c: "Keduanya menggunakan prinsip yang sama"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Stack menggunakan LIFO, sedangkan queue menggunakan FIFO.</p>",
        falseAnswerText: "Salah!<p>Queue menggunakan prinsip FIFO, sedangkan stack menggunakan LIFO.</p>"
    },
    {
        title: "Tree",
        question: "Apa yang dimaksud dengan simpul daun (leaf) dalam struktur pohon?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Simpul yang memiliki banyak cabang",
            b: "Simpul tanpa anak",
            c: "Simpul utama dalam pohon"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Simpul daun adalah simpul yang tidak memiliki anak.</p>",
        falseAnswerText: "Salah!<p>Simpul daun adalah simpul tanpa anak.</p>"
    },
    {
        title: "Binary Tree",
        question: "Berapa jumlah maksimum simpul pada pohon biner tingkat n?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "n",
            b: "2^n - 1",
            c: "n^2"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Jumlah maksimum simpul pada pohon biner tingkat n adalah 2^n - 1.</p>",
        falseAnswerText: "Salah!<p>Jumlah maksimum simpul pada pohon biner tingkat n adalah 2^n - 1.</p>"
    },
    {
        title: "Sorting",
        question: "Apa metode sorting yang bekerja dengan membandingkan dan menukar elemen berdekatan?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Bubble Sort",
            b: "Quick Sort",
            c: "Merge Sort"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Bubble sort bekerja dengan membandingkan dan menukar elemen berdekatan.</p>",
        falseAnswerText: "Salah!<p>Metode sorting ini adalah bubble sort.</p>"
    },
    {
        title: "Data Sederhana",
        question: "Apa perbedaan utama antara tipe data boolean dan integer?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Boolean menyimpan nilai logika, sedangkan integer menyimpan bilangan bulat",
            b: "Boolean menyimpan karakter, sedangkan integer menyimpan pecahan",
            c: "Boolean hanya digunakan dalam operasi aritmatika"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Boolean digunakan untuk menyimpan nilai logika (true atau false), sedangkan integer untuk bilangan bulat.</p>",
        falseAnswerText: "Salah!<p>Boolean menyimpan nilai logika, sedangkan integer menyimpan bilangan bulat.</p>"
    },
    {
        title: "Operasi String",
        question: "Apa fungsi dari operasi SUBSTR pada string?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Menghapus bagian string",
            b: "Mengambil substring dari string",
            c: "Menggabungkan dua string"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Operasi SUBSTR digunakan untuk mengambil substring dari sebuah string.</p>",
        falseAnswerText: "Salah!<p>Fungsi SUBSTR adalah untuk mengambil substring.</p>"
    },
    {
        title: "Array",
        question: "Apa itu array segitiga (triangular array)?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Array dengan elemen nol di atas atau di bawah diagonal utama",
            b: "Array berdimensi tiga",
            c: "Array yang elemen-elemennya berbentuk lingkaran"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Array segitiga adalah array dengan elemen nol di atas atau di bawah diagonal utama.</p>",
        falseAnswerText: "Salah!<p>Array segitiga memiliki elemen nol di atas atau di bawah diagonal utama.</p>"
    },
    {
        title: "Linked List",
        question: "Apa ciri utama dari double linked list dibandingkan single linked list?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Setiap node memiliki dua pointer",
            b: "Node hanya memiliki satu pointer",
            c: "Node dapat menyimpan lebih dari satu data"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Double linked list memiliki dua pointer, satu menunjuk ke node sebelumnya dan satu ke node berikutnya.</p>",
        falseAnswerText: "Salah!<p>Double linked list memiliki dua pointer, bukan satu.</p>"
    },
    {
        title: "Stack",
        question: "Apa fungsi utama operasi PUSH pada stack?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Menghapus elemen dari stack",
            b: "Menambahkan elemen ke stack",
            c: "Mengembalikan elemen teratas stack tanpa menghapusnya"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Operasi PUSH digunakan untuk menambahkan elemen ke stack.</p>",
        falseAnswerText: "Salah!<p>Operasi PUSH menambahkan elemen ke stack, bukan menghapusnya.</p>"
    },
    {
        title: "Queue",
        question: "Apa fungsi utama dari operasi DEQUEUE pada queue?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Menambahkan elemen ke antrian",
            b: "Menghapus elemen dari antrian",
            c: "Menghapus semua elemen dari antrian"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Operasi DEQUEUE digunakan untuk menghapus elemen dari antrian.</p>",
        falseAnswerText: "Salah!<p>DEQUEUE menghapus elemen dari antrian, bukan menambahkannya.</p>"
    },
    {
        title: "Tree",
        question: "Apa yang dimaksud dengan height (tinggi) dari sebuah pohon?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Jumlah simpul pada level tertinggi",
            b: "Jumlah level dari akar hingga daun",
            c: "Jumlah simpul total dalam pohon"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Height atau tinggi dari pohon adalah jumlah level dari akar hingga daun.</p>",
        falseAnswerText: "Salah!<p>Tinggi pohon dihitung dari akar hingga level daun tertinggi.</p>"
    },
    {
        title: "Traversal Pohon Biner",
        question: "Pada traversal preorder, simpul mana yang dikunjungi terlebih dahulu?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Cabang kiri",
            b: "Simpul akar",
            c: "Cabang kanan"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Pada traversal preorder, simpul akar dikunjungi terlebih dahulu.</p>",
        falseAnswerText: "Salah!<p>Traversal preorder dimulai dengan mengunjungi simpul akar.</p>"
    },
    {
        title: "Sorting",
        question: "Apa keunggulan quick sort dibandingkan bubble sort?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Lebih cepat untuk dataset besar",
            b: "Lebih sederhana untuk diimplementasikan",
            c: "Tidak membutuhkan rekursi"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Quick sort lebih cepat dibandingkan bubble sort pada dataset besar.</p>",
        falseAnswerText: "Salah!<p>Quick sort memiliki keunggulan kecepatan pada dataset besar.</p>"
    },
    {
        title: "Graph",
        question: "Apa yang dimaksud dengan graph terhubung?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Graph tanpa sirkuit",
            b: "Semua simpul dalam graph saling terhubung dengan jalur",
            c: "Graph yang hanya memiliki satu simpul"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Graph terhubung berarti semua simpul saling terhubung dengan jalur.</p>",
        falseAnswerText: "Salah!<p>Graph terhubung memiliki jalur yang menghubungkan semua simpul.</p>"
    },
    {
        title: "Adjacency Matrix",
        question: "Apa fungsi adjacency matrix dalam penyajian graph?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Menyimpan jalur terpendek",
            b: "Menyatakan hubungan antara simpul dalam graph",
            c: "Mengurutkan simpul dalam graph"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Adjacency matrix digunakan untuk menyatakan hubungan antara simpul dalam graph.</p>",
        falseAnswerText: "Salah!<p>Adjacency matrix menyatakan hubungan antara simpul dalam graph.</p>"
    },
    {
        title: "Heap",
        question: "Apa tujuan utama dari heap sort?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Mencari nilai minimum dari data",
            b: "Mencari nilai maksimum dari data",
            c: "Menyusun data dalam urutan acak"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Heap sort bertujuan mencari nilai maksimum dari data.</p>",
        falseAnswerText: "Salah!<p>Heap sort digunakan untuk mencari nilai maksimum.</p>"
    },
    {
        title: "Graph Traversal",
        question: "Apa perbedaan utama antara DFS dan BFS dalam traversal graph?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "DFS menjelajahi simpul sedalam mungkin sebelum beralih, sedangkan BFS menjelajahi simpul pada level yang sama terlebih dahulu",
            b: "DFS lebih cepat dibanding BFS",
            c: "DFS tidak memerlukan struktur data tambahan"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>DFS menjelajahi simpul sedalam mungkin sebelum beralih, sedangkan BFS menjelajahi level yang sama terlebih dahulu.</p>",
        falseAnswerText: "Salah!<p>Perbedaan utama DFS dan BFS adalah cara mereka menjelajahi simpul dalam graph.</p>"
    },
    {
        title: "Searching",
        question: "Apa keuntungan binary search dibandingkan linear search?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Tidak membutuhkan data yang terurut",
            b: "Lebih cepat pada dataset besar",
            c: "Dapat mencari lebih dari satu elemen sekaligus"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Binary search lebih cepat dibandingkan linear search pada dataset besar.</p>",
        falseAnswerText: "Salah!<p>Keunggulan binary search adalah kecepatannya pada dataset besar.</p>"
    },
    {
        title: "Graf Berbobot",
        question: "Apa yang dimaksud dengan graf berbobot?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Graf yang memiliki jumlah simpul sama dengan jumlah sisi",
            b: "Graf yang setiap sisinya memiliki nilai atau bobot tertentu",
            c: "Graf yang tidak memiliki simpul atau sisi"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Graf berbobot adalah graf di mana setiap sisinya memiliki nilai atau bobot tertentu.</p>",
        falseAnswerText: "Salah!<p>Graf berbobot memiliki nilai atau bobot tertentu pada setiap sisinya.</p>"
    }
];
