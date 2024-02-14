// Importa o arquivo de estilo CSS para aplicar estilos ao componente CardEstudante
import "./styles.css";

// Define um componente funcional CardEstudante que recebe quatro propriedades: fotoUrl, nome, comidaQueNaoGosta e experienciaPositiva
const CardEstudante = ({
  fotoUrl,
  nome,
  comidaQueNaoGosta,
  experienciaPositiva,
}) => {
  return (
    // Renderiza um elemento <div> com a classe "card"
    <div className="card">
      {/* Renderiza uma imagem com a URL fornecida pela propriedade "fotoUrl" e um texto alternativo */}
      <img src={fotoUrl} alt="foto da estudante" />

      {/* Renderiza um elemento <div> com a classe "container" */}
      <div className="container">
        {/* Renderiza um cabeçalho <h4> com o nome fornecido pela propriedade "nome" */}
        <h4>{nome}</h4>

        {/* Renderiza um parágrafo com a comida que não gosta fornecida pela propriedade "comidaQueNaoGosta" */}
        <p>
          <b>Comida que não gosta: </b>
          {comidaQueNaoGosta}
        </p>

        {/* Renderiza um parágrafo com a experiência positiva fornecida pela propriedade "experienciaPositiva" */}
        <p>
          <b>Uma experiência muito massa: </b>
          {experienciaPositiva}
        </p>
      </div>
    </div>
  );
};

// Exporta o componente CardEstudante para que possa ser importado e usado em outros arquivos
export default CardEstudante;
