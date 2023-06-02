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
          <p className="typing-animation">link ou mandar me procurara<br />
            </p>
        </div>
      )}
    </div>
  );
}

export default Desafio3;
