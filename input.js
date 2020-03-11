let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  //   handleUserInput();
  stdin.on("data", data => {
    handleUserInput(data);
  });
  //  connection();

  return stdin;
};

const handleUserInput = function(key) {
  //u0003 ctrl+c
  if (key === "\u0003") {
    //   console.log("Thanks for using me, ciao!");
    return process.exit();
  } else if (key === "w") {
    connection.write("Move: up");
  } else if (key === "a") {
    connection.write("Move: left");
  } else if (key === "s") {
    connection.write("Move: down");
  } else if (key === "d") {
    connection.write("Move: right");
  }
};

module.exports = { setupInput };
