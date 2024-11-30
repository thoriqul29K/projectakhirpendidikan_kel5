<?= $this->extend('layout/main'); ?>

<?= $this->section('content'); ?>
<div class="kuis-wrapper">
    <h2>Latihan Kuis</h2>
    <p>Berikut adalah beberapa latihan kuis berdasarkan materi yang telah kalian pelajari.</p>

    <div class="kuis-list">
        <div class="kuis-card">
            <img src="<?= base_url('assets/images/SIA.jpg') ?>" alt="Kuis Sistem Informasi Akuntansi">
            <p><a href="<?= base_url('/kuis/sistem_informasi_akuntansi') ?>">Sistem Informasi Akuntansi</a></p>
        </div>
        <div class="kuis-card">
            <img src="<?= base_url('assets/images/PKK.jpg') ?>" alt="Kuis Keamanan Komputer">
            <p><a href="<?= base_url('/') ?>">Keamanan Komputer</a></p>
        </div>
        <div class="kuis-card">
            <img src="<?= base_url('assets/images/PRW.jpg') ?>" alt="Kuis Rekayasa Web">
            <p><a href="<?= base_url('/kuis/rekayasa_web') ?>">Rekayasa Web</a></p>
        </div>
        <div class="kuis-card">
            <img src="<?= base_url('assets/images/PPV.png') ?>" alt="Kuis Pemrograman Visual">
            <p><a href="#">Pemrograman Visual</a></p>
        </div>
        <div class="kuis-card">
            <img src="<?= base_url('assets/images/PAD.png') ?>" alt="Kuis Analisis Data">
            <p><a href="#">Analisis Data</a></p>
        </div>
    </div>
</div>

<?= $this->endSection(); ?>