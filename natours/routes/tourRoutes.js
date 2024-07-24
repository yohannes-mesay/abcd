const express = require('express');
const router = express.Router();
const tourController = require('../controller/tourController');

// router.param('id', tourController.checkID);
router
  .route('/')
  .get(tourController.getTours)
  .post(tourController.checkBody, tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour);
module.exports = router;

