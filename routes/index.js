const express     = require('express');
const router      = express.Router();
const App         = require('../models/apps.js');

/* GET home page */
router.get('/', async (req, res, next) => {
  res.redirect('/apps');
})

router.get('/apps', async (req, res, next) => {
  let max = 50, start, order = 'asc';
  if (req.query.order){
    order = req.query.order;
  }
  if (req.query.max && Number(req.query.max) <= 50){
    max = Number(req.query.max)
  }
  switch(req.query.by){
    case 'id':
      if (req.query.start){
        start = req.query.start;
      } else {
        start = 1;
      }
      if (req.query.end){
        end = req.query.end;
      } else {
        end = 250;
      }
      try{
        let appsById = await App.find({id: {$gte: start, $lte: end}}, {_id: 0, __v: 0}).sort({id: order}).limit(max)
        res.json(appsById);
      } catch(err){
        console.log(err);
        res.json(undefined);
      }

      break;
    case 'name':
      if (req.query.start){
        start = req.query.start;
      } else {
        start = 'my-app-001';
      }
      if (req.query.end){
        end = req.query.end;
      } else {
        end = 'my-app-250';
      }
      try{
        let appsByName = await App.find({name: {$gte: start, $lte: end}}, {_id: 0, __v: 0}).sort({id: order}).limit(max)
        res.json(appsByName);
      } catch(err){
        console.log(err);
        res.json(undefined);
      }
      break;
    default:
      let defaultApps = await App.find({id: {$lte: 50}}, {_id: 0, __v: 0}).sort({id: 'asc'});
      res.json(defaultApps);
  }
});

module.exports = router;
