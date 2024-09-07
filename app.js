window.onload = function() {
    const storedTotal = localStorage.getItem("total");
    if (storedTotal) {
      document.getElementById("total").textContent = storedTotal;
    }
    const storedDermatite = localStorage.getItem("dermatite");
    if (storedDermatite) {
      document.getElementById("dermatite").textContent = storedDermatite;
    }
    const storeDermatose = localStorage.getItem("dermatose");
    if (storeDermatose) {
      document.getElementById("dermatose").textContent = storeDermatose;
    }
    const storedArtrite = localStorage.getItem("artrite");
    if (storedArtrite) {
      document.getElementById("artrite").textContent = storedArtrite;
    }
    const storedCalo = localStorage.getItem("calo_de_pata");
    if (storedCalo) {
      document.getElementById("calo_de_pata").textContent = storedCalo;
    }
    atualizar_percentuais();
}

function atualizar_percentuais() {
    var total = parseInt(document.getElementById("total").textContent);
    var dermatite = parseInt(document.getElementById("dermatite").textContent);
    var dermatose = parseInt(document.getElementById("dermatose").textContent);
    var artrite = parseInt(document.getElementById("artrite").textContent);
    var calo_de_pata = parseInt(document.getElementById("calo_de_pata").textContent);

    var percentual_dermatite = (dermatite / total) * 100;
    var percentual_dermatose = (dermatose / total) * 100;
    var percentual_artrite = (artrite / total) * 100;
    var percentual_calo_de_pata = (calo_de_pata / total) * 100;
    
    document.getElementById("percentual_dermatite").textContent = percentual_dermatite.toFixed(2) + "%";
    document.getElementById("percentual_dermatose").textContent = percentual_dermatose.toFixed(2) + "%";
    document.getElementById("percentual_artrite").textContent = percentual_artrite.toFixed(2) + "%";
    document.getElementById("percentual_calo_de_pata").textContent = percentual_calo_de_pata.toFixed(2) + "%";
}

function incrementar() {
    let total = document.getElementById('total');
    total.textContent = parseInt(total.textContent) + 1;
    localStorage.setItem("total", total.textContent);
    atualizar_percentuais();
}

function decrementar() {
    let total = document.getElementById('total');
    total.textContent = parseInt(total.textContent) - 1;
    localStorage.setItem("total", total.textContent);
    atualizar_percentuais();
}
function incrementar2() {
    let dermatite = document.getElementById('dermatite');
    dermatite.textContent = parseInt(dermatite.textContent) + 1;
    total.textContent = parseInt(total.textContent) + 1;
    localStorage.setItem("dermatite", dermatite.textContent);
    localStorage.setItem("total", total.textContent);
    atualizar_percentuais();
}

function decrementar2() {
    let dermatite = document.getElementById('dermatite');
    dermatite.textContent = parseInt(dermatite.textContent) - 1;
    total.textContent = parseInt(total.textContent) - 1;
    localStorage.setItem("dermatite", dermatite.textContent);
    localStorage.setItem("total", total.textContent);
    atualizar_percentuais();
}
function incrementar3() {
    let dermatose = document.getElementById('dermatose');
    dermatose.textContent = parseInt(dermatose.textContent) + 1;
    total.textContent = parseInt(total.textContent) + 1;
    localStorage.setItem("dermatose", dermatose.textContent);
    localStorage.setItem("total", total.textContent);
    atualizar_percentuais();
}

function decrementar3() {
    let dermatose = document.getElementById('dermatose');
    dermatose.textContent = parseInt(dermatose.textContent) - 1;
    total.textContent = parseInt(total.textContent) - 1;
    localStorage.setItem("dermatose", dermatose.textContent);
    localStorage.setItem("total", total.textContent);
    atualizar_percentuais();
}
function incrementar4() {
    let artrite = document.getElementById('artrite');
    artrite.textContent = parseInt(artrite.textContent) + 1;
    localStorage.setItem("artrite", artrite.textContent);
    atualizar_percentuais();
}

function decrementar4() {
    let artrite = document.getElementById('artrite');
    artrite.textContent = parseInt(artrite.textContent) - 1;
    localStorage.setItem("artrite", artrite.textContent);
    atualizar_percentuais();
}
function incrementar5() {
    let calo_de_pata = document.getElementById('calo_de_pata');
    calo_de_pata.textContent = parseInt(calo_de_pata.textContent) + 1;
    localStorage.setItem("calo_de_pata", calo_de_pata.textContent);
    atualizar_percentuais();
}

function decrementar5() {
    let calo_de_pata = document.getElementById('calo_de_pata');
    calo_de_pata.textContent = parseInt(calo_de_pata.textContent) - 1;
    localStorage.setItem("calo_de_pata", calo_de_pata.textContent);
    atualizar_percentuais();
}

function zerar() {
    dermatite.textContent = 0;
    dermatose.textContent = 0;
    artrite.textContent = 0;
    calo_de_pata.textContent = 0;
    atualizar_percentuais();
    total.textContent = 0;
    localStorage.setItem("total", 0);
    localStorage.setItem("dermatite", 0);
    localStorage.setItem("dermatose", 0);
    localStorage.setItem("artrite", 0);
    localStorage.setItem("calo_de_pata", 0);
}
function abrirWhatsApp() {
    const phone = 5554999669270;
    const message = "Total avaliado: " + total.textContent + "\n Dermatite: " + dermatite.textContent + " - " + percentual_dermatite.textContent + "\n Dermatose: " + dermatose.textContent + " - " + percentual_dermatose.textContent + "\n Artrite: " + artrite.textContent + " - " + percentual_artrite.textContent + "\n " + "\n " + "Calo de pata: " + calo_de_pata.textContent + " - " + percentual_calo_de_pata.textContent;
    const link = `https://wa.me/${phone}?text=${message}`;
    window.open(link, '_blank');
  }
