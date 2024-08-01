const express = require("express");
const admin = require("firebase-admin");
const cors = require("cors");

const serviceAccount = require("./firebase-adminsdk.json"); // Ruta al archivo JSON descargado desde Firebase

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tienda-leops-default-rtdb.firebaseio.com", // Reemplaza con tu URL de Firebase Realtime Database
});

const db = admin.database();
const app = express();
app.use(cors());

// Contador de visitas a la página
app.get("/contador-visitas", async (req, res) => {
  const ref = db.ref("contadores/visitas");
  ref.transaction(
    (currentCount) => {
      return (currentCount || 0) + 1;
    },
    (error, committed, snapshot) => {
      if (error) {
        res.status(500).send("Error incrementando el contador de visitas");
      } else {
        res.json({ count: snapshot.val() });
      }
    }
  );
});

// Contador de clics en el botón de WhatsApp
app.get("/contador-whatsapp", async (req, res) => {
  const ref = db.ref("contadores/whatsapp");
  ref.transaction(
    (currentCount) => {
      return (currentCount || 0) + 1;
    },
    (error, committed, snapshot) => {
      if (error) {
        res.status(500).send("Error incrementando el contador de WhatsApp");
      } else {
        res.json({ count: snapshot.val() });
      }
    }
  );
});

// Contador de compras al hacer clic en el botón "Comprar"
app.get("/contador-compras", async (req, res) => {
  const ref = db.ref("contadores/compras");
  ref.transaction(
    (currentCount) => {
      return (currentCount || 0) + 1;
    },
    (error, committed, snapshot) => {
      if (error) {
        res.status(500).send("Error incrementando el contador de compras");
      } else {
        res.json({ count: snapshot.val() });
      }
    }
  );
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
