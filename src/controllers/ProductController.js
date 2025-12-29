import Product from "../models/Product.js";

export default {
    getAllProducts: (req, res) => {
        Product.findAll({
            limit: req.query.limit || 100,
            order: [['createdAt', 'DESC']],
            attributes: ['id', 'sku', 'name', 'description', 'price', 'stock', 'status', 'createdAt'],
            page: req.query.page || 1
        })
            .then(products => {
                res.json(products);
            })
            .catch(err => {
                res.status(500).json({ error: 'Failed to retrieve products', message: err.message });
            });
    },
    getProductById: (req, res) => {
        const id = req.params.id;   
        Product.findByPk(id)
            .then(product => {
                if (product) {
                    res.json(product);
                } else {
                    res.status(404).json({ error: 'Product not found' });
                }
            })
            .catch(err => {
                res.status(500).json({ error: 'Failed to retrieve product' });
            });
    },
    createProduct: (req, res) => {
        const newProduct = req.body;
        Product.create(newProduct)
            .then(product => {
                res.status(201).json(product);
            })
            .catch(err => {
                res.status(500).json({ error: 'Failed to create product', message: err.message });
            });
    },
    updateProduct: (req, res) => {
        const id = req.params.id;
        const updatedProduct = req.body;
        Product.update(updatedProduct, { where: { id: id } })
            .then(([rowsUpdated]) => {
                if (rowsUpdated) {
                    res.json({ message: 'Product updated successfully' });
                } else {
                    res.status(404).json({ error: 'Product not found' });
                }
            })
            .catch(err => {
                res.status(500).json({ error: 'Failed to update product' });
            });
    },
    deleteProduct: (req, res) => {
        const id = req.params.id;
        Product.destroy({ where: { id: id } })
            .then(rowsDeleted => {
                if (rowsDeleted) {
                    res.json({ message: 'Product deleted successfully' });
                } else {
                    res.status(404).json({ error: 'Product not found' });
                }
            })
            .catch(err => {
                res.status(500).json({ error: 'Failed to delete product' });
            });
    }
};