const environment = process.env.app_environment;
const ext = environment === "debug" ? "ts" : "js";
const app = environment === "debug" ? "src" : "build";

module.exports = {
  type: "postgres",
  host: process.env.database_host,
  port: 5432,
  username: process.env.database_username,
  password: process.env.database_password,
  database: process.env.database_username,
  logging: false,
  entities: [`${app}/entity/**/*.${ext}`],
  migrations: [`${app}/migration/**/*.${ext}`],
  subscribers: [`${app}/subscriber/**/*.${ext}`],
  cli: {
    entitiesDir: `${app}/entity`,
    migrationsDir: `${app}/migration`,
    subscribersDir: `${app}/subscriber`,
  },
};
