const mongoose = require("mongoose");

const matchDataSchema = new mongoose.Schema({
    id: {
        type: String
    },
    season: {
        type: String
    },
    city: {
        type: String
    },
    date: {
        type: String
    },
    team1: {
        type: String
    },
    team2: {
        type: String
    },
    toss_winner: {
        type: String
    },
    toss_decision: {
        type: String
    },
    result: {
        type: String
    },
    dl_applied: {
        type: String
    },
    winner: {
        type: String
    },
    win_by_runs: {
        type: String
    },
    win_by_wickets: {
        type: String
    },
    player_of_match: {
        type: String
    },
    venue: {
        type: String
    },
    umpire1: {
        type: String
    },
    umpire2: {
        type: String
    },
    umpire3: {
        type: String
    }
});

module.exports = mongoose.model("matchData", matchDataSchema);