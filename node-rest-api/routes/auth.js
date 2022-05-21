const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("Hey it's auth i.e login or sign up route!")
})

module.exports = router;