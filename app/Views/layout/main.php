<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $title; ?></title>
    <link rel="stylesheet" href="<?= base_url('assets/css/style.css'); ?>">
</head>
<body>
    <!-- Include Header -->
    <?= $this->include('layout/header'); ?>

    <!-- Content Section -->
    <main>
        <?= $this->renderSection('content'); ?>
    </main>

    <!-- Include Footer -->
    <?= $this->include('layout/footer'); ?>
</body>
</html>
