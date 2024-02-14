// Importa o hook useState do React para controlar o estado do contador
import { useState } from "react";

// Importa o componente Botao e o arquivo de estilo CSS
import Botao from "../Botao";
import "./styles.css";

// Define o componente Contador
const Contador = () => {
  // Define o estado inicial do contador como 0 usando o hook useState
  const [valor, setValor] = useState(0);

  // Função para incrementar o contador
  const incrementar = () => {
    // Atualiza o estado do contador usando a função setValor, adicionando 1 ao valor anterior
    // Usar a função de atualização de estado que recebe uma função como argumento é uma boa prática para evitar erros de concorrência
    setValor((valorAnterior) => valorAnterior + 1);
  };

  // Função para decrementar o contador
  const decrementar = () => {
    // Atualiza o estado do contador usando a função setValor, subtraindo 1 do valor anterior
    // Usar a função de atualização de estado que recebe uma função como argumento é uma boa prática para evitar erros de concorrência
    setValor((valorAnterior) => valorAnterior - 1);
  };

  // Retorna a estrutura JSX do componente
  return (
    <section className="contador-section">
      <h1>Contador</h1>
      <main className="contador-main">
        {/* Renderiza o botão de incremento, passando a função incrementar como ação */}
        <Botao texto="+" acao={incrementar} />
        {/* Renderiza o valor atual do contador */}
        <h2 className="contador-value">{valor}</h2>
        {/* Renderiza o botão de decremento, passando a função decrementar como ação */}
        <Botao texto="-" acao={decrementar} />
      </main>
    </section>
  );
};

// Exporta o componente Contador para ser usado em outros arquivos
export default Contador;
