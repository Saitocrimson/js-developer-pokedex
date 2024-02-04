const poke_api={}



function convertTudomon(tudomon){
    var aux=new Tudomon()
    aux.number=tudomon.id
    console.log(aux.number)
    aux.name=tudomon.name
    tipo=tudomon.types.map((typeSlot)=>typeSlot.type.name)
    const [t1]=tipo
    aux.type=t1
    aux.Types=tipo
    aux.photo=tudomon.sprites.other.dream_world.front_default
    return aux
}



poke_api.getDetalhe=(mons)=>{
    return fetch(mons.url)
    .then((response)=> response.json())
    .then(convertTudomon)
    
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

Promise.all([
    fetch('https://pokeapi.co/api/v2/pokemon/1'),
    fetch('https://pokeapi.co/api/v2/pokemon/2'),
    fetch('https://pokeapi.co/api/v2/pokemon/3'),
    fetch('https://pokeapi.co/api/v2/pokemon/4'),
    fetch('https://pokeapi.co/api/v2/pokemon/5')
]).then((results)=>{console.log(results)})