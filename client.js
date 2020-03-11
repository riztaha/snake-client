const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: 50541
  });
  conn.setEncoding("utf8");
  conn.on("data", data => {
    console.log("Server says: ", data);
  });
  conn.on("connect", () => {
    console.log("Succefully connected to game server.");
  });
  conn.on("connect", () => {
    conn.write("Name: Taha");
  });

  return conn;
};
// console.log("Connecting...");
// connect();

module.exports = { connect };
