import React, { useState } from 'react';
import './App.css';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import IncomeForm from './IncomeForm';
import IncomeList from './IncomeList';

function App() {
  // State para guardar despesas e receitas
  const [expenses, setExpenses] = useState([]); // Array para despesas
  const [incomes, setIncomes] = useState([]); // Array para receitas

  // Funções para adicionar despesas e receitas ao estado correspondente
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]); // Adiciona uma nova despesa ao array de despesas
  };
  const addIncome = (income) => {
    setIncomes([...incomes, income]); // Adiciona uma nova receita ao array de receitas
  };

  // Funções para calcular o total de despesas e receitas
  const getTotalExpenses = () => {
    // Utiliza a função reduce para somar todos os valores de despesas
    return expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
  };

  const getTotalIncomes = () => {
    // Utiliza a função reduce para somar todos os valores de receitas
    return incomes.reduce((total, income) => total + parseFloat(income.amount), 0);
  };
  return (
    <div className="App">
      {/* Título da aplicação */}
      <h1>Gerenciador Financeiro</h1>

      {/* Exibe o saldo atual: total de receitas, total de despesas e saldo resultante */}
      <div className="balance">
        <h2>Total de Receitas: R$ {getTotalIncomes()}</h2>
        <h2>Total de Despesas: R$ {getTotalExpenses()}</h2>
        <h2>Saldo: R$ {getTotalIncomes() - getTotalExpenses()}</h2>
      </div>

      {/* Componentes para adicionar novas despesas e receitas */}
      <div className="forms">
        {/* Componente para adicionar despesas */}
        <ExpenseForm addExpense={addExpense} />
        {/* Componente para adicionar receitas */}
        <IncomeForm addIncome={addIncome} />
      </div>

      {/* Listas para exibir despesas e receitas */}
      <div className="lists">
        {/* Componente para exibir lista de despesas */}
        <ExpenseList expenses={expenses} />
        {/* Componente para exibir lista de receitas */}
        <IncomeList incomes={incomes} />
      </div>
    </div>
  );
}

export default App;
