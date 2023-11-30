// Importações necessárias para o componente React
import React from 'react';
import { MdDelete, MdArrowCircleUp, MdArrowCircleDown } from 'react-icons/md'; // Importa ícones de exclusão e setas
import { Table, Th, Td } from './styles'; // Importa componentes de estilo para a tabela

// Definição do componente funcional 'Grid' que recebe os dados financeiros e a função onDelete como props
function Grid({ dadosFin, onDelete }) {
  return (
    <Table> {/* Renderiza um componente de tabela */}
      <thead> {/* Cabeçalho da tabela */}
        <tr>
          <Th width={40}>Descricao</Th> {/* Coluna para a descrição */}
          <Th width={40}>Valor</Th> {/* Coluna para o valor */}
          <Th width={10} alignCenter>Tipo</Th> {/* Coluna para o tipo */}
          <Th width={10}></Th> {/* Coluna vazia para a ação */}
        </tr>
      </thead>
      <tbody> {/* Corpo da tabela */}
        {/* Mapeia os dados financeiros para criar linhas na tabela */}
        {dadosFin?.map((dadosFin, index) => (
          <tr key={index}> {/* Cria uma linha para cada conjunto de dados financeiros */}
            <Td>{dadosFin.descricao}</Td> {/* Coluna com a descrição */}
            <Td>R${Math.abs(dadosFin.valor).toFixed(2)}</Td> {/* Coluna com o valor formatado */}
            <Td alignCenter> {/* Coluna centralizada para exibir a seta para cima ou para baixo com base no tipo */}
              {/* Renderiza a seta para cima ou para baixo dependendo do tipo */}
              {dadosFin.tipo === 1 ? (
                <MdArrowCircleDown color='red' /> /* Setas para baixo com a cor vermelha */
              ) : (
                <MdArrowCircleUp color='green' /> /* Setas para cima com a cor verde */
              )}
            </Td>
            <Td alignCenter> {/* Coluna centralizada para o ícone de exclusão */}
              <MdDelete onClick={() => onDelete(index)} /> {/* Ícone de exclusão que chama a função onDelete com o índice do item */}
            </Td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default Grid; // Exporta o componente 'Grid' para ser usado em outros arquivos React
