require("dotenv").config();
const dbConnection = require("./database/config");
const express = require("express");
const cors = require("cors");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const findOrCreate = require("mongoose-findorcreate");
const session = require("express-session");
const passport = require("passport");

const app = express();

app.use(
  session({
    secret: process.env.CLIENT_SECRET || "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(cors());

const Usuario = require("./models/usuarioSchema");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await Usuario.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:4000/auth/google/callback",
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      try {
        let usuario = await Usuario.findOne({ googleId: profile.id });

        if (!usuario) {
          usuario = new Usuario({
            nombre: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id,
            rol: "usuario",
          });
          await usuario.save();
        }

        return done(null, usuario);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

app.use("/auth", require("./router/authRouter"));
app.use("/usuarios", require("./router/usersRouter"));
app.use("/eventos", require("./router/eventsRouter"));

dbConnection();

app.listen(process.env.PORT, () => {
  console.log("Server Levantado");
});
