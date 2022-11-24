const connection = require('../app/database')
class CommentService {
  async create({ userId, dynamicsId, content }) {
    const sql = `INSERT INTO comment(user_id, dynamics_id, content) values (?, ?, ?);`
    try {
      const [result] = await connection.execute(sql, [userId, dynamicsId, content])
      return result
    } catch (error) {
      console.log(error);
    }
  }
  async getCommentListByDynamicsId(dynamicsId) {
    const sql = `
      SELECT 
        c.id, c.content, c.comment_id commendId, c.createAt createTime, c.updateAt updateTime,
        JSON_OBJECT('id', u.id, 'username', u.username, 'avatarUrl', u.avatar_url) userInfo
      FROM comment c
      LEFT JOIN sys_user u ON u.id = c.user_id
      WHERE dynamics_id = ?;
    `;
    try {
      const [result] = await connection.execute(sql, [dynamicsId])
      return result
    } catch (error) {
      console.log(error);
    }
  }

  async getCommentListByDynamicsId_bat(dynamicsId) {
    const sql = `SELECT 
    c.id, content, c.comment_id commentId, c.createAt createTime, c.updateAt updateTime,
    JSON_OBJECT(
     'id', u.id,
     'username', u.username,
     'avatarUrl', u.avatar_url
    ) userInfo
   FROM comment c
   LEFT JOIN sys_user u ON u.id = c.user_id
   WHERE dynamics_id = ?;`
    try {
      const [result] = await connection.execute(sql, [dynamicsId])
      return result
    } catch (error) {
      console.log(error);
    }
  }
  async replyComment({ userId, dynamicsId, commentId, content }) {
    const sql = `INSERT INTO comment(user_id, dynamics_id, comment_id, content) values (?, ?, ?, ?);`
    try {
      const [result] = await connection.execute(sql, [userId, dynamicsId, commentId, content])
      return result
    } catch (error) {
      console.log(error);
    }
  }
  async updateComment({ commentId, content }) {
    const sql = `UPDATE comment SET content=? WHERE id=?;`
    try {
      const [result] = await connection.execute(sql, [content, commentId])
      console.log(result);
      return result
    } catch (error) {
      console.log(error);
    }
  }
  async deleteComment(commentId) {
    const sql = `DELETE FROM comment WHERE id = ?;`
    try {
      const [result] = await connection.execute(sql, [commentId])
      return result
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new CommentService()