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
$routes->setAutoRoute(true);