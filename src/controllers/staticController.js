module.exports = {
  index(req, res, next){
  //  res.send("Welcome to Bloccit");
  res.render("static/index", {title: "Welcome to Bloccit"});

  }
}
