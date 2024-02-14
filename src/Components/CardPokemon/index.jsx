// Importa o arquivo de estilo CSS para aplicar estilos ao componente CardPokemon
import "./styles.css";

// Define um componente funcional CardPokemon que recebe quatro propriedades: url, nome, foto e id
const CardPokemon = ({ url, nome, foto, id }) => {
  return (
    // Renderiza um link <a> com a URL fornecida pela propriedade "url" e a chave única fornecida pela propriedade "id", com a classe "pokemon-item"
    <a href={url} key={id} className="pokemon-item">
      {/* Renderiza uma imagem com a URL fornecida pela propriedade "foto" e um texto alternativo */}
      <img src={foto} alt="Foto do pokemon" />
      {/* Renderiza um parágrafo com o nome fornecido pela propriedade "nome" */}
      <p> {nome} </p>
    </a>
  );
};

// Exporta o componente CardPokemon para que possa ser importado e usado em outros arquivos
export default CardPokemon;
