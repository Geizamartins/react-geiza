// Importa o arquivo de estilo CSS para aplicar estilos ao componente CaixaDeTexto
import "./styles.css";

// Define um componente funcional CaixaDeTexto que recebe quatro propriedades: label, placeholder, handleChange e value
const CaixaDeTexto = ({ label, placeholder, handleChange, value }) => {
  return (
    // Renderiza um elemento <div> com a classe "campo-texto"
    <div className="campo-texto">
      {/* Renderiza uma etiqueta de texto com o conteúdo fornecido pela propriedade "label" */}
      <label>{label}</label>
      {/* Renderiza um elemento <input> com as propriedades value, placeholder e onChange fornecidas */}
      <input
        value={value} // Define o valor do campo de texto com base na propriedade "value"
        placeholder={placeholder} // Define o texto de placeholder com base na propriedade "placeholder"
        onChange={handleChange} // Define a função de manipulação de mudança de texto com base na propriedade "handleChange"
      ></input>
    </div>
  );
};

// Exporta o componente CaixaDeTexto para que possa ser importado e usado em outros arquivos
export default CaixaDeTexto;
