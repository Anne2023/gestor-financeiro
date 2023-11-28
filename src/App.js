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

