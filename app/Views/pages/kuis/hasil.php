<?= $this->extend('layout/main') ?>

<?= $this->section('content') ?>
<div class="result-wrapper">
    <h2>Hasil Kuis</h2>
    <p>Selamat, Anda telah menyelesaikan kuis ini!</p>
    <div class="score-display">
        <p>Skor Anda:</p>
        <h1><?= isset($skor) ? $skor : '0' ?>/100</h1>
    </div>
    <p><?= $pesan ?></p>
    <a href="<?= base_url('kuis') ?>" class="back-btn">Kembali ke Daftar Kuis</a>
</div>

<style>
    .result-wrapper {
        max-width: 600px;
        margin: auto;
        padding: 20px;
        background-color: #f9f9f9;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        text-align: center;
    }

    .result-wrapper h2 {
        color: #333;
        margin-bottom: 20px;
    }

    .score-display {
        background-color: #384b70;
        padding: 20px;
        border-radius: 8px;
        margin: 20px 0;
        color: white;
        font-size: 24px;
        font-weight: bold;
    }

    .score-display h1 {
        font-size: 48px;
        margin: 0;
    }

    .back-btn {
        display: inline-block;
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #384b70;
        color: white;
        text-decoration: none;
        border-radius: 8px;
        transition: background-color 0.3s;
    }

    .back-btn:hover {
        background-color: #2c3d5b;
    }
</style>

<?= $this->endSection() ?>
