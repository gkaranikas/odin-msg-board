import pool from "./pool.js";

export const query = (text, params, callback) => {
  return pool.query(text, params, callback);
};

export async function getAllMessages() {
  const { rows } = await pool.query("select * from messages;");
  console.log(
    "rows from getAllMessages",
    rows.map((x) => x)
  );
  return rows;
}

export async function getMessage(id) {
  const { rows } = await pool.query("select * from messages where id = $1;", [
    id,
  ]);
  return rows[0];
}

export async function addMessage(data) {
  await pool.query(
    "insert into messages (body, username, added) values ($1, $2, $3);",
    [data.body, data.username, data.added]
  );
}
