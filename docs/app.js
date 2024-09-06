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
    atualizar_percentuais();
}

function decrementar() {
    let total = document.getElementById('total');
    total.textContent = parseInt(total.textContent) - 1;
    atualizar_percentuais();
}
function incrementar2() {
    let dermatite = document.getElementById('dermatite');
    dermatite.textContent = parseInt(dermatite.textContent) + 1;
    total.textContent = parseInt(total.textContent) + 1;
    atualizar_percentuais();
}

function decrementar2() {
    let dermatite = document.getElementById('dermatite');
    dermatite.textContent = parseInt(dermatite.textContent) - 1;
    total.textContent = parseInt(total.textContent) - 1;
    atualizar_percentuais();
}
function incrementar3() {
    let dermatose = document.getElementById('dermatose');
    dermatose.textContent = parseInt(dermatose.textContent) + 1;
    total.textContent = parseInt(total.textContent) + 1;
    atualizar_percentuais();
}

function decrementar3() {
    let dermatose = document.getElementById('dermatose');
    dermatose.textContent = parseInt(dermatose.textContent) - 1;
    total.textContent = parseInt(total.textContent) - 1;
    atualizar_percentuais();
}
function incrementar4() {
    let artrite = document.getElementById('artrite');
    artrite.textContent = parseInt(artrite.textContent) + 1;
    atualizar_percentuais();
}

function decrementar4() {
    let artrite = document.getElementById('artrite');
    artrite.textContent = parseInt(artrite.textContent) - 1;
    atualizar_percentuais();
}
function incrementar5() {
    let calo_de_pata = document.getElementById('calo_de_pata');
    calo_de_pata.textContent = parseInt(calo_de_pata.textContent) + 1;
    atualizar_percentuais();
}

function decrementar5() {
    let calo_de_pata = document.getElementById('calo_de_pata');
    calo_de_pata.textContent = parseInt(calo_de_pata.textContent) - 1;
    atualizar_percentuais();
}

function zerar() {
    dermatite.textContent = 0;
    dermatose.textContent = 0;
    artrite.textContent = 0;
    calo_de_pata.textContent = 0;
    atualizar_percentuais();
    total.textContent = 0;
}