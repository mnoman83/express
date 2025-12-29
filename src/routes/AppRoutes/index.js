import express from 'express';
const router = express.Router();
// import express from 'express';
import ProductController from '../../controllers/ProductController.js';
import UserController from '../../controllers/UserController.js';
import authMiddleware from '../../middlewares/auth.middleware.js';

router.post('/auth/login', UserController.login);
router.get('/products', authMiddleware, ProductController.getAllProducts);
router.get('/products/:id', authMiddleware, ProductController.getProductById);
router.post('/products', authMiddleware, ProductController.createProduct);
router.put('/products/:id', authMiddleware, ProductController.updateProduct);
router.delete('/products/:id', authMiddleware, ProductController.deleteProduct);

export default function Router() {
    return router;
};
