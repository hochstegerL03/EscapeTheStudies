import 'colors';

const errorHandler = (err, req, res, next) => {
  console.log(`ERROR ======> ${err.message}`.bgRed.white);
  res.status(500).send('The server has encountered an error');
};

const notFoundHandler = async (req, res, next) => {
  console.log(`Not Found ======> ${req.originalUrl}`.bgBlue.black);
  res.status(404).send('The resource was not found on this server!');
  next();
};

export { errorHandler, notFoundHandler };
