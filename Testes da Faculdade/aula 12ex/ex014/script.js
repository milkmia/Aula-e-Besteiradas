function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date()
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'ibagens/maleniaan195163.svg'
        document.body.style.background = '#371915'
    } else if (hora >= 12 && hora <18) {
        //BOA TARDE!
        img.src = 'ibagens/radahnan195163o.svg'
        document.body.style.background = '#83523C'
    } else {
        //BOA NOITE!
        img.src = 'ibagens/rannian195163.svg'
        document.body.style.background = '#393B3F'
    }
}

//ranni: #393B3F
//malenia: #371915
//radahn: #83523C