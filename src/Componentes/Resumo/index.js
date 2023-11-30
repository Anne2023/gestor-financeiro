// Importa o React e o componente ResumoItens
import React from 'react';
import ResumoItens from '../ResumoItens';

// Importa o componente estilizado 'ResumoFinanceiro' do arquivo de estilos
import { ResumoFinanceiro } from './styles';

// Define o componente funcional 'Resumo' que recebe saldo, entrada e saída como props
function Resumo({ saldo, entrada, saida }) {
  return (
    // Renderiza um componente estilizado 'ResumoFinanceiro' que engloba três componentes 'ResumoItens'
    <ResumoFinanceiro>
      {/* Componente 'ResumoItens' que exibe o saldo */}
      <ResumoItens Valor={saldo} titulo="Saldo" color="#7d5166" borderColor="#7d5166" />
      {/* Componente 'ResumoItens' que exibe a entrada */}
      <ResumoItens Valor={entrada} titulo="Entrada" color="059705" borderColor="0efb0e" />
      {/* Componente 'ResumoItens' que exibe a saída */}
      <ResumoItens Valor={saida} titulo="Saída" color="e74545" borderColor="e99d9d" />
    </ResumoFinanceiro>
  );
}

export default Resumo; // Exporta o componente 'Resumo' para ser utilizado em outros arquivos
