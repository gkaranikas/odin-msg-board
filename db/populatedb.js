// script for populating db with sample data
import pg from "pg";

const SQL = `
drop table if exists messages;
create table if not exists messages (
  id integer primary key generated always as identity,
  body varchar(4000),
  username varchar(255),
  added timestamp (2) with time zone
);

insert into messages (body, username, added) values
  ('It''s raining', 'Gilbert', CURRENT_TIMESTAMP),
  ('The rain has now stopped', 'Sullivan', CURRENT_TIMESTAMP);
`;

async function main() {
  const DB_URI = process.argv[2];
  const client = new pg.Client({
    connectionString: DB_URI,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  console.log("connected");
  await client.query(SQL);
  await client.end();
  console.log(DB_URI);
}

main();
