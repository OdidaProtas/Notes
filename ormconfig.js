const environment = process.env.ENVIRONMENT;
const ext = environment === "production" ? "js" : "ts";
const app = environment === "production" ? "build" : "src";

module.exports = {
  type: "postgres",
  port: 5432,
  url: process.env.DATABASE_URL,
  logging: false,
  synchronize: true,
  entities: [`${app}/entity/**/*.${ext}`],
  migrations: [`${app}/migration/**/*.${ext}`],
  subscribers: [`${app}/subscriber/**/*.${ext}`],
  cli: {
    entitiesDir: `${app}/entity`,
    migrationsDir: `${app}/migration`,
    subscribersDir: `${app}/subscriber`,
  },
  ssl: false, //for ssl db ie heroku
  // extra: { // for ssl db
  //   ssl: {
  //     rejectUnauthorized: false,
  //   },
  // },
};
