module.exports = {
  MONGOURI:
    "mongodb+srv://Adam:3FloST14frwLbEcm@cluster0.1zbhd.mongodb.net/<dbname>?retryWrites=true&w=majority",
  JWT_SECRET: "SomeTopSecretStuff",
};

if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
