<?= $this->extend('layout/main') ?>

<?= $this->section('content') ?>
<div class="kuis-wrapper">
    <h2>Hasil Kuis</h2>
    <p>Nilai Anda: <?= $nilai ?></p>
    <a href="<?= base_url('/kuis') ?>" class="tbl-biru">Kembali ke Daftar Kuis</a>
</div>
<?= $this->endSection() ?>
