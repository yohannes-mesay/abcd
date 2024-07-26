exports.getTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    // results: tours.length,
    // data: { tours },
  });
};

exports.getTour = (req, res) => {
  const id = req.params.id * 1;
  // const tour = tours.find((el) => el.id === id);
  // res.status(200).json({
  //   status: 'success',
  //   data: tour,
  // });
};
exports.createTour = (req, res) => {
  // const newId = tours.length - 1 + 1;
  // const newTour = Object.assign({ id: newId }, req.body);
  // tours.push(newTour);
  // fs.writeFile(
  //   `${__dirname}/dev-data/data/tours-simple.json`,
  //   JSON.stringify(tours),
  //   () => {
  //     res.status(201).json({ status: 'success', data: newTour });
  //   }
  // );
};
exports.checkBody = (req, res, next) => {
  console.log('checking body');
  // const body = req.body;
  // if (!body.name || !body.price) {
  //   return res.status(400).json({
  //     status: 'Invalid input',
  //     message: 'There must be name and price',
  //   });
  // }
  // next();
};
exports.updateTour = (req, res) => {
  const {
    params: { id },
    body,
  } = req;
  const parseId = parseInt(id);
  if (isNaN(parseId)) return res.status(404);
  // const subject = tours.find((el) => el.id === parseId);
  // const tourId = subject.id;
  // tours[tourId] = { ...subject, ...body};

};
//const deleteTour=nor immplmented
