// Importa o React e o useState hook do React
import React, { useState } from 'react';

// Importa os componentes estilizados 'Container' e 'RadioGroup' do arquivo de estilos
import { Container, RadioGroup } from './styles';

// Define o componente 'InputForm' que recebe a função 'handleSave' como prop
function InputForm({ handleSave }) {

  // Define estados utilizando o hook useState
  const [descricao, setDescricao] = useState(''); // Estado para armazenar a descrição
  const [valor, setValor] = useState(0); // Estado para armazenar o valor
  const [tipo, setTipo] = useState(0); // Estado para armazenar o tipo (0 para entrada, 1 para saída)

  // Função para salvar os dados do formulário
  function Salvar(event) {
    event.preventDefault(); // Previne o comportamento padrão de atualização da página

    // Cria um objeto com os dados financeiros informados no formulário
    const dadosFinanceiro = {
      'descricao': descricao,
      'valor': valor,
      'tipo': tipo
    };

    handleSave(dadosFinanceiro); // Chama a função handleSave passando os dados financeiros
    event.target.reset(); // Reseta o formulário após o envio
  }

  return (
    <Container>
      {/* Formulário para inserção de dados financeiros */}
      <form onSubmit={Salvar}>
        {/* Input para inserção da descrição */}
        <input type="text" placeholder='Informe a descrição' onChange={e => setDescricao(e.target.value)} />

        {/* Input para inserção do valor */}
        <input type="text" placeholder='Informe o valor' onChange={e => setValor(e.target.value)} />

        {/* Grupo de botões de rádio para escolher o tipo (entrada ou saída) */}
        <RadioGroup>
          <input
            type="radio"
            id="rblEntrada"
            defaultChecked
            name="group1"
            onChange={() => setTipo(0)} // Define o tipo como 0 (entrada) quando selecionado
          />
          <label htmlFor="rblEntrada">Entrada</label>

          <input
            type="radio"
            id="rblSaida"
            name="group1"
            onChange={() => setTipo(1)} // Define o tipo como 1 (saída) quando selecionado
          />
          <label htmlFor="rblSaida">Saída</label>
        </RadioGroup>

        {/* Botão para submeter o formulário */}
        <button type='submit'>Cadastrar</button>
      </form>
    </Container>
  );
}

export default InputForm; // Exporta o componente 'InputForm' como padrão para ser utilizado em outros arquivos
