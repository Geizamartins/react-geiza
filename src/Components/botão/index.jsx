// Importa o arquivo de estilo CSS para aplicar estilos ao componente Botão
import "./styles.css";

// Define um componente funcional Botao que recebe duas propriedades: texto e acão
const Botao = ({ texto, acao }) => {
  return (
    // Renderiza um elemento <button> com a classe "botão" e uma função de clique definida pela propriedade "acão"
    <button className="botao" onClick={acao}>
      {/* Renderiza o texto fornecido pela propriedade "texto" dentro do botão */}
      {texto}
    </button>
  );
};

// Exporta o componente Botao para que possa ser importado e usado em outros arquivos
export default Botao;
