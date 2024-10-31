<?= $this->extend('layout/main') ?>

<?= $this->section('content') ?>
<div class="kuis-wrapper">
    <h2>Pilihlah Bab dalam mata pelajaran Rekayasa Web!</h2>
    <div class="kuis-list">
        <div class="kuis-card">
            <a href="<?= base_url("kuis/bab/$namaMataPelajaran/Bab1") ?>">
                <p>Bab 1</p>
            </a>
        </div>
        <div class="kuis-card">
            <a href="<?= base_url("kuis/bab/$namaMataPelajaran/Bab2") ?>">
                <p>Bab 2</p>
            </a>
        </div>
        <div class="kuis-card">
            <a href="<?= base_url("kuis/bab/$namaMataPelajaran/Bab3") ?>">
                <p>Bab 3</p>
            </a>
        </div>
        <div class="kuis-card">
            <a href="<?= base_url("kuis/bab/$namaMataPelajaran/Bab4") ?>">
                <p>Bab 4</p>
            </a>
        </div>
        <div class="kuis-card">
            <a href="<?= base_url("kuis/bab/$namaMataPelajaran/Bab5") ?>">
                <p>Bab 5</p>
            </a>
        </div>
    </div>
</div>
<?= $this->endSection() ?>
