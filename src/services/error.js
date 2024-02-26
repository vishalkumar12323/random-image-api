const handleError = async (err, req, res, next) => {
  const statusCode = err.statusCode || 422;
  const message = err.message;

  res.status(statusCode).json({ message });
};

module.exports = handleError;
