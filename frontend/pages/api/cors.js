const Cors = require('cors');
import initMiddleware from './initMiddleware'

// Initialize the cors middleware
export const configCors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)