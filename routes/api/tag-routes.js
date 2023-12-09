const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const allTags = await Tag.findAll({
      include: [{
        model: Product,
        through: ProductTag
      }],
    });
    res.status(200).json(allTags);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tag =await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          through: ProductTag,
        }
      ],
    });
    res.status(200).json(tag);
  } catch (error) {
    console.log(error);
    res.status(500).json(error) 
  }
});

router.post('/', async (req, res) => {
  try {
    const newTag= await Tag.create(req.body);
    res.status(201).json(newTag);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedTag = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(updatedTag);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedTag= await Tag.destroy ({
      where: {
        id: req.params.id,
      }
    })
    res.json(deletedTag);
  } catch (error) {
    res.json(error)
  }
});

module.exports = router;
