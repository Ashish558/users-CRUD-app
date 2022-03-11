
var express = require('express')
var mongoose = require('mongoose')

var User = require('../models/user')
const { registerValidation } = require("../validation/validation")

var router = express.Router()

router.post('/user/add', async function (req, res) {

    let { name, email, phoneNumber, hobbies } = req.body

    //validate 
    const { error } = registerValidation(req.body)
    if (error) return res.status(202).json(error.details[0].message)

    var newUser = new User({
        name,
        email,
        phoneNumber,
        hobbies
    })

    //save user
    await newUser.save()
        .then(() => res.status(200).json('user created'))
        .catch(err => res.status(401).json("An error occured try again"))
})

router.get('/user/get', async function (req, res) {

    try {
        User.find({})
            .select('name phoneNumber email hobbies')
            .exec((err, data) => {
                if (err) return res.status(400).json(err)
                return res.status(200).json(data)
            })

    } catch (err) {
        console.log(err)
    }

})

router.put('/user/edit', async function (req, res) {
    let { name, email, phoneNumber, hobbies, _id } = req.body

    try {
        User.findOneAndUpdate(
            { _id: _id },
            {
                name,
                email,
                phoneNumber,
                hobbies
            },
            { new: true },
            function (err, docs) {
                if (err) return res.status(401).json("Error occured")
                return res.status(200).json(docs)
            })
    } catch (err) {
        console.log(err)
    }

})

router.put('/user/delete', async function (req, res) {

    let { _id } = req.body

    try {
        User.findOneAndDelete(
            { _id: _id },
            { new: true },
            function (err, docs) {
                if (err) return res.status(401).json("Error occured")
                return res.status(200).json(docs)
            })
    } catch (err) {
        console.log(err)
    }

})


module.exports = router
