<?php

namespace App\Controllers;

class Kuis extends BaseController
{
    public function kuis_rekayasa_web()
    {
        return view('pages/kuis/rekayasa_web/kuis_RY');
    }
    public function kuis_sistem_informasi_akuntansi()
    {
        return view('pages/kuis/sistem_informasi_akuntansi/kuis_SIA');
    }

    public function kuis_logika_pemrograman()
    {
        return view('pages/kuis/logika_pemrograman/kuis_LdP');
    }
    public function kuis_pengolahan_gambar_komputer()
    {
        return view('pages/kuis/pengolahan_gambar_komputer/kuis_PGK');
    }
    public function kuis_jaringan_komputer()
    {
        return view('pages/kuis/jaringan_komputer/kuis_JK');
    }
    public function kuis_struktur_data()
    {
        return view('pages/kuis/struktur_data/kuis_SD');
    }
    public function kuis_sistem_operasi()
    {
        return view('pages/kuis/sistem_operasi/kuis_SO');
    }
    public function kuis_tata_kelola_usaha()
    {
        return view('pages/kuis/tata_kelola_usaha/kuis_TKU');
    }
}
