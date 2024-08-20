const express = require("express");
const cors = require("cors");

const giftVerified = require("./helper");

const port = 1225;

const app = express();
app.use(express.json());
app.use(cors());

app.post("/gift", (req, res) => {
    const { name } = req.body;

    const isInTheList = giftVerified(name);
    if (isInTheList) {
        res.send(true);
    } else {
        res.send(false);
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
});
