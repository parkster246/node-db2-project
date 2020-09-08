const express = require("express");

const router = express.Router();

const db = require('./data/dbConfig')

router.get('/', (req, res) => {
    db('cars')
    .then( cars => {
        res.status(200).json(cars)
    })
    .catch( err => {
        res.status(500).json({ error: err.message})
    })
})
router.get('/:id', (req, res)=>{
    const id = req.params
    db('cars').where(id)
    .then( car => {
        if(car){
            res.status(200).json(car)
        } else {
            res.status(404).json({message: 'Could not find a car by that ID'})
        }
    })
    .catch( err => {
        res.status(500).json({error : err.message})
    })
})

router.post('/', (req, res )=>{

    db('cars').insert(req.body)
    .then( newCar => {
        res.status(201).json(newCar)
    })
    .catch( err => {
        res.status(500).json({ error: err.message})
    })
})


router.put('/:id', (req, res) => {
    const id = req.params
    db('cars').update(req.body).where(id)
    .then( updateCar => {
        if(updateCar){
            res.status(200).json({ message: 'You have successfully updated your car'})
        } else {
            res.status(404).json({ message: 'Could not find user with that ID'})  
        }
    })
    .catch( err => {
        res.status(500).json({ error : err.message})
    })

})

router.delete('/:id', (req, res) =>{
    const {id} = req.params
    db('cars').where({id}).del()
    .then( rm => {
        if(rm){
            res.status(200).json({ message : `You have deleted the car with the ID of ${id}`})
        }else { 
            res.status(404).json({ message: 'Could not find user with that ID'})  
        }
    })
    .catch( err => {
        res.status(500).json({ error : err.message})
    })
})


module.exports = router;