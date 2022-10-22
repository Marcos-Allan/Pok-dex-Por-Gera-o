//VARIAVEIS GERAIS
let conteudo = window.document.querySelector('#conteudo')
let nm = window.document.querySelector('#nm')
let nbr = window.document.querySelector('#nbr')
let imgP = window.document.querySelector('#imgP')
let tps = window.document.querySelector('#tps')
let ctner = window.document.querySelector('#container')
let ldng = window.document.querySelector("#c-loader")
let btnclose = window.document.querySelector(".btn-close")
let theme = window.document.querySelector('#theme')
let conte = window.document.querySelector('#conteudo')
let cod;

//VARIAVEIS DAS GERAÇÕES POKÉMONS
let genI=[1,151]
let genII=[152,251]
let genIII=[252,386]
let genIV=[387,494]
let genV=[495,649]

//VARIAVEIS DE CRIAÇÃO DA GERAÇÃO DOS POKÉMONS
let ct=genI[0]
let fim=genI[1]

//CHAMA A 1°GERAÇÃO
function gerPkms1(){
    ct=genI[0]
    fim=genI[1]
    removeGen()
    gerPkms()
}

//CHAMA A 2°GERAÇÃO
function gerPkms2(){
    ct=genII[0]
    fim=genII[1]
    removeGen()
    gerPkms()

}

//CHAMA A 3°GERAÇÀO
function gerPkms3(){
    ct=genIII[0]
    fim=genIII[1]
    removeGen()
    gerPkms()
}

//CHAMA A 4°GERAÇÃO
function gerPkms4(){
    ct=genIV[0]
    fim=genIV[1]
    removeGen()
    gerPkms()
}

//CHAMA A 5°GERAÇÃO
function gerPkms5(){
    ct=genV[0]
    fim=genV[1]
    removeGen()
    gerPkms()
}

//REMOVE A GERAÇÀO ATUAL PARA CHAMAR A QUE FOI CLICADA
function removeGen(){
    let scdivs=window.document.querySelectorAll('.col-4')

    $("div.col-4").remove()
}

//ADICIONA OU REMOVE O TEMA DARK
theme.addEventListener('click',function(){
    document.body.classList.toggle('dark')
})

//CRIA AS CARTAS DOS POKÉMONS 
function gerPkms(){
    
    for(ct; ct<=fim; ct++){
        
        ldng.style.display="block"
        
        let divcln = window.document.createElement('div')
        let divcrt = window.document.createElement('div')
        let divdsc = window.document.createElement('div')
        let imgpok = window.document.createElement('img')
        let txtpok = window.document.createElement('p')
        
        divcln.setAttribute('class', 'col-4 my-1')
        //divcln.setAttribute('id',`${ct}`)
        divcln.setAttribute('data-bs-toggle', 'modal')
        divcln.setAttribute('data-bs-target', '#info')
        
        divcrt.setAttribute('class', 'card')
        divcrt.setAttribute('id',`${ct}`)
        
        divdsc.setAttribute('class', 'card-body')
        
        imgpok.setAttribute('class', 'card-img-top img-fluid')
        txtpok.setAttribute('class', 'card-text')
        
        imgpok.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ct}.png`
        txtpok.textContent = `${ct}`
        
        conte.appendChild(divcln)
        divcln.appendChild(divcrt)
        divcrt.appendChild(imgpok)
        divcrt.appendChild(divdsc)
        divdsc.appendChild(txtpok)
        }
        
        $(".card").click(function() {
            cod = this.id
            //cod = $(this).text()
            fetchPokemon()
        })
    
}

//FUNÇÃO DA API GERAL
const fetchPokemon = () => {
    //URL DO SITE
    const url = `https://pokeapi.co/api/v2/pokemon/${cod}`

    //REQUISIÇÃO
    fetch(url)

    //CONVERSÃO PARA JSON
    .then(response => response.json())

    //RETORNO DOS DADOS
    .then(pokemon => {

        if (pokemon['types']['1']) {
            tps.innerHTML = `<span id="tps1">${pokemon['types']['0']['type']['name']}</span> | <span id="tps2">${pokemon['types']['1']['type']['name']}</span>`
        } else {
            tps.innerHTML = `<span id="tps1">${pokemon['types']['0']['type']['name']}</span>`
        }

        ldng.style.display="none"
        nm.style.display="block"
        nbr.style.display="block"
        imgP.style.display="block"
        tps.style.display="block"

        nm.innerHTML = `${pokemon.name}`
        nbr.innerHTML = `${pokemon.id}`
        imgP.src = `${pokemon ['sprites']['versions']['generation-v']['black-white']['animated']['front_default']}`
        //tps.innerHTML = `<span id="tps1">${pokemon['types']['0']['type']['name']}</span> | <span class="tps">${pokemon ['types']['1']['type']['name']}</span>`
        
        
        switch(`${pokemon['types']['0']['type']['name']}`){
            case 'bug':
            $('span#tps1').css({"backgroundColor":"#9EC131"})
            break
            case 'dark':
            $('span#tps1').css({"backgroundColor":"#5E606D"})
            break
            case 'dragon':
            $('span#tps1').css({"backgroundColor":"#0673C6"})
            break
            case 'electric':
            $('span#tps1').css({"backgroundColor":"#EDD53F"})
            break
            case 'fairy':
            $('span#tps1').css({"backgroundColor":"#EF96E6"})
            break
            case 'fighting':
            $('span#tps1').css({"backgroundColor":"#DA4257"})
            break
            case 'fire':
            $('span#tps1').css({"backgroundColor":"#F7A54F"})
            break
            case 'flying':
            $('span#tps1').css({"backgroundColor":"#9AB3E9"})
            break
            case 'ghost':
            $('span#tps1').css({"backgroundColor":"#6B70C1"})
            break
            case 'grass':
            $('span#tps1').css({"backgroundColor":"#5FC063"})
            break
            case 'ground':
            $('span#tps1').css({"backgroundColor":"#D78555"})
            break
            case 'ice':
            $('span#tps1').css({"backgroundColor":"#80D3C9"})
            break
            case 'normal':
            $('span#tps1').css({"backgroundColor":"#9C9FA4"})
            break
            case 'poison':
            $('span#tps1').css({"backgroundColor":"#B563CF"})
            break
            case 'psychic':
            $('span#tps1').css({"backgroundColor":"#F87C7A"})
            break
            case 'rock':
            $('span#tps1').css({"backgroundColor":"#CEC18C"})
            break
            case 'steel':
            $('span#tps1').css({"backgroundColor":"#5496A4"})
            break
            case 'water':
            $('span#tps1').css({"backgroundColor":"#559EE2"})
            break
            default:
             $('span#tps1').css({"backgroundColor":"transparent"})
            break
            
        }
        
        switch(`${pokemon['types']['1']['type']['name']}`){
            case 'bug':
            $('span#tps2').css({"backgroundColor":"#9EC131"})
            break
            case 'dark':
            $('span#tps2').css({"backgroundColor":"#5E606D"})
            break
            case 'dragon':
            $('span#tps2').css({"backgroundColor":"#0673C6"})
            break
            case 'electric':
            $('span#tps2').css({"backgroundColor":"#EDD53F"})
            break
            case 'fairy':
            $('span#tps2').css({"backgroundColor":"#EF96E6"})
            break
            case 'fighting':
            $('span#tps2').css({"backgroundColor":"#DA4257"})
            break
            case 'fire':
            $('span#tps2').css({"backgroundColor":"#F7A54F"})
            break
            case 'flying':
            $('span#tps2').css({"backgroundColor":"#9AB3E9"})
            break
            case 'ghost':
            $('span#tps2').css({"backgroundColor":"#6B70C1"})
            break
            case 'grass':
            $('span#tps2').css({"backgroundColor":"#5FC063"})
            break
            case 'ground':
            $('span#tps2').css({"backgroundColor":"#D78555"})
            break
            case 'ice':
            $('span#tps2').css({"backgroundColor":"#80D3C9"})
            break
            case 'normal':
            $('span#tps2').css({"backgroundColor":"#9C9FA4"})
            break
            case 'poison':
            $('span#tps2').css({"backgroundColor":"#B563CF"})
            break
            case 'psychic':
            $('span#tps2').css({"backgroundColor":"#F87C7A"})
            break
            case 'rock':
            $('span#tps2').css({"backgroundColor":"#CEC18C"})
            break
            case 'steel':
            $('span#tps2').css({"backgroundColor":"#5496A4"})
            break
            case 'water':
            $('span#tps2').css({"backgroundColor":"#559EE2"})
            break
            default:
            $('span#tps2').css({"backgroundColor":"transparent"})
            break
            
        }
        
    })
}

btnclose.addEventListener('click',()=>{
    ldng.style.display="block"
    nm.style.display="none"
    nbr.style.display="none"
    imgP.style.display="none"
    tps.style.display="none"
})

gerPkms()

//MODAL
const myModal = document.querySelector('#myModal')
const myInput = document.querySelector('#myInput')

myModal.addEventListener('shown.bs.modal', () => {
    ldng.style.display="block"
    myInput.focus()
    fetchPokemon()
})