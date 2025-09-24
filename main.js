const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você resolve problemas levando em maior consideração o racional ou a emoção?",
        alternativas: [
            {
                texto: "O racional.",
                afirmacao: "Você possui o lado racional mais forte, levando em consideração o pensamento apurado antes de decisões."
            },
            {
                texto: "A emoção.",
                afirmacao: "Você possui o lado emocional mais forte, levando em consideração a expressão de sentimentos durante as decisões."
            }
        ]
    },
    {
        enunciado: "Você possui maiores habilidades comunicativas ou maiores habilidades para resolver problemas lóǵicos?",
        alternativas: [
            {
                texto: "Habilidades para resolver problemas lógicos",
                afirmacao: "Sua velocidade de pensamento é mais apurada em questões lógicas e de racíocinio."
            },
            {
                texto: "Habilidades comunicativas.",
                afirmacao: "Sente facilidade em conquistar espaço através de diálogos e expressões de ideias."
            }
        ]
    },
    {
        enunciado: "Você prefere atividades que explorem mais o seu lado criativo ou atividades que possuam uma prática aplicada?",
        alternativas: [
            {
                texto: "Atividades com prática aplicada.",
                afirmacao: "Prefere atividades com práticas predestinas no cotidiano."
            },
            {
                texto: "Atividades que explorem a criatividade.",
                afirmacao: "Prefere atividades que explorem o lado criativo e expressivo da mente."
            }
        ]
    },
    {
        enunciado: "Você tem facilidade em trabalhar em grupos ou tem melhor desempenho em trabalhos indivíduais?",
        alternativas: [
            {
                texto: "Maior facilidade em trabalhos indíviduais.",
                afirmacao: "Possui clareza em trabalhar sozinho."
            },
            {
                texto: "Maior facilidade em trabalhos em grupo.",
                afirmacao: "Possui desenvoltura em trabalhar com outras pessoas."
            }
        ]
    },
    {
        enunciado: "Qual área você escolheria para seguir profissionalmente?",
        alternativas: [
            {
                texto: "Matemática e suas tecnologias",
                afirmacao: "Portanto você se enquadra nas características de uma pessoa de exatas."
            },
            {
                texto: "Linguagens e suas tecnologias.",
                afirmacao: "Portanto você se enquadra nas características de uma pessoa de humanas "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if  (atual >= perguntas.length){
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();

}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
   }

}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado (){
    caixaPerguntas.textContent = "em 987...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}


mostraPergunta();
