// Importa a função createGlobalStyle do styled-components
import { createGlobalStyle } from 'styled-components';

// Cria um estilo global para o aplicativo
export default createGlobalStyle`

  * {
    margin: 0; /* Zera as margens */
    padding: 0; /* Zera os preenchimentos */
    outline: 0; /* Remove as bordas ao redor dos elementos */
    box-sizing: border-box; /* Define a caixa do modelo como 'border-box' */
  }

  html, body, #root {
    display: flex; /* Define a exibição como um flex container */
    align-items: center; /* Alinha os itens ao centro verticalmente */
    justify-content: center; /* Alinha os itens ao centro horizontalmente */
    height: 100%; /* Altura de 100% */
  }
  
  body {
    background: #171923; /* Cor de fundo do corpo do documento */
    -webkit-font-smoothing: antialiase; /* Suaviza as fontes no WebKit */
  }

  body, input, button {
    font: 14px sans-serif; /* Define a fonte e tamanho padrão */
    color: #000; /* Cor do texto para body, input e button */
  }

  input {
    height: 40px; /* Altura do input */
    width: 70%; /* Largura do input */
    border-radius: 8px; /* Borda arredondada */
    padding: 0 16px; /* Espaçamento interno */
    background: #FFF; /* Cor de fundo do input */
    border: 1px solid #6c63ff; /* Borda do input */
    background: #171923; /* Cor de fundo do input */
    color: #fff; /* Cor do texto do input */

    &::placeholder {
      background: #171923; /* Cor de fundo do placeholder */
      color: #fff; /* Cor do texto do placeholder */
    }
  }

  button {
    cursor: pointer; /* Altera o cursor para o formato de ponteiro */
    height: 40px; /* Altura do botão */
    width: 150px; /* Largura do botão */
    border-radius: 8px; /* Borda arredondada */
    font-weight: 500; /* Peso da fonte do botão */
    color: #FFF; /* Cor do texto do botão */
    border: 0; /* Remove a borda do botão */
    background: #519; /* Cor de fundo do botão */
  }
`;
