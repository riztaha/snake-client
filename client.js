const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: "172.46.0.203",
    // host: "10.0.2.15",
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("data", data => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    console.log("Succefully connected to game server.");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 1000); // - move up one square (unless facing down)
    conn.write("Name: Taha");
  });
  return conn;
};

module.exports = { connect };

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
