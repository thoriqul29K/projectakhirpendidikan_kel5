<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kuis Bab <?= $bab; ?> - Rekayasa Web</title>
    <link rel="stylesheet" href="<?= base_url('assets/css/style.css'); ?>">
</head>
<body>
    <main class="kuis-wrapper">
        <h2>Kuis Bab <?= $bab; ?> - Rekayasa Web</h2>
        <form action="<?= base_url('/kuis/rekayasa_web/submit'); ?>" method="post">
            <?php for ($i = 1; $i <= 10; $i++) : ?>
                <div class="soal">
                    <p><?= $i; ?>. Pertanyaan ke-<?= $i; ?>?</p>
                    <?php for ($j = 'A'; $j <= 'E'; $j++) : ?>
                        <label>
                            <input type="radio" name="soal<?= $i; ?>" value="<?= $j; ?>"> Opsi <?= $j; ?>
                        </label><br>
                    <?php endfor; ?>
                </div>
            <?php endfor; ?>
            <button type="submit">Selesai</button>
        </form>
    </main>
</body>
</html>
