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
            max-width: 1200px;
            margin: auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin-top: 50px;
        }
        .profile {
            display: flex;
            justify-content: space-around;
            margin-bottom: 40px;
        }
        .profile-item {
            text-align: center;
            flex: 1;
            margin: 0 20px;
        }
        img {
            display: block;
            margin: auto;
            border-radius: 50%;
            width: 200px;
            height: 200px;
        }
        p {
            font-size: 18px;
            line-height: 1.6;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <main>
        <div class="profile">
            <div class="profile-item">
                <img src="<?= base_url('assets/images/kilat 1 b copy-1.jpg') ?>" alt="Foto Profil 1">
                <p>
                    Nama  : M. Rizki <br>
                    Kelas : 5 MIM <br>
                    NIM : 062240833156
                </p>
            </div>

            <div class="profile-item">
                <img src="<?= base_url('assets/images/default_user.jpg') ?>" alt="Foto Profil 2">
                <p>
                    Nama  : Muhammad Thoriqul Kirom <br>
                    Kelas : 5 MIM <br>
                    NIM : 062240833160
                </p>
            </div>

            <div class="profile-item">
                <img src="<?= base_url('assets/images/Riwandi.jpg') ?>" alt="Foto Profil 3">
                <p>
                    Nama  : Riwandi Apridiansyah <br>
                    Kelas : 5 MIM <br>
                    NIM : 062240833165
                </p>
            </div>
        </div>
    </main>
</body>
</html>
