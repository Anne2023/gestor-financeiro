// Importa o módulo styled do styled-components
import styled from 'styled-components';

// Cria um componente 'Table' que renderiza uma tabela estilizada
export const Table = styled.table`
  width: 90%; /* Largura da tabela */
  background: #171923; /* Cor de fundo da tabela */
  color: #fff; /* Cor do texto na tabela */
  padding: 20px; /* Espaçamento interno da tabela */
  border-radius: 5px; /* Borda arredondada da tabela */
  max-width: 1120px; /* Largura máxima da tabela */
  margin: 20px auto; /* Margem da tabela para centralizá-la horizontalmente */
`;

// Cria um componente 'Th' (cabeçalho da tabela) estilizado
export const Th = styled.th`
  text-align: start; /* Alinhamento padrão do texto no cabeçalho da coluna */
  border-bottom: 2px solid #fff; /* Linha inferior para separar as células do cabeçalho */
  padding-bottom: 5px; /* Espaçamento inferior do cabeçalho */
  text-align: ${props => (props.alignCenter ? 'center' : 'start')}; /* Alinhamento do texto baseado na prop 'alignCenter' */
  width: ${props => (props.width ? props.width + '%' : 'auto')}; /* Largura da célula do cabeçalho */
`;

// Cria um componente 'Td' (célula da tabela) estilizado
export const Td = styled.td`
  padding-top: 15px; /* Espaçamento superior da célula */
  text-align: ${props => (props.alignCenter ? 'center' : 'start')}; /* Alinhamento do texto baseado na prop 'alignCenter' */
  word-break: break-all; /* Quebra de palavra para evitar que o texto ultrapasse os limites da célula */
  color: #fff; /* Cor do texto na célula */

  svg {
    /* Estilos para os ícones dentro da célula */
    width: 20px; /* Largura do ícone */
    height: 20px; /* Altura do ícone */
  }

  &:last-child {
    cursor: pointer; /* Define um cursor de ponteiro para a última célula, indicando que é interativa */
  }
`;

