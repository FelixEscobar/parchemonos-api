const express = require('express')
const authVerify = require('../middleware/authVerify')
const router = express.Router()
const { rate, createBooking, modifyBooking, deleteBooking } = require('./../controllers/bookingCtrl')

router.post('/rate/:id', authVerify, rate)
router.post('/', authVerify, createBooking) 
router.put('/:id', authVerify, modifyBooking )
router.delete('/:id', authVerify, deleteBooking )

module.exports = router

// POST '/:id'
// PUT '/:id'
// DELETE '/:id'