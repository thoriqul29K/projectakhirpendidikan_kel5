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
$routes->get('/kuis/rekayasa_web', 'Pages::rekayasa_web');
$routes->get('/kuis/rekayasa_web/bab(:num)', 'Pages::rekayasa_web/$1');
$routes->post('/kuis/rekayasa_web/submit', 'Pages::submit_quiz');
$routes->setAutoRoute(true);