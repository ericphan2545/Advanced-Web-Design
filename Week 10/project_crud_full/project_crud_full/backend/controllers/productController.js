const { Product } = require('../models');

module.exports = {
  async list(req, res) {
    const products = await Product.findAll({ order: [['id','DESC']] });
    res.json(products);
  },

  async get(req, res) {
    const p = await Product.findByPk(req.params.id);
    if (!p) return res.status(404).json({ message: 'Not found' });
    res.json(p);
  },

  async create(req, res) {
    const { name, price } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;
    const product = await Product.create({ name, price, image });
    res.status(201).json(product);
  },

  async update(req, res) {
    const { name, price } = req.body;
    const p = await Product.findByPk(req.params.id);
    if (!p) return res.status(404).json({ message: 'Not found' });
    if (req.file) p.image = `/uploads/${req.file.filename}`;
    p.name = name; p.price = price;
    await p.save();
    res.json(p);
  },

  async destroy(req, res) {
    const p = await Product.findByPk(req.params.id);
    if (!p) return res.status(404).json({ message: 'Not found' });
    await p.destroy();
    res.json({ message: 'Deleted' });
  }
};
