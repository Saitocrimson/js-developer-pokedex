
var grupo =document.getElementById("grupo_todo")
var detail=document.getElementById("baralho")
var knapp=document.getElementById("pokebotao")
const limit=5
var offset=0

const maximoLoad=150


/*function convertedadospoke(pokemons){
    return pokemons.map((typeSlot)=>`<li class='tipos'>${typeSlot.type.name}</li>`)
    
}*/


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


//formas de retornar o comando e add ao html
// grupo.innerHTML+=pokelistaa.map((pokemon)=>'tudo que for add ao html aqui').join("")
    /*var pocket=pokelistaa.map((item)=>{
        return convertejsonhtml(item)})
        
    grupo.innerHTML+=pocket.join("")
*/


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