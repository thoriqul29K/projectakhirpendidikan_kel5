<?= $this->extend('layout/main') ?>

<?= $this->section('content') ?>
<div class="kuis-wrapper">
    <h2>Rekayasa Web - <?= $bab ?></h2>
    <form id="quizForm" action="<?= base_url('hasil') ?>" method="POST">
        <div id="questionsContainer"></div>
        <button type="submit" class="submit-btn">Submit</button>
    </form>
</div>

<!-- Muat file JavaScript soal -->
<script src="<?= base_url('assets/pertanyaan_kuis/rekayasa_web_bab1.js') ?>"></script>

<script>
    document.addEventListener("DOMContentLoaded", function () {
        const questionsContainer = document.getElementById("questionsContainer");

        soalRekayasaWebBab1.forEach((soal, index) => {
            const questionDiv = document.createElement("div");
            questionDiv.classList.add("question");

            const questionText = document.createElement("p");
            questionText.classList.add("question-text");
            questionText.innerText = `Soal ${index + 1}: ${soal.pertanyaan}`;
            questionDiv.appendChild(questionText);

            soal.opsi.forEach((opsi, opsiIndex) => {
                const label = document.createElement("label");
                label.classList.add("option-label");

                const radio = document.createElement("input");
                radio.type = "radio";
                radio.name = `soal${index + 1}`;
                radio.value = String.fromCharCode(65 + opsiIndex);

                label.appendChild(radio);
                label.appendChild(document.createTextNode(` ${opsi}`));
                questionDiv.appendChild(label);
            });

            questionsContainer.appendChild(questionDiv);
        });

        document.getElementById("quizForm").addEventListener("submit", function (event) {
            event.preventDefault();
            let score = 0;

            soalRekayasaWebBab1.forEach((soal, index) => {
                const selectedOption = document.querySelector(`input[name="soal${index + 1}"]:checked`);
                if (selectedOption && selectedOption.value === soal.jawaban) {
                    score += 10; // Tambah 10 poin untuk setiap jawaban yang benar
                }
            });

            // Kirim skor ke halaman hasil
            fetch("<?= base_url('Kuis/hasil') ?>", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ skor: score })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    window.location.href = "<?= base_url('Kuis/hasil') ?>";
                }
            })
            .catch(error => console.error("Error:", error));
        });
    });
</script>

<style>
    .kuis-wrapper {
        max-width: 800px;
        margin: auto;
        padding: 20px;
        background-color: #f9f9f9;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .kuis-wrapper h2 {
        text-align: center;
        color: #333;
        margin-bottom: 20px;
    }

    #questionsContainer .question {
        margin-bottom: 20px;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 8px;
        background-color: #fff;
    }

    .question-text {
        font-size: 18px;
        font-weight: 500;
        color: #333;
        margin-bottom: 10px;
    }

    .option-label {
        display: block;
        font-size: 16px;
        color: #555;
        padding: 8px 0;
        cursor: pointer;
    }

    .option-label input[type="radio"] {
        margin-right: 8px;
    }

    .submit-btn {
        display: block;
        width: 100%;
        padding: 12px;
        font-size: 16px;
        font-weight: bold;
        background-color: #384b70;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s;
        margin-top: 20px;
    }

    .submit-btn:hover {
        background-color: #2c3d5b;
    }

    .option-label {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #555;
    padding: 8px 0;
    cursor: pointer;
}

    .option-label input[type="radio"] {
    margin-right: 10px; /* Memberikan jarak antara radio button dan teks opsi */
    flex-shrink: 0; /* Memastikan radio button tidak menyusut */
}

</style>
<?= $this->endSection() ?>
