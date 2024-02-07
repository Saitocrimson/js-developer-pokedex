var detailes=document.getElementById("baralho")
var knapp=document.getElementById("pokebotao")
const limit=3
var offset=0
const maximoLoad=151

knapp.addEventListener("click",()=>{
    offset+=limit
    var aux=offset+limit
    if(aux>=maximoLoad)
    {
        var novoLimite=maximoLoad-offset
        carregarDetalhes(offset,novoLimite)
        knapp.parentElement.removeChild(knapp)
    return 
    }
    else{
        carregarDetalhes(offset,limit)
    }
   
})

function convertejsonhtml2(pokemon){
    return `<li class="carta_individual">
                <div class="head_dados">
                    <span class="number texto-bold">#${pokemon.number}</span> 
                    <span class="name texto-bold">${pokemon.name}</span>
                </div>
                <img src=${pokemon.photo} alt=${pokemon.name}>
                <ol class="tipos">
                     ${pokemon.Types.map((type)=>`<li class="types_details texto-bold ${type}">${type}</li>`).join('')}        
                </ol>
                <div class="dados_gerais">
                    <ol class="dados_complementares">
                        <li>Peso</li>
                        <li>Altura</li>
                        <li>Experiência</li>
                        
                    </ol>
                    <ol class="dados_complementares2">
                        <li>${pokemon.weight}</li>
                        <li>${pokemon.height}</li>
                        <li>${pokemon.base_experience}</li>
                        
                    </ol>
                </div>
        

                <p class="formatacao_paragrafo">Habilidade(s):</p>
                <ol class="habilidades">
                    ${pokemon.abilities.map((ability)=>`<li class="habilidade">${ability}</li>`).join('')}        
                </ol> 
            </li>`
}

function carregarDetalhes(offset,limit){
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


carregarDetalhes(offset,limit)


   


