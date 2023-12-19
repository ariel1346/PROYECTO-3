(function(){
    
    const deslizar = [...document.querySelectorAll(".testimony__body")];
    const botonSiguiente = document.querySelector("#Siguiente");
    const botonAnterior = document.querySelector("#Anterior");

    botonSiguiente.addEventListener('click',() => {
        changePosition(1);
    })

    botonAnterior.addEventListener('click',() => {
        changePosition(-1);
    })

    const changePosition = (add) => {
        const pato = document.querySelector(".testimony__body--show").dataset.id;
        value = Number(pato);
        value += add;

        console.log(value)
        
        deslizar[Number(pato)-1].classList.remove('testimony__body--show')
        if (value === deslizar.length+1 || value === 0) {
            value = value === 0 ? deslizar.length : 1;
        }
        
        deslizar[value-1].classList.add('testimony__body--show')
    }


}) ();