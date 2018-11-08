var express = require('express');
var router = express.Router();
var ctrlFood = require('../controllers/food');

router.get('/food', ctrlFood.get_food_details);
router.get('/food/:id', ctrlFood.get_food_by_id);
router.post('/food', ctrlFood.post_food);
router.delete('/food/:id', ctrlFood.delete_food);
router.put('/food/:id', ctrlFood.put_food);

module.exports = router;