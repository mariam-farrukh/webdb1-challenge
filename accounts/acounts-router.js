const express = require('express');

const db = require('../data/dbConfig.js');

const router = express.Router();

router.get('/', (req, res) => {
    db('accounts')
      .then(accounts => {
        res.status(200).json(accounts);
      })
      .catch(() => {
        res.status(500).json({ message: 'Could not retrieve the list of accounts' });
      });
  });

router.get("/:id", (req, res) => {
    const { id } = req.params;
    db("accounts")
      .where({ id: id })
      .first()
      .then(account => {
        if (account) {
          res.status(200).json(account);
        } else {
          res.status(404).json({ message: "Account does not exist" });
        }
      })
      .catch(err => {
        res
          .status(500)
          .json({ message: "Unable to fetch account from database" });
      });
  });

module.exports = router;