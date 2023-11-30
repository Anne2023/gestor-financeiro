// Importa o React
import React from 'react';

// Importa o componente estilizado 'Itens' do arquivo de estilos
import { Itens } from './styles';

// Define o componente funcional 'ResumoItens' que recebe Valor, titulo, color e borderColor como props
function ResumoItens({ Valor, titulo, color, borderColor }) {
  return (
    // Renderiza um componente estilizado 'Itens' que exibe o título e o valor passados como props
    <Itens color={color} borderColor={borderColor}>
      {/* Título do resumo */}
      <h2>{titulo}</h2>
      {/* Valor do resumo com o símbolo de moeda (R$) */}
      <span>R${Valor}</span>
    </Itens>
  );
}

export default ResumoItens; // Exporta o componente 'ResumoItens' para ser utilizado em outros arquivos
