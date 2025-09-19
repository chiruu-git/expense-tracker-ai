import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const ExpenseForm = ({ addExpense, updateExpense, expenseToEdit, setExpenseToEdit }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        if (expenseToEdit) {
            setDescription(expenseToEdit.description);
            setAmount(expenseToEdit.amount);
            setCategory(expenseToEdit.category);
        } else {
            // This ensures the form clears if you cancel an edit
            setDescription(''); 
            setAmount(''); 
            setCategory('');
        }
    }, [expenseToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description || !amount || !category) return;

        const expenseData = { description, amount: +amount, category };
        
        if (expenseToEdit) {
            updateExpense(expenseToEdit._id, expenseData);
        } else {
            addExpense(expenseData);
        }

        // --- FIX: Reset the form fields after submission ---
        setDescription('');
        setAmount('');
        setCategory('');
        setExpenseToEdit(null); // Also clear the edit state
    };

    return (
        <div className="custom-card">
            <h4 className="mb-3" style={{ color: 'var(--headline-color)' }}>{expenseToEdit ? 'Edit Expense' : 'Add New Expense'}</h4>
            <Form onSubmit={handleSubmit}>
                <Row className="g-3">
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="e.g., Dinner with friends" required />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group>
                            <Form.Label>Amount (₹)</Form.Label>
                            <Form.Control type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="e.g., 1500" required />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group>
                            <Form.Label>Category</Form.Label>
                            <Form.Control type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="e.g., Food" required />
                        </Form.Group>
                    </Col>
                </Row>
                <div className="mt-4">
                    <Button className="btn-gradient" type="submit">{expenseToEdit ? 'Update Expense' : 'Add Expense'}</Button>
                    {expenseToEdit && <Button variant="secondary" className="ms-2" onClick={() => setExpenseToEdit(null)}>Cancel</Button>}
                </div>
            </Form>
        </div>
    );
};

export default ExpenseForm;