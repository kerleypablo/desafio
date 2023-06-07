import React, { useState } from 'react';
import './desafio1.css';

function Desafio3() {
  const [showChallenge, setShowChallenge] = useState(false);

  const handleShowChallenge = () => {
    setShowChallenge(true);
  };

  return (
    <div className="cont_des1">
        <h1> Parabens Guerreiro!</h1>
        <h3>conseguiu sair do labirinto e jutar todas as peças</h3>
        <p>
          oque sera que te espera ? seu proximo passo esta em outro universo
        </p>
        <p>
          uma situação conflitante sera que tera a solução constante?
        </p>
        <p>
          Quando conseguir resolver um desafio retorne a pagina inicial e digite o novo codigo,se estiver correto uma nova porta se abrirar com a proxima charada a ser desevendada
        </p>
      <button onClick={handleShowChallenge}>Mostrar Desafio</button>
      {showChallenge && (
        <div className="challenge">
          <p className="typing-animation">"
          Você é um aventureiro corajoso e destemido, conhecido por desbravar terras desconhecidas em busca de tesouros lendários. <br />
          Recentemente, você ouviu falar de um artefato antigo de poder inimaginável escondido em um castelo misterioso, nas profundezas de uma floresta sombria e perigosa.<br />
          Motivado pela promessa de grandeza e pelo desejo de proteger o mundo de um mal iminente, você parte em uma jornada perigosa em direção ao castelo.<br />
           O caminho até lá é repleto de desafios e enigmas, projetados para afastar os mais fracos de espírito.<br />
          Cada escolha pode levar a perigos desconhecidos ou a recompensas valiosas. Você precisa estar alerta, <br />
          confiar em seu instinto e habilidades para fazer as escolhas certas e chegar ao seu objetivo final.<br />
          Seu objetivo é encontrar o mago que habita o castelo e derrotá-lo em uma batalha épica.<br />
          Somente ao vencer o mago maligno você poderá obter o artefato lendário e garantir que ele não caia em mãos erradas.<br />
          <br /> a senha para o proximo portao é "RPG"<br />
          </p>
        </div>
      )}
    </div>
  );
}

export default Desafio3;
