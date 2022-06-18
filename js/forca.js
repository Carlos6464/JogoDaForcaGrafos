let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras = [
    palavra001 = {
        nome: "ADJACENCIA",
        categoria:"GRAFOS ISOMORFOS MATRIZ",
        dificuldade: "FACIL",
        mensagemAcerto: "Uma Matriz de Adjacência é uma das formas de se representar um grafo.",
    },
    palavra002 = {
      nome: "INCIDENCIA",
      categoria:"GRAFOS ISOMORFOS MATRIZ",
      dificuldade: "FACIL",
      mensagemAcerto: "Uma Matriz de incidencia é uma das formas de se representar um grafo.",
    },
    palavra003 = {
      nome: "TRAJETO",
      categoria:"CAMINHOS E CICLOS",
      dificuldade: "FACIL",
      mensagemAcerto: "Um passeio em que todas as arestas são distintas é chamado de trajeto (ou trilha)."
    },
    palavra004 = {
      nome: "DIAMETRO",
      categoria:"CAMINHOS E CICLOS",
      dificuldade: "FACIL",
      mensagemAcerto: ""
    },
    palavra005 = {
      nome: "CENTRO",
      categoria:"CAMINHOS E CICLOS",
      dificuldade: "FACIL",
        mensagemAcerto: ""
    },

    palavra006 = {
      nome: "EXCENTRICIDADE",
      categoria:"CAMINHOS E CICLOS",
      dificuldade: "DIFICIL",
        mensagemAcerto: ""
    },

    palavra007 = {
      nome: "GRAFOS-ESPECIAIS",
      categoria:"CAMINHOS E CICLOS",
      dificuldade: "DIFICIL",
        mensagemAcerto: ""
    },

    palavra008 = {
      nome: "GERADORA",
      categoria:"ARVORE",
      dificuldade: "FACIL",
        mensagemAcerto: ""
    },

    palavra009 = {
      nome: "ENRAIZADA",
      categoria:"ARVORE",
      dificuldade: "DIFICIL",
        mensagemAcerto: ""
    },

    palavra0010 = {
      nome: "EULERIANO",
      categoria:"TIPO DE GRAFO",
      dificuldade: "FACIL",
        mensagemAcerto: ""
    },

    palavra0010 = {
      nome: "HAMILTONIANO",
      categoria:"TIPO DE GRAFO",
      dificuldade: "DIFICIL",
        mensagemAcerto: ""
    },

    palavra0011 = {
      nome: "DIJKSTRA",
      categoria:"CAMINHOS MINIMOS (ALGORITMO)",
      dificuldade: "DIFICIL",
        mensagemAcerto: ""
    },

    palavra0012 = {
      nome: "BELLMAN-FORD",
      categoria:"CAMINHOS MINIMOS (ALGORITMO)",
      dificuldade: "DIFICIL",
        mensagemAcerto: ""
    },

    palavra0012 = {
      nome: "FLOYD-WARSHALL",
      categoria:"CAMINHOS MINIMOS (ALGORITMO)",
      dificuldade: "DIFICIL",
        mensagemAcerto: ""
    },

    palavra0013 = {
      nome: "PRIM",
      categoria:"ALGORITMO GULOSO",
      dificuldade: "FACIL",
        mensagemAcerto: ""
    },

    palavra0014 = {
      nome: "KRUSKAL",
      categoria:"ALGORITMO GULOSO",
      dificuldade: "DIFICIL",
        mensagemAcerto: ""
    }





];


criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    palavraSecretaDificuldade = palavras[indexPalavra].dificuldade;
    palavraSecretaMensagem = palavras[indexPalavra].mensagemAcerto;

}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const dificuldade = document.getElementById('dificuldade');
    dificuldade.innerHTML = "Nivel: "+ palavraSecretaDificuldade;

    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0)
    {
        mudarStyleLetra("tecla-" + letra);
        comparalistas(letra);
        montarPalavraNaTela();
    }
}

function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#009900";
    document.getElementById(tecla).style.color = "#ffffff";
}

function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagemForca();

        if(tentativas == 0){
            abreModal("OPS!", "Não foi dessa vez ... A palavra secreta era <br>" + palavraSecretaSorteada + "<br> vamos para uotra tentativa");
        }
    }
    else{
        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true)
    {
        abreModal("PARABÉNS!", "Você venceu... Vamos entender um pouco mais sobre termo!! " + palavraSecretaMensagem );
        tentativas = 0;
    }
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background  = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background  = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background  = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background  = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background  = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background  = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background  = "url('./img/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let bntReiniciar = document.querySelector("#btnReiniciar")
bntReiniciar.addEventListener("click", function(){
    location.reload();
});
