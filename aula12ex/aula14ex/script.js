function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#dfc731'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#ae784c'
    } else {
        // BOA NOITE!
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#7e5f98'
    }
}




