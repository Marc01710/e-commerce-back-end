const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const allCategories =await Category.findAll({
      include:[{model: Product}],
    });
    res.status(200).json(allCategories);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const category =await Category.findByPk(req.params.id,{
      include: [{model: Product}],
    });
    if (!category) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json(error)
  }
});

router.post('/', async (req, res) => {
  try {
    const newCategory= await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  const updateCategory= await Category.update(req.body,{   
    where: {
      id: req.params.id,
    },
    }).catch((error) => res.json(error));
    res.json(updateCategory);
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedCategory= await Category.destroy ({
    where: {
      id: req.params.id,
    }
  })
  res.json(deletedCategory);
} catch (error) {
  res.json(error)
  }
});

module.exports = router;
