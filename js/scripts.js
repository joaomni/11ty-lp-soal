$(document).ready(function () {
	$('.meuBotao').click(function (event) {
		// Previne que o clique no botão feche o submenu
		event.stopPropagation()

		// Obtém o ID do submenu correspondente
		const targetId = $(this).data('target')

		// Fecha todos os submenus antes de abrir o clicado
		$('.meuBotao div')
			.not(`#${targetId}`)
			.addClass('hidden')
			.removeClass('flex')
		$('.meuBotao').not(this).removeClass('bg-[#CCCDC8]').addClass('bg-none')

		// Alterna a visibilidade do submenu correspondente
		$(`#${targetId}`).toggleClass('hidden flex')
		$(this).toggleClass('bg-[#CCCDC8] bg-none')
	})

	// Fecha todos os submenus e reseta estilos ao clicar fora
	$(document).click(function () {
		$('.meuBotao div').addClass('hidden').removeClass('flex')
		$('.meuBotao').removeClass('bg-[#CCCDC8]').addClass('bg-none')
	})
})

$(document).ready(function () {
	$('.meuBotao2').click(function (event) {
		// Previne que o clique no botão feche o submenu
		event.stopPropagation()

		// Obtém o ID do submenu correspondente
		const targetId = $(this).data('target')

		// Fecha todos os submenus antes de abrir o clicado
		$('.meuBotao2 div')
			.not(`#${targetId}`)
			.addClass('hidden')
			.removeClass('flex')
		$('.meuBotao2').not(this).removeClass('bg-[#CCCDC8]').addClass('bg-none')

		// Alterna a visibilidade do submenu correspondente
		$(`#${targetId}`).toggleClass('hidden flex')
		$(this).toggleClass('bg-[#CCCDC8] text-white bg-none')
	})

	// Fecha todos os submenus e reseta estilos ao clicar fora
	$(document).click(function () {
		$('.meuBotao2 div').addClass('hidden').removeClass('flex')
		$('.meuBotao2')
			.removeClass('bg-[#CCCDC8] text-white')
			.addClass('bg-none text-[#784100]')
	})
})

$(document).ready(function () {
	$('.meuBotao3').click(function (event) {
		// Previne que o clique no botão feche o submenu
		event.stopPropagation()

		// Obtém o ID do submenu correspondente
		const targetId = $(this).data('target')

		// Fecha todos os submenus antes de abrir o clicado
		$('.meuBotao3 div')
			.not(`#${targetId}`)
			.addClass('hidden')
			.removeClass('flex')

		// Alterna a visibilidade do submenu correspondente
		$(`#${targetId}`).toggleClass('hidden flex')
	})

	// Fecha todos os submenus e reseta estilos ao clicar fora
	$(document).click(function () {
		$('.meuBotao3 div').addClass('hidden').removeClass('flex')
	})
})

$(document).ready(function () {
	$('.meuBotao4').click(function (event) {
		// Previne que o clique no botão feche o submenu
		event.stopPropagation()

		// Obtém o ID do submenu correspondente
		const targetId = $(this).data('target')

		// Fecha todos os submenus antes de abrir o clicado
		$('.meuBotao4 div')
			.not(`#${targetId}`)
			.addClass('hidden')
			.removeClass('flex')

		// Alterna a visibilidade do submenu correspondente
		$(`#${targetId}`).toggleClass('hidden flex')
	})

	// Fecha todos os submenus e reseta estilos ao clicar fora
	$(document).click(function () {
		$('.meuBotao4 div').addClass('hidden').removeClass('flex')
	})
})

//NOTIFICACAO DO SLIDE
function checkOrientation() {
	const slideContainers = document.querySelectorAll('.meuSlide')
	if (slideContainers.length === 0) return

	if (window.matchMedia('(orientation: portrait)').matches) {
		slideContainers.forEach((slideContainer, index) => {
			const messageId = `rotate-message-${index}`
			let messageBox = slideContainer.querySelector(`#${messageId}`)

			if (!messageBox) {
				messageBox = document.createElement('div')
				messageBox.id = messageId
				messageBox.innerHTML = `
					<svg style="transform: scaleX(-1) rotate(46deg);" xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 0 512 512" width="80" fill="white">
						<g id="Solid">
							<path d="m464.022 232h-.022a24 24 0 0 0 -23.98 24.021 184.063 184.063 0 0 1 -289.527 150.688c-83.1-58.188-103.369-173.136-45.181-256.237s173.137-103.372 256.237-45.182a184.078 184.078 0 0 1 34.012 30.71h-67.54a24 24 0 0 0 0 48h112a24 24 0 0 0 24-24v-112a24 24 0 0 0 -48 0v39.967a234.175 234.175 0 0 0 -26.94-22 231.982 231.982 0 1 0 -266.119 380.061 230.285 230.285 0 0 0 132.567 42.015 234.971 234.971 0 0 0 40.776-3.585 232.025 232.025 0 0 0 191.716-228.479 24 24 0 0 0 -23.999-23.979z"/>
						</g>
					</svg>
					<p id="rotate-text-${index}">VIRE O CELULAR NA HORIZONTAL<br/>PARA VER AS FOTOS</p>
				`

				Object.assign(messageBox.style, {
					width: '100%',
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					color: 'white',
					fontSize: '12px',
					textAlign: 'center',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '10px',
					zIndex: '9999'
				})

				const textElement = messageBox.querySelector(`#rotate-text-${index}`)
				textElement.style.textShadow = '2px 2px 5px rgba(0, 0, 0, 0.7)'

				slideContainer.style.position = 'relative'
				slideContainer.appendChild(messageBox)
			}
		})
	} else {
		// Remove todas as mensagens se o dispositivo estiver na horizontal
		document
			.querySelectorAll('[id^=rotate-message-]')
			.forEach((el) => el.remove())
	}
}
// Checa a orientação quando a página carrega
window.addEventListener('load', checkOrientation)
// Checa a orientação quando o usuário gira o dispositivo
window.addEventListener('resize', checkOrientation)

document.addEventListener('DOMContentLoaded', () => {
	const section = document.querySelector('section#home')
	if (!section) return;

	const images = ['/images/home1.png', '/images/home2.png', '/images/home3.png']
	let index = 0

	// Função para pré-carregar as imagens
	const preloadImages = (imageUrls) => {
		imageUrls.forEach((url) => {
			const img = new Image()
			img.src = url
		})
	}

	// Pré-carregar as imagens
	preloadImages(images)

	// Define a transição suave para a troca de fundo
	section.style.transition = 'background-image 1s ease-in-out'

	// Define a imagem de fundo inicial (sem transição)
	section.style.backgroundImage = `url(${images[index]})`

	// Troca a imagem de fundo a cada 3 segundos
	setInterval(() => {
		index = (index + 1) % images.length // Alterna entre 0, 1 e 2

		// Aplica a nova imagem com transição suave
		section.style.backgroundImage = `url(${images[index]})`
	}, 3000)
})

document.addEventListener('DOMContentLoaded', function () {
	window.addEventListener('scroll', function () {
		const menu = document.getElementById('menu')
		if (!menu) return;

		if (window.scrollY > 50) {
			menu.classList.add('scrolled')
		} else {
			menu.classList.remove('scrolled')
		}
	})
})


