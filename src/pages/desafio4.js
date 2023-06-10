/* eslint-disable default-case */
import React, { useState } from "react";
import "./desafio4.css";

const GamePage = () => {
  const [character, setCharacter] = useState("");
  const [conversation, setConversation] = useState("");
  const [stage, setStage] = useState(1);
  const [answer, setAnswer] = useState("");
  const [deserto, setDeserto] = useState(false);
  const [mata, setmata] = useState(false);
  const [totem, setToten] = useState(false);
  const [carctherHelth, setCharacterHelth] = useState(120)
  const [boss1, setboss1] = useState(100);
  const [bossfinal, setbosfinal] = useState(200);
  const[arma, setArma] = useState(true);

  const handleCharacterSelection = (selectedCharacter) => {
    setCharacter(selectedCharacter);
    setStage(2);
    setConversation(`Bem-vindo(a), ${selectedCharacter}! Você está prestes a embarcar em uma jornada cheia de perigos e desafios. Deseja continuar?\n(1) Sim\n(2) Não'
    `);
  };

  const handleConversation = () => {
    switch (stage) {
      case 2:
        setConversation('Ótimo! Você se encontra no meio do Deserto do Perigo. Há duas direções que você pode seguir.\n(1) Caminho da Mata\n(2) Caminho do deserto');
        setStage(3);
        setAnswer("");
        break;
      case 3:
        if (answer === "1") {
          setConversation("Você seguiu pelo caminho da Mata, um floresta fechada, voce segue(1) ou retorna(2)");
          setStage(4);
          setmata(true);
          setDeserto(false);
          setAnswer("");
        } else if (answer === "2") {
            setConversation("Você seguiu pelo caminho da deserto, uma area aberta tempo seco,e muito vento, voce segue(1) ou retorna(2)");
            setDeserto(true);
            setmata(false);
            setStage(4);
          setAnswer("");
        } else {
          setConversation("Opção inválida. Tente novamente!");
        }
        break;
      case 4:
        if (answer === "1" && mata ) {
          setConversation("na mata a dentro voce se depara com uma bifurcação voce vaai para dreita(1) ou para esquerda(2)?");
          setStage(5);
          setAnswer("");
        } else if (answer === "2" ) {
          setConversation("voce retornou a bifurcação ");
          setStage(2);// fazer caminho dezzerto 
          setAnswer("");
        } else if (answer === "1"  && deserto) {
            setConversation("no deserto a dentro voce nao sabe pra onde ir voce segue(1) ou volta(2)?");
            setStage(5);
            setAnswer("");
          } 
        else {
          setConversation("Opção inválida. Tente novamente!");
        }
        break;
      case 5:
        if (answer === "1" && mata) {
          setConversation("voce se depara com um objeto estranho, aproxima e pega(1) , deixa e segue caminho(2)");
          setStage(7);
          setAnswer("");
        } else if (answer === "2" && mata) {
          setConversation("Você procurou uma ponte e conseguiu atravessar o rio em segurança. Continue sua jornada.");
          setStage(7);// fazer caminho dezzerto 
          setAnswer("");
        } else if (deserto) {
            setConversation("voce continua andando pelo deserto percebe que nao consegue masi voltar e nao sabe para onde ir , procura e procura e nao encontra ninguem por perto voce morre pois nao conseguiu sobreviver ");
            setStage(0);// fazer caminho dezzerto 
            setAnswer(""); 
        } else {
          setConversation("Opção inválida. Tente novamente!");
        }
        break;
        case 7:
        if (answer === "1" && mata) {
          setConversation("aparentemente é um totem que voce nao conhece voce guarda(1) ou larga(2)");
          setStage(8);
          setAnswer("");
        } else if (answer === "2" && mata) {
          setConversation("voce ignorou o totem e seguiu em frente , mas ao olhar pra tarz ele sumiu. voce segue em frente(3)");
          setStage(8);
          setAnswer("");
        } else {
          setConversation("Opção inválida. Tente novamente!");
        }
        break;
        case 8:
        if (answer === "1" && mata) {
          setConversation("voce guarda o totem e e segue seu caminho , e segue em frente porem escuta barulhos estranhos na mata , voce segue (1) ou volta(2)");
          setToten(true);
          setStage(9);
          setAnswer("");
        } else if (answer === "2" && mata) {
            setConversation("voce nao guarda o totem e e segue seu caminho ,porem percebe que uma luz sai de sua bolsa , e sente um peso a mais , para pra olhar e percebe que o totem esta la dentro, voce tenta largar mas elesempre acaba voltando so te resta seguir porem escuta barulhos estranhos na mata , voce segue (1)");
            setStage(9);
          setAnswer("");
        } else if (answer === "3" && mata) {
            setConversation("voce seguiu seu caminho porem percebe que uma luz sai de sua bolsa , e sente um peso a mais , para pra olhar e percebe que o totem esta la dentro, voce tenta largar mas elesempre acaba voltando so te resta seguir em frente(1)");
            setStage(9);
          setAnswer("");
        } else {
          setConversation("Opção inválida. Tente novamente!");
        }
        break;
        case 9:
        if (answer === "1" && mata)  {
          setConversation("voce segue seu caminho, e logo a sua frente voce percebe um pequeno anaimalzinho , aparentemente um cachorro deitado tremendo como se estivesse perdido e comfrio vc se aproxima(1) , passa direto(2)");
          setStage(10);
          setAnswer("");
        } else if (answer === "2" && mata) {
          setConversation("voce tenta voltar , mas a mata nao deixa e se depara a sua frente voce percebe um pequeno anaimalzinho , aparentemente um cachorro deitado tremendo como se estivesse perdido e comfrio vc se aproxima(1) , passa direto(2)");
          setStage(10);// fazer caminho dezzerto 
          setAnswer("");
        } else {
          setConversation("Opção inválida. Tente novamente!");
        }
        break;
        case 10:
            if (answer === "1" && mata) {
              setConversation("ao se aproximar voce percebe que nao é um cachorro mas um tipo diferente de lobo que ao se aproximar ele comeca a acrescer, e crescer suas garras a aparecer seus dentes se arreganhar e voce percebe que esta em uma batalha! voce se prepara para atacar(1) , voce tenta fugir(2), ");
              setStage(11);
              setAnswer("");
            } else if (answer === "2" && mata) {
                setConversation("voce passa direto , mas comeca escutar atras de voce uns barulhos olha para traz e percebe que nao é um cachorro mas um tipo diferente de lobo que ao se aproximar ele comeca a acrescer, e crescer suas garras a aparecer seus dentes se arreganhar e voce percebe que esta em uma batalha! voce se prepara para atacar(1) , voce tenta fugir(2),");
                setStage(11);
              setAnswer("");
            } else {
              setConversation("Opção inválida. Tente novamente!");
            }
            break;
            case 11:
                if (answer === "1" && mata) {
                  setConversation("voce se prepara pra atacar mas o monstro foi mais rapido e te ataca com as garras vc defende(1), esquiva(2)");
                  setStage(12);
                  setAnswer("");
                } else if (answer === "2" && mata) {
                    setConversation("voce tenta fugir mas o monstro foi masi rapido e ja te deu um ataque desprevinido digite(2) ");
                    setStage(13);// fazer caminho dezzerto 
                  setAnswer("");
                } else {
                  setConversation("Opção inválida. Tente novamente!");
                }
                break;
                case 12:
                    if (answer === "1" && mata) {
                      setConversation("voce tenta se denfender mas nao possui um escudo , entao vc sofre um dano de -10 e fica com 90HP , voce ataca(1) ou vc foge(2)");
                      setStage(13);
                      setCharacterHelth(90)
                      setAnswer("");
                    } else if (answer === "2" && mata) {
                        setConversation("voce consegue se esquivar sem dano , voce ataca (1) ou foge(2)");
                        setStage(13);// fazer caminho dezzerto 
                      setAnswer("");
                    } else {
                      setConversation("Opção inválida. Tente novamente!");
                    }
                    break;     
                    case 13:
                        if (answer === "1" && mata) {
                          const Damageboss = Math.floor(Math.random() * 10) + 15;
                          setboss1(boss1 - Damageboss);
                          if(boss1 <= 0) {
                            setConversation(`voce deuderrotou o monstro , e percebe q surgiu um brilho em seu totem, mas nada acontece e se apaga, vose segue adiante(1) `);
                            setStage(14);
                          } else {
                          const damage = Math.floor(Math.random() * 10) + 11;
                          if (carctherHelth <= 0 ) {
                            setConversation(`voce morreu ! recomece o jogo`);
                            setStage(0);
                          }else {
                          setConversation(`voce deu ${Damageboss} de dano, porem ele revidou e te deu dando de ${damage}, seu hp: ${carctherHelth - damage} voce ataca(1) ou foge(2)`);
                          setCharacterHelth(carctherHelth - damage)
                          setStage(13);
                          setAnswer("");
                        }
                        }
                        } else if (answer === "2" && mata) {
                            const damage = Math.floor(Math.random() * 10) + 28;
                            if (carctherHelth <= 0 ) {
                                setConversation(`voce morreu ! recomece o jogo`);
                                setStage(0);
                              }else {
                            setConversation(`voce tenta fugir mas nao consegue e toma um ataque desprevinido de ${damage}  , voce ataca (1) ou foge(2)`);
                            setStage(13);// fazer caminho dezzerto 
                          setAnswer("");
                              }
                        } else {
                          setConversation("Opção inválida. Tente novamente!");
                        }
                        break;    
                        case 14:
                            if (answer === "1" && mata) {
                              setConversation("voce se depara com dois caminhos direta(1) esquerda(2)");
                              setStage(15);
                              setAnswer("");
                            } else {
                              setConversation("Opção inválida. Tente novamente!");
                            }
                            break;  
                            case 15:
                                if (answer === "1" && mata) {
                                  setConversation("voce segue na direita se depara com um outro mostro mas percebe qeu ele nao esta vivo, voce se aproxima(1) , passa direto(2)");
                                  setStage(16);
                                  setAnswer("");
                                } else if (answer === "2" && mata) {
                                    setConversation("voce segue a esquerda, e percebe um objeto brilhante , voce aproxima(1) passa direto(2))");
                                    setStage(16.2);// fazer caminho dezzerto 
                                  setAnswer("");
                                } else {
                                  setConversation("Opção inválida. Tente novamente!");
                                }
                                break;
                                case 16.2:
                                    if (answer === "1" && mata) {
                                      setConversation(`voce se aproxima do objeto e percebe que se curou com +50 voce esta com ${carctherHelth + 50} segue em frente(1)`);
                                      setCharacterHelth(carctherHelth + 50)
                                      setStage(16.3);
                                      setAnswer("");
                                    } else if (answer === "2" && mata) {
                                        setConversation("voce passa direto do objeto e segue seu caminho(1)");
                                        setStage(16.3);
                                      setAnswer("");
                                    } else {
                                      setConversation("Opção inválida. Tente novamente!");
                                    }
                                    break;
                                    case 16.3:
                                        if (answer === "1" && mata) {
                                          setConversation(`voce encontra um bifurcação voce vai para direita(1) ou esquerda(2)`);
                                          setStage(16.4);
                                          setAnswer("");
                                        } else {
                                          setConversation("Opção inválida. Tente novamente!");
                                        }
                                        break;
                                        case 16.4:
                                            if (answer === "1" && mata) {
                                              setConversation(`vose se deparou com um muro bem grande, com uma porta bem pequena como se fosse uma entrada lateral de um grande castelo voce entra(1) da volta(2)`);
                                              setStage(21.2);
                                              setAnswer("");
                                            } else if (answer === "2" && mata) {
                                                setConversation("voce se depara com um pedra preta parecendo um cristal em pe , e nela tem um buraco onde suspostamente se encaixa alguma coisa voce coloca mao(1) , coloca totem(2)");
                                                setStage(16.7);
                                              setAnswer("");
                                            } else {
                                              setConversation("Opção inválida. Tente novamente!");
                                            }
                                            break;
                                            case 16.7:
                                                if (answer === "1" && mata) {
                                                  setConversation(`voce coloca sua mao e se sente mais forte como se sua vida tivesse maior e o totem brilha como se estivesse esvaziando , voce recebe mais 250 de vida e um poder extra 10, tenta colocar o totem e nada acontece , em segui segue o caminho(1)`);
                                                  setCharacterHelth(carctherHelth + 250)
                                                  setArma(true)
                                                  totem(false)
                                                  setStage(16.4);
                                                  setAnswer("");
                                                } else if (answer === "2" && mata) {
                                                    setConversation("voce encaixa o totme e percebe q parece que foi feito para colocar la, na mesma hora o totem emite uma luz branca forte em linha reta sentido ao cel como se estivesse se esvazindo com oq tinha dentro, apos o brilho acabar nada acontece, vc tenta colocar  mao e nada acontece e voce segue seu caminho(1)");
                                                    setToten(false);
                                                    setStage(16.4);
                                                  setAnswer("");
                                                } else {
                                                  setConversation("Opção inválida. Tente novamente!");
                                                }
                                                break;
                                case 16:
                                    if (answer === "1" && mata) {
                                      setConversation("voce se aproxima, e ao mesmo tempo vc percebe q o totem brilhou novamente por alguns instantes e nada aconteceu, abaixo do mostro encotra uma pedra brilhante que te restaura +100 de vida, e voce segue seu caminho(1)");
                                      setCharacterHelth(carctherHelth + 100)
                                      setStage(17);
                                      setAnswer("");
                                    } else if (answer === "2" && mata) {
                                        setConversation("voce passa direto e assim que passa proximo ao mostro morto seu totem brila novamente por alguns instantes e nada acontece voce segue em frente(1) ");
                                        setStage(17);
                                        setAnswer("");
                                    } else {
                                      setConversation("Opção inválida. Tente novamente!");
                                    }
                                    break;
                                    case 17:
                                    if (answer === "1" && mata) {
                                      setConversation("voce se depara com uma bifurcação voce vai para direita(1) esquerda(2)");
                                      setStage(17.1);
                                      setAnswer("");
                                    } else if (answer === "2" && mata) {
                                        setConversation("no caminho voce encotra arma aparentemente bem forte voce pega(1) larga pra la(2)");
                                        setStage(19);
                                        setAnswer("");
                                    } else {
                                      setConversation("Opção inválida. Tente novamente!");
                                    }
                                    break;
                                    case 17.1:
                                        if (answer === "1" && mata) {
                                          setConversation("adiante voce percbe um brilho logo a frente seguir(2)");
                                          setStage(17);
                                          setAnswer("");
                                        } else if (answer === "2" && mata) {
                                            setConversation("voce encontra um outro objeto brilhante que te cura +80 hp segue(2)");
                                            setCharacterHelth(carctherHelth + 80)
                                            setStage(19);
                                            setAnswer("");
                                        } else {
                                          setConversation("Opção inválida. Tente novamente!");
                                        }
                                        break;
                                    case 19:
                                    if (answer === "1" && mata) {
                                      setConversation("voce pegou sua arma que lhe concede mais 10 de poder e 50 de hp, e so te resta seguir em frnte(1)");
                                      setArma(true);
                                      setCharacterHelth(carctherHelth +50);
                                      setStage(20);
                                      setAnswer("");
                                    } else if (answer === "2" && mata) {
                                        setConversation("voce seguiu em frente e so lhe resta mata a dentro e nada mais , voce so segue emfrente(1)");
                                        setStage(20);
                                        setAnswer("");
                                    } else {
                                      setConversation("Opção inválida. Tente novamente!");
                                    }
                                    break;
                                    case 20:
                                        if (answer === "1" && mata) {
                                          setConversation("voce se depara com um portao enorme da frente de um castelo voce entra(1) da a volta(2)");
                                          setStage(21);
                                          setAnswer("");
                                        } else {
                                          setConversation("Opção inválida. Tente novamente!");
                                        }
                                        break;
                                        case 21:
                                            if (answer === "1" && mata) {
                                              setConversation("voce abre o portao pesado , mas consegue entrar , logo a frente voce ve um mago que ao tentar empurra a porta percebeu sua entrada e esta se preparando para atacar, a porta ja se fecha sozinho e esta encurralado e ele ja lança um ataque em voce esquiva(1) defende(2)");
                                              setStage(22);
                                              setAnswer("");
                                            } else if (answer === "2" && mata) {
                                                setConversation("voce da a volta e encontra um outra bem menor entra(1) volta principal(2)");
                                                setStage(21.2);
                                                setAnswer("");
                                            } else {
                                              setConversation("Opção inválida. Tente novamente!");
                                            }
                                            break;
                                            case 21.2:
                                                if (answer === "1" && mata) {
                                                  setConversation("voce entra na porta lateral ve mago  de costa segurando um pergaminho, oque voce esta buscando, ele nao percebe sua presença voce ataca(1) chama atenção(2)");
                                                  setStage(21.3);
                                                  setAnswer("");
                                                } else if (answer === "2" && mata) {
                                                    setConversation("voce esta de volta ao protao principal");
                                                    setStage(20);
                                                    setAnswer("");
                                                } else {
                                                  setConversation("Opção inválida. Tente novamente!");
                                                }
                                                break;
                                                case 21.3:
                                                if (answer === "1" && mata) {
                                                    let damage = Math.floor(Math.random() * 10) + 15 + 5;
                                                    if(arma){ damage += 10}
                                                    setbosfinal(bossfinal - damage);
                                                    let damagecaract = Math.floor(Math.random() * 10) + 15;
                                                    setCharacterHelth(carctherHelth - damagecaract)
                                                  setConversation(`voce difere o primeiro ataque enquanto ele esta desprevinido dano ${damage} porem ele revida e te da um ano de ${damagecaract} voce ataca(1)  foge(2) sua vida: ${carctherHelth}`);
                                                  setStage(22);
                                                  setAnswer("");
                                                } else if (answer === "2" && mata) {
                                                    let damagecaract = Math.floor(Math.random() * 10) + 15;
                                                    setCharacterHelth(carctherHelth - damagecaract)
                                                    setConversation(`voce chamou a atenção do mago , ele se assuta e ja lança um golpe que nao consegue nem desviar com dano ${damagecaract} sua vida: ${carctherHelth} voce ataca(1) foge(2)`);
                                                    setStage(22);
                                                    setAnswer("");
                                                } else {
                                                  setConversation("Opção inválida. Tente novamente!");
                                                }
                                                break;
                                                case 22:
                                                    if (answer === "1" && mata) {
                                                        debugger
                                                        if(carctherHelth <= 0) {
                                                            setConversation(`voce morreu recomece o jogo `);
                                                            setStage(0);
                                                            setAnswer("");
                                                        } else
                                                        if(bossfinal <= 0) {
                                                            setConversation(`voce derrotou o mago parabens !! voce percebe q o pergaminho esta logo ao lado pegar(1) `);
                                                            setStage(23);
                                                            setAnswer("");
                                                        }
                                                        else if (bossfinal <= 50 && totem) {
                                                            setConversation(`voce percebeu que quando o boss estava quase morrendo seu totem emitiu um brilho muito forte e uma faixa de luz foi em direção ao mago e curou toda sua vida , e um pouco da sua por paassar em voce vc recebeu 50 de vida voce ataca(1) foge(2)`);
                                                            setbosfinal(200)
                                                            setToten(false);
                                                            setCharacterHelth(carctherHelth + 50);
                                                            setStage(22);
                                                            setAnswer("");
                                                        } else {
                                                            const acerto = Math.floor(Math.random() * 35) ;
                                                            let damage = Math.floor(Math.random() * 10) + 11;
                                                            let texto= ''
                                                            let texto2= ''
                                                            let damagecaract = Math.floor(Math.random() * 10) + 15;
                                                            if(arma){ damage += 10}
                                                            if (acerto < 10 ) {
                                                                texto ='voce errou'
                                                            }  else if ( acerto > 10 && acerto < 30) {
                                                                setbosfinal(bossfinal - damage);
                                                                texto = `voce ataca dando dano ${damage}`
                                                            } else {
                                                                setbosfinal(bossfinal - damage / 2);
                                                                texto = `voce ataca dando dano ${damage/2} pois ele conseguiu se defender`
                                                            }
                                                            const acerto2 = Math.floor(Math.random() * 35) 
                                                            if (acerto2 < 10 ) {
                                                                texto2 ='ele errou'
                                                            }  else if ( acerto2 > 10 && acerto < 30) {
                                                                setCharacterHelth(carctherHelth - damagecaract)
                                                                texto2 = `elerevidou o  ataque te  dando dano ${damagecaract}`
                                                            } else {
                                                                setCharacterHelth(carctherHelth - damagecaract/2)
                                                                texto2 = `ele revidou mas vc consegue defender um pouco dano  ${damagecaract/2} `
                                                            }
                                                            
                                                            setConversation(`${texto} porem ele revida e ${texto2}  voce ataca(1)  foge(2) sua vida: ${carctherHelth}`);
                                                            setStage(22);
                                                            setAnswer("");
                                                        }
                                                    } else if (answer === "2" && mata) {
                                                        if(carctherHelth <= 0) {
                                                            setConversation(`voce morreu recomece o jogo `);
                                                            setStage(0);
                                                        }
                                                        let damagecaract = Math.floor(Math.random() * 10) + 15 + 5;
                                                        setCharacterHelth(carctherHelth - damagecaract)
                                                        setConversation(`voce tenta fogir mas nao consegue e  o mago te da um dano desprevinido ${damagecaract} sua vida: ${carctherHelth} voce ataca(1) foge(2)`);
                                                        setStage(22);
                                                        setAnswer("");
                                                    } else {
                                                      setConversation("Opção inválida. Tente novamente!");
                                                    }
                                                    break;
                                                case 23:
                                                    if (answer === "1" && mata) {
                                                      setConversation(`voce pega o pergaminho e nele esta escrito :
                                                      <p>Nas notas melódicas que ecoaram no ar</P>,
                                                      <p>O segredo oculto, pronto para desvendar.</P>
                                                      <p>Na harmonia sutil, a pista está presente,</P>
                                                      <p>Desvendar a senha é o desafio iminente.</P>
                                                      <p>Compreende a melodia queixosa e vibrante,</P>
                                                      <p>Em seus compassos está o código constante.</P>
                                                      <p>A música escolhida, sussurrada em seu ouvido,</P>
                                                      <p>Desvendará o enigma, trazendo-te o sentido.</P>`
                                                      );
                                                      setStage(22);
                                                      setAnswer("");
                                                    } else {
                                                      setConversation("Opção inválida. Tente novamente!");
                                                    }
                                                    break;
                                }
                                
                                
  };

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  return (
    <div className="game-page">
      <h1>Jogo de Aventura</h1>
      {character === "" ? (
        <div className="character-selection">
          <h2>Selecione seu personagem:</h2>
          <button onClick={() => handleCharacterSelection("guerreiro")}>guerreiro</button>
          <button onClick={() => handleCharacterSelection("mago")}>mago</button>
          <button onClick={() => handleCharacterSelection("paladino")}>paladino</button>
        </div>
      ) : (
        <div className="game-content">
          <h2>Bem-vindo(a), {character}!</h2>
          <p>{conversation}</p>
          {stage !== 26 && (
            <div className="answer-input">
              <input type="text" value={answer} onChange={handleAnswerChange} autoFocus placeholder="Digite o número da sua resposta" />
              <button onClick={handleConversation}>Enviar</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GamePage;
