async function searchCountry(){

    const buscainput = document.getElementById('busca').value;
    const mostrarPais = document.getElementById('pais')
    const url = `https://restcountries.eu/rest/v2/name/${buscainput}`

    const dados = await fetch(url)
    const endereco = await dados.json();
    console.log(endereco)

    let img = endereco['0']['alpha3Code']
    let mostrar = endereco['0']

    mostrarPais.innerHTML += `<div class= "container">
            <div class="imagens-container">
                <img id="imagens" src="https://restcountries.eu/data/${img.toLowerCase()}.svg">
                </div>

            <div class="container-paises"> 
                <div id="nome-pais"> ${mostrar.name} </div> 
            </div>   
            
            <div class="informations"> 
                <div id="nameCapital"> Capital: ${mostrar.capital} </div>
                <div id="population"> Population: ${mostrar.population} </div>
                <div id="region"> Region: ${mostrar.region} </div>
            </div>
    </div>
`

}


document.getElementById('btn').onclick = searchCountry;

