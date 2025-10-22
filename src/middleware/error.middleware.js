// function errorMiddleware(err, req, res, next) {
//   console.error(err.stack);
//   res.status(err.status || 500).json({
//     success: false,
//     message: err.message || 'Internal Server Error',
//   });
  
// }
function errorMiddleware(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
  });
}

module.exports = errorMiddleware;


// module.exports = errorMiddleware;