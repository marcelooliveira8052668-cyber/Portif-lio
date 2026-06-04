/* ==========================================
   MENU MOBILE
========================================== */

const btnMobile =
document.getElementById("btn-mobile");

const menu =
document.getElementById("menu");

btnMobile.addEventListener("click", () => {

    menu.classList.toggle("active");

});


/* ==========================================
   FECHAR MENU AO CLICAR
========================================== */

const linksMenu =
document.querySelectorAll("#menu a");

linksMenu.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});


/* ==========================================
   SCROLL SUAVE
========================================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const alvo =
        document.querySelector(
            this.getAttribute("href")
        );

        if(alvo){

            alvo.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* ==========================================
   ANIMAÇÕES AO ROLAR
========================================== */

const observer =
new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add(
                "show"
            );

        }

    });

},
{
    threshold:0.15
}

);

const elementos =
document.querySelectorAll(

".tech-card, .projeto, .sobre-content, .social-links"

);

elementos.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


/* ==========================================
   BOTÃO VOLTAR AO TOPO
========================================== */

const btnTopo =
document.createElement("button");

btnTopo.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

btnTopo.id =
"btn-topo";

document.body.appendChild(btnTopo);

btnTopo.style.position = "fixed";
btnTopo.style.right = "25px";
btnTopo.style.bottom = "25px";

btnTopo.style.width = "55px";
btnTopo.style.height = "55px";

btnTopo.style.border = "none";
btnTopo.style.borderRadius = "50%";

btnTopo.style.cursor = "pointer";

btnTopo.style.display = "none";

btnTopo.style.zIndex = "999";

btnTopo.style.background = "#2563eb";
btnTopo.style.color = "#fff";

btnTopo.style.fontSize = "18px";

btnTopo.style.boxShadow =
"0 8px 20px rgba(0,0,0,.2)";


window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        btnTopo.style.display =
        "block";

    }else{

        btnTopo.style.display =
        "none";

    }

});


btnTopo.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ==========================================
   MENU ATIVO
========================================== */

const sections =
document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 120;

        const sectionHeight =
        section.clientHeight;

        if(

            pageYOffset >= sectionTop

            &&

            pageYOffset <

            sectionTop + sectionHeight

        ){

            current =
            section.getAttribute("id");

        }

    });

    linksMenu.forEach(link => {

        link.classList.remove("ativo");

        if(

            link.getAttribute("href")

            ===

            `#${current}`

        ){

            link.classList.add("ativo");

        }

    });

});


/* ==========================================
   EFEITO DIGITAÇÃO
========================================== */

const titulo =
document.querySelector(".hero h1");

const textoOriginal =
titulo.innerHTML;

titulo.innerHTML = "";

let i = 0;

function escrever(){

    if(i < textoOriginal.length){

        titulo.innerHTML +=
        textoOriginal.charAt(i);

        i++;

        setTimeout(
            escrever,
            40
        );

    }

}

window.addEventListener("load", escrever);


/* ==========================================
   CONTADOR DE PROJETOS
========================================== */

const cardsProjetos =
document.querySelectorAll(".projeto");

console.log(

`Portfólio carregado com ${cardsProjetos.length} projetos.`

);


/* ==========================================
   MENSAGEM DE BOAS-VINDAS
========================================== */

setTimeout(() => {

    console.log(

        "Bem-vindo ao Portfólio de Marcelo Oliveira!"

    );

}, 1000);