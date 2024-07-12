let containercardPersonajes = document.querySelector('#characters')
let containercardNaves = document.querySelector('#spaceships')
const URLBase = 'https://swapi.dev/api/'
const endpointPersonajes = 'people/'
const endpointNaves = 'starships/'
const endpointPeliculas = 'films/'
let siguiente = document.querySelector('#siguiente') 
let anterior = document.querySelector('#anterior')
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


siguiente.addEventListener('click',()=>{
    pagina++
    obtenerNaves()
})

anterior.addEventListener('click',()=>{
    pagina--
    obtenerNaves()
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