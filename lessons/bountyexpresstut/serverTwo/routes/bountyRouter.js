const express = require('express');
const bountyRoute = express.Router();
const Bounty = require('../models/bountyModel')

bountyRoute.route('/')
    .get((req, res) => {
        Bounty.find((err, bounties) => {
            if (err) {
              return res.status(500).send(err);
            } else {
               return res.status(200).send(bounties);
            }
        })
    })

    .post((req, res) => {
        const newBounty = new Bounty(req.body);
        console.log(newBounty);
        newBounty.save(err => {
             err && res.status(500).send(err)
            return res.status(200).send(newBounty._id);
        })
    })

bountyRoute.route('/:_id')

    .put((req, res) => {
        const {id} = req.params;
        const data = req.body;
        Bounty.findByIdAndUpdate(
            {_id: id},
            data,
            (err, bounty) => {
                err && res.status(500).send(err);
                return res.status(200).send(bounty);
            }
            )
    })

    .delete((req, res) => {
        const {id} = req.params;
        Bounty.findByIdAndDelete(
            {_id : id},
            (err, bounty) => {
                err && res.status(500).send(err);
                return res.status(200).send('Item successfully deleted');
            }
        )
    })

    .get((req, res) => {
        Bounty.findById(
            {_id: req.params.id},
            (err, bounty) => {
                err && res.status(500).send(err);
                return res.status(200).send(bounty);
            }
        )
    })
    module.exports = bountyRoute;