import React, { useState } from 'react';
import './desafio1.css';

function Desafio1() {
  const [showChallenge, setShowChallenge] = useState(false);

  const handleShowChallenge = () => {
    setShowChallenge(true);
  };

  return (
    <div className="cont_des1">
        <h1> Parabens Guerreiro!</h1>
        <h3>voce desvendou o primeira charada de iniciação o desafio de segunda, aqui voce da inicio a semana dos desafios</h3>
 <p>
          Desvende os enigmas, decifre os códigos e siga os indícios. Cada desafio superado revelará um novo código, uma nova
          porta a ser aberta.
        </p>
        <p>
          Preste atenção nas charadas enigmáticas, pois nelas está a chave para desvendar os mistérios ocultos. Somente com
          sagacidade e dedicação você alcançará o número final.
        </p>
        <p>
          Quando conseguir resolver um desafio retorne a pagina inicial e digite o novo codigo,se estiver correto uma nova porta se abrirar com a proxima charada a ser desevendada
          alguns voce precisara que chegue o dia certo do desafio para resolver
        </p>
      <button onClick={handleShowChallenge}>Mostrar Desafio de Terça</button>
      {showChallenge && (
        <div className="challenge">
          <p className="typing-animation">No cenário urbano de trajetos incertos,<br />
            Um codigo oculta entre marcos e desertos.<br />
            No instante em que o destino se revelou,<br />
            Um lugar único onde nossa história começou.<br />
            <br />
            Decifre o enigma, persiga as pistas,<br />
            Qual é o algarismo que o encontro registra?<br />
            Na combinação numerica, desvende o valor,<br />
            O número secreto que revela o local do nosso ardor.</p>
        </div>
      )}
    </div>
  );
}

export default Desafio1;
