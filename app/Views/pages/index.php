<?= $this->extend('layout/main'); ?>

<?= $this->section('content'); ?>

    <div class="wrapper">
        <!-- untuk home -->
        <section id="home">
            <img src="<?= base_url('assets/images/foto-depan.jpg') ?>" alt="Musim" width="500" height="300">
            <div class="kolom">
                <p class="deskripsi">Mengenal Website MI-GO</p>
                <h2>Apa saja informasi yang bisa dicari?</h2>
                <p>Di website ini, anda bisa melihat modul materi pelajaran dan melatih ilmu anda menggunakan kuis! </p>
                <p><a href="#Materi" class="tbl-pink">Menuju ke materi</a></p>
            </div>
        </section>

<!-- untuk feedback -->
<section id="Feedback">
    <div class="kolom">
        <p class="deskripsi">Sampaikan umpan balik untuk kami!.</p>
        <h2>Umpan Balik</h2>
        <p>Kami sangat menghargai masukan Anda! Berikan pendapat anda untuk membantu kami meningkatkan kualitas web kami</p>
        <p>Kami berkomitmen untuk selalu memberikan yang terbaik. Sampaikan feedback Anda agar kami bisa terus meningkatkan kualitas layanan kami.</p>
        <p><a href="<?= base_url('/umpan_balik') ?>" class="tbl-biru">Klik Disini</a></p>
        <p>Terima kasih telah menggunakan layanan kami! Kami ingin mendengar dari Anda untuk terus berinovasi dan memberikan pelayanan terbaik</p>
    </div>
    <img src="https://img.freepik.com/free-photo/attractive-pleased-female-asian-student-show-okay-ok-confirmation-gesture-enjoy-perfect-party-smiling-broadly-satisfied-wearing-denim-jacket-orange-t-shirt_176420-37768.jpg?size=626&ext=jpg&ga=GA1.1.1308090139.1701668354&semt=ais" alt="Feedback">
</section>

        <!-- untuk Materi -->
        <section id="Materi">
            <div class="tengah">
                <div class="kolom">
                    <p class="deskripsi">Materi - Materi</p>
                    <h2>PEMBELAJARAN</h2>
                    <p>Dibawah ini adalah beberapa modul pembelajaran yang sering dipakai, untuk lebih lengkap, silahkan pilih <a href="<?= base_url("/materi") ?>">materi</a> pada navbar</p>
                </div>

                <div class="Materi-list"> 
                    <div class="kartu-Materi"> 
                        <img src="<?= base_url('assets/images/SIA.jpg') ?>" alt="Sistem Informasi Akuntansi">
                        <p><a href="#">Sistem Informasi Akuntansi</a></p>
                        <p style="font-size: 16px;">Sistem informasi akuntansi (SIA) adalah suatu sistem yang mengumpulkan, menyimpan, dan mengolah data keuangan serta informasi lainnya yang berkaitan dengan aktivitas bisnis. Tujuan utama dari SIA adalah untuk memberikan informasi yang akurat dan tepat waktu kepada manajemen dan pemangku kepentingan lainnya untuk mendukung pengambilan keputusan.</p>
                    </div>
                    <div class="kartu-Materi">
                        <img src=" <?= base_url('assets/images/PKK.jpg') ?>" alt="Praktikum Keamanan Komputer">
                        <p><a href="#">Keamanan Komputer</a></p>
                        <p style="font-size: 16px;">keamanan komputer adalah suatu kegiatan pembelajaran yang bertujuan untuk memberikan pemahaman dan keterampilan dalam melindungi sistem komputer, jaringan, dan data dari ancaman dan serangan yang berpotensi merugikan. Dalam praktikum ini, peserta biasanya akan mempelajari berbagai aspek keamanan siber melalui simulasi, eksperimen, dan penggunaan alat-alat keamanan.</p>
                    </div>
                    <div class="kartu-Materi">
                        <img src="<?= base_url('assets/images/PRW.jpg') ?>" alt="Praktikum Rekayasa Web">
                        <p><a href="#">Rekayasa Web</a></p>
                        <p style="font-size: 16px;">rekayasa web adalah kegiatan pembelajaran yang bertujuan untuk memberikan pemahaman dan keterampilan dalam merancang, membangun, dan mengelola aplikasi dan situs web. Dalam praktikum ini, peserta belajar tentang berbagai aspek pengembangan web, mulai dari perencanaan hingga penerapan teknologi web yang modern.</p>
                    </div>
                    <div class="kartu-Materi">
                        <img src="<?= base_url('assets/images/PPV.png') ?>" alt="Praktikum Pemrograman Visual">
                        <p><a href="#">Pemrograman Visual</a></p>
                        <p style="font-size: 16px;">pemrograman visual adalah kegiatan pembelajaran yang fokus pada penggunaan lingkungan pemrograman yang menyediakan antarmuka grafis untuk pengembangan perangkat lunak. Dalam praktikum ini, peserta belajar untuk membuat aplikasi dengan cara yang lebih intuitif dan interaktif, biasanya tanpa harus menulis banyak kode secara manual.</p>
                    </div>
                    <div class="kartu-Materi">
                        <img src="<?= base_url('assets/images/PAD.png') ?>" alt="Praktikum Analisis Data">
                        <p><a href="#">Analisis Data</a></p>
                        <p style="font-size: 16px;">analisis data adalah kegiatan pembelajaran yang bertujuan untuk memberikan pemahaman dan keterampilan dalam mengumpulkan, mengolah, dan menganalisis data untuk menghasilkan informasi yang berguna. Dalam praktikum ini, peserta belajar menggunakan berbagai teknik dan alat analisis untuk menjawab pertanyaan penelitian atau mendukung pengambilan keputusan.</p>
                    </div>
                </div>
            </div> 
        </section>

        <!-- untuk Kuis -->
        <section id="Kuis">
            <div class="tengah">
                <div class="kolom">
                    <p class="deskripsi">Silahkan tes kemampuan anda!</p>
                    <h2>Kuis</h2>
                    <p>Setelah membaca <a href="<?= base_url("/materi") ?>">materi</a> diatas, dan ingin mengasah kemampuan anda, silahkan klik tombol dibawah ini</p>
                    <p><a href="/kuis" class="tbl-biru">Klik Disini</a></p>
                </div>
            </div>
        </section>
        
    </div>
<?= $this->endSection(); ?>