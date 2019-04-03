const express = require("express");
const scoreRouter = express.Router();
const Score = require("../models/score");

scoreRouter.get("/", (req, res, next) => {
    Score.find({user: req.user._id},(err, scores) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(scores);
    });
});

scoreRouter.post("/", (req, res, next) => {
    const score = new Score(req.body);
    score.user = req.user._id;
    score.save(function (err, newScore) {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(newScore);
    })
});

scoreRouter.get("/:scoreId", (req, res, next) => {
    Score.findOne({_id: req.params.id, user: req.score._id}, (err, score) => {
        if (err) {
            res.status(500);
            return next(err);
        } else if (!score) {
            res.status(404)
            return next(new Error("No todo item found."));
        }
        return res.send(score);
    });
});


scoreRouter.delete("/:scoreId", (req, res, next) => {
    Score.findOneAndRemove({_id: req.params.id, score: req.score._id}, (err, score) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(score);
    });
});

module.exports = scoreRouter;