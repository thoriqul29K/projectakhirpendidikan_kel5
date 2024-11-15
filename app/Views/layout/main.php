<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $title; ?></title>
    <link rel="stylesheet" href="<?= base_url('assets/css/style.css'); ?>">
</head>
<body>
<nav>
    <div class="wrapper">
        <div class="logo"><a href="">MI- GO!</a></div>
        <div class="menu">
            <ul>
                <li><a href="<?= base_url("/") ?>">Home</a></li>
                <li><a href="<?= base_url('/umpan_balik') ?>">Umpan Balik</a></li>
                <li><a href="#profildev">Biodata</a></li>
                <li><a href="<?= base_url('/materi') ?>">Materi</a></li>
                <li><a href="<?= base_url('/kuis') ?>" class="tbl-biru">Kuis</a></li>
            </ul>
        </div>
    </div>
</nav>
    <!-- Content Section -->
    <main>
        <?= $this->renderSection('content'); ?>
    </main>

    <!-- Include Footer -->
    <footer>
    <section id="profildev">
        <div class="footer-content">
            <p>&copy; 2024 Website Kelompok 5. All Rights Reserved. <br> Gott mitt uns</p>
            <ul class="footer-links">
                <li><a href="/">Kembali ke home</a></li>
                <li><a href="#">Kontak</a></li>
                <li><a href="#">Tentang Kami</a></li>
            </ul>
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
        </div>
    </section>

    <style>
        footer {
    background-color: #384b70;
    padding: 20px 0;
    text-align: center;
    border-top: 1px solid #e7e7e7;
    width: 100%; /* Pastikan footer mengisi seluruh lebar halaman */
}

.footer-content {
    display: flex;
    flex-direction: column;
    align-items: center; /* Untuk menengahkan konten secara horizontal */
    max-width: 1200px; /* Batasi lebar maksimal agar tidak terlalu lebar */
    margin: 0 auto; /* Menengahkan footer-content pada halaman */
}

.footer-content p {
    margin: 0;
    font-size: 14px;
    color: white;
}

.footer-links {
    list-style: none;
    padding: 0;
    margin: 10px 0 0;
    display: flex;
    justify-content: center; /* Untuk menengahkan tautan */
    gap: 15px; /* Jarak antar tautan */
}

.footer-links li {
    color: white;
}

.footer-links a {
    text-decoration: none;
    color: white;
}

.footer-links a:hover {
    text-decoration: underline;
}

.profile {
    display: flex;
    justify-content: center; /* Menengahkan profile-item */
    flex-wrap: wrap; /* Supaya tampilan rapi ketika layar lebih kecil */
    gap: 40px; /* Jarak antar profile-item */
    margin: 40px 0;
}

.profile-item {
    text-align: center;
    color: white;
    max-width: 200px; /* Batasi lebar agar tidak terlalu besar */
}

.profile-item img {
    display: block;
    margin: auto;
    border-radius: 50%;
    width: 150px;
    height: 150px;
}

.profile p {
    font-size: 18px;
    line-height: 1.6;
    margin-top: 20px;
    color: white;
}
    </style>
</footer>

</body>
</html>
