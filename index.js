// index.js

import p5 from 'p5';

new p5();

let numDiscos = 3; // Número de discos
let discos = [];
let torres = [];
let moves = [];
let step = 0;

// Função recursiva para resolver a Torre de Hanoi
function hanoi(n, origem, destino, auxiliar, moves) {
    if (n === 1) {
      console.log(`Mover disco 1 de ${origem} para ${destino}`);
      return;
    }
  
    hanoi(n - 1, origem, auxiliar, destino);
    console.log(`Mover disco ${n} de ${origem} para ${destino}`);
    hanoi(n - 1, auxiliar, destino, origem);
    moves.push([origem, destino]);

  }
  


  function setup() {
    createCanvas(400, 400); // Cria um canvas de 400x400 pixels
    // Inicialização das torres e discos
    discos = [[...Array(numDiscos).keys()].reverse()]; // Inicializa os discos em ordem decrescente na primeira torre

    hanoi(numDiscos, 0, 2, 1, moves); // Calcular os movimentos

  }

  function draw() {
    background(220);
    drawDisks();
    animateMove();
  }

  function drawDisks() {
    // Desenho das torres e discos
    for (let i = 0; i < torres.length; i++) {
        for (let j = 0; j < discos[i].length; j++) {
          rect(i * 100 + 20, height - 20 - j * 20, discos[i][j] * 20, 20);
        }
    }

    if (step < moves.length) {
        let [origem, destino] = moves[step];
        // ... mover o disco de origem para destino
        step++;
    }
  }

  function animateMove() {
    if (step < moves.length) {
      let [origem, destino] = moves[step];
      // Lógica para mover o disco:
      // 1. Remover o disco da torre de origem
      // 2. Adicionar o disco à torre de destino
      // 3. Atualizar a variável step
      step++;
    }
  }
