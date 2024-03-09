window.addEventListener("load", function () {
    nevkiir()
    kepSrcTombConz()
    stilus()
    nagykep()
    mozgatas()
});

function nevkiir(){
    const footerELEM = document.querySelector("footer p")
    footerELEM.innerHTML= `<p>Néda Írisz</p>`
    footerELEM.style.textAlign = "center";
    footerELEM.style.fontSize = "20px";
}

let srcTomb = [];
function kepSrcTombConz(){
    const imgELEM=document.querySelectorAll("img")
    for (let i = 0; i < imgELEM.length; i++) {
        imgELEM[i].addEventListener("click", function(event) {
            srcTomb.push(event.target.src);
            console.log(srcTomb);
        });
    }
}

function stilus(){
    const imgELEM=document.querySelectorAll("img")
    for (let i = 0; i < imgELEM.length; i++) {
        imgELEM[i].addEventListener("mouseover", function() {
            this.classList.add("kiemel");
        });
        imgELEM[i].addEventListener("mouseout", function() {
            this.classList.remove("kiemel");
        });
    }
}

function nagykep(){
    const nagyKEP=document.querySelector("#csonak")
    nagyKEP.innerHTML=`<img src="kepek/csonak.png" alt="csonak">`
}

function mozgatas(){
    const balKEPEK = document.querySelectorAll("#bal img");
    const csonak = document.querySelector("#csonak");

    for (let i = 0; i < balKEPEK.length; i++) {
        const balIMG = balKEPEK[i];
        balIMG.addEventListener("click", function(event) {
            const aktKEP = event.target.cloneNode();
            csonak.appendChild(aktKEP);
        });
    }
}

