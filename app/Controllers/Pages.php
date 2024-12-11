<?php

namespace App\Controllers;

class Pages extends BaseController
{
    public function index()
    {
        $data = [
            'title' => 'Home|MI-GO'
        ];
        return view('pages/index', $data);
    }

    public function biodata()
    {
        $data = [
            'title' => 'Biodata|MI-GO'
        ];
        return view('pages/biodata', $data);
    }

    public function kuis()
    {
        $data = [
            'title' => 'Kuis|MI-GO'
        ];
        return view('pages/kuis', $data);
    }

    public function materi()
    {
        $data = [
            'title' => 'Materi|MI-GO'
        ];
        return view('pages/materi', $data);
    }

    public function umpan_balik()
    {
        $data = [
            'title' => 'Umpan Balik|MI-GO'
        ];
        return view('pages/umpan_balik', $data);
    }

    public function profil()
    {
        $data = [
            'title' => 'Profil|MI-GO'
        ];
        return view('pages/profil', $data);
    }
}
