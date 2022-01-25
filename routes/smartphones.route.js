const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const smartphones_controller = require('../controllers/smartphones.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/', smartphones_controller.test);

router.post('/create', smartphones_controller.create);

router.get('/:id/details', smartphones_controller.details);
 
router.put('/:id/update', smartphones_controller.update);

router.delete('/:id/delete',smartphones_controller.delete);

module.exports = router;