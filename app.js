const express = require("express");
const connectDb = require("./database");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const notFound = require("./middlewares/notFoundHandler");
const errorHandler = require("./middlewares/errorHandler");
const userRoutes = require("./api/users/user.routes");
const movieRoutes = require("./api/movies/movie.routes");
const reveiw = require("./api/review/review.routes");

const config = require("./config/keys");
const passport = require("passport");
const { localStrategy, jwtStrategy } = require("./middlewares/passport");
const path = require("path");

connectDb();
app.use(express.json());
app.use("/media", express.static(path.join(__dirname, "media")));
app.use(cors());
app.use(morgan("dev"));

app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);

// Everything with the word temp is a placeholder that you'll change in accordance with your project
app.use("/User", userRoutes);
app.use("/movie", movieRoutes);
app.use("/review", reveiw);
app.use(notFound);
app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log(`The application is running on ${config.PORT}`);
});

module.exports = app;
