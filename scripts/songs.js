const mainPlayer = document.querySelector('.main-player')
const mainFile = mainPlayer.querySelector('audio')
const mainPlayer_pp_btn = mainPlayer.querySelector('.control')


mainPlayer_pp_btn.addEventListener('click', e => {
    if (e.target.innerHTML === '▶'){
        e.target.innerHTML = '&#x23f8;'
        e.target.style.fontSize = '2rem'
        mainFile.play()
    }else{
        e.target.style.fontSize = '2.4rem'
        e.target.innerHTML = '&#9654;'
        mainFile.pause()
    }
})

