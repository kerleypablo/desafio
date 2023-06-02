import React, { useState } from 'react';
import './Labirinto.css';

const matrizLabirinto = [
  [0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 1, 0, 1, 1, 1],
  [1, 0, 0, 0, 0, 1],
  [0, 0, 1, 0, 0, 1],
  [0, 1, 0, 0, 1, 1]
];

function Labirinto() {
  const [mensagem, setMensagem] = useState('Você está em um labirinto. Escolha uma direção: frente, trás, direita ou esquerda.');
  const [posicao, setPosicao] = useState({ x: 0, y: 0 });

  const handleEscolha = (direcao) => {
    let novaPosicao = { ...posicao };

    switch (direcao) {
      case 'cima':
        novaPosicao.y -= 1;
        break;
      case 'baixo':
        novaPosicao.y += 1;
        break;
      case 'direita':
        novaPosicao.x += 1;
        break;
      case 'esquerda':
        novaPosicao.x -= 1;
        break;
      default:
        setMensagem('Direção inválida. Escolha entre frente, trás, direita ou esquerda.');
        return;
    }

    // Verifica se a nova posição está dentro dos limites do labirinto
    if (novaPosicao.x >= 0 && novaPosicao.x < 6 && novaPosicao.y >= 0 && novaPosicao.y < 7) {

      if (matrizLabirinto[novaPosicao.y][novaPosicao.x] === 1) {
        setMensagem('Você bateu na parede. Escolha outra direção.');
      } else if (novaPosicao.x === 2 && novaPosicao.y === 6) {
        setPosicao(novaPosicao);
        setMensagem('Parabéns! Você encontrou a saída do labirinto! e na porta a sua frente o numero 042 com um certo bilhete "Desvende o mistério deste número,Um lugar em chamas, de grande fervor.Guarda um segredo de calor intenso,Onde histórias se encontram em um só consenso."');
      } else {
        setPosicao(novaPosicao);
        setMensagem(`Você se moveu para a posição (${novaPosicao.x +1 }, ${novaPosicao.y +1}). Escolha uma direção.`);
      }
    } else {
      setMensagem('Você bateu na parede. Escolha outra direção.');
    }
  };

  return (
    <div className="labirinto-container">
      <p className="mensagem">{mensagem}</p>
      <div className="botoes-container">
        
        <button className="botao" onClick={() => handleEscolha('esquerda')}>esquerda</button>
        <button className="botao" onClick={() => handleEscolha('direita')}>direita</button>
        <button className="botao" onClick={() => handleEscolha('baixo')}>baixo</button>
        <button className="botao" onClick={() => handleEscolha('cima')}>cima</button>
      </div>
    </div>
  );
}

export default Labirinto;
