// Controllers
import { registerUser } from '../controllers/userControllers.js';
import { createOrder } from '../controllers/orderController.js';

const routes = (app) => {
  // User Controller
  app.route('/signup').post(registerUser);

  // Order Controller
  app.route('/order').post(createOrder);
};

export default routes;
