const { connect } = require("./client");
console.log("....Connecting.");
connect();

const handleUserInput = function(key) {
  //u0003 ctrl+c
  if (key === "\u0003") {
    //   console.log("Thanks for using me, ciao!");
    return process.exit();
  }
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  //   handleUserInput();
  stdin.on("data", data => {
    handleUserInput(data);
  });
  return stdin;
};

setupInput();
