const config = {
  server: {
    env: process.env.NODE_ENV,
    port: process.env.SERVER_PORT || 3000
  },
  db: {
    db_host: process.env.DB_HOST || "localhost",
    db_name: process.env.DB_NAME || "",
    db_user: process.env.DB_USER || "root",
    db_port: process.env.DB_PORT || 3306,
    db_password: process.env.DB_PASSWWRD || "",
    db_debug: process.env.DB_DEBUG || true
  },
  log: {
    appenders: {
      cheese: { type: "file", filename: "logs/cheese.log" },
      access: { type: "file", filename: "logs/access.log" },
      sql: { type: "file", filename: "logs/sql.log" }
    },
    categories: {
      default: { appenders: ["cheese"], level: "info" },
      access: { appenders: ["access"], level: "info" },
      sql: { appenders: ["sql"], level: "info" },
    }
  },
  jwt: {
    jwt_secret: process.env.JWT_SECRET,
    jwt_expire: process.env.JWT_EXPIRE
  }
}

export default config