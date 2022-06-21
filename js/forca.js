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
      mensagemAcerto: "O diâmetro de um grafo consiste na maior distância entre dois vértices em um grafo."
    },
    palavra005 = {
      nome: "CENTRO",
      categoria:"CAMINHOS E CICLOS",
      dificuldade: "FACIL",
        mensagemAcerto: "O centro de um grafo G é o subgrafo induzido pelos vértices de excentricidade mínima. "
    },

    palavra006 = {
      nome: "EXCENTRICIDADE",
      categoria:"CAMINHOS E CICLOS",
      dificuldade: "DIFICIL",
        mensagemAcerto: "Deﬁnimos a excentricidade de um vértice v, E(v), como sendo o valor da distância máxima entre ve w, para todo w∈ V."
    },

    palavra007 = {
      nome: "GRAFOS-ESPECIAIS",
      categoria:"CAMINHOS E CICLOS",
      dificuldade: "DIFICIL",
        mensagemAcerto: "Um grafo bidirecional é chamado de árvore se, e somente se, ele for conexo e não tiver ciclos. "
    },

    palavra008 = {
      nome: "GERADORA",
      categoria:"ARVORE",
      dificuldade: "FACIL",
        mensagemAcerto: "Uma árvore geradora (= spanning tree) de um grafo é qualquer subárvore que contenha todos os vértices"
    },

    palavra009 = {
      nome: "ENRAIZADA",
      categoria:"ARVORE",
      dificuldade: "DIFICIL",
        mensagemAcerto: "Uma árvore enraizada ou arborescência é um grafo acíclico direcionado com uma única raiz e de modo que todos os nós, exceto a raiz, têm um único pai."
    },

    palavra0010 = {
      nome: "EULERIANO",
      categoria:"TIPO DE GRAFO",
      dificuldade: "FACIL",
        mensagemAcerto: "Grafos Eulerianos. Um grafo G é dito ser euleriano se há um ciclo em G que contenha todas as suas arestas. Este ciclo é dito ser um ciclo euleriano."
    },

    palavra0010 = {
      nome: "HAMILTONIANO",
      categoria:"TIPO DE GRAFO",
      dificuldade: "DIFICIL",
        mensagemAcerto: "Deﬁnição Um circuito hamiltoniano em um grafo conexo é um circuito que contém todos os vértices do grafo. Um grafo é chamado de grafo hamiltoniano se possui um circuito hamiltoniano."
    },

    palavra0011 = {
      nome: "DIJKSTRA",
      categoria:"CAMINHOS MINIMOS (ALGORITMO)",
      dificuldade: "DIFICIL",
        mensagemAcerto: "O algoritmo de Dijkstra é um algoritmo que podemos usar para encontrar distâncias mais curtas ou custos mínimos, dependendo do que é representado em um gráfico."
    },

    palavra0012 = {
      nome: "BELLMAN-FORD",
      categoria:"CAMINHOS MINIMOS (ALGORITMO)",
      dificuldade: "DIFICIL",
        mensagemAcerto: "O Algoritmo de Bellman-Ford é um algoritmo de busca de caminho mínimo em um digrafo (grafo orientado ou dirigido) ponderado, ou seja, cujas arestas têm peso, inclusive negativo. O Algoritmo de Dijkstra resolve o mesmo problema, num tempo menor, porém exige que todas as arestas tenham pesos positivos."
    },

    palavra0012 = {
      nome: "FLOYD-WARSHALL",
      categoria:"CAMINHOS MINIMOS (ALGORITMO)",
      dificuldade: "DIFICIL",
        mensagemAcerto: "o algoritmo de Floyd-Warshall (também conhecido como: Floyd's algorithm, Roy–Warshall algorithm, Roy–Floyd algorithm, ou WFI algorithm) é um algoritmo que resolve o problema de calcular o caminho mais curto entre todos os pares de vértices em um grafo orientado (com direção) e valorado (com peso)."
    },

    palavra0013 = {
      nome: "PRIM",
      categoria:"ALGORITMO GULOSO",
      dificuldade: "FACIL",
        mensagemAcerto: "O algoritmo de Prim é um algoritmo guloso (greedy algorithm) empregado para encontrar uma árvore geradora mínima (minimal spanning tree) num grafo conectado, valorado e não direcionado. Isso significa que o algoritmo encontra um subgrafo do grafo original no qual a soma total das arestas é minimizada e todos os vértices estão interligados. "
    },

    palavra0014 = {
      nome: "KRUSKAL",
      categoria:"ALGORITMO GULOSO",
      dificuldade: "DIFICIL",
        mensagemAcerto: "O algoritmo de Kruskal é um algoritmo em teoria dos grafos que busca uma árvore geradora mínima para um grafo conexo com pesos. Isto significa que ele encontra um subconjunto das arestas que forma uma árvore que inclui todos os vértices, onde o peso total, dado pela soma dos pesos das arestas da árvore, é minimizado. Se o grafo não for conexo, então ele encontra uma floresta geradora mínima (uma árvore geradora mínima para cada componente conexo do grafo). O algoritmo de Kruskal é um exemplo de um algoritmo guloso (também conhecido como ganancioso ou greedy)."
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
            abreModal("OPS!", "Não foi dessa vez ... A palavra secreta era <br> " + palavraSecretaSorteada + "<br> Vamos entender um pouco mais sobre termo!! " + palavraSecretaMensagem + ". Vamos para outra tentativa.");
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
