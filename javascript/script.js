function mexer(){
        let nao = document.getElementById('Não')

        let larguraJanela = window.innerWidth
        let alturaJanela = window.innerHeight

        let maxX = larguraJanela - nao.offsetWidth
        let maxY = alturaJanela - nao.offsetHeight

        let randomX = Math.floor(Math.random() * maxX)
        let randomY = Math.floor(Math.random() * maxY)

        nao.style.left = randomX + "px"
        nao.style.top = randomY + "px"

    }


    //iuxy.og
