const baseUrl = `https://restcountries.eu/rest/v2/`

async function gerarPaises(){

    const dados = await fetch(baseUrl + 'all')
    const endereco = await dados.json()
    console.log(endereco);

    endereco.forEach(paises => {
        const {name, capital, population, region, flag} = paises

        const paisesEl = document.createElement('div');
        paisesEl.classList.add('paises');

        paisesEl.innerHTML = `
            <div class= "container">

                <div class="imagens-container">
                    <img id="imagens" src="${flag}">
                </div>

                <div class="container-paises"> 
                    <div id="nome-pais"> ${name} </div> 
                </div>

                <div class="informations"> 
                    <div id="nameCapital"> Capital: ${capital} </div>
                    <div id="population"> Population: ${population} </div>
                    <div id="region"> Region: ${region} </div>
                </div>
            </div>
        `;

        pais.appendChild(paisesEl);
        
    });

}

gerarPaises()

async function searchCountry(){

    const mostrarPais = document.getElementById('pais')

    mostrarPais.innerHTML = ''

    const buscainput = document.getElementById('busca').value;
    
    const url = `https://restcountries.eu/rest/v2/name/${buscainput}`
    const dados = await fetch(url)
    const endereco = await dados.json();
    console.log(endereco)

    let img = endereco['0']['alpha3Code']
    let mostrar = endereco['0']
    let currencies = endereco['0']['currencies']['0']
    let languages = endereco['0']['languages']['0']

    mostrarPais.innerHTML += `
        <div class="tudo"> 

            <div class="container-imagens-left">

                <div class"teste-img-btn">
                    <div class="botao-voltar">
                    <a href="" id="btn-voltar">Back</a>
                    </div>

                    <div class="img-background"> 
                        <img id="img-maior" src="https://restcountries.eu/data/${img.toLowerCase()}.svg">
                    </div>
                </div>

            </div>

            <div class="container-itens-right">
    
                <div class="itens-right">
                    <h1 class="nomepais">${mostrar.name}</h1>
                    <ul>                    
                        <li><label for="">Native Name:</label> ${mostrar.nativeName}</li>
                        <li><label for="">Population:</label> ${mostrar.population}</li>
                        <li><label for="">Region:</label> ${mostrar.region}</li>
                        <li><label for="">Sub Region:</label> ${mostrar.subregion}</li>
                        <li><label for="">Capital:</label> ${mostrar.capital}</li>
                    </ul>
                </div>


                <div class="itens">
                    <ul>
                        <li><label for="">Top Level Domain:</label> ${mostrar.topLevelDomain}</li>
                        <li><label for="">Currencies:</label> ${currencies.code}, ${currencies.name}, ${currencies.symbol}</li>
                        <li><label for="">Languages:</label> ${languages.iso639_1}, ${languages.iso639_2}, ${languages.name}, ${languages.nativeName}</li>
                    </ul>
                </div>

            </div>

        </div>

    `
}

document.getElementById('btn').onclick = searchCountry;
