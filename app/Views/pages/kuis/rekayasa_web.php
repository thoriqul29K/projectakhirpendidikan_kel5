<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kuis Rekayasa Web</title>
    <link rel="stylesheet" href="<?= base_url('assets/css/style.css'); ?>">
</head>
<body>
    <main class="kuis-wrapper">
        <h2>Pilih Bab untuk Rekayasa Web</h2>
        <div class="kuis-list">
            <?php for ($i = 1; $i <= 5; $i++) : ?>
                <div class="kuis-card">
                    <img src="<?= base_url('assets/images/bab' . $i . '.jpg'); ?>" alt="Bab <?= $i ?>">
                    <p>Bab <?= $i ?></p>
                    <a href="<?= base_url('/kuis/rekayasa_web/bab' . $i); ?>">Mulai Bab <?= $i ?></a>
                </div>
            <?php endfor; ?>
        </div>
    </main>
</body>
</html>
