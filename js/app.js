let containercard = document.querySelector('#characters')
const URLBase = 'https://swapi.dev/api/'
const endpointPersonajes = 'people/'
let siguiente = document.querySelector('#siguiente') 
let anterior = document.querySelector('#anterior')
let pagina = 1


const obtenerPersonajes=()=>{
    fetch(`${URLBase}${endpointPersonajes}?page=${pagina}`)
    .then(response=>response.json()
    .then(data=>createCards(data.results))
    .catch(error=>{
        console.error('Error al obtener los personajes', error)
    })
)
}

obtenerPersonajes()


const createCards=(personajes)=>{
    containercard.innerHTML = ''
    for(let personaje of personajes){
        const{name, height, mass, gender} = personaje
        containercard.innerHTML += `<div class="card-p">
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