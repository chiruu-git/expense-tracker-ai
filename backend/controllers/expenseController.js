const Expense = require('../models/expense');

// @desc    Get all expenses
// @route   GET /api/expenses
exports.getExpenses = async (req, res, next) => {
  try {
    const expenses = await Expense.find();
    return res.status(200).json({ success: true, count: expenses.length, data: expenses });
  } catch (err) {
    return res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// @desc    Add expense
// @route   POST /api/expenses
exports.addExpense = async (req, res, next) => {
  try {
    const { description, amount, category } = req.body;
    const expense = await Expense.create(req.body);
    return res.status(201).json({ success: true, data: expense });
  } catch (err) {
    return res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// @desc    Update expense
// @route   PUT /api/expenses/:id
exports.updateExpense = async (req, res, next) => {
    try {
        const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!expense) {
            return res.status(404).json({ success: false, error: 'No expense found' });
        }
        return res.status(200).json({ success: true, data: expense });
    } catch (err) {
        return res.status(500).json({ success: false, error: 'Server Error' });
    }
};


// @desc    Delete expense
// @route   DELETE /api/expenses/:id
exports.deleteExpense = async (req, res, next) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) {
      return res.status(404).json({ success: false, error: 'No expense found' });
    }
    await expense.deleteOne(); // Use deleteOne() instead of remove()
    return res.status(200).json({ success: true, data: {} });
  } catch (err) {
    return res.status(500).json({ success: false, error: 'Server Error' });
  }
};