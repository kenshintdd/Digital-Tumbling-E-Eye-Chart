const echart = document.querySelector('#echart');
const brush2 = echart.getContext('2d');

function calibrationAlert() {
    alert("Before using the eye chart, please check the scale calibration for your monitor screen. Otherwise, the optotypes will be displayed in a wrong size.")
}

// desenha o E virado para direita
function drawE1(width) {
    const stroke = width/5;
    const x0 = (echart.width / 2) - (width / 2);
    const y0 = (echart.height / 2) - (width / 2);

    brush2.fillStyle = 'black';
    brush2.fillRect(x0, y0,width, stroke);

    brush2.fillStyle = 'black';
    brush2.fillRect(x0, y0 + stroke * 2, width, stroke);

    brush2.fillStyle = 'black';
    brush2.fillRect(x0, y0 + stroke * 4, width, stroke);

    brush2.fillStyle = 'black';
    brush2.fillRect(x0, y0, stroke, width);

}

//desenha o E virado para baixo
function drawE2(width) {
    const stroke = width/5;
    const x0 = (echart.width / 2) - (width / 2);
    const y0 = (echart.height / 2) - (width / 2);

    brush2.fillStyle = 'black';
    brush2.fillRect(x0, y0, width, stroke);

    brush2.fillStyle = 'black';
    brush2.fillRect(x0, y0, stroke, width);

    brush2.fillStyle = 'black';
    brush2.fillRect(x0 + stroke * 2, y0, stroke, width);

    brush2.fillStyle = 'black';
    brush2.fillRect(x0 + stroke * 4, y0, stroke, width);

}

// desenha o E virado para esquerda
function drawE3(width) {
    const stroke = width/5;
    const x0 = (echart.width / 2) - (width / 2);
    const y0 = (echart.height / 2) - (width / 2);

    brush2.fillStyle = 'black';
    brush2.fillRect(x0, y0, width, stroke);

    brush2.fillStyle = 'black';
    brush2.fillRect(x0, y0 + (stroke * 2), width, stroke);

    brush2.fillStyle = 'black';
    brush2.fillRect(x0, y0 + (stroke * 4), width, stroke);

    brush2.fillStyle = 'black';
    brush2.fillRect(x0 + (stroke * 4), y0, stroke, width);

}

// desenha o E virado para cima
function drawE4(width) {
    const stroke = width/5;
    const x0 = (echart.width / 2) - (width / 2);
    const y0 = (echart.height / 2) - (width / 2);

    brush2.fillStyle = 'black';
    brush2.fillRect(x0, y0 + (stroke * 4), width, stroke);

    brush2.fillStyle = 'black';
    brush2.fillRect(x0, y0, stroke, width);

    brush2.fillStyle = 'black';
    brush2.fillRect(x0 + stroke * 2, y0, stroke, width);

    brush2.fillStyle = 'black';
    brush2.fillRect(x0 + (stroke * 4), y0, stroke, width);

}

// função que retorna um numero randomico entre o min e max inclusos
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// para reservar o valor randomico anterior para que o valor atual não seja repetido
let previusRandomInt = 1

// função de desenhar um E randomico e na escala da linha
function drawRandomE(lineNumber) {
    brush2.clearRect (0, 0, echart.width, echart.height);
    let randomInt = getRandomInt(1, 4);

    // essa parte serve para que a função não desenhe um E na mesma direção do desenho anterior
    while(true) {
        if (previusRandomInt != randomInt) {
            previusRandomInt = randomInt;
            break;
        }
        randomInt = getRandomInt(1, 4);
    }

    // para cada linha, essa parte vai retornar o valor da escala de width. Esses multiplicadores peguei de um artigo cientifico
    if (lineNumber === 1) {
        width = scale;
    }
    else if (lineNumber === 2) {
        width = scale * 0.665;
    }
    else if (lineNumber === 3) {
        width = scale * 0.501;
    }
    else if (lineNumber === 4) {
        width = scale * 0.333;
    }
    else if (lineNumber === 5) {
        width = scale * 0.251;
    }
    else if (lineNumber === 6) {
        width = scale * 0.200;
    }
    else if (lineNumber === 7) {
        width = scale * 0.166;
    }
    else if (lineNumber === 8) {
        width = scale * 0.143;
    }
    else if (lineNumber === 9) {
        width = scale * 0.126;
    }
    else if (lineNumber === 10) {
        width = scale * 0.111;
    }
    else if (lineNumber === 11) {
        width = scale * 0.1
    }

    // para cada numero ramdomico gerado anteriormente, essa parte vai desenhar um desenho de E com direção diferente
    if (randomInt === 1) {
        drawE1(width);
    }
    else if (randomInt === 2) {
        drawE2(width);
    }
    else if (randomInt === 3) {
        drawE3(width);
    }
    else if (randomInt === 4) {
        drawE4(width);
    }
}

// essa função printa na tela os valores atualizados de acuidade da linha
function printAcuityNumber (lineNumber) {
    if (lineNumber == 1) {
        document.querySelector('#snellenFraction').innerHTML = "20/200";
        document.querySelector('#decimalFraction').innerHTML = "0.10";
        document.querySelector('#letterSize').innerHTML = "87,3 mm";
    }
    else if (lineNumber == 2) {
        document.querySelector('#snellenFraction').innerHTML = "20/133";
        document.querySelector('#decimalFraction').innerHTML = "0.15";
        document.querySelector('#letterSize').innerHTML = "58,0 mm";
    }
    else if (lineNumber == 3) {
        document.querySelector('#snellenFraction').innerHTML = "20/100";
        document.querySelector('#decimalFraction').innerHTML = "0.20";
        document.querySelector('#letterSize').innerHTML = "43,7 mm";
    }
    else if (lineNumber == 4) {
        document.querySelector('#snellenFraction').innerHTML = "20/67";
        document.querySelector('#decimalFraction').innerHTML = "0.30";
        document.querySelector('#letterSize').innerHTML = "29,0 mm";
    }
    else if (lineNumber == 5) {
        document.querySelector('#snellenFraction').innerHTML = "20/50";
        document.querySelector('#decimalFraction').innerHTML = "0.40";
        document.querySelector('#letterSize').innerHTML = "21,9 mm";
    }
    else if (lineNumber == 6) {
        document.querySelector('#snellenFraction').innerHTML = "20/40";
        document.querySelector('#decimalFraction').innerHTML = "0.50";
        document.querySelector('#letterSize').innerHTML = "17,4 mm";
    }
    else if (lineNumber == 7) {
        document.querySelector('#snellenFraction').innerHTML = "20/33";
        document.querySelector('#decimalFraction').innerHTML = "0.60";
        document.querySelector('#letterSize').innerHTML = "14,5 mm";
    }
    else if (lineNumber == 8) {
        document.querySelector('#snellenFraction').innerHTML = "20/29";
        document.querySelector('#decimalFraction').innerHTML = "0.70";
        document.querySelector('#letterSize').innerHTML = "12,5 mm";
    }
    else if (lineNumber == 9) {
        document.querySelector('#snellenFraction').innerHTML = "20/25";
        document.querySelector('#decimalFraction').innerHTML = "0.80";
        document.querySelector('#letterSize').innerHTML = "11,0 mm";
    }
    else if (lineNumber == 10) {
        document.querySelector('#snellenFraction').innerHTML = "20/22";
        document.querySelector('#decimalFraction').innerHTML = "0.90";
        document.querySelector('#letterSize').innerHTML = "9,7 mm";
    }
    else if (lineNumber == 11) {
        document.querySelector('#snellenFraction').innerHTML = "20/20";
        document.querySelector('#decimalFraction').innerHTML = "1.00";
        document.querySelector('#letterSize').innerHTML = "8,7 mm";
    }
}

function leftMouseClick() {
    drawRandomE(lineNumber);
}

// pega da memoria do browser o valor guardade de scalenumber alterado na pagina de calibration
document.querySelector('#scalenumber').innerHTML = "scale " + localStorage.getItem("scalenumber") + " pixels;";
const scalenumber = localStorage.getItem("scalenumber");
const scale = scalenumber * 1.02; // esse multiplicador foi feito por tentativa e erro até que o valor ficasse proximo do valor real em mm

// a primeira linha é o 1, a linha com maior tamanho de letra
let lineNumber = 1
printAcuityNumber(lineNumber);
drawRandomE(lineNumber);

// ouve o teclado para alterar o E para cada direçaõ de seta
document.addEventListener('keydown', function(event) {
    if (event.keyCode == 37 || event.keyCode == 39) {
        drawRandomE(lineNumber);
    }
    else if (event.keyCode == 40) {
        if (lineNumber < 11) {
            lineNumber++;
            printAcuityNumber(lineNumber);
            drawRandomE(lineNumber);
        }
    }
    else if (event.keyCode == 38) {
        if (lineNumber > 1) {
            lineNumber--;
            printAcuityNumber(lineNumber);
            drawRandomE(lineNumber);
        }
    }
});

const screen = document.querySelector('body');
screen.onclick = leftMouseClick;

screen.addEventListener('wheel', function(event) {
    if (event.deltaY < 0) {
        if (lineNumber > 1) {
            lineNumber--;
            printAcuityNumber(lineNumber);
            drawRandomE(lineNumber);
        }
    }
    else if (event.deltaY > 0)
    {
        if (lineNumber < 11) {
            lineNumber++;
            printAcuityNumber(lineNumber);
            drawRandomE(lineNumber);
        }
    }
});