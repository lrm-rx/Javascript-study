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
      d.id id, d.content content, d.createAt cteateTime, d.updateAt updateTime,
      JSON_OBJECT('id', u.id, 'username', u.username, 'avatarUrl', u.avatar_url) author,
      IF(COUNT(l.id),JSON_ARRAYAGG(
        JSON_OBJECT(
          'id', l.id, 'name', l.label_name
        )
      ),NULL) lables,
      (SELECT 	IF(COUNT(c.id),JSON_ARRAYAGG(
        JSON_OBJECT(
          'id', c.id,
          'content', c.content,
          'commentId', c.dynamics_id,
          'createTime', c.createAt,
          'updateTime', c.updateAt,
          'userInfo', JSON_OBJECT(
            'id', cu.id,
            'username', cu.username
          )
        )
      ), NULL) FROM comment c 
      LEFT JOIN sys_user cu ON c.user_id = cu.id 
      WHERE d.id = c.dynamics_id 
      ) comments
      FROM dynamics d
      LEFT JOIN sys_user u on d.user_id = u.id
      LEFT JOIN dynamics_babel dl ON d.id = dl.dynamics_id
      LEFT JOIN label l ON dl.label_id = l.id
      WHERE d.id = ?
      GROUP BY d.id;
    `
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
     'username', u.username
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