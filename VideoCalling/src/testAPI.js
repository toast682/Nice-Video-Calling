const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Backend successfully connected to the Frontend');
});

module.exports = router;


