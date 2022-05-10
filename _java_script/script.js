function carregar() {
	//alert('ok')
	var msg = window.document.getElementById('msg')
	var img = window.document.getElementById('imagem')
	var data = new Date()
	var hora = data.getHours()
	//var hora = 8
	var minutos = data.getMinutes()
	//var minutos = 40

	msg.innerHTML = `Agora são ${hora} horas ${minutos} minutos. <br>`

	if (hora >= 6 && hora < 12) {
		msg.innerHTML += "Bom dia!"
		img.src = '_img/manha.jpg'
		document.body.style.background = '#FFF8DC'
	}
	else if (hora >= 12 && hora < 18) {
		msg.innerHTML += "Boa tarde!"
		img.src = '_img/tarde.jpg'
		document.body.style.background = '#FFFFE0'
	}
	else if (hora >= 18) {
		msg.innerHTML += "Boa noite!"
		img.src = '_img/noite.jpg'	
		document.body.style.background = '#F0F8FF'
	}
	else {
		msg.innerHTML += "Boa madrugada!"
		img.src = '_img/madruga.jpg'
		document.body.style.background = '#D3D3D3'
	}

	
}