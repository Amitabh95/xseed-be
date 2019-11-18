const express = require('express')
const router = express.Router()
const expressJwt = require('express-jwt')

const config = require('../../../Config')[process.env.NODE_ENV || 'development']

const matchDataRoute = require('./matchDataRoute');

router.get('/', (req, res) => {
    res.render('index.ejs')
})


//MatchData Route
router.get('/singlematchdata/:id', matchDataRoute.getSingleMatchData);
router.get('/matchdatabyyear', matchDataRoute.getMatchDataByYear);
router.get('/allmatchdata', matchDataRoute.getAllMatchData);

module.exports = router;


