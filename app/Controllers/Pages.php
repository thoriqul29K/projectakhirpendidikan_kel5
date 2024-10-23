<?php

namespace App\Controllers;

class Pages extends BaseController
{
    public function index()
    {
        $data = [
            'title' => 'Home|WebPendidikan'
        ];
        return view('pages/index', $data);
    }

    public function biodata()
    {
        $data = [
            'title' => 'Biodata|WebPendidikan'
        ];
         return view('pages/biodata', $data);
    }

    public function kuis()
    {
        $data = [
            'title' => 'Kuis|WebPendidikan'
        ];
         return view('pages/kuis', $data);
    }

    public function materi()
    {
        $data = [
            'title' => 'Materi|WebPendidikan'
        ];
         return view('pages/materi', $data);
    }

    public function umpan_balik()
    {
        $data = [
            'title' => 'Umpan Balik|WebPendidikan'
        ];
        return view('pages/umpan_balik', $data);
    }
}
