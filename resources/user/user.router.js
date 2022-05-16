const express = require(express);

const router = express.Router()

router.get("/user", (req, res) => {
    res.status(200).json("All users")
})

router.post("/user", (req, res) => {
    res.status(200).json("Added user")
})
router.put("/user/:id", (req, res) => {
    res.status(200).json("Updated user")
})
router.delete("/user/:id", (req, res) => {
    res.status(200).json("Deleted user")
})


module.exports = router;