<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hasil Kuis - Rekayasa Web</title>
    <link rel="stylesheet" href="<?= base_url('assets/css/style.css'); ?>">
</head>
<body>
    <main class="kuis-wrapper">
        <h2>Hasil Kuis</h2>
        <p>Nilai Anda: <?= $nilai; ?>/100</p>
        <a href="<?= base_url('/kuis/rekayasa_web'); ?>">Kembali ke Mata Pelajaran</a>
    </main>
</body>
</html>
