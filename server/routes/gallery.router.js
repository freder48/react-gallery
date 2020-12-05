const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool')

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    const id = req.params.id;
    let sqlText = `UPDATE gallery SET likes=(likes + 1) WHERE id=$1`
    pool.query(sqlText, [id])
    .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error when changing transfer status', error)
        res.sendStatus(500);
    })

}); // END PUT Route

// GET Route
//routed from server.js, send galleryItems from gallery.data
router.get('/', (req, res) => {
    // Get all of the gallery items from the database
    const sqlText = `SELECT * FROM gallery`;
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {s
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });   
}); // END GET Route

//POST route
router.post('/', (req, res) => {
    let newImage = req.body
    const sqlText = `INSERT INTO gallery (path, alt, description)
                     VALUES ($1, $2, $3);`;
    pool.query(sqlText, [newImage.path, newImage.alt, newImage.description])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});


module.exports = router;