const app = require('./app');
require('dotenv').config()

const PORT = process.env.PORT_SERVER

app.listen(PORT, () => console.log(`server starting on port ${PORT}!`))