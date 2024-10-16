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
        echo view('layout/footer');
    }

    public function biodata()
    {
        $data = [
            'title' => 'Biodata|WebPendidikan'
        ];
         echo view('layout/header', $data);
         echo view('pages/biodata');
         echo view('layout/footer');
    }

    public function kuis()
    {
        $data = [
            'title' => 'Kuis|WebPendidikan'
        ];
         echo view('layout/header', $data);
         echo view('pages/kuis');
         echo view('layout/footer');
    }
}
