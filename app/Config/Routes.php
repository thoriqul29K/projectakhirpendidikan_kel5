<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Pages::index');
$routes->get('/biodata', 'Pages::biodata');
$routes->get('/kuis', 'Pages::kuis');
$routes->get('/materi', 'Pages::materi');
$routes->get('/umpan_balik', 'Pages::umpan_balik');
$routes->get('/profil', 'Pages::profil');
$routes->get('/kuis/rekayasa_web', 'Kuis::kuis_rekayasa_web');
$routes->get('/kuis/sistem_informasi_akuntansi', 'Kuis::kuis_sistem_informasi_akuntansi');
$routes->get('/kuis/logika_dan_pemrograman', 'Kuis::kuis_logika_pemrograman');
$routes->get('/kuis/pengolahan_gambar_komputer', 'Kuis::kuis_pengolahan_gambar_komputer');
$routes->get('/kuis/jaringan_komputer', 'Kuis::kuis_jaringan_komputer');
$routes->get('/kuis/struktur_data', 'Kuis::kuis_struktur_data');
$routes->get('/kuis/sistem_operasi', 'Kuis::kuis_sistem_operasi');
$routes->get('/kuis/tata_kelola_usaha', 'Kuis::kuis_tata_kelola_usaha');
$routes->get('/kuis/pemrograman_mobile', 'Kuis::kuis_pemrograman_mobile');
$routes->get('/kuis/pemrograman_berorientasi_objek', 'Kuis::kuis_pemrograman_berorientasi_objek');
$routes->get('/kuis/keamanan_komputer', 'Kuis::kuis_keamanan_komputer');
$routes->get('/kuis/analisis_data', 'Kuis::kuis_analisis_data');
$routes->get('/kuis/pemrograman_visual', 'Kuis::kuis_pemrograman_visual');
$routes->get('/kuis/basis_data', 'Kuis::kuis_basis_data');
$routes->get('/kuis/desain_web', 'Kuis::kuis_desain_web');
$routes->post('umpan_balik/submit', 'Umpanbalik::submit');
