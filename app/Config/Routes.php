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
$routes->get('/kuis/rekayasa_web', 'Kuis::kuis_rekayasa_web');
$routes->get('/kuis/sistem_informasi_akuntansi', 'Kuis::kuis_sistem_informasi_akuntansi');
$routes->post('feedback/submit', 'Umpanbalik::submit');