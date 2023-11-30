// Importa o React e Hooks necessários do React
import React, { useState, useEffect } from 'react';
import Resumo from '../components/Resumo'; // Importa o componente Resumo
import Input from '../components/InputForm'; // Importa o componente Input
import Grid from '../components/Grid'; // Importa o componente Grid

import { Container } from './styles'; // Importa um estilo de contêiner

function Home() {
  // Define os estados usando hooks
  const [dadosFin, setDadosFin] = useState(JSON.parse(localStorage.getItem('Financeiro')) ?? []);
  const [saldo, setSaldo] = useState(0);
  const [entrada, setEntrada] = useState(0);
  const [saida, setSaida] = useState(0);
  const [atualizaGrid, setAtualizaGrid] = useState(false);

  // Hook useEffect que calcula saldo, entradas e saídas sempre que atualizaGrid muda
  useEffect(() => {
    const TotalSaida = dadosFin.filter((item) => item.tipo === 1)
      .map((transaction) => Number(transaction.valor));

    const TotalEntrada = dadosFin.filter((item) => item.tipo === 0)
      .map((transaction) => Number(transaction.valor));

    const Entradas = TotalEntrada.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const Saidas = TotalSaida.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const SaldoTotal = Math.abs(Entradas - Saidas).toFixed(2);

    setSaldo(SaldoTotal);
    setEntrada(Entradas);
    setSaida(Saidas);
  }, [atualizaGrid]); // Atualiza quando atualizaGrid muda

  // Função para lidar com a adição de novos dados
  function handleSave(dados) {
    const data = [...dadosFin, dados]; // Cria um novo array de dados adicionando os novos dados
    setDadosFin(data); // Atualiza o estado com os novos dados
    setAtualizaGrid(!atualizaGrid); // Altera o estado para atualizar o grid
    localStorage.setItem('Financeiro', JSON.stringify(data)); // Atualiza os dados no armazenamento local
  }

  // Função para lidar com a exclusão de um item
  function onDelete(index) {
    const data = dadosFin.slice(); // Cria uma cópia do array de dados
    data.splice(index, 1); // Remove o item específico do array
    setDadosFin(data); // Atualiza o estado com o novo array
    setAtualizaGrid(!atualizaGrid); // Altera o estado para atualizar o grid
    localStorage.setItem('Financeiro', JSON.stringify(data)); // Atualiza os dados no armazenamento local
  }

  return (
    <Container>
      {/* Renderiza o componente Resumo passando os valores do saldo, entradas e saídas */}
      <Resumo saldo={saldo} entrada={entrada} saida={saida}/>
      {/* Renderiza o componente Input passando a função handleSave como prop */}
      <Input handleSave={handleSave}/>
      {/* Renderiza o componente Grid passando os dados e a função onDelete */}
      <Grid dadosFin={dadosFin} onDelete={onDelete}/>
    </Container>
  )
}

export default Home; // Exporta o componente Home como padrão para ser utilizado em outros arquivos
