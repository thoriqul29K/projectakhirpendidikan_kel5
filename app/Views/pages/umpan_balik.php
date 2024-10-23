<?= $this->extend('layout/main'); ?>

<?= $this->section('content'); ?>

<div class="feedback-wrapper">
            <h2>Umpan Balik</h2>
            <form action="<?= base_url('feedback/submit'); ?>" method="post">
                <label for="nama">Nama:</label>
                <input type="text" id="nama" name="nama" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="feedback">Pesan atau Umpan Balik:</label>
                <textarea id="feedback" name="feedback" required></textarea>

                <input type="submit" value="Kirim">
            </form>

            <?php if (isset($message)) : ?>
                <div class="feedback-message">
                    <?= $message; ?>
                </div>
            <?php endif; ?>
        </div>

        <style>
            body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 0;
        }

        .feedback-wrapper {
            max-width: 800px;
            margin: auto;
            padding: 50px 20px;
            background-color: white;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin-top: 50px;
            border-radius: 8px;
        }

        h2 {
            text-align: center;
            font-size: 36px;
            font-weight: 800;
            color: #161A30;
            margin-bottom: 20px;
        }

        form {
            display: flex;
            flex-direction: column;
        }

        label {
            font-size: 18px;
            margin-bottom: 10px;
            color: #333;
        }

        input[type="text"], input[type="email"], textarea {
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
            width: 100%;
        }

        textarea {
            height: 150px;
        }

        input[type="submit"] {
            padding: 10px 20px;
            font-size: 18px;
            color: white;
            background-color: #384b70;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        input[type="submit"]:hover {
            background-color: #2c3e50;
        }

        .feedback-message {
            text-align: center;
            font-size: 18px;
            margin-top: 20px;
        }
        </style>
        <?= $this->endSection(); ?>