<?= $this->extend('layout/main'); ?>

<?= $this->section('content'); ?>
<div class="materi-wrapper">
    <h2>Modul Pembelajaran</h2>
    <h3>Selamat belajar!</h3>
    <p>Berikut adalah beberapa modul yang bisa kalian akses untuk dipelajari.</p>

    <?php for ($semester = 1; $semester <= 8; $semester++): ?>
        <?php if ($semester == 6 || $semester == 7) continue; // Skip semester 6 & 7 
        ?>
        <div class="semester">
            <button class="accordion">Semester <?= $semester ?></button>
            <div class="panel">
                <div class="materi-list">
                    <?php if ($semester == 1): ?>
                        <!-- Card List Semester 1 -->
                        <a class="materi-card" href="<?= base_url('assets/materi/modul_DB.pdf') ?>">
                            <img src="<?= base_url('assets/images/DB.jpg') ?>" alt="Modul Materi Logika Dan Pemrograman">
                            <p>Logika Dan Pemrograman</p>
                        </a>
                        <a class="materi-card" href="<?= base_url('assets/materi/modul_ALGO.pdf') ?>">
                            <img src="<?= base_url('assets/images/ALGO.jpg') ?>" alt="Modul Materi Pengolahan Gambar Komputer & Fotografi">
                            <p>Pengolahan Gambar Komputer & Fotografi</p>
                        </a>
                        <a class="materi-card" href="<?= base_url('assets/materi/modul_ALGO.pdf') ?>">
                            <img src="<?= base_url('assets/images/ALGO.jpg') ?>" alt="Modul Materi Jaringan Komputer">
                            <p>Jaringan Komputer</p>
                        </a>
                    <?php elseif ($semester == 2): ?>
                        <!-- Card List Semester 2 -->
                        <a class="materi-card" href="<?= base_url('assets/materi/modul_DB.pdf') ?>">
                            <img src="<?= base_url('assets/images/DB.jpg') ?>" alt="Modul Materi Struktur Data">
                            <p>Struktur Data</p>
                        </a>
                        <a class="materi-card" href="<?= base_url('assets/materi/modul_ALGO.pdf') ?>">
                            <img src="<?= base_url('assets/images/ALGO.jpg') ?>" alt="Modul Materi Sistem Operasi">
                            <p>Sistem Operasi</p>
                        </a>
                    <?php elseif ($semester == 3): ?>
                        <!-- Card List Semester 3 -->
                        <a class="materi-card" href="<?= base_url('assets/materi/modul_DB.pdf') ?>">
                            <img src="<?= base_url('assets/images/DB.jpg') ?>" alt="Modul Materi Pemrograman Mobile">
                            <p>Pemrograman Mobile</p>
                        </a>
                        <a class="materi-card" href="<?= base_url('assets/materi/modul_ALGO.pdf') ?>">
                            <img src="<?= base_url('assets/images/ALGO.jpg') ?>" alt="Modul Materi Pemrograman Berorientasi Objek">
                            <p>Pemrograman Berorientasi Objek</p>
                        </a>
                    <?php elseif ($semester == 4): ?>
                        <!-- Card List Semester 4 -->
                        <a class="materi-card" href="<?= base_url('assets/materi/modul_DB.pdf') ?>">
                            <img src="<?= base_url('assets/images/DB.jpg') ?>" alt="Modul Materi Desain & Pemrograman Web">
                            <p>Desain & Pemrograman Web</p>
                        </a>
                        <a class="materi-card" href="<?= base_url('assets/materi/modul_ALGO.pdf') ?>">
                            <img src="<?= base_url('assets/images/ALGO.jpg') ?>" alt="Modul Materi Basis Data II">
                            <p>Basis Data II</p>
                        </a>
                    <?php elseif ($semester == 5): ?>
                        <!-- Card List Semester 5 -->
                        <a href="<?= base_url('assets/materi/modul_SIA.pdf') ?>" class="materi-card">
                            <img src="<?= base_url('assets/images/SIA.jpg') ?>" alt="Modul Materi Sistem Informasi Akuntansi">
                            <p>Sistem Informasi Akuntansi</p>
                        </a>
                        <a class="materi-card" href="<?= base_url('assets/materi/modul_KK.pdf') ?>">
                            <img src="<?= base_url('assets/images/PKK.jpg') ?>" alt="Modul Materi Keamanan Komputer">
                            <p>Keamanan Komputer</p>
                        </a>
                        <a class="materi-card" href="<?= base_url('assets/materi/modul_RW.pdf') ?>">
                            <img src="<?= base_url('assets/images/PRW.jpg') ?>" alt="Modul Materi Rekayasa Web">
                            <p>Rekayasa Web</p>
                        </a>
                        <a class="materi-card" href="#">
                            <img src="<?= base_url('assets/images/PPV.png') ?>" alt="Modul Materi Pemrograman Visual">
                            <p>Pemrograman Visual</p>
                        </a>
                        <a class="materi-card" href="#">
                            <img src="<?= base_url('assets/images/PAD.png') ?>" alt="Modul Materi Analisis Data">
                            <p>Analisis Data</p>
                        </a>
                    <?php elseif ($semester == 8): ?>
                        <!-- Card List Semester 8 -->
                        <a class="materi-card" href="<?= base_url('assets/materi/modul_SIA.pdf') ?>">
                            <img src="<?= base_url('assets/images/SIA.jpg') ?>" alt="Modul Materi Tata Kelola">
                            <p>Tata Kelola</p>
                        </a>
                    <?php else: ?>
                        <p>Tidak ada modul untuk semester <?= $semester ?>.</p>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    <?php endfor; ?>
</div>

<style>
    .accordion {
        background-color: #384b70;
        color: white;
        cursor: pointer;
        padding: 15px;
        width: 100%;
        text-align: left;
        border: none;
        outline: none;
        transition: background-color 0.4s ease;
        font-size: 18px;
        margin-top: 10px;
        border-radius: 5px;
    }

    .accordion:hover {
        background-color: #2c3e50;
    }

    .panel {
        padding: 0 18px;
        display: none;
        background-color: white;
        overflow: hidden;
    }
</style>

<script>
    // Script untuk Expand/Collapse
    document.querySelectorAll('.accordion').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
            const panel = button.nextElementSibling;
            panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
        });
    });
</script>
<?= $this->endSection(); ?>