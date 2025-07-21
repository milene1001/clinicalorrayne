<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clínica Lorrayne Tavares - Fisioterapia Dermato Funcional</title>
    <meta name="description" content="Tratamentos personalizados de fisioterapia dermato funcional. Cuidar da sua pele é cuidar de si mesmo.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    @if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot')))
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    @endif
</head>
<body>
    <!-- Header -->
    <x-header />

    <main class="main">
        <!-- Hero Section -->
        <x-hero />

        <!-- Consultation Section -->
        <x-consultation />

        <!-- Combos Section -->
        <x-combos />

        <!-- Gift a Session Section -->
        <x-gift-session />

        <!-- Procedure Cards Section -->
        <x-procedure-cards />

        <!-- FAQ Section -->
        <x-faq />

        <!-- Payment Methods Section -->
        <x-payment-methods />

        <!-- Map Section -->
        <x-map />

        <!-- About Us Section -->
        <x-about />

    </main>

    <!-- Procedure Modal -->
    <div class="modal" id="procedureModal">
        <div class="modal__overlay" onclick="closeProcedureModal()"></div>
        <div class="modal__content">
            <button class="modal__close" onclick="closeProcedureModal()">
                <i class="fas fa-times"></i>
            </button>
            <div class="modal__body">
                <div class="modal__image">
                    <i class="fas fa-spa" id="modalIcon"></i>
                </div>
                <div class="modal__info">
                    <h2 id="modalTitle"></h2>
                    <div class="modal__description" id="modalDescription">
                        <p></p>
                    </div>
                    <ul class="consultation__list" id="modalOptions"></ul>
                    <div class="modal__details">
                        <div class="modal__detail">
                            <h4><i class="fas fa-tag"></i> Valores</h4>
                            <p id="modalPrice1">1 sessão: R$ 150</p>
                            <p id="modalPrice2">3 sessões: R$ 400</p>
                        </div>
                    </div>
                    <div class="modal__actions">
                        <a href="https://wa.me/5581995095151" class="btn btn--primary" target="_blank">
                            <i class="fab fa-whatsapp"></i>
                            Agendar Tratamento
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <x-footer />

    @vite(['resources/js/script.js'])
</body>
</html> 