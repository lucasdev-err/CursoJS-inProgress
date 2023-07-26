function consultar(){
    var txtpais = document.querySelector('#pais')
    var pais = txtpais.value 
    var res = document.querySelector('#res')
    res.innerHTML = `<p>Você é do(e) <strong>${pais}</strong>.</p>`

    if (pais == 'Brasil'){
        res.innerHTML += '<p>Você é <strong>Brasileiro!!!</strong></p>'
    } else{
        res.innerHTML += '<p>Você é <strong>GRINGO!</strong></p>'
    }
}