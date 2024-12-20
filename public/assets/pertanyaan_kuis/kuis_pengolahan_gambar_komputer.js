const myQuestions = [
    {
        title: "Pengenalan Photoshop",
        question: "Apa fungsi utama dari Adobe Photoshop?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Membuat animasi 3D",
            b: "Mengedit dan membuat efek gambar",
            c: "Mengolah data spreadsheet"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Adobe Photoshop digunakan untuk mengedit dan membuat efek gambar.</p>",
        falseAnswerText: "Salah!<p>Fungsi utama Adobe Photoshop adalah mengedit dan membuat efek gambar, bukan untuk animasi 3D atau spreadsheet.</p>"
    },
    {
        title: "Marquee Tool",
        question: "Apa fungsi dari Rectangular Marquee Tool?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Menyeleksi objek berbentuk lingkaran",
            b: "Menyeleksi objek berbentuk kotak",
            c: "Menghapus objek di gambar"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Rectangular Marquee Tool digunakan untuk menyeleksi objek berbentuk kotak.</p>",
        falseAnswerText: "Salah!<p>Rectangular Marquee Tool hanya digunakan untuk objek berbentuk kotak.</p>"
    },
    {
        title: "Lasso Tool",
        question: "Manakah yang bukan jenis dari Lasso Tool?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Polygonal Lasso Tool",
            b: "Magnetic Lasso Tool",
            c: "Freehand Lasso Tool"
        },
        correctAnswer: "c",
        correctAnswerText: "Benar!<p>Freehand Lasso Tool tidak termasuk dalam jenis Lasso Tool di Photoshop.</p>",
        falseAnswerText: "Salah!<p>Jenis Lasso Tool meliputi Polygonal, Magnetic, dan Lasso Tool biasa.</p>"
    },
    {
        title: "Quick Selection Tool",
        question: "Apa fungsi utama Quick Selection Tool?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Menghapus bagian gambar",
            b: "Menyeleksi area berdasarkan warna atau pixel",
            c: "Menambahkan teks pada gambar"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Quick Selection Tool digunakan untuk menyeleksi area berdasarkan warna atau pixel.</p>",
        falseAnswerText: "Salah!<p>Quick Selection Tool bukan untuk menghapus gambar atau menambahkan teks.</p>"
    },
    {
        title: "Brush Tool",
        question: "Apa fungsi dari Mixer Brush Tool?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Menghapus gambar dengan efek kuas",
            b: "Mencampur warna dalam satu goresan",
            c: "Membuat garis lurus dengan pensil"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Mixer Brush Tool digunakan untuk mencampur warna dalam satu goresan.</p>",
        falseAnswerText: "Salah!<p>Fungsi utama Mixer Brush Tool adalah mencampur warna, bukan untuk menghapus atau menggambar garis lurus.</p>"
    },
    {
        title: "Healing Brush Tool",
        question: "Apa fungsi utama dari Healing Brush Tool?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Menambahkan tekstur pada gambar",
            b: "Menghapus noda atau cacat pada gambar",
            c: "Mencampur warna kuas dengan area gambar"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Healing Brush Tool digunakan untuk menghapus noda atau cacat pada gambar.</p>",
        falseAnswerText: "Salah!<p>Healing Brush Tool berfungsi untuk memperbaiki cacat gambar, bukan untuk menambahkan tekstur atau mencampur warna.</p>"
    },
    {
        title: "Clone Stamp Tool",
        question: "Apa yang dilakukan Clone Stamp Tool?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Menyalin pola gambar dan menerapkannya ke area lain",
            b: "Membuat garis lurus di gambar",
            c: "Mengganti warna area gambar"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Clone Stamp Tool digunakan untuk menyalin pola gambar dan menerapkannya ke area lain.</p>",
        falseAnswerText: "Salah!<p>Clone Stamp Tool tidak digunakan untuk mengganti warna atau membuat garis.</p>"
    },
    {
        title: "Gradient Tool",
        question: "Apa fungsi Gradient Tool di Photoshop?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Menghapus background gambar",
            b: "Membuat gradasi warna",
            c: "Menambahkan efek cahaya"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Gradient Tool digunakan untuk membuat gradasi warna pada gambar.</p>",
        falseAnswerText: "Salah!<p>Gradient Tool berfungsi untuk membuat gradasi warna, bukan untuk menghapus background atau menambahkan efek cahaya.</p>"
    },
    {
        title: "Dodge Tool",
        question: "Apa fungsi Dodge Tool?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Menggelapkan warna gambar",
            b: "Memperterang warna gambar",
            c: "Menghapus objek dari gambar"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Dodge Tool digunakan untuk memperterang warna gambar.</p>",
        falseAnswerText: "Salah!<p>Dodge Tool bukan untuk menggelapkan gambar, melainkan untuk memperterang warna.</p>"
    },
    {
        title: "Pen Tool",
        question: "Apa fungsi utama dari Pen Tool?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Menggambar path atau vektor pada gambar",
            b: "Menghapus bagian gambar",
            c: "Membuat teks pada gambar"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Pen Tool digunakan untuk menggambar path atau vektor pada gambar.</p>",
        falseAnswerText: "Salah!<p>Fungsi Pen Tool adalah menggambar path atau vektor, bukan untuk menghapus gambar atau membuat teks.</p>"
    },
    {
        title: "Layer Style",
        question: "Manakah efek yang tidak termasuk dalam Layer Style?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Drop Shadow",
            b: "Gradient Overlay",
            c: "Quick Selection"
        },
        correctAnswer: "c",
        correctAnswerText: "Benar!<p>Quick Selection bukan bagian dari Layer Style, melainkan tool seleksi.</p>",
        falseAnswerText: "Salah!<p>Quick Selection tidak termasuk Layer Style, yang mencakup efek seperti Drop Shadow dan Gradient Overlay.</p>"
    },
    {
        title: "Vanishing Point",
        question: "Apa fungsi Vanishing Point di Photoshop?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Mengatur perspektif gambar",
            b: "Menambahkan gradasi warna",
            c: "Memperbesar area gambar"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Vanishing Point digunakan untuk mengatur perspektif gambar.</p>",
        falseAnswerText: "Salah!<p>Vanishing Point berfungsi untuk mengatur perspektif, bukan untuk gradasi atau memperbesar gambar.</p>"
    },
    {
        title: "Liquify",
        question: "Apa yang dilakukan efek Liquify?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Mengubah bentuk objek pada gambar",
            b: "Menambahkan bayangan pada objek",
            c: "Meningkatkan ketajaman gambar"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Efek Liquify digunakan untuk mengubah bentuk objek pada gambar.</p>",
        falseAnswerText: "Salah!<p>Liquify hanya digunakan untuk mengubah bentuk objek, bukan untuk menambahkan bayangan atau ketajaman.</p>"
    },
    {
        title: "Efek Teks",
        question: "Efek apa yang membuat teks terlihat terbakar?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Gradient Overlay",
            b: "Liquify",
            c: "Efek Wind dan Liquify"
        },
        correctAnswer: "c",
        correctAnswerText: "Benar!<p>Efek Wind dan Liquify digunakan untuk membuat teks terlihat terbakar.</p>",
        falseAnswerText: "Salah!<p>Efek Wind dan Liquify adalah yang membuat teks terlihat seperti terbakar.</p>"
    },
    {
        title: "Blur Tool",
        question: "Apa fungsi utama Blur Tool?",
        background: `<img src="${baseUrl}/assets/images/bg_slide1.jpg">`,
        answers: {
            a: "Membuat gambar lebih tajam",
            b: "Membuat gambar lebih buram",
            c: "Menghapus bagian gambar"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Blur Tool digunakan untuk membuat gambar lebih buram.</p>",
        falseAnswerText: "Salah!<p>Fungsi utama Blur Tool adalah membuat gambar buram, bukan tajam atau menghapus bagian gambar.</p>"
    },
    {
        title: "Mengganti Background Foto",
        question: "Tool apa yang digunakan untuk menyeleksi area pada foto saat mengganti background?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Magic Wand Tool",
            b: "Brush Tool",
            c: "Gradient Tool"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Magic Wand Tool digunakan untuk menyeleksi area pada foto dengan warna serupa.</p>",
        falseAnswerText: "Salah!<p>Tool yang digunakan adalah Magic Wand Tool, bukan Brush atau Gradient Tool.</p>"
    },
    {
        title: "Efek Asap",
        question: "Langkah pertama untuk membuat efek asap adalah:",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Mengatur warna foreground menjadi putih",
            b: "Membuat layer kosong baru",
            c: "Memberikan efek Gaussian Blur"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Langkah pertama adalah membuat layer kosong baru sebelum mulai membuat efek asap.</p>",
        falseAnswerText: "Salah!<p>Langkah awal yang benar adalah membuat layer kosong baru.</p>"
    },
    {
        title: "Efek Kayu",
        question: "Filter apa yang digunakan untuk menciptakan tekstur kayu?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Filter Render - Clouds",
            b: "Filter Blur - Motion Blur",
            c: "Filter Noise - Add Noise"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Filter Render - Clouds adalah langkah awal dalam menciptakan tekstur kayu.</p>",
        falseAnswerText: "Salah!<p>Filter awal yang digunakan adalah Render - Clouds.</p>"
    },
    {
        title: "Efek Tekstur Air",
        question: "Langkah terakhir dalam membuat tekstur air adalah:",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Menggunakan Filter - Blur",
            b: "Mengatur Gradient Map untuk pewarnaan",
            c: "Menambahkan Gaussian Blur"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Langkah terakhir adalah menggunakan Gradient Map untuk memberikan pewarnaan pada tekstur air.</p>",
        falseAnswerText: "Salah!<p>Langkah terakhir adalah pewarnaan menggunakan Gradient Map, bukan penambahan blur.</p>"
    },
    {
        title: "Efek Kaca",
        question: "Tool apa yang membuat efek kaca terlihat seperti pecahan es?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Filter - Artistic - Plastic Wrap",
            b: "Filter - Distort - Glass",
            c: "Filter - Blur - Motion Blur"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Filter Distort - Glass digunakan untuk memberikan efek kaca seperti pecahan es.</p>",
        falseAnswerText: "Salah!<p>Filter yang benar adalah Distort - Glass, bukan Artistic - Plastic Wrap atau Motion Blur.</p>"
    },
    {
        title: "Efek Bokeh",
        question: "Apa fungsi utama dari pengaturan Color Dynamics pada efek bokeh?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Mengatur intensitas terang dan gelap warna",
            b: "Membuat brush memiliki jarak antar bulatan",
            c: "Mengubah ukuran brush secara dinamis"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Color Dynamics mengatur intensitas terang dan gelap warna pada efek bokeh.</p>",
        falseAnswerText: "Salah!<p>Fungsi utama Color Dynamics adalah mengatur intensitas terang dan gelap warna, bukan jarak atau ukuran brush.</p>"
    },
    {
        title: "Efek Arsiran",
        question: "Apa langkah pertama dalam membuat efek arsiran pada foto?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Menambahkan Gaussian Blur",
            b: "Mengubah foto menjadi hitam putih",
            c: "Menggandakan layer foto"
        },
        correctAnswer: "c",
        correctAnswerText: "Benar!<p>Langkah pertama adalah menggandakan layer foto sebelum memulai proses efek arsiran.</p>",
        falseAnswerText: "Salah!<p>Langkah pertama adalah menggandakan layer foto, bukan langsung mengubahnya menjadi hitam putih atau menambahkan blur.</p>"
    },
    {
        title: "Efek Foto Hitam Putih",
        question: "Shortcut apa yang digunakan untuk membuat foto menjadi hitam putih?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Ctrl + Alt + U",
            b: "Ctrl + Shift + U",
            c: "Ctrl + I"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Shortcut untuk membuat foto menjadi hitam putih adalah Ctrl + Shift + U.</p>",
        falseAnswerText: "Salah!<p>Shortcut yang benar adalah Ctrl + Shift + U, bukan Ctrl + Alt + U atau Ctrl + I.</p>"
    },
    {
        title: "Digital Imaging",
        question: "Apa teknik utama dalam digital imaging untuk menggabungkan dua gambar?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Menggunakan Filter - Liquify",
            b: "Menggunakan Layer Mask dan Opacity",
            c: "Menggunakan Gradient Map"
        },
        correctAnswer: "b",
        correctAnswerText: "Benar!<p>Teknik utama dalam digital imaging adalah menggunakan Layer Mask dan pengaturan Opacity.</p>",
        falseAnswerText: "Salah!<p>Layer Mask dan pengaturan Opacity adalah teknik utama dalam digital imaging.</p>"
    },
    {
        title: "Membuat ID Card",
        question: "Tool apa yang sering digunakan untuk menambahkan garis luar pada foto ID Card?",
        background: `<img src="${baseUrl}/assets/images/bg_slide5.jpg">`,
        answers: {
            a: "Blending Options - Stroke",
            b: "Blending Options - Gradient Overlay",
            c: "Blending Options - Drop Shadow"
        },
        correctAnswer: "a",
        correctAnswerText: "Benar!<p>Blending Options - Stroke digunakan untuk menambahkan garis luar pada foto.</p>",
        falseAnswerText: "Salah!<p>Tool yang digunakan adalah Blending Options - Stroke, bukan Gradient Overlay atau Drop Shadow.</p>"
    }
];
