exports.myMiddleware = (req, res, next) => {
  req.name = "Rick";
  if (req.name === "Rick") {
    throw Error("That is a stupid name");
  }
  next();
};

exports.homePage = (req, res) => {
  console.log(req.name);
  // console.log("req.query: ", req.query);
  // const rick = { name: "Rick", age: 38, cool: true };
  // res.send(req.query);
  // res.render("hello", {
  //   name: "Rick",
  //   dog: req.query.dog,
  //   title: "Me encanta comida"
  // }
  res.render("index");
};
