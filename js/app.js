let containercardPersonajes = document.querySelector('#characters')
let containercardNaves = document.querySelector('#spaceships')
let containercardPeliculas = document.querySelector('#films')
const URLBase = 'https://swapi.dev/api/'
const endpointPersonajes = 'people/'
const endpointNaves = 'starships/'
const endpointPeliculas = 'films/'
let siguiente = document.querySelector('#siguiente') 
let anterior = document.querySelector('#anterior')
let siguienteN = document.querySelector('#siguienteN') 
let anteriorN = document.querySelector('#anteriorN')
let siguienteP = document.querySelector('#siguienteP') 
let anteriorP = document.querySelector('#anteriorP')
let pagina = 1


/* Seccion para obtener los Personajes*/
const obtenerPersonajes=()=>{
    fetch(`${URLBase}${endpointPersonajes}?page=${pagina}`)
    .then(response=>response.json()
    .then(data=>createCardsPersonajes(data.results))
    .catch(error=>{
        console.error('Error al obtener los personajes', error)
    })
)
}

obtenerPersonajes()


const createCardsPersonajes=(personajes)=>{
    containercardPersonajes.innerHTML = ''
    for(let personaje of personajes){
        const{name, height, mass, gender} = personaje
        containercardPersonajes.innerHTML += `<div class="card-p">
        <h1>${name}</h1>
        <p>Altura: ${height}cm</p>
        <p>Peso: ${mass}kg</p>
        <p>Genero: ${gender}</p>
        <a href="#">Leer mas</a>
        </div>`
    }
}


siguiente.addEventListener('click',()=>{
    pagina++
    obtenerPersonajes()
})

anterior.addEventListener('click',()=>{
    pagina--
    obtenerPersonajes()
})


document.addEventListener('keyup',e =>{
    if(e.target.matches('.busc')){
        document.querySelectorAll('.card-p').forEach((tarjeta)=>{
            tarjeta.textContent.toLocaleLowerCase().includes(e.target.value)?tarjeta.classList.remove('filter'):tarjeta.classList.add('filter')
        })
        if (e.key === 'Escape'){
            e.target.value = '';
        }
    }
})




/* Seccion para obtener las Naves */
const obtenerNaves=()=>{
    fetch(`${URLBase}${endpointNaves}?page=${pagina}`)
    .then(response=>response.json()
    .then(data=>createCardsNaves(data.results))
    .catch(error=>{
        console.error('Error al obtener las naves', error)
    })
)
}

obtenerNaves()

const createCardsNaves=(naves)=>{
    containercardNaves.innerHTML = ''
    for(let nave of naves){
        const{name, length, crew, passengers} = nave
        containercardNaves.innerHTML += `<div class="card-n">
        <h1>${name}</h1>
        <p>Longitud: ${length}m</p>
        <p>Tripulantes: ${crew}</p>
        <p>Cant. Pasajeros: ${passengers}</p>
        <a href="#">Leer mas</a>
        </div>`
    }
}


siguienteN.addEventListener('click',()=>{
    pagina++
    obtenerNaves()
})

anteriorN.addEventListener('click',()=>{
    pagina--
    obtenerNaves()
})

document.addEventListener('keyup',e =>{
    if(e.target.matches('.busc')){
        document.querySelectorAll('.card-n').forEach((tarjeta)=>{
            tarjeta.textContent.toLocaleLowerCase().includes(e.target.value)?tarjeta.classList.remove('filter_n'):tarjeta.classList.add('filter_n')
        })
        if (e.key === 'Escape'){
            e.target.value = '';
        }
    }
})



/* Seccion para obtener las Peliculas */
const obtenerPeliculas=()=>{
    fetch(`${URLBase}${endpointPeliculas}?page=${pagina}`)
    .then(response=>response.json()
    .then(data=>createCardsPeliculas(data.results))
    .catch(error=>{
        console.error('Error al obtener las peliculas', error)
    })
)
}

obtenerPeliculas()

const createCardsPeliculas=(naves)=>{
    containercardPeliculas.innerHTML = ''
    for(let pelicula of peliculas){
        const{title, episode_id, director, producer, release_date} = pelicula
        containercardPeliculas.innerHTML += `<div class="card-pel">
        <h1>${title}</h1>
        <p>Edicion: ${episode_id} </p>
        <p>Director: ${director}</p>
        <p>Productor: ${producer}</p>
        <p>Fecha de Lanzamiento: ${release_date}</p>
        <a href="#">Leer mas</a>
        </div>`
    }
}

siguienteP.addEventListener('click',()=>{
    pagina++
    obtenerPeliculas()
})

anteriorP.addEventListener('click',()=>{
    pagina--
    obtenerPeliculas()
})


document.addEventListener('keyup',e =>{
    if(e.target.matches('.busc')){
        document.querySelectorAll('.card-pel').forEach((tarjeta)=>{
            tarjeta.textContent.toLocaleLowerCase().includes(e.target.value)?tarjeta.classList.remove('filter_p'):tarjeta.classList.add('filter_p')
        })
        if (e.key === 'Escape'){
            e.target.value = '';
        }
    }
})









/*
for (let i = 1; i <=81; i++){
    fetch(`${URLBase}${endpointPersonajes}` + i)
    .then(response=>response.json()
    .then(data=>createCards(data.results))
    .catch(error=>{
        console.error('Error al obtener los personajes', error)
    })
)
}


function createCards(data){
    const div = document.createElement('div');
    div.classList.add("personaje");
    div.innerHTML = `<div class="card-p">
    <h1>Luke Skywalker</h1>
    <p>Altura: 172cm</p>
    <p>Peso: 77kg</p>
    <p>Genero: Masculino</p>
    <a href="#">Leer mas</a>
    </div>`;
    listaPersonaje.append(div);
}*/