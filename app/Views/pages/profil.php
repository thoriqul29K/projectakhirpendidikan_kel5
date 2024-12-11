<?= $this->extend('layout/main'); ?>

<?= $this->section('content'); ?>
<div class="profil-wrapper">
    <h2>Tentang MI-GO</h2>
    <p>Selamat datang di website MI-GO! MI-GO adalah web edukasi yang bertujuan untuk memberikan akses mudah dan berkualitas kepada siswa dalam proses pembelajaran. Dengan berbagai materi yang disusun secara sistematis, kami berharap dapat mendukung perkembangan pendidikan digital di Indonesia.</p>

    <h3>Visi</h3>
    <p>Menjadi platform pembelajaran digital terkemuka yang mendukung siswa dalam meraih prestasi dan mencapai potensi
        terbaiknya.</p>

    <h3>Misi</h3>
    <ul>
        <li>Menyediakan materi pembelajaran yang berkualitas dan mudah diakses.</li>
        <li>Mendukung guru dan siswa dalam proses belajar mengajar melalui teknologi digital.</li>
        <li>Berinovasi untuk menghadirkan fitur-fitur yang relevan dengan kebutuhan pendidikan modern.</li>
    </ul>
</div>

<style>
    .profil-wrapper {
        width: 800px;
        margin: auto;
        text-align: left;
        padding: 50px 0;
        font-family: "Open Sans", sans-serif;
    }

    .profil-wrapper h2 {
        font-size: 36px;
        font-weight: 800;
        color: #161A30;
        text-align: center;
        margin-bottom: 20px;
    }

    .profil-wrapper h3 {
        font-size: 28px;
        font-weight: bold;
        color: #384b70;
        margin-top: 30px;
    }

    .profil-wrapper p {
        font-size: 18px;
        line-height: 1.6;
        color: #161A30;
        margin-bottom: 15px;
    }

    .profil-wrapper ul {
        list-style-type: disc;
        margin-left: 20px;
        color: #161A30;
        font-size: 18px;
    }

    .profil-wrapper ul li {
        margin-bottom: 10px;
    }

    .profil-wrapper a {
        color: #384b70;
        text-decoration: none;
    }

    .profil-wrapper a:hover {
        text-decoration: underline;
    }
</style>
<?= $this->endSection(); ?>