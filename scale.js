const scale = document.querySelector('#scale');
const brush1 = scale.getContext('2d');
brush1.fillStyle = 'lightgray';
brush1.beginPath();

const inicialWidth = getApproximateWidth(); // valor inicial da largura do optotipo, valor inicial calculado por aproximação, apenas é adicionada ou subtraida pela variável counter

function getApproximateWidth() {
    // valor inicial baseado no cálculo usando o tamanho padrão de um cartão de crédito e a taxa de pixelização do monitor
    return 8560 * window.devicePixelRatio / 26.3; 
}

function calibrationAlert() {
    alert("Before using the eye chart, please check the scale calibration for your monitor screen. Otherwise, the optotypes will be displayed in a wrong size.")
}

// função de limpar o canvas
function clearScreen() {
    brush1.clearRect (0, 0, scale.width, scale.height);
}

let counter = 0 // contador para adicionar valor no width cada interação do usuário ao pressionar os botões de ajuste

// função de aumentar a escala
function increaseScale() {
    if (inicialWidth + counter < 870) { // escala máxima é de 870 px
        counter = counter + 5; // vai adicionando 5 px de cada vez
        drawCard(brush1, 0, 50, inicialWidth + counter); // desenha o cartão com dimensção atualizada
        document.querySelector('#scalenumber').innerHTML = width + " pixels"; // atualiza o display do valor da escala na tela
    }
}

function decreaseScale() {
    if (inicialWidth + counter > 200) { // escala minima é de 200px
        counter = counter - 5; // vai subtraindo 5 px de cada vez
        drawCard(brush1, 0, 50, inicialWidth + counter);
        document.querySelector('#scalenumber').innerHTML = inicialWidth + counter + " pixels";
    }
}

// função de desenhar o cartão
function drawCard(ctx, x, y, width) {
    clearScreen(); // primeiro limpa o canvas antes de desenhar
    height = width * 0.63; // a altura proporcinal do cartão segundo o google
    radius = width/20; // arrendondar as bordas do cartão
    // essa parte faz o desenho do outline do cartão
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    //preenche o cartão
    ctx.fill();

}

// função de alerta ao clicar no botão submit scale
function submitAlert() {
    alert('Scale defined.');
    scalenumber = inicialWidth + counter;
    localStorage.setItem("scalenumber", scalenumber); // guarda o valor na memoria do browser
    window.location.replace("tumblingE.html") // redireciona para pagina da tabela
}

// ativa as funções ao clicar no botção increase
const increaseButton = document.querySelector('#increase');
increaseButton.onclick = increaseScale;

//ativa as funções ao clicar no botão decrease
const decreaseButton = document.querySelector('#decrease');
decreaseButton.onclick = decreaseScale;

// faz o desenho inicial ao carregar a pagina
drawCard(brush1, 0, 50, inicialWidth);

// atualiza o display do valor da escala
scalenumber = inicialWidth + counter;
document.querySelector('#scalenumber').innerHTML = scalenumber + " pixels";

// alerta ao abrir a pagina
alert("This online eyesight test is not a medical test and cannot take the place of eye care by a trained professional. It is not intended for use in the diagnosis of disease or other conditions, or in the cure, mitigation, treatment, or prevention of disease. This exam is only meant to give you a general idea of your eye power. We recommend combining this check with a complete vision evaluation with an optician.")
