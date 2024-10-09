<?php

namespace App\Controllers;

class Pages extends BaseController
{
    public function index()
    {
        $data = [
            'title' => 'Home|WebPendidikan'
        ];
        echo view('layout/header', $data);
        echo view('pages/index');
    }

    public function biodata()
    {
        $data = [
            'title' => 'biodata|WebPendidikan'
        ];
         echo view('layout/header', $data);
         echo view('pages/biodata');
    }
}
