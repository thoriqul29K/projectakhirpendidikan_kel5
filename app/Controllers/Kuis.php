<?php

namespace App\Controllers;

class Kuis extends BaseController
{
    public function index()
    {
        // Tampilkan halaman daftar mata pelajaran di kuis
        $data['title'] = 'Kuis - Mata Pelajaran';
        return view('pages/kuis/index', $data);
    }

    public function mataPelajaran($namaMataPelajaran)
    {
        // Tampilkan daftar bab untuk mata pelajaran yang dipilih
        $data = [
            'title' => "Kuis - $namaMataPelajaran",
            'namaMataPelajaran' => $namaMataPelajaran,
            'babs' => ['Bab 1', 'Bab 2', 'Bab 3'] // Misalnya daftar bab, bisa diubah sesuai data yang ada
        ];
        return view("pages/kuis/$namaMataPelajaran/index", $data);
    }

    public function bab($namaMataPelajaran, $bab)
    {
        // Tampilkan halaman soal untuk bab yang dipilih
        $data = [
            'title' => "$namaMataPelajaran - $bab",
            'namaMataPelajaran' => $namaMataPelajaran,
            'bab' => $bab
        ];
        return view("pages/kuis/$namaMataPelajaran/$bab", $data);
    }

    public function hasil($nilai)
    {
        // Tampilkan halaman hasil setelah menyelesaikan kuis
        $data = [
            'title' => 'Hasil Kuis',
            'nilai' => $nilai
        ];
        return view('pages/kuis/hasil', $data);
    }
}
