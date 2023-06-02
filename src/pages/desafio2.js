import React, { useState } from 'react';
import './desafio1.css';

function Desafio2() {
  const [showChallenge, setShowChallenge] = useState(false);

  const handleShowChallenge = () => {
    setShowChallenge(true);
  };

  return (
    <div className="cont_des1">
        <h1> Parabens Guerreiro!</h1>
        <h3>voce desvendou a segunda charada</h3>
        <p>Mas essa foi bem facil mas sera que as proximas vao ser? </p>
        <p>
          para ver o desafio de quarta voce teara que esperar ate quarta,
        </p>
        <p>
          basta me enviar o codigo que o botao abaixo vai te mostrar para que eu possa te liberar o proxima chave 
        </p>
        <p>
          ha! nao esqueca de guardar estes numero !!
        </p>
        <p>
          Quando conseguir resolver um desafio retorne a pagina inicial e digite o novo codigo,se estiver correto uma nova porta se abrirar com a proxima charada a ser desevendada
        </p>
      <button onClick={handleShowChallenge}>Mostrar Desafio</button>
      {showChallenge && (
        <div className="challenge">
          <p className="typing-animation">30,<br />
            </p>
        </div>
      )}
    </div>
  );
}

export default Desafio2;
