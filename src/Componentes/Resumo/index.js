import React from 'react';
import ResumoItens from '../ResumoItens';
import { ResumoFinanceiro } from './styles';

function Resumo({saldo,entrada, saida}) {
  return (
    <ResumoFinanceiro>
      <ResumoItens Valor={saldo} titulo="Saldo" color="#7d5166" borderColor="#7d5166"/>
      <ResumoItens Valor={entrada} titulo="Entrada" color="059705" borderColor="0efb0e"/>
      <ResumoItens Valor={saida} titulo="Saída" color="e74545" borderColor="e99d9d"/>
    </ResumoFinanceiro>
  );
}

export default Resumo;