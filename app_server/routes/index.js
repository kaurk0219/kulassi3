var express = require('express');
var router = express.Router();
var food_Control = require('../controllers/food');

router.get('/', food_Control.foodList);

router.get('/create_edit', food_Control.make_create);

router.get('/food/delete/:id', food_Control.delete_food_menu);

router.post('/create_edit', food_Control.create_item_Data);

router.get('/create_edit/:id', food_Control.load_Data);

router.post('/create_edit/:id', food_Control.store_Item);

module.exports = router;