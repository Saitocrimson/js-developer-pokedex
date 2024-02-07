
var grupo =document.getElementById("grupo_todo")
var knapp=document.getElementById("pokebotao")
const limit=5
const limits=3
var offset=0

const maximoLoad=151


function convertejsonhtml(pokemon){
    return `<li class="pokemon ${pokemon.type}">
                <div class="head_dados">
                    <span class="number">#${pokemon.number}</span> 
                    <span class="name">${pokemon.name}</span>
                </div>
                <div class="detalhe">
                    <ol class="type">
                       ${pokemon.Types.map((type)=>`<li class="types ${type}">${type}</li>`).join('')}        
                    </ol>
                    <img src=${pokemon.photo} alt=${pokemon.name}>
                </div>
        </li>`
}
knapp.addEventListener("click",()=>{
    offset+=limit
    var aux=offset+limit
    if(aux>=maximoLoad)
    {
        var novoLimite=maximoLoad-offset
        carregarPoke(offset,novoLimite)
        knapp.parentElement.removeChild(knapp)
        return 
    }
    else{
        carregarPoke(offset,limit)
    }

})

function carregarPoke(offset,limit){
    poke_api.getPokemons(offset,limit)
    .then((pokelistaa)=>{
        grupo.innerHTML+=pokelistaa.map(convertejsonhtml).join("")
    })
    .catch(function (error){
        console.log(error)
    })
    .finally(function(){
        console.log("ok ok")
    })
}





carregarPoke(offset,limit)