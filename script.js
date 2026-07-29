/*==========================================
        MENU HAMBURGER
==========================================*/

menuIcon.addEventListener("click", () => {

    navbar.classList.toggle("active");

    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-xmark");

    document.querySelector(".home").classList.toggle("menu-open");

});

/*==========================================
        HEADER SHADOW
==========================================*/

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 10px 30px rgba(232,160,191,.25)";

    } else {

        header.style.boxShadow =
            "0 5px 15px rgba(232,160,191,.10)";

    }

});

/*==========================================
        BACK TO TOP
==========================================*/

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

/*==========================================
        FADE ANIMATION
==========================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(
    ".about-content,.education-card,.experience-card,.project-card,.certificate-card,form"
).forEach((el) => observer.observe(el));

/*==========================================
        TYPING EFFECT
==========================================*/

const text = [
    "Fresh Graduate Sistem Informasi",
    "Web Developer",
    "UI/UX Designer",
    "Database Enthusiast"
];

const typingElement = document.querySelector(".home-content h2");

if (typingElement) {

    let count = 0;
    let index = 0;

    function typing() {

        if (count >= text.length) count = 0;

        const currentText = text[count];
        const letter = currentText.slice(0, ++index);

        typingElement.innerHTML = letter;

        if (letter.length === currentText.length) {

            count++;
            index = 0;

            setTimeout(typing, 1500);

        } else {

            setTimeout(typing, 80);

        }

    }

    typing();

}

/*==========================================
        SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/*==========================================
        PAGE TRANSITION
==========================================*/

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        if (href && !href.startsWith("#")) {

            e.preventDefault();

            document.body.classList.add("fade-out");

            setTimeout(() => {

                window.location.href = href;

            }, 500);

        }

    });

});








const translate = {

    en:{

        title:"About <span>Me</span>",
          web:"Web Development",

        processing:"Data Processing",

        ui:"UI Design",

        database:"Database",

        digital:"Digital Administration",

        paragraph:`I am a Fresh Graduate in Information Systems from Putra Indonesia University "YPTK" Padang, graduating with a GPA of 3.61 (Cum Laude) in 3.5 years. I have a strong interest in Information Technology, particularly UI Design, Database Management, and Web Development, as well as data processing and digital administration.

During my academic journey, I developed web-based information systems, designed user interfaces, and managed databases through various academic projects. During my internship at BP3MI West Sumatra, I gained practical experience in data processing, data entry, document administration, e-office operations, report preparation, and public services.

I am proficient in Microsoft Office, especially Microsoft Excel, for data processing, validation, and reporting. I am an analytical, detail-oriented, adaptable, and fast-learning individual who enjoys learning new technologies and collaborating with teams to create effective digital solutions.`

    },

    id:{

        title:"Tentang <span>Saya</span>",
         web:"Pengembangan Web",

        processing:"Pengolahan Data",

        ui:"Desain Antarmuka",

        database:"Basis Data",

        digital:"Administrasi Digital",

        paragraph:`Saya merupakan Fresh Graduate S1 Sistem Informasi Universitas Putra Indonesia "YPTK" Padang dengan IPK 3,61 (Cum Laude) dan masa studi 3,5 tahun. Saya memiliki minat di bidang Teknologi Informasi, khususnya UI Design, Basis Data, dan Pengembangan Web, serta pengolahan data dan administrasi digital.

Selama perkuliahan, saya mengembangkan sistem informasi berbasis web, merancang antarmuka pengguna (UI), dan mengelola basis data melalui berbagai proyek akademik. Saat menjalani magang di BP3MI Sumatera Barat, saya memperoleh pengalaman dalam pengolahan data, data entry, administrasi dokumen, pengoperasian e-office, penyusunan laporan, serta pelayanan masyarakat.

Saya terampil menggunakan Microsoft Office, khususnya Microsoft Excel, untuk pengolahan, validasi, rekapitulasi, dan pelaporan data. Saya merupakan pribadi yang analitis, teliti, adaptif, cepat belajar, serta senang mempelajari teknologi baru dan bekerja sama dalam tim untuk memberikan solusi digital yang efektif.`

    }

}

function changeLanguage(lang){

    document.getElementById("about-title").innerHTML=translate[lang].title;

document.getElementById("web").innerHTML=translate[lang].web;

    document.getElementById("processing").innerHTML=translate[lang].processing;

    document.getElementById("ui").innerHTML=translate[lang].ui;

    document.getElementById("database").innerHTML=translate[lang].database;

    document.getElementById("digital").innerHTML=translate[lang].digital;

    document.getElementById("about-text").innerHTML=translate[lang].paragraph;

    document.getElementById("btn-en").classList.remove("active");
    document.getElementById("btn-id").classList.remove("active");

    document.getElementById("btn-"+lang).classList.add("active");

}

const toggleBtn = document.getElementById("toggleCertificates");
const hiddenCertificates = document.querySelectorAll(".moreCertificates");

if (toggleBtn) {

    let showAll = false;

    toggleBtn.addEventListener("click", () => {

        showAll = !showAll;

        hiddenCertificates.forEach(card => {
            card.style.display = showAll ? "block" : "none";
        });

        toggleBtn.innerHTML = showAll
            ? 'Show Less <i class="fa-solid fa-chevron-up"></i>'
            : 'View All Certificates <i class="fa-solid fa-chevron-down"></i>';

    });

}
   