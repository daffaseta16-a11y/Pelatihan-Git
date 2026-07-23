const connectionPool = require("../config/db.js");

const readCategory = (req, res) => {
  let queryText = "SELECT * FROM tb_category";

  connectionPool.query(queryText, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    res.json(data);
  });
};

const readCategoryById = (req, res) => {
  let { id } = req.params;
  let queryText = `SELECT * FROM tb_category WHERE id_tb_category = ${id}`;

  connectionPool.query(queryText, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    res.json(data);
  });
};

const creatCategory = (req, res) => {
  let { name, des } = req.body;
  let queryText = `INSERT INTO tb_category(name_tb_category, des_tb_category) 
                      VALUES("${name}", "${des}")`;

  connectionPool.query(queryText, (err) => {
    if (err) {
      console.log(err);
      return;
    }

    res.json({ message: "berhasil" });
  });
};

const updateCategory = (req, res) => {
  let { name, des } = req.body;
  let { id } = req.params;
  let queryText = `UPDATE tb_category
                     SET name_tb_category = ?, des_tb_category = ?
                     WHERE id_tb_category = ?`;

  connectionPool.query(queryText, [name, des, id], (err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json({ message: "berhasil" });
  });
};

const deleteCategory = (req, res) => {
  let { id } = req.params;
  let queryText = `DELETE FROM tb_category
                     WHERE id_tb_category = ?`;

  connectionPool.query(queryText, [id], (err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json({ message: "berhasil" });
  });
};

module.exports = {
  readCategory,
  readCategoryById,
  creatCategory,
  updateCategory,
  deleteCategory,
};
