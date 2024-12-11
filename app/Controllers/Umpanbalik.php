<?php

namespace App\Controllers;

use CodeIgniter\Controller;

class Umpanbalik extends Controller
{
    public function submit()
    {

        // Ambil data dari form
        $nama = $this->request->getPost('nama');
        $email = $this->request->getPost('email');
        $feedback = $this->request->getPost('feedback');

        // Konfigurasi email
        $emailService = \Config\Services::email();
        $emailService->setTo('migowebkel5@gmail.com');
        $emailService->setFrom('migowebfeedback@gmail.com', 'Umpan Balik'); // Sesuaikan dengan Email Sender
        $emailService->setSubject("Umpan Balik dari $nama");
        $emailService->setMessage("
            Nama: $nama <br>
            Email: $email <br>
            Pesan/Umpan Balik:<br>
            $feedback
        ");

        // Kirim email dan tangani respon
        if ($emailService->send()) {
            session()->setFlashdata('message', 'Umpan balik berhasil dikirim. Terima kasih!');
        } else {
            session()->setFlashdata('message', 'Gagal mengirim umpan balik. Silakan coba lagi.');
        }

        // Redirect ke halaman umpan balik
        return redirect()->to(base_url('umpan_balik'));
    }
}
