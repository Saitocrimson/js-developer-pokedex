var detailes=document.getElementById("baralho")
var knapp=document.getElementById("pokebotao")
const limit=3
var offset=0
const maximoLoad=150


/*function convertedadospoke(pokemons){
    return pokemons.map((typeSlot)=>`<li class='tipos'>${typeSlot.type.name}</li>`)
    
}*/


function convertejsonhtml2(pokemon){
    return `<li class="carta_individual">
            <span class="number">#${pokemon.number}</span> 
            <span class="name">${pokemon.name}</span>
            <img src=${pokemon.photo} alt=${pokemon.name}>
            <ol class="tipos">
               ${pokemon.Types.map((type)=>`<li class="types ${type}">${type}</li>`).join('')}        
            </ol>
            <div class="tudo">
            <ol class="dados_complementares">
                <li>Peso</li>
                <li>Altura</li>
                <li>Experincia</li>
                
            </ol>
            <ol class="dados_complementares2">
                <li>${pokemon.weight}</li>
                <li>${pokemon.height}</li>
                <li>${pokemon.base_experience}</li>
                
            </ol>
            </div>
    
       
        <p>Habilidade(s):</p>
        <ol class="habilidades">
           ${pokemon.abilities.map((ability)=>`<li class="habilidade">${ability}</li>`).join('')}        
        </ol>
       


       
   
</li>`
}
//formas de retornar o comando e add ao html
// grupo.innerHTML+=pokelistaa.map((pokemon)=>'tudo que for add ao html aqui').join("")
    /*var pocket=pokelistaa.map((item)=>{
        return convertejsonhtml(item)})
        
    grupo.innerHTML+=pocket.join("")
*/
function carregarPoke(offset,limit){
    poke_api.getPokemons(offset,limit).then((pokelistaa)=>{
        detailes.innerHTML+=pokelistaa.map(convertejsonhtml2).join("")
    
    
    })
    .catch(function (error){
        console.log(error)
    })
    .finally(function(){
        console.log("ok ok")
    })
    }
    carregarPoke(offset,limit)


   

   /* knapp.addEventListener("click",()=>{
        offsets+=limits
        var aux=offsets+limits
        if(aux>=maximoLoad)
        {
        var novoLimite=maximoLoad-offset
        carregarPoke(offsets,novoLimite)
        knapp.parentElement.removeChild(knapp)
        return 
        }
        else{
            carregarPoke(offset,limit)
        }
       
       
       
    })*/

