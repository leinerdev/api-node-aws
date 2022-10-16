const express = require("express");
const router = express.Router();
const {
  getList,
  getDetails,
  updateItem,
  createItem,
  deleteItem,
} = require("../controllers/VideoController");

router.get("",          getList);
router.get("/:id",      getDetails);
router.post("",         createItem);
router.delete("/:id",   deleteItem);
router.put("/:id",      updateItem);

module.exports = router;
