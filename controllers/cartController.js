const Cart = require('../models/Cart');
const Product = require('../models/Product');

// POST /cart - Add product to cart
exports.addToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const userId = req.user.id;

        // Check product exists
        const product = await Product.findById(productId);
        if (!product) return res.status(404).json({ message: 'Product not found' });

        let cart = await Cart.findOne({ userId });
        if (!cart) {
            cart = new Cart({ userId, items: [] });
        }

        const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += quantity;
        } else {
            cart.items.push({ productId, quantity });
        }

        await cart.save();
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// PUT /cart/:productId
exports.updateCartItem = async (req, res) => {
    try {
        const { quantity } = req.body;
        const userId = req.user.id;
        const { productId } = req.params;

        let cart = await Cart.findOne({ userId });
        if (!cart) return res.status(404).json({ message: 'Cart not found' });

        const item = cart.items.find(item => item.productId.toString() === productId);
        if (!item) return res.status(404).json({ message: 'Item not found in cart' });

        item.quantity = quantity;
        await cart.save();
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// DELETE /cart/:productId
exports.removeCartItem = async (req, res) => {
    try {
        const userId = req.user.id;
        const { productId } = req.params;

        let cart = await Cart.findOne({ userId });
        if (!cart) return res.status(404).json({ message: 'Cart not found' });

        cart.items = cart.items.filter(item => item.productId.toString() !== productId);
        await cart.save();
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
