var admin = require("firebase-admin");
// import serviceAccount from "./serviceKey.js";

// const { firebase } = require("../serviceKey.js"); // Importe o objeto de configuração
// const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
const serviceAccount = require("./serviceKey.js");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://portfolio-9535c.appspot.com",
});

const storage = admin.storage();
export const bucket = storage.bucket();
