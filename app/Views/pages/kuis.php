<?= $this->extend('layout/main'); ?>

<?= $this->section('content'); ?>
<div class="kuis-wrapper">
    <h2>Latihan Kuis</h2>
    <h3>Selamat berlatih!</h3>
    <p>Berikut adalah beberapa latihan kuis berdasarkan materi yang telah kalian pelajari.</p>

    <?php for ($semester = 1; $semester <= 8; $semester++): ?>
        <?php if ($semester == 6 || $semester == 7) continue; // Skip semester 6 & 7 
        ?>
        <div class="semester">
            <button class="accordion">Semester <?= $semester ?></button>
            <div class="panel">
                <div class="kuis-list">
                    <?php if ($semester == 1): ?>
                        <a href="<?= base_url('/kuis/logika_dan_pemrograman') ?>" class="kuis-card">
                            <img src="<?= base_url('assets/images/DB.jpg') ?>" alt="Kuis Logika dan Pemrograman">
                            <p>Logika dan Pemrograman</p>
                        </a>
                        <a href="<?= base_url('/kuis/pengolahan_gambar_komputer') ?>" class="kuis-card">
                            <img src="<?= base_url('assets/images/ALGO.jpg') ?>" alt="Kuis Pengolahan Gambar Komputer">
                            <p>Pengolahan Gambar Komputer</p>
                        </a>
                    <?php elseif ($semester == 2): ?>
                        <a href="<?= base_url('/kuis/struktur_data') ?>" class="kuis-card">
                            <img src="<?= base_url('assets/images/DB.jpg') ?>" alt="Kuis Struktur Data">
                            <p>Struktur Data</p>
                        </a>
                        <a href="<?= base_url('/kuis/sistem_operasi') ?>" class="kuis-card">
                            <img src="<?= base_url('assets/images/ALGO.jpg') ?>" alt="Kuis Sistem Operasi">
                            <p>Sistem Operasi</p>
                        </a>
                    <?php elseif ($semester == 3): ?>
                        <a href="<?= base_url('/kuis/struktur_data') ?>" class="kuis-card">
                            <img src="<?= base_url('assets/images/DB.jpg') ?>" alt="Kuis Pemrograman Mobile">
                            <p>Pemrograman Mobile</p>
                        </a>
                        <a href="<?= base_url('/kuis/sistem_operasi') ?>" class="kuis-card">
                            <img src="<?= base_url('assets/images/ALGO.jpg') ?>" alt="Kuis Pemrograman Berorientasi Objek">
                            <p>Pemrograman Berorientasi Objek</p>
                        </a>
                    <?php elseif ($semester == 4): ?>
                        <a href="<?= base_url('/kuis/struktur_data') ?>" class="kuis-card">
                            <img src="<?= base_url('assets/images/DB.jpg') ?>" alt="Kuis Pemrograman Web">
                            <p>Pemrograman Web</p>
                        </a>
                        <a href="<?= base_url('/kuis/sistem_operasi') ?>" class="kuis-card">
                            <img src="<?= base_url('assets/images/ALGO.jpg') ?>" alt="Kuis Basis Data II">
                            <p>Basis Data II</p>
                        </a>
                    <?php elseif ($semester == 5): ?>
                        <a href="<?= base_url('/kuis/sistem_informasi_akuntansi') ?>" class="kuis-card">
                            <img src="<?= base_url('assets/images/SIA.jpg') ?>" alt="Kuis Sistem Informasi Akuntansi">
                            <p>Sistem Informasi Akuntansi</p>
                        </a>
                        <a href="<?= base_url('/kuis/keamanan_komputer') ?>" class="kuis-card">
                            <img src="<?= base_url('assets/images/PKK.jpg') ?>" alt="Kuis Keamanan Komputer">
                            <p>Keamanan Komputer</p>
                        </a>
                        <a href="<?= base_url('/kuis/rekayasa_web') ?>" class="kuis-card">
                            <img src="<?= base_url('assets/images/PRW.jpg') ?>" alt="Kuis Rekayasa Web">
                            <p>Rekayasa Web</p>
                        </a>
                    <?php elseif ($semester == 8): ?>
                        <a href="<?= base_url('/kuis/sistem_informasi_akuntansi') ?>" class="kuis-card">
                            <img src="<?= base_url('assets/images/SIA.jpg') ?>" alt="Kuis Tata Kelola">
                            <p>Tata Kelola</p>
                        </a>
                    <?php else: ?>
                        <p>Tidak ada kuis untuk semester <?= $semester ?>.</p>
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