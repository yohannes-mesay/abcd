const fs = require('fs');
const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

const getTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: { tours },
  });
};

const getTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  console.log(req.params);
  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid Id',
    });
  }
  res.status(200).json({
    status: 'success',
    data: tour,
  });
};
const createTour = (req, res) => {
  const newId = tours.length - 1 + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    () => {
      res.status(201).json({ status: 'success', data: newTour });
    }
  );
};
const updateTour = (req, res) => {
  const {
    params: { id },
    body,
  } = req;
  const parseId = parseInt(id);
  if (isNaN(parseId)) return res.status(404);
  const subject = tours.find((el) => el.id === parseId);
  const tourId = subject.id;
  tours[tourId] = { ...subject, ...body };
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    () => {
      res.status(201).json({ status: 'success', data: tours[tourId] });
    }
  );
};
//const deleteTour=nor immplmented

// app.get('/api/v1/tours', getTours);
// app.post('/api/v1/tours', createTour);
// app.get('/api/v1/tours/:id', getTour);
// app.patch('/api/v1/tours/:id', updateTour);
app.route('/api/v1/tours').get(getTours).post(createTour);
app.route('/api/v1/tours/:id').get(getTour).patch(updateTour);

app.listen(port, () => {
  console.log('Server stated listening...');
});
