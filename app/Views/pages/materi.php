<?= $this->extend('layout/main'); ?>

<?= $this->section('content'); ?>
<div class="materi-wrapper">
    <h2>Modul Pembelajaran</h2>
    <h3>Selamat belajar!</h3>
    <p>Berikut adalah beberapa modul yang bisa kalian akses untuk dipelajari.</p>

    <div class="materi-list">
        <div class="materi-card">
            <img src="<?= base_url('assets/images/SIA.jpg') ?>" alt="Modul Materi Sistem Informasi Akuntansi">
            <p><a href="<?= base_url('assets/materi/modul_SIA.pdf') ?>">Sistem Informasi Akuntansi</a></p>
        </div>
        <div class="materi-card">
            <img src="<?= base_url('assets/images/PKK.jpg') ?>" alt="Modul Materi Keamanan Komputer">
            <p><a href="<?= base_url('assets/materi/modul_KK.pdf') ?>">Keamanan Komputer</a></p>
        </div>
        <div class="materi-card">
            <img src="<?= base_url('assets/images/PRW.jpg') ?>" alt="Modul Materi Rekayasa Web">
            <p><a href="<?= base_url('assets/materi/modul_RW.pdf') ?>">Rekayasa Web</a></p>
        </div>
        <div class="materi-card">
            <img src="<?= base_url('assets/images/PPV.png') ?>" alt="Modul Materi Pemrograman Visual">
            <p><a href="#">Pemrograman Visual</a></p>
        </div>
        <div class="materi-card">
            <img src="<?= base_url('assets/images/PAD.png') ?>" alt="Modul Materi Analisis Data">
            <p><a href="#">Analisis Data</a></p>
        </div>
    </div>
</div>
<?= $this->endSection(); ?>