// INTENCIONAL: SQL Injection por concatenación
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');
const userId = process.argv[2] || "1";
db.serialize(() => {
  db.run("CREATE TABLE users (id INTEGER, name TEXT)");
  db.run("INSERT INTO users VALUES (1, 'Alice'), (2, 'Bob')");
  const query = "SELECT * FROM users WHERE id = " + userId + ";";
  console.log("Ejecutando:", query);
  db.all(query, [], (err, rows) => {
    if (err) console.error("Error en consulta:", err.message);
    else console.log("Resultado:", rows);
    db.close();
  });
});
