// Controllers
import { createUser } from '../controllers/userControllers.js';
import { creatOrder } from '../controllers/orderController.js';

const routes = (app) => {
  // User Controller
  app.route('/signup').post(createUser);

  // Order Controller
  app.route('/order').post(creatOrder);
};

export default routes;
