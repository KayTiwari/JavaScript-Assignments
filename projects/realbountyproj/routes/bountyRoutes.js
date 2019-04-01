const express = require('express');
const bountyRoute = express.Router();
const Bounty = require('../models/bountySchema.js')

bountyRoute.route('/')
        .get((req, res) => {
            Bounty.find((err, bounties) => {
                if(err) {
                    res.status(500)
                    return res.send(err);
                } else {
                    res.status(200)
                    return res.send(bounties)
                }
            })
        })

        .post((req, res) => {
            const newPost = new Bounty(req.body);
            newPost.save((err, newBounty) => {
                err && res.status(500).send(err);
                return res.status(200).send(newBounty);
            })
        })

bountyRoute.route('/:_id')
        .delete((req, res) => {
            console.log(req.params._id)
            Bounty.findOneAndDelete(
                {_id : req.params._id},
                (err) => {
                    err && res.status(500).send(`Item not deleted, ${err}`);
                    return res.status(200).send('Item successfully deleted')
                }
            )
        })

        .put((req, res) => {
            const {_id} = req.params
            console.log(req.params)
            const newData = req.body
            Bounty.findByIdAndUpdate(
                {_id : req.params._id},
                newData,
                (err, bounty) => {
                    err && res.status(500).send(err);
                    return res.status(200).send(bounty);
                }
            )
        })

        .get((req, res) => {
            Bounty.findById(
                {_id : req.params.id},
                (err, bounty) => {
                    err && res.status(500).send(err);
                    return res.status(200).send(bounty._id);
                }
            )
        })

module.exports = bountyRoute;