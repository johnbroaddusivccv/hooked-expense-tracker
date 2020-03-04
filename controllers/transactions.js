// @DESC --- Get all transactions
// @route --- GET /api/v1/transactions
// @access Public
exports.getTransactions = (req, res, next) => {
  res.send("GET transactions");
};

// @DESC --- Add a transactions
// @route --- POST /api/v1/transactions
// @access Public
exports.addTransaction = (req, res, next) => {
  res.send("POST transaction");
};

// @DESC --- Delete a transactions
// @route --- GET /api/v1/transactions/:id
// @access Public
exports.deleteTransaction = (req, res, next) => {
  res.send("DELETE transaction");
};
