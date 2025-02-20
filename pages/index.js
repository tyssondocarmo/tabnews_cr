import { useState } from 'react';

function Home() {
    const [respostaSelecionada, setRespostaSelecionada] = useState(null);

  const handleSelecionarResposta = (valor) => {
    setRespostaSelecionada(valor);
    if (valor === 'sim') {
      // Para limpar os efeitos após 5 segundos
      setTimeout(() => setRespostaSelecionada(null), 5000);
    } else if (valor === 'nao') {
      // Para limpar a mensagem após 3 segundos
      setTimeout(() => setRespostaSelecionada(null), 3000);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <p>
        <strong>Baronesa, por gentileza, assinale a resposta correta para o enunciado abaixo.</strong>
      </p>
      <p>
        Com base em seus sentimentos de hoje e vislumbre de um maravilhoso futuro, você aceitaria ficar com o Tysson CR para todo o sempre?
      </p>
      <form>
        <div>
          <label>
            <input
              type="radio"
              name="resposta"
              value="sim"
              onChange={() => handleSelecionarResposta('sim')}
            />
            SIIIM, para todo sempre!!!
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="resposta"
              value="nao"
              onChange={() => handleSelecionarResposta('nao')}
            />
            Nhaum, já passou minha vontade.
          </label>
        </div>
      </form>

      {/* Efeito Explosivo */}
      {respostaSelecionada === 'sim' && (
        <>
          <div className="explosao">
            {[...Array(10)].map((_, index) => (
              <div key={index} className="explosao-particula"></div>
            ))}
          </div>

          {/* Corações Subindo */}
          <div className="coracoes">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className="coracao"
                style={{
                  left: `${Math.random() * 100}vw`,
                  animationDuration: `${Math.random() * 3 + 2}s`,
                }}
              >
                {['❤️', '💖', '💘', '💕', '💞'].sort(() => Math.random() - 0.5)[0]}
              </div>
            ))}
          </div>
        </>
      )}

      {/* Caixa de Texto Temporária */}
      {respostaSelecionada === 'nao' && (
        <div className="mensagem-caixa">
          O CAVALO MORDEU TUA CABEÇA, PEQUENA?
        </div>
      )}

      {/* Link para WhatsApp */}
      <p style={{ marginTop: '20px', textAlign: 'center' }}>
        Tire print da resposta e mande no WhatsApp ultra secreto desse{' '}
        <a
          href="https://wa.me/+5593981191915?text=Olá!%20Segue%20minha%20escolha%20da%20pergunta%20secreta."
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'blue', textDecoration: 'underline' }}
        >
          LINK
        </a>.
      </p>

      <style jsx>{`
        /* Estilo do efeito explosivo */
        .explosao {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200px;
          height: 200px;
          animation: explosao-animacao 1s ease-out forwards;
        }

        .explosao-particula {
          position: absolute;
          width: 20px;
          height: 20px;
          background-color: #ffcc00;
          border-radius: 50%;
          animation: particula-animacao 1s ease-out forwards;
        }

        .explosao-particula:nth-child(1) {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          animation-delay: 0.1s;
        }

        .explosao-particula:nth-child(2) {
          top: 40%;
          left: 60%;
          transform: translate(-50%, -50%) scale(0);
          animation-delay: 0.2s;
        }

        .explosao-particula:nth-child(3) {
          top: 60%;
          left: 40%;
          transform: translate(-50%, -50%) scale(0);
          animation-delay: 0.3s;
        }

        .explosao-particula:nth-child(4) {
          top: 30%;
          left: 70%;
          transform: translate(-50%, -50%) scale(0);
          animation-delay: 0.4s;
        }

        .explosao-particula:nth-child(5) {
          top: 70%;
          left: 30%;
          transform: translate(-50%, -50%) scale(0);
          animation-delay: 0.5s;
        }

        @keyframes explosao-animacao {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(3);
          }
        }

        @keyframes particula-animacao {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(0);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(2);
          }
        }

        /* Estilo dos corações */
        .coracoes {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .coracao {
          position: absolute;
          font-size: 10rem; /* Corações gigantes */
          animation: subir 5s linear forwards;
        }

        @keyframes subir {
          0% {
            transform: translateY(100vh);
            opacity: 1;
          }
          100% {
            transform: translateY(-10vh);
            opacity: 0;
          }
        }

        /* Estilo da mensagem temporária */
        .mensagem-caixa {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: #ff4d4d;
          color: white;
          font-size: 2rem;
          font-weight: bold;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          animation: aparecer-desaparecer 3s ease-in-out forwards;
        }

        @keyframes aparecer-desaparecer {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          10% {
            opacity: 1;
            transform: scale(1);
          }
          90% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.8);
          }
        }
      `}</style>
    </div>
  )
}

export default Home;