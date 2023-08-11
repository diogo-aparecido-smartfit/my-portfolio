var admin = require("firebase-admin");
import serviceAccount from "../serviceKey.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://portfolio-9535c.appspot.com",
});

const storage = admin.storage();
export const bucket = storage.bucket();
