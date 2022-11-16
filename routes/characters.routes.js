const router = require("express").Router();
const axios = require("axios");
const { Router } = require("express");

/* GET home page */
router.get("/characters", (req, res, next) => {
    axios.get("https://ih-crud-api.herokuapp.com/characters")
        .then(responseFromAPI => {
            // console.log(responseFromAPI)
            res.render("characters/list-characters", { characters: responseFromAPI.data });
        })
        .catch(err => console.error(err))
});


router.get("/characters/create", (req, res) => {
    res.render('characters/create')
})

router.get("/characters/:id", (req, res, next) => {
    axios.get(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`)
        .then(responseFromAPI => {
            // console.log("details: ", responseFromAPI.data)
            res.render("characters/details-character", { character: responseFromAPI.data });
        })
        .catch(err => console.error(err))
});

router.get('/character/delete/:id', (req, res, next) => {
    axios.delete(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`)
        .then(() => {
            res.redirect('/characters');
        })
        .catch(next);
});

router.get('/character/:id/edit', (req, res, next) => {
    res.render("characters/edit-character", { character: responseFromAPI.data });

})


router.post('/characters/create', (req, res, next) => {
    axios.post("https://ih-crud-api.herokuapp.com/characters/", req.body).then((responseFromAPI) => {
        res.render('character/details-character', { character: responseFromAPI.data });
    })
        .catch(next);
});

router.post('/character/:id/edit', (req, res, next) => {
    axios.put(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`)
        .then(() => {
            res, redirect('/characters')
        })
        .catch(next)
})








module.exports = router;


// https://ih-crud-api.herokuapp.com/characters