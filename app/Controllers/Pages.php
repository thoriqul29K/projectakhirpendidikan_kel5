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

    public function rekayasa_web($bab = null) {
        if ($bab) {
            return view('pages/kuis/rekayasa_web/bab', ['bab' => $bab]);
        }
        return view('pages/kuis/rekayasa_web/index');
    }
    
    public function submit_quiz() {
        // Simulasikan perhitungan nilai
        $nilai = rand(60, 100);
        return view('pages/kuis/rekayasa_web/nilai', ['nilai' => $nilai]);
    }
    
    
}
