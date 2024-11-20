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

   

}
