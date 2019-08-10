const express = require('express');

const db = require('../data/db-config.js');

const router = express.Router();

router.get('/makes', async (req, res) => {
  try {
    const carYears = await db.column('make').select().from('cars');
    
    if (carYears.length > 0) {
      res.status(200).json({
        years: carYears
      })
    } else {
      res.status(404).json({
        message: "No years available at this time."
      })
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error"
    })
  }
});

router.get('/', async (req, res) => {
  try {
    const cars = await db('*').from('cars');

    if (cars.length > 0) {
      res.status(200).json({
        cars: cars
      })
    } else {
      res.status(404).json({
        message: "No cars available at this time."
      })
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error"
    })
  }
});

router.post('/', async (req, res) => {
  const newCar = req.body;

  try {
    if (newCar.VIN && newCar.make && newCar.model && newCar.mileage) {
      const addCar = await db('cars').insert(newCar);

      if (addCar) {
        res.status(200).json({
          message: addCar
        })
      }
    } else {
      res.status(500).json({
        message: "All required fields not found."
      })
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      err: err
    })
  }
})

module.exports = router;