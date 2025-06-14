 let barra = document.getElementById('barra')
 
 
        function mostraMenu() {
            if (barra.style.display == 'none') {
                barra.style.display = 'block'
            } else {
                barra.style.display = 'none'
            }
        }

        function mudouTamanho() {
            if (window.innerWidth >= 768) {
                barra.style.display = 'block' 
            } else {
                barra.style.display = 'none' 
            }
        }

        function ocultar() {
            if (barra.style.display == 'block') {
                barra.style.display = 'none'
            } 
        }
           
     