const MatchDataModel = require('../../models/matchData');

module.exports = {

    getSingleMatchData: async (req, res) => {
        const id = req.params.id;
        try {
            const fetchedData = await MatchDataModel.findOne({ id }).exec();
            if (!fetchedData) return res.status(404).json({ error: false, message: "Match data not found" });
            return res.json({ error: false, payload: fetchedData })
        } catch (error) {
            return res.status(500).json({ error: true, message: error.message });
        }
    },

    getMatchDataByYear: async (req, res) => {
        const year = req.body.year;
        try {
            const fetchedData = await MatchDataModel.find({ season: year }).exec();
            if (!fetchedData) return res.status(404).json({ error: false, message: `No match data not found for year ${year}` });
            return res.json({ error: false, payload: fetchedData })
        } catch (error) {
            return res.status(500).json({ error: true, message: error.message });
        }
    },

    getAllMatchData: async (req, res) => {
        try {
            const fetchedData = await MatchDataModel.find({}).exec();
            if (!fetchedData) return res.status(404).json({ error: false, message: `Match data not found` });
            return res.json({ error: false, payload: fetchedData })
        } catch (error) {
            return res.status(500).json({ error: true, message: error.message });
        }
    }
};