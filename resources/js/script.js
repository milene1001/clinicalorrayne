// ===== MOBILE MENU =====
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Hide menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Remove menu mobile when clicking on nav links
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLinks.forEach(n => n.addEventListener('click', linkAction));

// Close menu when clicking outside (mobile)
document.addEventListener('click', (e) => {
    if (!navMenu) return;
    if (!navMenu.classList.contains('show-menu')) return;
    const clickedInsideMenu = navMenu.contains(e.target);
    const clickedToggle = navToggle && navToggle.contains(e.target);
    const clickedClose = navClose && navClose.contains(e.target);
    if (!clickedInsideMenu && !clickedToggle && !clickedClose) {
        navMenu.classList.remove('show-menu');
    }
});

// Close menu with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('show-menu')) {
        navMenu.classList.remove('show-menu');
    }
});

// ===== FAQ ACCORDION =====
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq__question');
    
    // Check if event listener already exists
    if (question.dataset.faqListener === 'true') {
        return;
    }
    
    // Mark this element as having a listener
    question.dataset.faqListener = 'true';
    
    question.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isActive = item.classList.contains('active');
        
        if (!isActive) {
            // Close all FAQ items first
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // Small delay to ensure smooth transition
            setTimeout(() => {
                item.classList.add('active');
            }, 50);
        } else {
            // If already active, just close it
            item.classList.remove('active');
        }
    });
});

// ===== SCROLL HEADER =====
function scrollHeader() {
    const header = document.getElementById('header');
    
    if (window.scrollY >= 80) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

// ===== SMOOTH SCROLLING FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});



// ===== SCROLL REVEAL ANIMATION =====
function revealOnScroll() {
    const reveals = document.querySelectorAll('.section');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('fade-in-up');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// ===== ACTIVE NAVIGATION LINK =====
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ===== WHATSAPP BUTTON HIGHLIGHT =====
const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');

whatsappButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

// ===== SERVICE ITEMS HOVER EFFECT =====
const serviceItems = document.querySelectorAll('.service-item');

serviceItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateX(10px)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(0)';
    });
});

// ===== PAYMENT METHOD CARDS INTERACTIVITY =====
const paymentMethods = document.querySelectorAll('.payment-method');

paymentMethods.forEach(method => {
    method.addEventListener('click', () => {
        // Add click effect
        method.style.transform = 'scale(0.95) translateY(-5px)';
        setTimeout(() => {
            method.style.transform = 'translateY(-5px)';
        }, 150);
    });
});

// ===== LOADING ANIMATION =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Add fade-in animation to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '0';
        hero.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            hero.style.transition = 'all 0.8s ease';
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }, 100);
    }
});

// ===== FORM VALIDATION (if forms are added later) =====
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// ===== UTILITY FUNCTIONS =====
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Optimize scroll events with debounce
const optimizedScrollHandler = debounce(() => {
    scrollHeader();
    updateActiveNavLink();
    revealOnScroll();
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// ===== ACCESSIBILITY IMPROVEMENTS =====
// Add keyboard navigation for FAQ
faqItems.forEach(item => {
    const question = item.querySelector('.faq__question');
    
    question.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            question.click();
        }
    });
    
    // Add tabindex for keyboard navigation
    question.setAttribute('tabindex', '0');
});

// Add focus styles for better accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// ===== PERFORMANCE OPTIMIZATIONS =====
// Lazy load images (if images are added later)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if images exist
if (document.querySelectorAll('img[data-src]').length > 0) {
    lazyLoadImages();
}

// ===== ANALYTICS TRACKING (if needed) =====
function trackEvent(eventName, eventData = {}) {
    // This can be connected to Google Analytics or other tracking services
    console.log('Event tracked:', eventName, eventData);
}

// Track important user interactions
document.addEventListener('DOMContentLoaded', () => {
    // Track WhatsApp button clicks
    whatsappButtons.forEach(button => {
        button.addEventListener('click', () => {
            trackEvent('whatsapp_click', {
                button_text: button.textContent.trim(),
                section: button.closest('section')?.id || 'unknown'
            });
        });
    });
});

// ===== PROCEDURE MODAL FUNCTIONALITY =====
const procedureData = {
    'skin-premium': {
        title: 'Skin Premium',
        description: 'A Skin Premium é a nossa limpeza de pele personalizada. Nela realizamos a utilização dos produtos e das etapas de forma personalizada, de acordo com as necessidades da sua pele. No procedimento está incluso a extração de cravos e milium. Conseguimos devolver saúde a sua pele de forma eficiente e sem agredir.',
        duration: '60-90 minutos',
        sessions: '6-8 sessões',
        price1: '1 sessão: R$ 150',
        price2: '3 sessões: R$ 400',
        icon: 'fas fa-face-smile'
    },
    'microagulhamento': {
        title: 'Microagulhamento',
        description: 'O Microagulhamento também é conhecido como Indução Percutânea de Colágeno (IPC). É uma técnica que tem por objetivo tratar cicatrizes de acne, manchas, linhas e rugas finasestria e flacidez por meio do estimulo de colágeno causado napele. Sendo associado a técnica de drug-delivry que facilita apermeação de ativos na pele, potencializando os resultados..',
        duration: '60-90 minutos',
        sessions: '6-8 sessões',
        price1: '1 sessão: R$ 200',
        price2: '3 sessões: R$ 540',
        icon: 'fas fa-face-smile'
    },
    'peeling': {
        title: 'Peeling Químico',
        description: 'O Peeling Químico é um procedimento feito por meio da aplicação de agentes químicos, como ácidos, que promovem uma remoção da camada mais superficial da pele, estimulando a renovação celular melhorando a aparência estética dessa pele. Com o objetivo de tratar manchas, linhas e rugas finas, promover uniformização da textura e do tom da pele.',
        duration: '45-60 minutos',
        sessions: '4-6 sessões',
        price1: '1 sessão: R$ 200',
        price2: '3 sessões: R$ 540',
        icon: 'fas fa-sparkles'
    },
    'microneedling': {
        title: 'Tratamento Facial Personalizado',
        description: 'Sua Pele Cuidada é um protocolo de tratamento facial com 4 sessões, desenvolvido de forma personalizada as necessidades da sua pele. Tem como objetivo promover um protocolo de tratamento para peles acneicas, com cicatrizes, manchas, descamações, irritações e sensibilização. Podendo estar incluso diversos de nossos tratamentos, que serão escolhidos de acordo com o que sua pele precisa. Onde devolveremos saúde para suaple sem causar novas agressões..',
        duration: '60-75 minutos',
        sessions: '6-10 sessões',
        price1: '4 sessões: R$ 720',
        icon: 'fas fa-droplet'
    },
    'hidrolipoclasia': {
        title: 'Drenagem Linfática - Facial e Corporal',
        description: 'A Drenagem Linfática Manual, é uma técnica de massagem feita com pressões leves, movimentos lentos, intermitentes e relaxantes, seguindo o trajeto do sistema linfático. Tem como objetivo a redução do inchaço, melhorar a vascularização eoxigenação dos tecidos, reduz a aparência das celulites até grau2, melhora o funcionamento intestinal, reduz o cansaço edormência nas pernas, além de relaxar e auxiliar nossa imunidade.cnologia avançada para redução de gordura localizada através de ultrassom focalizado. Tratamento não invasivo e eficaz para modelagem corporal.',
        price1: '1 sessão: R$ 100',
        icon: 'fas fa-weight-scale'
    },
    'dermo-redux': {
        title: 'Massagem Relaxante',
        description: 'A Massagem Relaxante é realizada com movimentos suaves,firmes por meio de manobras de deslizamento, batimento,amassamento, fricções e desativação de pontos de gatilho por toda a área que você deseja realizar a sessão. Tem como objetivo promover relaxamento, redução de contraturas musculares, melhorar a oxigenação do tecido, alongamento muscular, redução de dores de cabeça, cãibras, dentre outros inúmeros benefícios. corporal completo para redução de medidas e modelagem. Combina diferentes técnicas para resultados visíveis e duradouros.',
        price1: '1 sessão: R$ 100',
        icon: 'fas fa-heart-pulse'
    },
    'day-spa': {
        title: 'Massagem Modeladora',
        description: 'A Massagem Modeladora é uma técnica que utiliza movimentos firmes, rápidos e com pressão continua. A depender da região que você deseja realizar a massagem, terá como objetivo modelar o corpo, destacar a silhueta, reduzir medidas, melhorar o aspecto das celulites, ativar o metabolismo, melhorar o aspecto da pele, melhora a oxigenação tecidual e a circulaçãosanguínea.Tratamento específico para celulite e flacidez, utilizando tecnologia de radiofrequência para tonificar e firmar a pele.',
        price1: '1 sessão: R$ 100',
        icon: 'fas fa-spa'
    },
    'ventosa': {
        title: 'Ventosaterapia',
        description: 'A Ventosaterapia é uma técnica natural, no qual é realizada com auxilio das ventosas que criam um efeito de vácuo (pressão negativa) sugando a pele e promovendo um aumento do diâmetro dos vasos sanguíneos locais. Tem como objetivo melhorar a circulação sanguínea, promove melhora da oxigenação tecidual, liberação miofascial, redução de contraturas musculares, reduz dores de cabeça, torcicolos, cólicas menstruais, dentre outros inúmeros benefícios..',
        price1: '1 sessão: R$ 100',
        icon: 'fas fa-spa'
    },
    
    'clube': {
        title: 'Clube de Massagem',
        description: 'Esse é um Combo de Sessões desenvolvido para você que deseja se manter assídua nas suas sessões e realiza-las de forma mensal. Tendo duas formas de você adquirir esse combo, o primeiro é de 4 sessões (realizada uma vez por semana de forma obrigatória) ou 8 sessões (realizada duas vezes por semana de forma obrigatória), com validade de 30 dias após a data de pagamento. Podendo escolher entre: Massagem Relaxante Drenagem Linfática Massagem modeladora.',
        price1: '4 sessões: R$ 360',
        price2: '8 sessões: R$ 720',
        icon: 'fas fa-spa'
    },
    'hidrolipo': {
        title: 'Hidrolipoclasia 360°',
        description: 'É um protocolo de tratamento desenvolvido para melhorar o aspecto estético do seu corpo como um todo. Contém 10 sessões personalizadas de acordo com as necessidades da região que você deseja tratar. Tem como objetivo promover a eliminação da gordura localizada e tratar disfunções associadas. Não contabilizamos o protocolo por área, com o intuito de proporcionar uma harmonização corporal. As áreas serão definidas mediante avaliação e levando em consideração a queixa principal da paciente.',
        price1: '1 sessão: R$ 180',
        price2: '10 sessões: R$ 1500',
        icon: 'fas fa-weight-scale'
    },
    
    'redux': {
        title: 'Dermo Redux',
        description: 'É um protocolo de tratamento para gordura localizada. Contém 10 sessões personalizadas de acordo com a necessidade da área que você deseja tratar. Nesse protocolo teremos associações de eletroterapias e técnicas manuais. Tem como objetivo promover a eliminação da gordura localizada e promover melhora do aspecto estético da região tratada. É um protocolo realizado por área, que será determinada mediante avaliação e queixa principal do paciente.',
        price1: '1 sessão: R$ 150',
        price2: '10 sessões: R$ 1200',
        icon: 'fas fa-weight-scale'
    },
    'cellut': {
        title: 'Dermo Cellut',
        description: 'É um protocolo de tratamento para redução da celulite e melhora das disfunções associadas. Contém 10 sessões personalizadas de acordo com a necessidade da área que você deseja tratar. Nesse protocolo teremos associações de eletroterapias e técnicas manuais. Tem como objetivo promover a eliminação da gordura localizada e promover melhora do aspecto estético da região tratada. É um protocolo realizado por área, que será determinada mediante avaliação e queixa principal do paciente.',
        price1: '1 sessão: R$ 150',
        price2: '10 sessões: R$ 1200',
        icon: 'fas fa-weight-scale'
    },
    'strit': {
        title: 'Dermo Strit',
        description: 'É um protocolo de tratamento para estrias albas (brancas) ou rubras (vermelhas) . Contém 4 sessões que podem ser realizadas por meio da técnica de microagulhamento associada ao drug-delivery ou com a técnica a vácuo. Tem como objetivo promover o tratamento de até 80% das estrias da região que você deseja tratar desde a primeira sessão. É um protocolo realizado por área,que será determinada mediante avaliação e queixa principal do paciente.',
        price1: '1 sessão: R$ 200',
        price2: '4 sessões: R$ 720',
        icon: 'fas fa-weight-scale'
       
    },
        'eletro': {
            title: 'Eletroterapia',
            description: 'São equipamentos que podem ser usados para associar a técnicas que proporcionamos aqui na clínica, a uma massagem por exemplo. Temos equipamentos que vão auxiliar na melhora do contorno corporal (endermo), melhorar o aspecto da pele e tônus muscular (corrente russa), auxiliar na eliminação da gordura localizada (ultrassom ou eletrolipólise). Cada equipamento é aplicado por área, você pode associar mais de um e será determinado mediante avaliação, necessidade da área que deseja tratar e queixa principal do paciente.',
            price1: 'Por área: R$ 100',
            icon: 'fas fa-weight-scale'

        },
        'posfacial': {
            title: 'Pós Operatorio Facial',
            description: 'É a realizado de forma personalizada a resposta individual de cicatrização de cada paciente. Contém técnicas que vão prevenir e/ou solucionar possíveis complicações após o procedimento cirúrgico de forma eficiente. Dentre elas estão inclusas:',
            options: [
                'Técnicas Mecanomoduladoras',
                'Tapping/Bandagem',
                'Cinesioterapia',
                'Drenagem Linfática (se necessário)'
            ],
            price1: '1 sessão: R$ 150',
            icon: 'fas fa-weight-scale'
        },
        'poscorporal': {
        title: 'Pós Operatorio Corporal',
        description: 'É a realizado de forma personalizada a resposta individual de cicatrização de cada paciente. Contém técnicas que vão prevenir e/ou solucionar possíveis complicações após o procedimento cirúrgico de forma eficiente. Dentre elas estão inclusas:',
        options: [
            'Técnicas Mecanomoduladoras',
            'Tapping/Bandagem',
            'Cinesioterapia',
            'Drenagem Linfática (se necessário)'
        ],
        price1: '1 sessão: R$ 180',
        icon: 'fas fa-weight-scale'
    }


    };
function openProcedureModal(procedureId) {
    const modal = document.getElementById('procedureModal');
    const data = procedureData[procedureId];
    
    if (data) {
        document.getElementById('modalTitle').textContent = data.title;
        document.getElementById('modalDescription').innerHTML = `<p>${data.description}</p>`;
        if (data.options && data.options.length > 0) {
            const modalOptions = document.getElementById('modalOptions');
            modalOptions.innerHTML = data.options.map(option => `<li><i class="fas fa-check"></i> ${option}</li>`).join('');
        } else {
            // Clear the modalOptions if no options are provided
            document.getElementById('modalOptions').innerHTML = '';
        }
        document.getElementById('modalPrice1').textContent = data.price1;
        document.getElementById('modalPrice2').textContent = data.price2;
        document.getElementById('modalIcon').className = data.icon;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeProcedureModal() {
    const modal = document.getElementById('procedureModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProcedureModal();
    }
});

// Track procedure card clicks
document.addEventListener('DOMContentLoaded', () => {
    const procedureCards = document.querySelectorAll('.procedure-card');
    
    procedureCards.forEach(card => {
        card.addEventListener('click', () => {
            const procedureId = card.dataset.procedure;
            trackEvent('procedure_card_click', {
                procedure: procedureId,
                title: card.querySelector('h3').textContent
            });
        });
    });
});

// ===== COMBO SLIDESHOW FUNCTIONALITY =====
let currentComboSlide = 0;
const comboSlides = document.querySelectorAll('.combo-slide');
const comboDots = document.querySelectorAll('.combo-dot');

function showComboSlide(index) {
    // Get current active slide
    const currentSlide = document.querySelector('.combo-slide.active');
    
    // Remove active class from all dots
    comboDots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Add fade-out effect to current slide
    if (currentSlide) {
        currentSlide.classList.add('fade-out');
        setTimeout(() => {
            currentSlide.classList.remove('active', 'fade-out');
        }, 400);
    }
    
    // Show new slide after a short delay
    setTimeout(() => {
        // Hide all slides
        comboSlides.forEach(slide => {
            slide.classList.remove('active', 'fade-out');
        });
        
        // Show current slide and activate corresponding dot
        if (comboSlides[index]) {
            comboSlides[index].classList.add('active');
        }
        if (comboDots[index]) {
            comboDots[index].classList.add('active');
        }
        
        currentComboSlide = index;
    }, 400);
}

function changeComboSlide(direction) {
    let newIndex = currentComboSlide + direction;
    
    // Loop back to first slide if at the end
    if (newIndex >= comboSlides.length) {
        newIndex = 0;
    }
    // Loop to last slide if at the beginning
    if (newIndex < 0) {
        newIndex = comboSlides.length - 1;
    }
    
    showComboSlide(newIndex);
}

function goToComboSlide(index) {
    if (index >= 0 && index < comboSlides.length) {
        showComboSlide(index);
    }
}

// Auto-advance slides every 8 seconds
let comboSlideInterval;

function startComboSlideInterval() {
    comboSlideInterval = setInterval(() => {
        changeComboSlide(1);
    }, 5000);
}

function stopComboSlideInterval() {
    clearInterval(comboSlideInterval);
}

// Initialize combo slideshow when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Start auto-advance
    startComboSlideInterval();
    
    // Pause auto-advance when user interacts with navigation
    const comboNavBtns = document.querySelectorAll('.combo-nav-btn');
    const comboDotsContainer = document.querySelector('.combo-dots');
    
    comboNavBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            stopComboSlideInterval();
            setTimeout(startComboSlideInterval, 15000); // Resume after 15 seconds
        });
    });
    
    comboDotsContainer.addEventListener('click', () => {
        stopComboSlideInterval();
        setTimeout(startComboSlideInterval, 15000); // Resume after 15 seconds
    });
});

console.log('Clínica Lorrayne Tavares - Website loaded successfully!');

// ===== GIFT SESSION FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', () => {
    const generateGiftCardBtn = document.getElementById('generateGiftCard');
    const editGiftCardBtn = document.getElementById('editGiftCard');
    const giftPreview = document.getElementById('giftPreview');
    const giftForm = document.querySelector('.gift-form');
    const selectedServicesContainer = document.getElementById('selectedServices');
    const messagePreviewContainer = document.getElementById('messagePreview');
    const giftMessageTextarea = document.getElementById('giftMessage');

    // Service descriptions mapping
    const serviceDescriptions = {
        // Special Combos
        'DAY REDUX': 'Drenagem linfática + Eletrolipólise + Corrente russa',
        'DAY STAR': 'Limpeza de pele + Peeling de diamante + Máscara personalizada',
        'DAY RADIANCE': 'Limpeza de pele + Microagulhamento + Retorno pós sessão',
        'DAY SPA': 'Limpeza de pele + Qualquer massagem + SPA dos pés',
        
        // Individual Services
        'Skin Premium': 'Tratamento de limpeza profunda que remove impurezas e revitaliza a pele',
        'Microagulhamento': 'Procedimento com microagulhas que estimula colágeno e trata marcas',
        'Peeling Químico': 'Procedimento com ácidos que renova a pele e trata manchas',
        'Tratamento Facial Personalizado': 'Protocolo facial personalizado para tratar acne e manchas',
        'Drenagem Linfática': 'Técnica manual que estimula o sistema linfático',
        'Massagem Relaxante': 'Técnica manual que alivia tensões musculares',
        'Massagem Modeladora': 'Técnica com manobras intensas que modela a silhueta',
        'Ventosaterapia': 'Técnica com pressão negativa que promove liberação muscular',
        'Clube de Massagem': 'Pacote mensal com 4 sessões de massagens à sua escolha',
        'Hidrolipoclasia 360°': 'Protocolo corporal com 10 sessões personalizadas',
        'Dermo Redux': 'Protocolo para gordura localizada com eletroterapias',
        'Dermo Cellut': 'Tratamento personalizado para redução da celulite',
        'Dermo Strit': 'Protocolo em 4 sessões para redução de estrias',
        'Eletroterapia': 'Equipamentos que auxiliam na redução de gordura e tônus',
        'Pós Operatório Facial': 'Atendimento personalizado para acelerar a cicatrização',
        'Pós Operatório Corporal': 'Recuperação pós-cirúrgica com técnicas personalizadas',
        'Consulta Avaliativa': 'Avaliação completa com scanner da pele e plano personalizado'
    };

    // Service prices mapping
    const servicePrices = {
        // Special Combos
        'DAY REDUX': 'R$ 250,00',
        'DAY STAR': 'R$ 250,00',
        'DAY RADIANCE': 'R$ 380,00',
        'DAY SPA': 'R$ 280,00',
        
        // Individual Services
        'Skin Premium': 'R$ 150,00',
        'Microagulhamento': 'R$ 200,00',
        'Peeling Químico': 'R$ 180,00',
        'Tratamento Facial Personalizado': 'R$ 160,00',
        'Drenagem Linfática': 'R$ 120,00',
        'Massagem Relaxante': 'R$ 100,00',
        'Massagem Modeladora': 'R$ 120,00',
        'Ventosaterapia': 'R$ 80,00',
        'Clube de Massagem': 'R$ 300,00',
        'Hidrolipoclasia 360°': 'R$ 1.200,00',
        'Dermo Redux': 'R$ 800,00',
        'Dermo Cellut': 'R$ 1.200,00',
        'Dermo Strit': 'R$ 720,00',
        'Eletroterapia': 'R$ 100,00',
        'Pós Operatório Facial': 'R$ 150,00',
        'Pós Operatório Corporal': 'R$ 180,00',
        'Consulta Avaliativa': 'R$ 100,00'
    };

    function generateGiftCard() {
        const selectedCheckboxes = document.querySelectorAll('.gift-checkbox:checked');
        const message = giftMessageTextarea.value.trim();

        if (selectedCheckboxes.length === 0) {
            alert('Por favor, selecione pelo menos um serviço.');
            return;
        }

        // Generate selected services HTML
        let servicesHTML = '<h4>Serviços Selecionados</h4>';
        let totalPrice = 0;

        selectedCheckboxes.forEach(checkbox => {
            const serviceName = checkbox.value;
            const servicePrice = servicePrices[serviceName];
            const serviceDesc = serviceDescriptions[serviceName];
            
            // Extract price value for total calculation
            const priceValue = parseFloat(servicePrice.replace('R$ ', '').replace(',', '.'));
            totalPrice += priceValue;

            servicesHTML += `
                <div class="gift-service-preview">
                    <h5>${serviceName} - ${servicePrice}</h5>
                    <p>${serviceDesc}</p>
                </div>
            `;
        });

        // Add total price
        servicesHTML += `
            <div class="gift-service-preview" style="background: var(--primary-color); color: white; margin-top: 1rem;">
                <h5 style="color: white;">Total: R$ ${totalPrice.toFixed(2).replace('.', ',')}</h5>
            </div>
        `;

        selectedServicesContainer.innerHTML = servicesHTML;

        // Generate message preview
        if (message) {
            messagePreviewContainer.innerHTML = `
                <h4>Mensagem Personalizada</h4>
                <p>"${message}"</p>
            `;
        } else {
            messagePreviewContainer.innerHTML = `
                <h4>Mensagem Personalizada</h4>
                <p><em>Nenhuma mensagem personalizada foi adicionada.</em></p>
            `;
        }

        // Show preview and hide form
        giftForm.style.display = 'none';
        giftPreview.style.display = 'block';

        // Add animation
        giftPreview.style.opacity = '0';
        giftPreview.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            giftPreview.style.transition = 'all 0.6s ease-out';
            giftPreview.style.opacity = '1';
            giftPreview.style.transform = 'translateY(0)';
        }, 100);
    }

    function editGiftCard() {
        // Hide preview and show form
        giftPreview.style.display = 'none';
        giftForm.style.display = 'block';

        // Add animation
        giftForm.style.opacity = '0';
        giftForm.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            giftForm.style.transition = 'all 0.6s ease-out';
            giftForm.style.opacity = '1';
            giftForm.style.transform = 'translateY(0)';
        }, 100);
    }

    // Event listeners
    if (generateGiftCardBtn) {
        generateGiftCardBtn.addEventListener('click', generateGiftCard);
    }

    if (editGiftCardBtn) {
        editGiftCardBtn.addEventListener('click', editGiftCard);
    }

    // Add hover effects to service items
    const giftServiceItems = document.querySelectorAll('.gift-service-item');
    giftServiceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add focus effects to textarea
    if (giftMessageTextarea) {
        giftMessageTextarea.addEventListener('focus', () => {
            giftMessageTextarea.parentElement.style.transform = 'scale(1.02)';
        });
        
        giftMessageTextarea.addEventListener('blur', () => {
            giftMessageTextarea.parentElement.style.transform = 'scale(1)';
        });
    }
}); 

window.openProcedureModal = openProcedureModal;
window.closeProcedureModal = closeProcedureModal; 