<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $title; ?></title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
        }
        main {
            max-width: 800px;
            margin: auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin-top: 50px;
        }
        img {
            display: block;
            margin: auto;
            border-radius: 50%;
            margin-top: 20px;
        }
        p {
            font-size: 18px;
            text-align: center;
            line-height: 1.6;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <nav>
        <img src="<?= base_url('assets/images/kilat 1 b copy-1.jpg') ?>" alt="Foto Profil" width="350" height="300">
    </nav>
    <main>
        <p>Ini adalah halaman profil saya <br>
            Nama  : M. Rizki <br>
            Kelas : 4 MIM <br>
            No HP : 085960362304
        </p>
    </main>
</body>
</html>
