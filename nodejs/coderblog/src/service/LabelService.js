const connection = require('../app/database')

class LabelService{
  async create(labelName){
    try {
      const sql = `INSERT INTO label SET label_name=?;`
      const [result] = await connection.execute(sql, [labelName])
      return result
    } catch (error) {
      console.log(error);
    }
  }
  async getLabelByName(name) {
    const sql = `SELECT * FROM label WHERE label_name = ?;`
    const [result] = await connection.execute(sql, [name])
    return result[0];
  }
}


module.exports = new LabelService()