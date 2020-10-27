"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { top50 } = require("./data/top50");
const { localeData } = require("moment");

express()
  // Below are methods that are included in express(). We chain them for convenience.
  // --------------------------------------------------------------------------------

  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"))
  .use(bodyParser.json())

  // Any requests for static files will go into the public folder
  .use(express.static("public"))

  // Nothing to modify above this line
  // ---------------------------------
  // add new endpoints here 👇
  .get(`/top50`, (req, res) => {
    const data = top50;
    res.status(200).json({
      status: 200,
      data,
    });
  })

  .get("/top50/song/:rank", (req, res) => {
    const songRank = req.params.rank;
    const data = top50.find((song) => {
      if (Number(songRank) === song.rank) return song;
    });
    if (!data) {
      res.status(404).json({
        status: 404,
        message: "Song not found.",
      });
    } else {
      res.status(200).json({
        status: 200,
        data,
      });
    }
  })

  .get("/top50/artist/:artist", (req, res) => {
    const songArtist = req.params.artist;
    const data = [];

    top50.forEach((song) => {
      if (songArtist.toUpperCase() === song.artist.toUpperCase())
        data.push(song);
    });

    if (!data) {
      res.status(404).json({
        status: 404,
        message: "Artist not found.",
      });
    } else
      res.status(200).json({
        status: 200,
        data,
      });
  })

  /////////////////////////////////////////////

  .get("/top50/popular-artist", (req, res) => {
    let counts = {};
    let topArtist = "";
    let topASongs = [];

    top50.forEach((song) => {
      const artist = song.artist;
      counts[artist] === undefined ? (counts[artist] = 1) : counts[artist]++;
    });

    let topSongCount = 0;
    Object.keys(counts).forEach((artist) => {
      if (counts[artist] > topSongCount) {
        topArtist = artist;
        topSongCount = counts[artist];
      }
    });

    top50.forEach((song) => {
      if (song.artist.includes(topArtist)) topASongs.push(song);
    });

    console.log(topASongs);

    res.status(200).json({
      status: 200,
      topASongs,
    });
  })

  /////////////////////////////////////////////

  .get("/top50/artist", (req, res) => {
    const data = [];
    top50.forEach((song) => {
      if (!data.includes(song.artist)) data.push(song.artist);
    });
    res.status(200).json({
      status: 200,
      data,
    });
  })

  // add new endpoints here ☝️
  // ---------------------------------
  // Nothing to modify below this line

  // this is our catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  // Node spins up our server and sets it to listen on port 8000.
  .listen(8000, () => console.log(`Listening on port 8000`));
