import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Navbar } from 'react-bootstrap';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Chatbot from './components/ChatBot';
import './App.css';

const API_URL = 'http://localhost:5001/api/expenses';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [expenseToEdit, setExpenseToEdit] = useState(null);

  useEffect(() => {
    getExpenses();
  }, []);

  const getExpenses = async () => {
    try {
      const res = await axios.get(API_URL);
      setExpenses(res.data.data);
    } catch (error) {
      console.error("Error fetching expenses", error);
    }
  };

  const addExpense = async (expense) => {
    try {
      const res = await axios.post(API_URL, expense);
      setExpenses([...expenses, res.data.data]);
    } catch (error) {
      console.error("Error adding expense", error);
    }
  };

  const deleteExpense = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setExpenses(expenses.filter(expense => expense._id !== id));
    } catch (error) {
      console.error("Error deleting expense", error);
    }
  };
  
  const updateExpense = async (id, updatedExpense) => {
    try {
        const res = await axios.put(`${API_URL}/${id}`, updatedExpense);
        setExpenses(expenses.map(exp => (exp._id === id ? res.data.data : exp)));
        setExpenseToEdit(null); // Clear editing state
    } catch (error) {
        console.error("Error updating expense", error);
    }
};


  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">💰 Expense Manager</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <div className="dashboard-container">
          <main>
            <ExpenseForm 
              addExpense={addExpense} 
              expenseToEdit={expenseToEdit} 
              setExpenseToEdit={setExpenseToEdit}
              updateExpense={updateExpense} 
            />
            <ExpenseList 
              expenses={expenses} 
              deleteExpense={deleteExpense} 
              setExpenseToEdit={setExpenseToEdit}
            />
          </main>
          <aside>
            <Chatbot />
          </aside>
        </div>
      </Container>
    </>
  );
}

export default App;