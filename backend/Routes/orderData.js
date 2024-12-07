
const express = require("express");

const router = express.Router();

const Order = require("../models/Orders")

router.post('/orderData', async (req, res) => {

    let data = req.body.order_data
    await data.splice(0, 0, { Order_date: req.body.order_date })

    let eId = await Order.findOne({ 'email': req.body.email });

    console.log(req.body);
    
    if (eId === null) {
        try {
            await Order.create({
                email: req.body.email,
                order_data: [data]
            }).then(() => {
                res.status(200).json({ success: true })
            })
        } catch (error) {
            res.status(400).send("Server Error")
        }
    }

    else {
        try {
            await Order.findOneAndUpdate({ email: req.body.email },
                { $push: { order_data: data } }).then(() => {
                    res.status(200).json({ success: true })
                })
        } catch (error) {
            res.status(400).send("Server Error")
        }
    }
})

module.exports = router;