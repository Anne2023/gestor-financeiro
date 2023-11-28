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
