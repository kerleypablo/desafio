import React, { useState } from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [isGifVisible, setIsGifVisible] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleInputChange = (event) => {
    setPassword(event.target.value);
  };
  const corectPassword = (desafio) => {
    setIsPasswordCorrect(true);
    setIsGifVisible(true);
    setTimeout(() => {
        setIsRedirecting(true);
        setTimeout(() => {
          navigate(`desafio${desafio}`);
        }, 2000);
    }, 2000);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    switch (password) {
        case "startthegame" :
            corectPassword('startthegame')
        break;
        case "470":
            corectPassword(470)
        break;
        case "110":
          corectPassword(110)
      break;
      case "ibis":
        corectPassword('ibis')
    break;
    case "250":
        corectPassword(250)
    break;
      case "RPG":
        corectPassword("RPG");
    break;
   default :
      setIsPasswordCorrect(false);
      setIsGifVisible(true);
      setTimeout(() => {
        setIsGifVisible(false);
      }, 2000);
}
  };

  return (
    <div className="container">
      <h1>Qual é o codigo?</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="password" value={password} onChange={handleInputChange} />
        </label>
        <button type="submit">Verificar</button>
      </form>
      {isGifVisible && (
        <div className="gif-container">
          {isPasswordCorrect ? (
            <img
              src="https://media.giphy.com/media/uahfGygKmX82yks02n/giphy.gif"
              width="100%"
              height="100%"
              className="gif2"
              alt="GIF"
            />
          ) : (
            <img
              className="gif"
              src="https://media4.giphy.com/media/UNLJ5LgAxzgFVaigGK/giphy.gif?cid=ecf05e47xvnj6zprh9baij2adv8gjd08r3hgvj08fukovl2e&ep=v1_stickers_search&rid=giphy.gif&ct=s"
              alt="GIF"
            />
          )}
        </div>
      )}
      {isRedirecting && <div>Redirecionando...</div>}
    </div>
  );
}

export default Home;
