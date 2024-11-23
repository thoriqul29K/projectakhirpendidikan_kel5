<?php

namespace App\Controllers;

use CodeIgniter\Controller;

class Umpanbalik extends Controller
{
    public function submit()
    {
        $nama = $this->request->getPost('nama');
        $email = $this->request->getPost('email'); // Email dari form
        $umpanbalik = $this->request->getPost('umpan_balik');

        $emailService = \Config\Services::email();

        // Konfigurasi Email
        $emailService->setTo('migowebkel5@gmail.com'); // Email penerima
        $emailService->setFrom($email, $nama);        // Email pengirim dari form
        $emailService->setSubject('Umpan Balik dari ' . $nama);
        $emailService->setMessage("
            <h1>Umpan Balik</h1>
            <p><strong>Nama:</strong> {$nama}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Pesan:</strong><br>{$umpanbalik}</p>
        ");

        // Kirim email dan tampilkan pesan
        if ($emailService->send()) {
            return redirect()->back()->with('message', 'Umpan balik Anda berhasil dikirim!');
        } else {
            $error = $emailService->printDebugger(['headers']);
            return redirect()->back()->with('message', 'Terjadi kesalahan saat mengirim email: ' . $error);
        }
    }
}
