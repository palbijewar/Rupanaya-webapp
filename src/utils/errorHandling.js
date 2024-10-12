export const errorHandling = async (error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || 'Something went wrong!';
  res.status(error.statusCode).json({
    status: error.statusCode,
    message: error.message,
  });
};
