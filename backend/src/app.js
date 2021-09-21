const express = require('express');
require('express-async-errors');
// const appError = require('http-errors')
const AppError = require('./shared/errors/AppError')
const cors = require('cors');
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger.json');

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

const routes = require('./routes');

app.use(cors());

// Set default API response
app.get('/', (req, res) => {
    res.status(200).json({
      status: 'API Is Working',
      message: 'API REST LDAP HANDLER SERVICES ',
    });
  });

app.use('/api/v1', routes);

// error handler middleware - put this in other files
app.use((error, request, response, next) => {

  console.log("AppError: ", error)

  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      message: error.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${error.message}`,
  });

  
});

module.exports = app; 

// export { app };