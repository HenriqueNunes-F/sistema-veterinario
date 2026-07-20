const express = require("express");
const petRoutes = require("./routes/petRoutes");
const tutorRoutes = require("./routes/tutorRoutes");
const veterinarioRoutes = require("./routes/veterinarioRoutes");
const consultaRoutes = require("./routes/consultaRoutes");

const app = express();

app.use(express.json());
app.use("/pets", petRoutes);
app.use("/tutores", tutorRoutes);
app.use("/veterinarios", veterinarioRoutes);
app.use("/consultas", consultaRoutes);

app.listen(3000, () => {
  console.log("Servidor Express rodando em http://localhost:3000");
});
