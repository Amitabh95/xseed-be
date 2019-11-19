const express = require('express');
const router = express.Router();

const matchDataRoute = require('./matchDataRoute');

router.get('/', (req, res) => {
    res.render('index.ejs')
})


//MatchData Route
router.get('/singlematchdata/:id', matchDataRoute.getSingleMatchData);
router.post('/matchdatabyyear', matchDataRoute.getMatchDataByYear);
router.get('/allmatchdata', matchDataRoute.getAllMatchData);

module.exports = router;


