<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Pages::index');
$routes->get('/biodata', 'Pages::biodata');
$routes->get('/kuis', 'Pages::kuis');
$routes->get('/materi', 'Pages::materi');
$routes->get('hasil', 'Kuis::hasil');
$routes->get('/umpan_balik', 'Pages::umpan_balik');
$routes->group('Kuis', function ($routes) {
    // Rute untuk halaman utama daftar mata pelajaran
    $routes->get('/', 'Kuis::index');

    // Rute untuk halaman daftar bab di dalam suatu mata pelajaran
    $routes->get('mataPelajaran/(:segment)', 'Kuis::mataPelajaran/$1');

    // Rute untuk halaman kuis soal berdasarkan mata pelajaran dan bab tertentu
    $routes->get('bab/(:segment)/(:segment)', 'Kuis::bab/$1/$2');

    // Rute untuk halaman hasil kuis
    $routes->post('hasil', 'Kuis::hasil');
});
$routes->setAutoRoute(true);