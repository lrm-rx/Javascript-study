const connection = require('../app/database')

class LabelService {
  async create(labelName) {
    const sql = `INSERT INTO label SET label_name = ?;`
    try {
      const [result] = await connection.execute(sql, [labelName])
      return result
    } catch (error) {
      console.log(error);
    }
  }
  async getLabelByName(name) {
    const sql = `SELECT * FROM label WHERE label_name = ?;`
    try {
      const [result] = await connection.execute(sql, [name])
      return result[0];
    } catch (error) {
      console.log(error);
    }
  }
  async getLabels(limit, offset) {
    const sql = `SELECT * FROM label LIMIT ?, ?;`
    try {
      const [result] = await connection.execute(sql, [offset, limit])
      return result
    } catch (error) {
      console.log(error);
    }
  }
}


module.exports = new LabelService()