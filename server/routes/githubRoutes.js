const express = require("express");
const axios = require("axios");

const router = express.Router();

const cache = {};

router.get("/:username", async (req, res) => {

  const username = req.params.username;

  try {

    if (
      cache[username] &&
      Date.now() - cache[username].timestamp < 60000
    ) {

      return res.json(cache[username].data);

    }

    const userResponse = await axios.get(
      `https://api.github.com/users/${username}`
    );

    const repoResponse = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );

    const data = {
      user: userResponse.data,
      repos: repoResponse.data
    };

    cache[username] = {
      data,
      timestamp: Date.now()
    };

    res.json(data);

  } catch (error) {

    res.status(404).json({
      message: "User not found"
    });

  }

});

module.exports = router;