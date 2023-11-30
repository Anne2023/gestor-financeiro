// Importa o módulo styled do styled-components
import styled from 'styled-components';

// Cria um componente estilizado 'Itens' que renderiza uma div
export const Itens = styled.div`
  display: flex; /* Exibição do componente como um flex container */
  align-items: center; /* Alinhamento dos itens ao centro verticalmente */
  justify-content: center; /* Alinhamento dos itens ao centro horizontalmente */
  flex-direction: column; /* Organização dos itens em coluna */

  gap: 1.5em; /* Espaçamento entre os elementos */
  background: ${props => `#${props.color}`}; /* Cor de fundo com base na prop 'color' */
  color: #fff; /* Cor do texto */
  padding: 15px; /* Espaçamento interno */
  width: 18%; /* Largura do componente */
  height: 15vh; /* Altura do componente */

  border: 2px solid ${props => `#${props.borderColor}`}; /* Borda sólida com base na prop 'borderColor' */
  border-top-right-radius: 30px; /* Raio de borda superior direito */
  border-top-left-radius: 15px; /* Raio de borda superior esquerdo */
  border-bottom-right-radius: 15px; /* Raio de borda inferior direito */
  border-bottom-left-radius: 30px; /* Raio de borda inferior esquerdo */
  transition: all 0.3s ease-in; /* Efeito de transição suave */

  & span {
    font-size: 16px; /* Tamanho da fonte do span */
    font-weight: 600; /* Peso da fonte do span */
  }

  &:hover {
    transform: scale(1.1); /* Aumenta ligeiramente o tamanho ao passar o mouse sobre o componente */
  }
`;
