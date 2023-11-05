const routeNotFound = (req, res, next) => {
  const error = new Error("Not Found");
  res.status(404);
  next(error);
};

// change for production
const errorHandler = (err, req, res, next) => {

  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;


  res.status(statusCode);


  const errorResponse = {
    status: "error",
    message: err.message || "An unexpected error occurred",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }), // Include stack trace only in development
  };


  console.error(err);

  res.json(errorResponse);
};



module.exports = { routeNotFound, errorHandler };
