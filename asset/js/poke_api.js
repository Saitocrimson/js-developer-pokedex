const poke_api={}



function convertPokemon(pokemon){
    var aux=new Pokeclasse()
    aux.number=pokemon.id
    console.log(pokemon)
    var nomeP=pokemon.name
    var resto=nomeP.slice(1)
    aux.name=nomeP.charAt(0).toUpperCase()+resto
    tipo=pokemon.types.map((typeSlot)=>typeSlot.type.name)
    const [t1]=tipo
    aux.type=t1
    aux.Types=tipo
    aux.photo=pokemon.sprites.other.dream_world.front_default
    aux.height=pokemon.height;
    aux.weight=pokemon.weight;
    habilidades=pokemon.abilities.map((slotHabilidades)=>slotHabilidades.ability.name)
    const [h1]=habilidades;
    aux.ability=h1;
    aux.abilities=habilidades
    console.log(aux.height)
    aux.base_experience=pokemon.base_experience;

   
    return aux
}



poke_api.getDetalhe=(mons)=>{
    return fetch(mons.url)
    .then((response)=> response.json())
    .then(convertPokemon)
    
    }
poke_api.getPokemons=function(offset,limit){

const url=`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
return fetch(url)
.then( (response)=>{
    return response.json()
})
.then((jsonBody)=> jsonBody.results)
    //debugger->breakpoint
.then((mons)=>mons.map(poke_api.getDetalhe))
.then((detalhe)=>Promise.all(detalhe))
.then((promessa_detalhe)=> promessa_detalhe)
.catch(function (error){
    console.log(error)
})
}

