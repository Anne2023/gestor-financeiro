// Importa o módulo styled do styled-components
import styled from 'styled-components';

// Cria um componente 'Container' estilizado que renderiza uma div
export const Container = styled.div`
  margin: 15px auto; /* Margem externa superior e inferior de 15px e centralização horizontal */
  padding: 10px; /* Espaçamento interno */
  background: #171923; /* Cor de fundo */
  width: 90%; /* Largura de 90% */
  border-radius: 5px; /* Borda arredondada */
  border: 2px solid #533693; /* Borda sólida com cor */
  
  /* Estilização do formulário dentro do Container */
  form {
    display: flex; /* Exibição do formulário como um flex container */
    align-items: center; /* Alinhamento vertical ao centro */
    justify-content: center; /* Alinhamento horizontal ao centro */
    gap: 1em; /* Espaço entre os elementos internos do formulário */
    width: 100%; /* Largura total do formulário */
  }
`;

// Cria um componente 'RadioGroup' estilizado que renderiza um div
export const RadioGroup = styled.div`
  display: flex; /* Exibição como um flex container */
  align-items: center; /* Alinhamento vertical ao centro */
  color: #fff; /* Cor do texto */
  gap: 0.5em; /* Espaço entre os elementos internos */
`;
